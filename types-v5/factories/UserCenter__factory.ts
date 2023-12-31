/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { UserCenter, UserCenterInterface } from "../UserCenter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_seasonLogs",
    outputs: [
      {
        internalType: "uint256",
        name: "wins",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "joined",
        type: "uint256",
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
    ],
    name: "userRecords",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "wins",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "joined",
            type: "uint256",
          },
        ],
        internalType: "struct IUserCenter.PlayerStatistics",
        name: "current",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "wins",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "joined",
            type: "uint256",
          },
        ],
        internalType: "struct IUserCenter.PlayerStatistics",
        name: "overall",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class UserCenter__factory {
  static readonly abi = _abi;
  static createInterface(): UserCenterInterface {
    return new utils.Interface(_abi) as UserCenterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserCenter {
    return new Contract(address, _abi, signerOrProvider) as UserCenter;
  }
}
