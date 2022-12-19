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

interface TestUbeswapCalleeInterface extends ethers.utils.Interface {
  functions: {
    "flash(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "mint(address,address,int24,int24,uint128)": FunctionFragment;
    "swap0ForExact1(address,uint256,address,uint160)": FunctionFragment;
    "swap1ForExact0(address,uint256,address,uint160)": FunctionFragment;
    "swapExact0For1(address,uint256,address,uint160)": FunctionFragment;
    "swapExact0For1SupportingFee(address,uint256,address,uint160)": FunctionFragment;
    "swapExact1For0(address,uint256,address,uint160)": FunctionFragment;
    "swapExact1For0SupportingFee(address,uint256,address,uint160)": FunctionFragment;
    "swapToHigherSqrtPrice(address,uint160,address)": FunctionFragment;
    "swapToLowerSqrtPrice(address,uint160,address)": FunctionFragment;
    "ubeswapFlashCallback(uint256,uint256,bytes)": FunctionFragment;
    "ubeswapMintCallback(uint256,uint256,bytes)": FunctionFragment;
    "ubeswapSwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "flash",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap0ForExact1",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap1ForExact0",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact0For1",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact0For1SupportingFee",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact1For0",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact1For0SupportingFee",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToHigherSqrtPrice",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToLowerSqrtPrice",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ubeswapFlashCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ubeswapMintCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ubeswapSwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap0ForExact1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swap1ForExact0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact0For1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact0For1SupportingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact1For0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact1For0SupportingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToHigherSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToLowerSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ubeswapFlashCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ubeswapMintCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ubeswapSwapCallback",
    data: BytesLike
  ): Result;

  events: {
    "FlashCallback(uint256,uint256)": EventFragment;
    "MintCallback(uint256,uint256)": EventFragment;
    "MintResult(uint256,uint256,uint256)": EventFragment;
    "SwapCallback(int256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FlashCallback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintCallback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapCallback"): EventFragment;
}

export class TestUbeswapCallee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestUbeswapCalleeInterface;

  functions: {
    flash(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "flash(address,address,uint256,uint256,uint256,uint256)"(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,address,int24,int24,uint128)"(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap0ForExact1(address,uint256,address,uint160)"(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap1ForExact0(address,uint256,address,uint160)"(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExact0For1(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact0For1SupportingFee(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExact0For1SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExact1For0(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact1For0SupportingFee(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapExact1For0SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapToHigherSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapToHigherSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapToLowerSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapToLowerSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ubeswapFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ubeswapFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ubeswapMintCallback(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ubeswapMintCallback(uint256,uint256,bytes)"(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ubeswapSwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  flash(
    pool: string,
    recipient: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    pay0: BigNumberish,
    pay1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "flash(address,address,uint256,uint256,uint256,uint256)"(
    pool: string,
    recipient: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    pay0: BigNumberish,
    pay1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    pool: string,
    recipient: string,
    bottomTick: BigNumberish,
    topTick: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,address,int24,int24,uint128)"(
    pool: string,
    recipient: string,
    bottomTick: BigNumberish,
    topTick: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swap0ForExact1(
    pool: string,
    amount1Out: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap0ForExact1(address,uint256,address,uint160)"(
    pool: string,
    amount1Out: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swap1ForExact0(
    pool: string,
    amount0Out: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap1ForExact0(address,uint256,address,uint160)"(
    pool: string,
    amount0Out: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact0For1(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExact0For1(address,uint256,address,uint160)"(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact0For1SupportingFee(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExact0For1SupportingFee(address,uint256,address,uint160)"(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact1For0(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExact1For0(address,uint256,address,uint160)"(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact1For0SupportingFee(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapExact1For0SupportingFee(address,uint256,address,uint160)"(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    limitSqrtPrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapToHigherSqrtPrice(
    pool: string,
    price: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapToHigherSqrtPrice(address,uint160,address)"(
    pool: string,
    price: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapToLowerSqrtPrice(
    pool: string,
    price: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapToLowerSqrtPrice(address,uint160,address)"(
    pool: string,
    price: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ubeswapFlashCallback(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ubeswapFlashCallback(uint256,uint256,bytes)"(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ubeswapMintCallback(
    amount0Owed: BigNumberish,
    amount1Owed: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ubeswapMintCallback(uint256,uint256,bytes)"(
    amount0Owed: BigNumberish,
    amount1Owed: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ubeswapSwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ubeswapSwapCallback(int256,int256,bytes)"(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    flash(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "flash(address,address,uint256,uint256,uint256,uint256)"(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount0Owed: BigNumber;
        amount1Owed: BigNumber;
        resultLiquidity: BigNumber;
      }
    >;

    "mint(address,address,int24,int24,uint128)"(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amount0Owed: BigNumber;
        amount1Owed: BigNumber;
        resultLiquidity: BigNumber;
      }
    >;

    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap0ForExact1(address,uint256,address,uint160)"(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swap1ForExact0(address,uint256,address,uint160)"(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExact0For1(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact0For1SupportingFee(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExact0For1SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExact1For0(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact1For0SupportingFee(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapExact1For0SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToHigherSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapToHigherSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToLowerSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapToLowerSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ubeswapFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ubeswapFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ubeswapMintCallback(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ubeswapMintCallback(uint256,uint256,bytes)"(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    ubeswapSwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FlashCallback(fee0: null, fee1: null): EventFilter;

    MintCallback(amount0Owed: null, amount1Owed: null): EventFilter;

    MintResult(
      amount0Owed: null,
      amount1Owed: null,
      resultLiquidity: null
    ): EventFilter;

    SwapCallback(amount0Delta: null, amount1Delta: null): EventFilter;
  };

  estimateGas: {
    flash(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "flash(address,address,uint256,uint256,uint256,uint256)"(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,address,int24,int24,uint128)"(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap0ForExact1(address,uint256,address,uint160)"(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap1ForExact0(address,uint256,address,uint160)"(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExact0For1(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact0For1SupportingFee(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExact0For1SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExact1For0(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact1For0SupportingFee(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapExact1For0SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapToHigherSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapToHigherSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapToLowerSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapToLowerSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ubeswapFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ubeswapFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ubeswapMintCallback(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ubeswapMintCallback(uint256,uint256,bytes)"(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ubeswapSwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flash(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "flash(address,address,uint256,uint256,uint256,uint256)"(
      pool: string,
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      pay0: BigNumberish,
      pay1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,address,int24,int24,uint128)"(
      pool: string,
      recipient: string,
      bottomTick: BigNumberish,
      topTick: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap0ForExact1(address,uint256,address,uint160)"(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap1ForExact0(address,uint256,address,uint160)"(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExact0For1(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact0For1SupportingFee(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExact0For1SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExact1For0(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact1For0SupportingFee(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapExact1For0SupportingFee(address,uint256,address,uint160)"(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      limitSqrtPrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapToHigherSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapToHigherSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapToLowerSqrtPrice(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapToLowerSqrtPrice(address,uint160,address)"(
      pool: string,
      price: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ubeswapFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ubeswapFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ubeswapMintCallback(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ubeswapMintCallback(uint256,uint256,bytes)"(
      amount0Owed: BigNumberish,
      amount1Owed: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ubeswapSwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ubeswapSwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
