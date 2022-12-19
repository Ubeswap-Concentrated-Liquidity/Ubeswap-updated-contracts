// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../interfaces/IERC20Minimal.sol';

import '../interfaces/callback/IUbeswapSwapCallback.sol';
import '../interfaces/callback/IUbeswapMintCallback.sol';
import '../interfaces/IUbeswapPool.sol';

contract TestUbeswapSwapPay is IUbeswapSwapCallback, IUbeswapMintCallback {
  function swap(
    address pool,
    address recipient,
    bool zeroToOne,
    uint160 price,
    int256 amountSpecified,
    uint256 pay0,
    uint256 pay1
  ) external {
    IUbeswapPool(pool).swap(recipient, zeroToOne, amountSpecified, price, abi.encode(msg.sender, pay0, pay1));
  }

  function swapSupportingFee(
    address pool,
    address recipient,
    bool zeroToOne,
    uint160 price,
    int256 amountSpecified,
    uint256 pay0,
    uint256 pay1
  ) external {
    IUbeswapPool(pool).swapSupportingFeeOnInputTokens(msg.sender, recipient, zeroToOne, amountSpecified, price, abi.encode(msg.sender, pay0, pay1));
  }

  function ubeswapSwapCallback(
    int256,
    int256,
    bytes calldata data
  ) external override {
    (address sender, uint256 pay0, uint256 pay1) = abi.decode(data, (address, uint256, uint256));

    if (pay0 > 0) {
      IERC20Minimal(IUbeswapPool(msg.sender).token0()).transferFrom(sender, msg.sender, uint256(pay0));
    } else if (pay1 > 0) {
      IERC20Minimal(IUbeswapPool(msg.sender).token1()).transferFrom(sender, msg.sender, uint256(pay1));
    }
  }

  function mint(
    address pool,
    address recipient,
    int24 bottomTick,
    int24 topTick,
    uint128 amount,
    uint256 pay0,
    uint256 pay1
  )
    external
    returns (
      uint256 amount0Owed,
      uint256 amount1Owed,
      uint256 resultLiquidity
    )
  {
    (amount0Owed, amount1Owed, resultLiquidity) = IUbeswapPool(pool).mint(
      msg.sender,
      recipient,
      bottomTick,
      topTick,
      amount,
      abi.encode(msg.sender, pay0, pay1)
    );
  }

  function ubeswapMintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes calldata data
  ) external override {
    (address sender, uint256 pay0, uint256 pay1) = abi.decode(data, (address, uint256, uint256));

    if (amount0Owed > 0) IERC20Minimal(IUbeswapPool(msg.sender).token0()).transferFrom(sender, msg.sender, pay0);
    if (amount1Owed > 0) IERC20Minimal(IUbeswapPool(msg.sender).token1()).transferFrom(sender, msg.sender, pay1);
  }
}
