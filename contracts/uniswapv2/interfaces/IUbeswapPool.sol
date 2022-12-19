// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IUbeswapPoolImmutables.sol';
import './pool/IUbeswapPoolState.sol';
import './pool/IUbeswapPoolDerivedState.sol';
import './pool/IUbeswapPoolActions.sol';
import './pool/IUbeswapPoolPermissionedActions.sol';
import './pool/IUbeswapPoolEvents.sol';

/**
 * @title The interface for a Ubeswap Pool forked from Algebra.
 * @dev The pool interface is broken up into many smaller pieces.
 * Credit to Uniswap Labs under GPL-2.0-or-later license:
 * https://github.com/Uniswap/v3-core/tree/main/contracts/interfaces
 */
interface IUbeswapPool is
  IUbeswapPoolImmutables,
  IUbeswapPoolState,
  IUbeswapPoolDerivedState,
  IUbeswapPoolActions,
  IUbeswapPoolPermissionedActions,
  IUbeswapPoolEvents
{
  // used only for combining interfaces
}
