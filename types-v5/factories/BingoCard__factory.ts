/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BingoCard, BingoCardInterface } from "../BingoCard";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "revealer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8[][]",
        name: "numbers",
        type: "uint8[][]",
      },
    ],
    name: "Revealed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedMarkedSpaces",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "gridRows",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "gridColumns",
        type: "uint8",
      },
    ],
    name: "_decodeMarkedSpacesBySettings",
    outputs: [
      {
        internalType: "uint8[2][]",
        name: "markedSpaces",
        type: "uint8[2][]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gameContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "bindCardGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
      {
        internalType: "uint256",
        name: "selectedNumbers",
        type: "uint256",
      },
    ],
    name: "calculateMatchedLineCounts",
    outputs: [
      {
        internalType: "uint8",
        name: "lineCounts",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cardSignaturePrefix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "columns",
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
        internalType: "bytes",
        name: "encodedCardNumbers",
        type: "bytes",
      },
    ],
    name: "decodeCardNumbers",
    outputs: [
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedMarkedSpaces",
        type: "uint256",
      },
    ],
    name: "decodeMarkedSpaces",
    outputs: [
      {
        internalType: "uint8[2][]",
        name: "markedSpaces",
        type: "uint8[2][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encoded",
        type: "uint256",
      },
    ],
    name: "decodeSelectedNumbers",
    outputs: [
      {
        internalType: "uint8[]",
        name: "selectedNumbers",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encryptedContent",
        type: "bytes",
      },
    ],
    name: "editUnplayedCard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
    ],
    name: "encodeCardNumbers",
    outputs: [
      {
        internalType: "bytes",
        name: "encodedCardNumbers",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[2][]",
        name: "markedSpaces",
        type: "uint8[2][]",
      },
    ],
    name: "encodeMarkedSpaces",
    outputs: [
      {
        internalType: "uint256",
        name: "encodedMarkedSpaces",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[]",
        name: "selectedNumbers",
        type: "uint8[]",
      },
    ],
    name: "encodeSelectedNumbers",
    outputs: [
      {
        internalType: "uint256",
        name: "encoded",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "estimateMatchedLines",
    outputs: [
      {
        internalType: "uint8",
        name: "lineCounts",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeSpaces",
    outputs: [
      {
        internalType: "uint8[2][]",
        name: "",
        type: "uint8[2][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
    ],
    name: "getCardGame",
    outputs: [
      {
        internalType: "address",
        name: "gameContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
    ],
    name: "getCardNumbers",
    outputs: [
      {
        internalType: "uint8[][]",
        name: "",
        type: "uint8[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[][]",
        name: "nums",
        type: "uint8[][]",
      },
    ],
    name: "isValidCardNumbers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lines",
    outputs: [
      {
        internalType: "uint8[2][][]",
        name: "",
        type: "uint8[2][][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
    ],
    name: "matchedLines",
    outputs: [
      {
        internalType: "uint8",
        name: "lineCount",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encryptedContent",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "restrictions",
    outputs: [
      {
        internalType: "uint8[2][][]",
        name: "",
        type: "uint8[2][][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "gameLabel",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signedGameLabel",
        type: "bytes",
      },
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rows",
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
        internalType: "address",
        name: "gameAddress",
        type: "address",
      },
    ],
    name: "setBindingGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[2][]",
        name: "freeSpacePositions",
        type: "uint8[2][]",
      },
    ],
    name: "setFreeSpaces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[2][][]",
        name: "validLines",
        type: "uint8[2][][]",
      },
    ],
    name: "setLines",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[2][][]",
        name: "spaceNumberRestrictions",
        type: "uint8[2][][]",
      },
    ],
    name: "setRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cardId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "salt",
        type: "bytes",
      },
      {
        internalType: "uint8[][]",
        name: "cardNumbers",
        type: "uint8[][]",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "verifySigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class BingoCard__factory {
  static readonly abi = _abi;
  static createInterface(): BingoCardInterface {
    return new utils.Interface(_abi) as BingoCardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BingoCard {
    return new Contract(address, _abi, signerOrProvider) as BingoCard;
  }
}
