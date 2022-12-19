/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestUbeswapReentrantCalleeInterface extends ethers.utils.Interface {
  functions: {
    "swapToReenter(address)": FunctionFragment;
    "ubeswapSwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swapToReenter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ubeswapSwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapToReenter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ubeswapSwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestUbeswapReentrantCallee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestUbeswapReentrantCalleeInterface;

  functions: {
    swapToReenter(
      pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapToReenter(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ubeswapSwapCallback(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  swapToReenter(
    pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapToReenter(address)"(
    pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ubeswapSwapCallback(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ubeswapSwapCallback(int256,int256,bytes)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swapToReenter(pool: string, overrides?: CallOverrides): Promise<void>;

    "swapToReenter(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ubeswapSwapCallback(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    swapToReenter(pool: string, overrides?: Overrides): Promise<BigNumber>;

    "swapToReenter(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ubeswapSwapCallback(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapToReenter(
      pool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapToReenter(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ubeswapSwapCallback(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
