// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IRewardDistribution {
    event NewReward(
        address indexed newReward,
        uint256 newRewardStartId,
        address indexed oldReward,
        uint256 oldRewardDistributed
    );

    event RewardDistributed(
        address indexed reward,
        uint256 id,
        address indexed to
    );
}
