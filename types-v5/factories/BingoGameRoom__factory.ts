/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BingoGameRoom, BingoGameRoomInterface } from "../BingoGameRoom";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8[][]",
        name: "playerCardNumbers",
        type: "uint8[][]",
      },
    ],
    name: "Bingo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isOvertime",
        type: "bool",
      },
    ],
    name: "GameHalted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
    ],
    name: "GameParticipated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "cardContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "players",
        type: "address[]",
      },
    ],
    name: "GameStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "round",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "number",
        type: "uint8",
      },
    ],
    name: "NumberSelected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newReward",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldReward",
        type: "address",
      },
    ],
    name: "RewardChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "RECENT_GAME_COUNTS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
      {
        internalType: "bytes",
        name: "signedLabel",
        type: "bytes",
      },
    ],
    name: "bingo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "expectedLines",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deno",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gameCard",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getCurrentRound",
    outputs: [
      {
        internalType: "uint32",
        name: "round",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "remain",
        type: "uint32",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getGameInfo",
    outputs: [
      {
        internalType: "uint32",
        name: "startedAt",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "endedAt",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cardId",
            type: "uint256",
          },
        ],
        internalType: "struct IBingoRoom.Participant[]",
        name: "players",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "round",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "number",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "player",
            type: "address",
          },
        ],
        internalType: "struct IBingoRoom.GameRound[]",
        name: "rounds",
        type: "tuple[]",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getLatestRound",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "round",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "number",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "player",
            type: "address",
          },
        ],
        internalType: "struct IBingoRoom.GameRound",
        name: "last",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getSelectedNumbers",
    outputs: [
      {
        internalType: "uint8[]",
        name: "numbers",
        type: "uint8[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "skip",
        type: "uint256",
      },
    ],
    name: "playedGames",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gameId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "uint8[][]",
            name: "cardNumbers",
            type: "uint8[][]",
          },
          {
            internalType: "uint8[]",
            name: "selectedNumbers",
            type: "uint8[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "cardId",
                type: "uint256",
              },
            ],
            internalType: "struct IBingoRoom.Participant[]",
            name: "players",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBingoRoom.RecentGame[]",
        name: "games",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IBingoRoom.RecentGameFilter",
        name: "filter",
        type: "uint8",
      },
    ],
    name: "recentGames",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gameId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "uint8[][]",
            name: "cardNumbers",
            type: "uint8[][]",
          },
          {
            internalType: "uint8[]",
            name: "selectedNumbers",
            type: "uint8[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "user",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "cardId",
                type: "uint256",
              },
            ],
            internalType: "struct IBingoRoom.Participant[]",
            name: "players",
            type: "tuple[]",
          },
        ],
        internalType: "struct IBingoRoom.RecentGame[]",
        name: "games",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
      {
        internalType: "bytes",
        name: "signedGameLabel",
        type: "bytes",
      },
    ],
    name: "restoreGame",
    outputs: [
      {
        internalType: "uint256",
        name: "playingGameId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "autoEndTime",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "isCardContentMatched",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "number",
        type: "uint8",
      },
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
      {
        internalType: "bytes",
        name: "signedLabel",
        type: "bytes",
      },
    ],
    name: "selectAndBingo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "number",
        type: "uint8",
      },
    ],
    name: "selectNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "summary",
    outputs: [
      {
        internalType: "uint256",
        name: "totalGameStarted",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPlayersJoined",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewardDistributed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timer",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "startTimeout",
            type: "uint32",
          },
          {
            internalType: "uint8",
            name: "boostRounds",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "roundGap",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "roundTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxDuration",
            type: "uint32",
          },
        ],
        internalType: "struct BingoGameRoom.GameTimeout",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class BingoGameRoom__factory {
  static readonly abi = _abi;
  static createInterface(): BingoGameRoomInterface {
    return new utils.Interface(_abi) as BingoGameRoomInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BingoGameRoom {
    return new Contract(address, _abi, signerOrProvider) as BingoGameRoom;
  }
}
