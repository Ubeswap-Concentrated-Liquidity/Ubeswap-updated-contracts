// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import '../interfaces/pool/IUbeswapPoolImmutables.sol';
import '../interfaces/IUbeswapPoolDeployer.sol';
import '../libraries/Constants.sol';

abstract contract PoolImmutables is IUbeswapPoolImmutables {
  /// @inheritdoc IUbeswapPoolImmutables
  address public immutable override dataStorageOperator;

  /// @inheritdoc IUbeswapPoolImmutables
  address public immutable override factory;
  /// @inheritdoc IUbeswapPoolImmutables
  address public immutable override token0;
  /// @inheritdoc IUbeswapPoolImmutables
  address public immutable override token1;

  /// @inheritdoc IUbeswapPoolImmutables
  function tickSpacing() external pure override returns (int24) {
    return Constants.TICK_SPACING;
  }

  /// @inheritdoc IUbeswapPoolImmutables
  function maxLiquidityPerTick() external pure override returns (uint128) {
    return Constants.MAX_LIQUIDITY_PER_TICK;
  }

  constructor(address deployer) {
    (dataStorageOperator, factory, token0, token1) = IUbeswapPoolDeployer(deployer).parameters();
  }
}
