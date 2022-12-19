// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../interfaces/IERC20Minimal.sol';

import '../interfaces/callback/IUbeswapSwapCallback.sol';
import '../interfaces/IUbeswapPool.sol';

contract UbeswapPoolSwapTest is IUbeswapSwapCallback {
  int256 private _amount0Delta;
  int256 private _amount1Delta;

  function getSwapResult(
    address pool,
    bool zeroToOne,
    int256 amountSpecified,
    uint160 limitSqrtPrice
  )
    external
    returns (
      int256 amount0Delta,
      int256 amount1Delta,
      uint160 nextSqrtRatio
    )
  {
    (amount0Delta, amount1Delta) = IUbeswapPool(pool).swap(address(0), zeroToOne, amountSpecified, limitSqrtPrice, abi.encode(msg.sender));

    (nextSqrtRatio, , , , , , ) = IUbeswapPool(pool).globalState();
  }

  function ubeswapSwapCallback(
    int256 amount0Delta,
    int256 amount1Delta,
    bytes calldata data
  ) external override {
    address sender = abi.decode(data, (address));

    if (amount0Delta > 0) {
      IERC20Minimal(IUbeswapPool(msg.sender).token0()).transferFrom(sender, msg.sender, uint256(amount0Delta));
    } else if (amount1Delta > 0) {
      IERC20Minimal(IUbeswapPool(msg.sender).token1()).transferFrom(sender, msg.sender, uint256(amount1Delta));
    }
  }
}
