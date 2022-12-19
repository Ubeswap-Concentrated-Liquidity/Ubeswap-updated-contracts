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
import { Contract, ContractTransaction } from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IUbeswapPoolEventsInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "Burn(address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "Collect(address,address,int24,int24,uint128,uint128)": EventFragment;
    "CommunityFee(uint8,uint8)": EventFragment;
    "Fee(uint16)": EventFragment;
    "Flash(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "Incentive(address)": EventFragment;
    "Initialize(uint160,int24)": EventFragment;
    "LiquidityCooldown(uint32)": EventFragment;
    "Mint(address,address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "Swap(address,address,int256,int256,uint160,uint128,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CommunityFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Incentive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityCooldown"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export class IUbeswapPoolEvents extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUbeswapPoolEventsInterface;

  functions: {};

  callStatic: {};

  filters: {
    Burn(
      owner: string | null,
      bottomTick: BigNumberish | null,
      topTick: BigNumberish | null,
      liquidityAmount: null,
      amount0: null,
      amount1: null
    ): EventFilter;

    Collect(
      owner: string | null,
      recipient: null,
      bottomTick: BigNumberish | null,
      topTick: BigNumberish | null,
      amount0: null,
      amount1: null
    ): EventFilter;

    CommunityFee(communityFee0New: null, communityFee1New: null): EventFilter;

    Fee(fee: null): EventFilter;

    Flash(
      sender: string | null,
      recipient: string | null,
      amount0: null,
      amount1: null,
      paid0: null,
      paid1: null
    ): EventFilter;

    Incentive(virtualPoolAddress: string | null): EventFilter;

    Initialize(price: null, tick: null): EventFilter;

    LiquidityCooldown(liquidityCooldown: null): EventFilter;

    Mint(
      sender: null,
      owner: string | null,
      bottomTick: BigNumberish | null,
      topTick: BigNumberish | null,
      liquidityAmount: null,
      amount0: null,
      amount1: null
    ): EventFilter;

    Swap(
      sender: string | null,
      recipient: string | null,
      amount0: null,
      amount1: null,
      price: null,
      liquidity: null,
      tick: null
    ): EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
