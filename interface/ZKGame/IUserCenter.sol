// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IUserCenter {
    struct Statistic {
        uint32 count;
        uint224 total;
    }

    struct GameStatistic {
        Statistic joined;
        Statistic won;
    }

    // function join(address user, uint256 amount) external;

    // function win(address user, uint256 amount) external;

    function joinedCounts(address game, address user) external view returns (uint32);
}
