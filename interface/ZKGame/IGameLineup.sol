// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/** @dev 處理排隊事宜 */
interface IGameLineup {
    event LineupJoined(
        address indexed player
    );

    event LineupLeft(
        address indexed player
    );

    function join(bytes calldata zkCard) external;

    function leave() external;

    function start() external;

    function lineupUsers() external view returns (address[] memory);
}
