/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace IBingoRoom {
  export type ParticipantStruct = { user: AddressLike; cardId: BigNumberish };

  export type ParticipantStructOutput = [user: string, cardId: bigint] & {
    user: string;
    cardId: bigint;
  };

  export type GameRoundStruct = {
    round: BigNumberish;
    number: BigNumberish;
    timestamp: BigNumberish;
    player: AddressLike;
  };

  export type GameRoundStructOutput = [
    round: bigint,
    number: bigint,
    timestamp: bigint,
    player: string
  ] & { round: bigint; number: bigint; timestamp: bigint; player: string };

  export type RecentGameStruct = {
    gameId: BigNumberish;
    status: string;
    winner: AddressLike;
    cardNumbers: BigNumberish[][];
    selectedNumbers: BigNumberish[];
    players: IBingoRoom.ParticipantStruct[];
  };

  export type RecentGameStructOutput = [
    gameId: bigint,
    status: string,
    winner: string,
    cardNumbers: bigint[][],
    selectedNumbers: bigint[],
    players: IBingoRoom.ParticipantStructOutput[]
  ] & {
    gameId: bigint;
    status: string;
    winner: string;
    cardNumbers: bigint[][];
    selectedNumbers: bigint[];
    players: IBingoRoom.ParticipantStructOutput[];
  };
}

export declare namespace BingoGameRoom {
  export type GameTimeoutStruct = {
    startTimeout: BigNumberish;
    boostRounds: BigNumberish;
    roundGap: BigNumberish;
    roundTimeout: BigNumberish;
    maxDuration: BigNumberish;
  };

  export type GameTimeoutStructOutput = [
    startTimeout: bigint,
    boostRounds: bigint,
    roundGap: bigint,
    roundTimeout: bigint,
    maxDuration: bigint
  ] & {
    startTimeout: bigint;
    boostRounds: bigint;
    roundGap: bigint;
    roundTimeout: bigint;
    maxDuration: bigint;
  };
}

export declare namespace IUserCenter {
  export type PlayerStatisticsStruct = {
    wins: BigNumberish;
    joined: BigNumberish;
  };

  export type PlayerStatisticsStructOutput = [wins: bigint, joined: bigint] & {
    wins: bigint;
    joined: bigint;
  };
}

