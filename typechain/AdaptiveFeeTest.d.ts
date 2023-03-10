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

interface AdaptiveFeeTestInterface extends ethers.utils.Interface {
  functions: {
    "feeConfig()": FunctionFragment;
    "getFee(uint88,uint256)": FunctionFragment;
    "getGasCostOfGetFee(uint88,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "feeConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetFee",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "feeConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetFee",
    data: BytesLike
  ): Result;

  events: {};
}

export class AdaptiveFeeTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AdaptiveFeeTestInterface;

  functions: {
    feeConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        alpha1: number;
        alpha2: number;
        beta1: number;
        beta2: number;
        gamma1: number;
        gamma2: number;
        volumeBeta: number;
        volumeGamma: number;
        baseFee: number;
      }
    >;

    "feeConfig()"(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        alpha1: number;
        alpha2: number;
        beta1: number;
        beta2: number;
        gamma1: number;
        gamma2: number;
        volumeBeta: number;
        volumeGamma: number;
        baseFee: number;
      }
    >;

    getFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    "getFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    getGasCostOfGetFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfGetFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  feeConfig(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number, number, number] & {
      alpha1: number;
      alpha2: number;
      beta1: number;
      beta2: number;
      gamma1: number;
      gamma2: number;
      volumeBeta: number;
      volumeGamma: number;
      baseFee: number;
    }
  >;

  "feeConfig()"(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number, number, number, number, number] & {
      alpha1: number;
      alpha2: number;
      beta1: number;
      beta2: number;
      gamma1: number;
      gamma2: number;
      volumeBeta: number;
      volumeGamma: number;
      baseFee: number;
    }
  >;

  getFee(
    volatility: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getFee(uint88,uint256)"(
    volatility: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetFee(
    volatility: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfGetFee(uint88,uint256)"(
    volatility: BigNumberish,
    volumePerLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    feeConfig(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        alpha1: number;
        alpha2: number;
        beta1: number;
        beta2: number;
        gamma1: number;
        gamma2: number;
        volumeBeta: number;
        volumeGamma: number;
        baseFee: number;
      }
    >;

    "feeConfig()"(
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
      ] & {
        alpha1: number;
        alpha2: number;
        beta1: number;
        beta2: number;
        gamma1: number;
        gamma2: number;
        volumeBeta: number;
        volumeGamma: number;
        baseFee: number;
      }
    >;

    getFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    feeConfig(overrides?: CallOverrides): Promise<BigNumber>;

    "feeConfig()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feeConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeConfig()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetFee(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfGetFee(uint88,uint256)"(
      volatility: BigNumberish,
      volumePerLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
