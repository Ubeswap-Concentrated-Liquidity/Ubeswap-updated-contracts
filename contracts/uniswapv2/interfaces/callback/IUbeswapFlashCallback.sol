// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

/**
 *  @title Callback for IUbeswapPoolActions#flash
 *  @notice Any contract that calls IUbeswapPoolActions#flash must implement this interface
 *  @dev Credit to Uniswap Labs under GPL-2.0-or-later license:
 *  https://github.com/Uniswap/v3-core/tree/main/contracts/interfaces
 */
interface IUbeswapFlashCallback {
  /**
   *  @notice Called to `msg.sender` after transferring to the recipient from IUbeswapPool#flash.
   *  @dev In the implementation you must repay the pool the tokens sent by flash plus the computed fee amounts.
   *  The caller of this method must be checked to be a UbeswapPool deployed by the canonical UbeswapFactory.
   *  @param fee0 The fee amount in token0 due to the pool by the end of the flash
   *  @param fee1 The fee amount in token1 due to the pool by the end of the flash
   *  @param data Any data passed through by the caller via the IUbeswapPoolActions#flash call
   */
  function ubeswapFlashCallback(
    uint256 fee0,
    uint256 fee1,
    bytes calldata data
  ) external;
}
