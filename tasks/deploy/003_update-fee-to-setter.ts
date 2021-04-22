import { DeployFunction } from "./";
import { ContractTransaction } from "ethers";
import { IUniswapV2Router02__factory } from "../../build/types/factories/IUniswapV2Router02__factory";

const log = (msg?: any, ...args: any[]) => {
  if (process.env.NODE_ENV === "test") {
    return;
  }
  console.log(msg, ...args);
};

export const doTx = async (
  action: string,
  tx: Promise<ContractTransaction>
): Promise<void> => {
  log(`Performing ${action}...`);
  const result = await (await tx).wait();
  log(`${action} done at tx ${result.transactionHash}`);
};

const FACTORY_ADDRESS = "0x62d5b84bE28a183aBB507E125B384122D2C25fAE";

const EXECUTIVE_TIMELOCK_ADDRESS = "0x1BDB37DAA42E37bFCa4C5536AcF93b1173588981";

export const updateFeeToSetter: DeployFunction = async (env) => {
  const [deployer] = env.celo.getSigners();
  if (!deployer) {
    throw new Error("No deployer.");
  }
  if (!EXECUTIVE_TIMELOCK_ADDRESS) {
    throw new Error("EXECUTIVE_TIMELOCK_ADDRESS not specified");
  }
  await doTx(
    "Change feeToSetter to the Executive timelock",
    IUniswapV2Router02__factory.connect(
      FACTORY_ADDRESS,
      deployer
    ).setFeeToSetter(EXECUTIVE_TIMELOCK_ADDRESS)
  );
  return {};
};
