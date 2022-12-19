// SPDX-License-Identifier: MIT

pragma solidity =0.7.6;
pragma abicoder v2;

import './interfaces/IUbeswapFactory.sol';
import './interfaces/IUbeswapPoolDeployer.sol';
import './interfaces/IDataStorageOperator.sol';
// import './UniswapV2Pair.sol';
import './libraries/AdaptiveFee.sol';
import './DataStorageOperator.sol';

/**
 * @title Ubeswap factory
 * @notice Forked from Algebra Finance, used to deploy pools and its dataStorages
 */

contract UbeswapFactory is IUbeswapFactory {
  
    address public override owner;
    address public immutable override poolDeployer;
    address public override farmingAddress;
    address public override vaultAddress;

    // address public override feeTo;
    // address public override feeToSetter;
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

    mapping(address => mapping(address => address)) public override poolByPair;

    // address[] public override allPools;

    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    constructor(address _poolDeployer, address _vaultAddress) {
        owner = msg.sender;
        emit Owner(msg.sender);

        poolDeployer = _poolDeployer;
        vaultAddress = _vaultAddress;
    }

    // function allPairsLength() external override view returns (uint) {
    //     return allPairs.length;
    // }

    // function pairCodeHash() external pure returns (bytes32) {
    //     return keccak256(type(UniswapV2Pair).creationCode);
    // }

    function createPool(address tokenA, address tokenB) external override returns (address pool) {
        require(tokenA != tokenB, 'Ubeswap: IDENTICAL_ADDRESSES');
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'Ubeswap: ZERO_ADDRESS');
        require(poolByPair[token0][token1] == address(0), 'Ubeswap: PAIR_EXISTS'); // single check is sufficient

        IDataStorageOperator dataStorage = new DataStorageOperator(computeAddress(token0, token1));

        dataStorage.changeFeeConfiguration(baseFeeConfiguration);

        pool = IUbeswapPoolDeployer(poolDeployer).deploy(address(dataStorage), address(this), token0, token1);

        // bytes memory bytecode = type(UniswapV2Pair).creationCode;
        // bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        // assembly {
        //     pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
        // }
        // UniswapV2Pair(pair).initialize(token0, token1);

        poolByPair[token0][token1] = pool;
        poolByPair[token1][token0] = pool; // populate mapping in the reverse direction
        // allPools.push(pair);
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

    bytes32 internal constant POOL_INIT_CODE_HASH = 0x6ec6c9c8091d160c0aa74b2b14ba9c1717e95093bd3ac085cee99a49aab294a4;

    /// @notice Deterministically computes the pool address given the factory and PoolKey
    /// @param token0 first token
    /// @param token1 second token
    /// @return pool The contract address of the Algebra pool
    function computeAddress(address token0, address token1) internal view returns (address pool) {
        pool = address(uint256(keccak256(abi.encodePacked(hex'ff', poolDeployer, keccak256(abi.encode(token0, token1)), POOL_INIT_CODE_HASH))));
    }
}
