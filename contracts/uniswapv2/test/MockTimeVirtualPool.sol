// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../interfaces/IUbeswapVirtualPool.sol';

contract MockTimeVirtualPool is IUbeswapVirtualPool {
  uint32 public timestamp;

  bool private isExist = true;
  bool private isStarted = true;

  int24 public currentTick;

  function setIsExist(bool _isExist) external {
    isExist = _isExist;
  }

  function setIsStarted(bool _isStarted) external {
    isStarted = _isStarted;
  }

  function increaseCumulative(uint32 currentTimestamp) external override returns (Status) {
    if (!isExist) return Status.NOT_EXIST;
    if (!isStarted) return Status.NOT_STARTED;

    timestamp = currentTimestamp;
    return Status.ACTIVE;
  }

  function cross(int24 nextTick, bool zeroToOne) external override {
    zeroToOne;
    require(isExist, 'Virtual pool not exist');
    currentTick = nextTick;
  }
}
