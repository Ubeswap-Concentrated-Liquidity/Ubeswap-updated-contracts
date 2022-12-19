import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { MockTimeUbeswapPool } from "../../typechain/MockTimeUbeswapPool";
import { TestERC20 } from "../../typechain/TestERC20";
import { UbeswapFactory } from "../../typechain/UbeswapFactory";
import { DataStorageOperator } from "../../typechain/DataStorageOperator";
import { TestUbeswapCallee } from "../../typechain/TestUbeswapCallee";
import { TestUbeswapRouter } from "../../typechain/TestUbeswapRouter";
import { MockTimeUbeswapPoolDeployer } from "../../typechain/MockTimeUbeswapPoolDeployer";

import { UbeswapPoolDeployer } from "../../typechain/UbeswapPoolDeployer";

type Fixture<T> = () => Promise<T>;
interface FactoryFixture {
  factory: UbeswapFactory;
}

export const vaultAddress = "0x1d8b6fA722230153BE08C4Fa4Aa4B4c7cd01A95a";

async function factoryFixture(): Promise<FactoryFixture> {
  const poolDeployerFactory = await ethers.getContractFactory(
    "UbeswapPoolDeployer"
  );
  const poolDeployer = (await poolDeployerFactory.deploy()) as UbeswapPoolDeployer;
  const factoryFactory = await ethers.getContractFactory("UbeswapFactory");
  const factory = (await factoryFactory.deploy(
    poolDeployer.address,
    vaultAddress
  )) as UbeswapFactory;
  return { factory };
}

interface DataStorageFixture {
  dataStorage: DataStorageOperator;
}

async function dataStorageFixture(): Promise<DataStorageFixture> {
  const dataStorageFactory = await ethers.getContractFactory(
    "DataStorageOperator"
  );
  const dataStorage = (await dataStorageFactory.deploy()) as DataStorageOperator;
  return { dataStorage };
}

interface TokensFixture {
  token0: TestERC20;
  token1: TestERC20;
  token2: TestERC20;
}

async function tokensFixture(): Promise<TokensFixture> {
  const tokenFactory = await ethers.getContractFactory("TestERC20");
  const tokenA = (await tokenFactory.deploy(
    BigNumber.from(2).pow(255)
  )) as TestERC20;
  const tokenB = (await tokenFactory.deploy(
    BigNumber.from(2).pow(255)
  )) as TestERC20;
  const tokenC = (await tokenFactory.deploy(
    BigNumber.from(2).pow(255)
  )) as TestERC20;

  const [token0, token1, token2] = [
    tokenA,
    tokenB,
    tokenC,
  ].sort((tokenA, tokenB) =>
    tokenA.address.toLowerCase() < tokenB.address.toLowerCase() ? -1 : 1
  );

  return { token0, token1, token2 };
}

type TokensAndFactoryFixture = FactoryFixture & TokensFixture;

interface PoolFixture extends TokensAndFactoryFixture {
  swapTargetCallee: TestUbeswapCallee;
  swapTargetRouter: TestUbeswapRouter;
  createPool(
    fee: number,
    firstToken?: TestERC20,
    secondToken?: TestERC20
  ): Promise<MockTimeUbeswapPool>;
}

// Monday, October 5, 2020 9:00:00 AM GMT-05:00
export const TEST_POOL_START_TIME = 1601906400;
export const TEST_POOL_DAY_BEFORE_START = 1601906400 - 24 * 60 * 60;

export const poolFixture: Fixture<PoolFixture> = async function (): Promise<PoolFixture> {
  const { factory } = await factoryFixture();
  const { token0, token1, token2 } = await tokensFixture();
  //const { dataStorage } = await dataStorageFixture();

  const MockTimeUbeswapPoolDeployerFactory = await ethers.getContractFactory(
    "MockTimeUbeswapPoolDeployer"
  );
  const MockTimeUbeswapPoolFactory = await ethers.getContractFactory(
    "MockTimeUbeswapPool"
  );

  const calleeContractFactory = await ethers.getContractFactory(
    "TestUbeswapCallee"
  );
  const routerContractFactory = await ethers.getContractFactory(
    "TestUbeswapRouter"
  );

  const swapTargetCallee = (await calleeContractFactory.deploy()) as TestUbeswapCallee;
  const swapTargetRouter = (await routerContractFactory.deploy()) as TestUbeswapRouter;

  return {
    token0,
    token1,
    token2,
    factory,
    swapTargetCallee,
    swapTargetRouter,
    createPool: async (fee, firstToken = token0, secondToken = token1) => {
      const mockTimePoolDeployer = (await MockTimeUbeswapPoolDeployerFactory.deploy()) as MockTimeUbeswapPoolDeployer;
      const tx = await mockTimePoolDeployer.deployMock(
        factory.address,
        firstToken.address,
        secondToken.address
      );

      const receipt = await tx.wait();
      const poolAddress = receipt.events?.[1].args?.pool as string;
      return MockTimeUbeswapPoolFactory.attach(
        poolAddress
      ) as MockTimeUbeswapPool;
    },
  };
};
