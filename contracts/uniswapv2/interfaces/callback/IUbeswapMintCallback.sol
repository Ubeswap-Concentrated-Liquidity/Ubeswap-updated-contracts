// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

/// @title Callback for IUbeswapPoolActions#mint
/// @notice Any contract that calls IUbeswapPoolActions#mint must implement this interface
/// @dev Credit to Uniswap Labs under GPL-2.0-or-later license:
/// https://github.com/Uniswap/v3-core/tree/main/contracts/interfaces
interface IUbeswapMintCallback {
  /// @notice Called to `msg.sender` after minting liquidity to a position from IUbeswapPool#mint.
  /// @dev In the implementation you must pay the pool tokens owed for the minted liquidity.
  /// The caller of this method must be checked to be a UbeswapPool deployed by the canonical UbeswapFactory.
  /// @param amount0Owed The amount of token0 due to the pool for the minted liquidity
  /// @param amount1Owed The amount of token1 due to the pool for the minted liquidity
  /// @param data Any data passed through by the caller via the IUbeswapPoolActions#mint call
  function ubeswapMintCallback(
    uint256 amount0Owed,
    uint256 amount1Owed,
    bytes calldata data
  ) external;
}
