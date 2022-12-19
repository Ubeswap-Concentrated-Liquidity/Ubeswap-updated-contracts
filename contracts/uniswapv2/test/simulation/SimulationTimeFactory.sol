// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;
pragma abicoder v2;

import '../../interfaces/IUbeswapFactory.sol';
import '../../interfaces/IUbeswapPoolDeployer.sol';
import '../../interfaces/IDataStorageOperator.sol';
import '../../libraries/AdaptiveFee.sol';
import '../../DataStorageOperator.sol';

/**
 * @title Ubeswap factory for simulation
 * @notice Is used to deploy pools and its dataStorages
 */
contract SimulationTimeFactory is IUbeswapFactory {
  /// @inheritdoc IUbeswapFactory
  address public override owner;

  /// @inheritdoc IUbeswapFactory
  address public immutable override poolDeployer;

  /// @inheritdoc IUbeswapFactory
  address public override farmingAddress;

  /// @inheritdoc IUbeswapFactory
  address public override vaultAddress;

  // values of constants for sigmoids in fee calculation formula
  AdaptiveFee.Configuration public baseFeeConfiguration =
    AdaptiveFee.Configuration(
      3000 - Constants.BASE_FEE, // alpha1
      15000 - 3000, // alpha2
      360, // beta1
      60000, // beta2
      59, // gamma1
      8500, // gamma2
      0, // volumeBeta
      10, // volumeGamma
      Constants.BASE_FEE // baseFee
    );

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /// @inheritdoc IUbeswapFactory
  mapping(address => mapping(address => address)) public override poolByPair;

  constructor(address _poolDeployer, address _vaultAddress) {
    owner = msg.sender;
    emit Owner(msg.sender);

    poolDeployer = _poolDeployer;
    vaultAddress = _vaultAddress;
  }

  /// @inheritdoc IUbeswapFactory
  function createPool(address tokenA, address tokenB) external override returns (address pool) {
    require(tokenA != tokenB);
    (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
    require(token0 != address(0));
    require(poolByPair[token0][token1] == address(0));

    IDataStorageOperator dataStorage = new DataStorageOperator(computeAddress(token0, token1));

    dataStorage.changeFeeConfiguration(baseFeeConfiguration);

    pool = IUbeswapPoolDeployer(poolDeployer).deploy(address(dataStorage), address(this), token0, token1);

    poolByPair[token0][token1] = pool; // to avoid future addresses comparing we are populating the mapping twice
    poolByPair[token1][token0] = pool;
    emit Pool(token0, token1, pool);
  }

  /// @inheritdoc IUbeswapFactory
  function setOwner(address _owner) external override onlyOwner {
    require(owner != _owner);
    emit Owner(_owner);
    owner = _owner;
  }

  /// @inheritdoc IUbeswapFactory
  function setFarmingAddress(address _farmingAddress) external override onlyOwner {
    require(farmingAddress != _farmingAddress);
    emit FarmingAddress(_farmingAddress);
    farmingAddress = _farmingAddress;
  }

  /// @inheritdoc IUbeswapFactory
  function setVaultAddress(address _vaultAddress) external override onlyOwner {
    require(vaultAddress != _vaultAddress);
    emit VaultAddress(_vaultAddress);
    vaultAddress = _vaultAddress;
  }

  /// @inheritdoc IUbeswapFactory
  function setBaseFeeConfiguration(
    uint16 alpha1,
    uint16 alpha2,
    uint32 beta1,
    uint32 beta2,
    uint16 gamma1,
    uint16 gamma2,
    uint32 volumeBeta,
    uint16 volumeGamma,
    uint16 baseFee
  ) external override onlyOwner {
    require(uint256(alpha1) + uint256(alpha2) + uint256(baseFee) <= type(uint16).max, 'Max fee exceeded');
    require(gamma1 != 0 && gamma2 != 0 && volumeGamma != 0, 'Gammas must be > 0');

    baseFeeConfiguration = AdaptiveFee.Configuration(alpha1, alpha2, beta1, beta2, gamma1, gamma2, volumeBeta, volumeGamma, baseFee);
    emit FeeConfiguration(alpha1, alpha2, beta1, beta2, gamma1, gamma2, volumeBeta, volumeGamma, baseFee);
  }

  bytes32 internal constant POOL_INIT_CODE_HASH = 0x900bf8d45a06958144a51da8749d15e2a339e87243bd50bc88d46815c9ec888d;

  /// @notice Deterministically computes the pool address given the factory and PoolKey
  /// @param token0 first token
  /// @param token1 second token
  /// @return pool The contract address of the Ubeswap pool
  function computeAddress(address token0, address token1) internal view returns (address pool) {
    pool = address(uint256(keccak256(abi.encodePacked(hex'ff', poolDeployer, keccak256(abi.encode(token0, token1)), POOL_INIT_CODE_HASH))));
  }
}
