// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import '../interfaces/pool/IUbeswapPoolState.sol';
import '../libraries/TickManager.sol';

abstract contract PoolState is IUbeswapPoolState {
  struct GlobalState {
    uint160 price; // The square root of the current price in Q64.96 format
    int24 tick; // The current tick
    uint16 fee; // The current fee in hundredths of a bip, i.e. 1e-6
    uint16 timepointIndex; // The index of the last written timepoint
    uint8 communityFeeToken0; // The community fee represented as a percent of all collected fee in thousandths (1e-3)
    uint8 communityFeeToken1;
    bool unlocked; // True if the contract is unlocked, otherwise - false
  }

  /// @inheritdoc IUbeswapPoolState
  uint256 public override totalFeeGrowth0Token;
  /// @inheritdoc IUbeswapPoolState
  uint256 public override totalFeeGrowth1Token;
  /// @inheritdoc IUbeswapPoolState
  GlobalState public override globalState;

  /// @inheritdoc IUbeswapPoolState
  uint128 public override liquidity;
  uint128 internal volumePerLiquidityInBlock;

  /// @inheritdoc IUbeswapPoolState
  uint32 public override liquidityCooldown;
  /// @inheritdoc IUbeswapPoolState
  address public override activeIncentive;

  /// @inheritdoc IUbeswapPoolState
  mapping(int24 => TickManager.Tick) public override ticks;
  /// @inheritdoc IUbeswapPoolState
  mapping(int16 => uint256) public override tickTable;

  /// @dev Reentrancy protection. Implemented in every function of the contract since there are checks of balances.
  modifier lock() {
    require(globalState.unlocked, 'LOK');
    globalState.unlocked = false;
    _;
    globalState.unlocked = true;
  }

  /// @dev This function is created for testing by overriding it.
  /// @return A timestamp converted to uint32
  function _blockTimestamp() internal view virtual returns (uint32) {
    return uint32(block.timestamp); // truncation is desired
  }
}