export interface ZkBingoLobbyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "GAME_REWARD_FEE"
      | "NAME"
      | "RECENT_GAME_COUNTS"
      | "_seasonLogs"
      | "bingo"
      | "expectedLines"
      | "fee"
      | "gameCard"
      | "getCurrentRound"
      | "getGameInfo"
      | "getLatestRound"
      | "getNextKeyLabel"
      | "getSelectedNumbers"
      | "initialize"
      | "join"
      | "leave"
      | "lineupUsers"
      | "maxPlayers"
      | "minPlayers"
      | "newSeason"
      | "owner"
      | "playedGames"
      | "prizePool"
      | "proxiableUUID"
      | "recentGames"
      | "renounceOwnership"
      | "restoreGame"
      | "selectAndBingo"
      | "selectNumber"
      | "setGameTimers"
      | "setPrizePool"
      | "setReward"
      | "setWinnerFee"
      | "start"
      | "summary"
      | "timer"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "userRecords"
      | "version"
      | "winnerFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Bingo"
      | "GameHalted"
      | "GameParticipated"
      | "GameStarted"
      | "Initialized"
      | "LineupJoined"
      | "LineupLeft"
      | "NumberSelected"
      | "OwnershipTransferred"
      | "RewardChanged"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "GAME_REWARD_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "RECENT_GAME_COUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_seasonLogs",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLines",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestRound",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextKeyLabel",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "join", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lineupUsers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minPlayers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "newSeason", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playedGames",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "prizePool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recentGames",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restoreGame",
    values: [AddressLike, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [BigNumberish, BigNumberish, BigNumberish[][], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGameTimers",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrizePool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReward",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setWinnerFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "summary", values?: undefined): string;
  encodeFunctionData(functionFragment: "timer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "userRecords",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "winnerFee", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "GAME_REWARD_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RECENT_GAME_COUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_seasonLogs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bingo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expectedLines",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gameCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextKeyLabel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lineupUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPlayers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minPlayers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newSeason", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playedGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prizePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recentGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restoreGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectAndBingo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGameTimers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrizePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWinnerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "summary", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winnerFee", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BingoEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    playerCardNumbers: BigNumberish[][]
  ];
  export type OutputTuple = [
    gameId: bigint,
    player: string,
    playerCardNumbers: bigint[][]
  ];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    playerCardNumbers: bigint[][];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameHaltedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    user: AddressLike,
    isOvertime: boolean
  ];
  export type OutputTuple = [gameId: bigint, user: string, isOvertime: boolean];
  export interface OutputObject {
    gameId: bigint;
    user: string;
    isOvertime: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameParticipatedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    player: AddressLike,
    cardId: BigNumberish,
    position: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    player: string,
    cardId: bigint,
    position: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    player: string;
    cardId: bigint;
    position: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameStartedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    cardContract: AddressLike,
    players: AddressLike[]
  ];
  export type OutputTuple = [
    gameId: bigint,
    cardContract: string,
    players: string[]
  ];
  export interface OutputObject {
    gameId: bigint;
    cardContract: string;
    players: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LineupJoinedEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LineupLeftEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NumberSelectedEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    round: BigNumberish,
    player: AddressLike,
    number: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    round: bigint,
    player: string,
    number: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    round: bigint;
    player: string;
    number: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardChangedEvent {
  export type InputTuple = [newReward: AddressLike, oldReward: AddressLike];
  export type OutputTuple = [newReward: string, oldReward: string];
  export interface OutputObject {
    newReward: string;
    oldReward: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZkBingoLobby extends BaseContract {
  connect(runner?: ContractRunner | null): ZkBingoLobby;
  waitForDeployment(): Promise<this>;

  interface: ZkBingoLobbyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  GAME_REWARD_FEE: TypedContractMethod<[], [bigint], "view">;

  NAME: TypedContractMethod<[], [string], "view">;

  RECENT_GAME_COUNTS: TypedContractMethod<[], [bigint], "view">;

  _seasonLogs: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { wins: bigint; joined: bigint }],
    "view"
  >;

  bingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "payable"
  >;

  expectedLines: TypedContractMethod<[], [bigint], "view">;

  fee: TypedContractMethod<
    [],
    [[bigint, bigint] & { value: bigint; deno: bigint }],
    "view"
  >;

  gameCard: TypedContractMethod<[], [string], "view">;

  getCurrentRound: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;

  getGameInfo: TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        status: string;
      }
    ],
    "view"
  >;

  getLatestRound: TypedContractMethod<
    [gameId: BigNumberish],
    [IBingoRoom.GameRoundStructOutput],
    "view"
  >;

  getNextKeyLabel: TypedContractMethod<[user: AddressLike], [string], "view">;

  getSelectedNumbers: TypedContractMethod<
    [gameId: BigNumberish],
    [bigint[]],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _gameCard: AddressLike,
      _expectedLines: BigNumberish,
      _minPlayers: BigNumberish,
      _maxPlayers: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  join: TypedContractMethod<[zkCard: BytesLike], [void], "nonpayable">;

  leave: TypedContractMethod<[], [void], "nonpayable">;

  lineupUsers: TypedContractMethod<[], [string[]], "view">;

  maxPlayers: TypedContractMethod<[], [bigint], "view">;

  minPlayers: TypedContractMethod<[], [bigint], "view">;

  newSeason: TypedContractMethod<[title: string], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  playedGames: TypedContractMethod<
    [user: AddressLike, skip: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;

  prizePool: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  recentGames: TypedContractMethod<
    [filter: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  restoreGame: TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;

  selectAndBingo: TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "payable"
  >;

  selectNumber: TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGameTimers: TypedContractMethod<
    [
      startTimeout: BigNumberish,
      boostRounds: BigNumberish,
      roundGap: BigNumberish,
      roundTimeout: BigNumberish,
      maxDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setPrizePool: TypedContractMethod<
    [_prizePool: AddressLike],
    [void],
    "nonpayable"
  >;

  setReward: TypedContractMethod<
    [newReward: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setWinnerFee: TypedContractMethod<
    [_winnerFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  start: TypedContractMethod<[], [void], "nonpayable">;

  summary: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalGameStarted: bigint;
        totalPlayersJoined: bigint;
        totalRewardDistributed: bigint;
      }
    ],
    "view"
  >;

  timer: TypedContractMethod<
    [],
    [BingoGameRoom.GameTimeoutStructOutput],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  userRecords: TypedContractMethod<
    [user: AddressLike],
    [
      [
        IUserCenter.PlayerStatisticsStructOutput,
        IUserCenter.PlayerStatisticsStructOutput
      ] & {
        current: IUserCenter.PlayerStatisticsStructOutput;
        overall: IUserCenter.PlayerStatisticsStructOutput;
      }
    ],
    "view"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  winnerFee: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "GAME_REWARD_FEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "NAME"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RECENT_GAME_COUNTS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_seasonLogs"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { wins: bigint; joined: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "bingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "expectedLines"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { value: bigint; deno: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "gameCard"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrentRound"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [bigint, string, bigint, string] & {
        round: bigint;
        player: string;
        remain: bigint;
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGameInfo"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [
      [
        bigint,
        bigint,
        string,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        string
      ] & {
        startedAt: bigint;
        endedAt: bigint;
        winner: string;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        status: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLatestRound"
  ): TypedContractMethod<
    [gameId: BigNumberish],
    [IBingoRoom.GameRoundStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNextKeyLabel"
  ): TypedContractMethod<[user: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSelectedNumbers"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _gameCard: AddressLike,
      _expectedLines: BigNumberish,
      _minPlayers: BigNumberish,
      _maxPlayers: BigNumberish,
      minCardNumber: BigNumberish,
      maxCardNumber: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "join"
  ): TypedContractMethod<[zkCard: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lineupUsers"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "maxPlayers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minPlayers"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "newSeason"
  ): TypedContractMethod<[title: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "playedGames"
  ): TypedContractMethod<
    [user: AddressLike, skip: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "prizePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "recentGames"
  ): TypedContractMethod<
    [filter: BigNumberish],
    [IBingoRoom.RecentGameStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "restoreGame"
  ): TypedContractMethod<
    [
      player: AddressLike,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [
      [bigint, bigint, boolean] & {
        playingGameId: bigint;
        autoEndTime: bigint;
        isCardContentMatched: boolean;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "selectAndBingo"
  ): TypedContractMethod<
    [
      gameId: BigNumberish,
      number: BigNumberish,
      cardNumbers: BigNumberish[][],
      signedGameLabel: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "selectNumber"
  ): TypedContractMethod<
    [gameId: BigNumberish, number: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGameTimers"
  ): TypedContractMethod<
    [
      startTimeout: BigNumberish,
      boostRounds: BigNumberish,
      roundGap: BigNumberish,
      roundTimeout: BigNumberish,
      maxDuration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPrizePool"
  ): TypedContractMethod<[_prizePool: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setReward"
  ): TypedContractMethod<
    [newReward: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setWinnerFee"
  ): TypedContractMethod<[_winnerFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "start"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "summary"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        totalGameStarted: bigint;
        totalPlayersJoined: bigint;
        totalRewardDistributed: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "timer"
  ): TypedContractMethod<[], [BingoGameRoom.GameTimeoutStructOutput], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "userRecords"
  ): TypedContractMethod<
    [user: AddressLike],
    [
      [
        IUserCenter.PlayerStatisticsStructOutput,
        IUserCenter.PlayerStatisticsStructOutput
      ] & {
        current: IUserCenter.PlayerStatisticsStructOutput;
        overall: IUserCenter.PlayerStatisticsStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "winnerFee"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Bingo"
  ): TypedContractEvent<
    BingoEvent.InputTuple,
    BingoEvent.OutputTuple,
    BingoEvent.OutputObject
  >;
  getEvent(
    key: "GameHalted"
  ): TypedContractEvent<
    GameHaltedEvent.InputTuple,
    GameHaltedEvent.OutputTuple,
    GameHaltedEvent.OutputObject
  >;
  getEvent(
    key: "GameParticipated"
  ): TypedContractEvent<
    GameParticipatedEvent.InputTuple,
    GameParticipatedEvent.OutputTuple,
    GameParticipatedEvent.OutputObject
  >;
  getEvent(
    key: "GameStarted"
  ): TypedContractEvent<
    GameStartedEvent.InputTuple,
    GameStartedEvent.OutputTuple,
    GameStartedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "LineupJoined"
  ): TypedContractEvent<
    LineupJoinedEvent.InputTuple,
    LineupJoinedEvent.OutputTuple,
    LineupJoinedEvent.OutputObject
  >;
  getEvent(
    key: "LineupLeft"
  ): TypedContractEvent<
    LineupLeftEvent.InputTuple,
    LineupLeftEvent.OutputTuple,
    LineupLeftEvent.OutputObject
  >;
  getEvent(
    key: "NumberSelected"
  ): TypedContractEvent<
    NumberSelectedEvent.InputTuple,
    NumberSelectedEvent.OutputTuple,
    NumberSelectedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardChanged"
  ): TypedContractEvent<
    RewardChangedEvent.InputTuple,
    RewardChangedEvent.OutputTuple,
    RewardChangedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Bingo(uint256,address,uint8[][])": TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;
    Bingo: TypedContractEvent<
      BingoEvent.InputTuple,
      BingoEvent.OutputTuple,
      BingoEvent.OutputObject
    >;

    "GameHalted(uint256,address,bool)": TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;
    GameHalted: TypedContractEvent<
      GameHaltedEvent.InputTuple,
      GameHaltedEvent.OutputTuple,
      GameHaltedEvent.OutputObject
    >;

    "GameParticipated(uint256,address,uint256,uint8)": TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;
    GameParticipated: TypedContractEvent<
      GameParticipatedEvent.InputTuple,
      GameParticipatedEvent.OutputTuple,
      GameParticipatedEvent.OutputObject
    >;

    "GameStarted(uint256,address,address[])": TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;
    GameStarted: TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "LineupJoined(address)": TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;
    LineupJoined: TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;

    "LineupLeft(address)": TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;
    LineupLeft: TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;

    "NumberSelected(uint256,uint32,address,uint8)": TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;
    NumberSelected: TypedContractEvent<
      NumberSelectedEvent.InputTuple,
      NumberSelectedEvent.OutputTuple,
      NumberSelectedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RewardChanged(address,address)": TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
    >;
    RewardChanged: TypedContractEvent<
      RewardChangedEvent.InputTuple,
      RewardChangedEvent.OutputTuple,
      RewardChangedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
