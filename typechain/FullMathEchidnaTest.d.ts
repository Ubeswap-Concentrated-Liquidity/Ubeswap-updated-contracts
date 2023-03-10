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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FullMathEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "checkMulDiv(uint256,uint256,uint256)": FunctionFragment;
    "checkMulDivRounding(uint256,uint256,uint256)": FunctionFragment;
    "checkMulDivRoundingUp(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkMulDiv",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMulDivRounding",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMulDivRoundingUp",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkMulDiv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkMulDivRounding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkMulDivRoundingUp",
    data: BytesLike
  ): Result;

  events: {};
}

export class FullMathEchidnaTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FullMathEchidnaTestInterface;

  functions: {
    checkMulDiv(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkMulDiv(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkMulDivRounding(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkMulDivRounding(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkMulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkMulDivRoundingUp(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  checkMulDiv(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkMulDiv(uint256,uint256,uint256)"(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkMulDivRounding(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkMulDivRounding(uint256,uint256,uint256)"(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkMulDivRoundingUp(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkMulDivRoundingUp(uint256,uint256,uint256)"(
    x: BigNumberish,
    y: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    checkMulDiv(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkMulDiv(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMulDivRounding(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkMulDivRounding(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkMulDivRoundingUp(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    checkMulDiv(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkMulDiv(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkMulDivRounding(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkMulDivRounding(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkMulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkMulDivRoundingUp(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkMulDiv(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkMulDiv(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkMulDivRounding(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkMulDivRounding(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkMulDivRoundingUp(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkMulDivRoundingUp(uint256,uint256,uint256)"(
      x: BigNumberish,
      y: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
