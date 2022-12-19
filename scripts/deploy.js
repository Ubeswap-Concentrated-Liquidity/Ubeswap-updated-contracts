const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using node you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const vault = "0xBe56E9aA7792B2f1F4132631B7A0E1927090D78A";
  // We get the contract to deploy
  const PoolDeployerFactory = await hre.ethers.getContractFactory(
    "UbeswapPoolDeployer"
  );
  const poolDeployer = await PoolDeployerFactory.deploy();
  await poolDeployer.deployed();
  const UbeswapFactory = await hre.ethers.getContractFactory("UbeswapFactory");
  const Ubeswap = await UbeswapFactory.deploy(poolDeployer.address, vault);

  await Ubeswap.deployed();

  await poolDeployer.setFactory(Ubeswap.address);

  console.log("UbeswapPoolDeployer to:", poolDeployer.address);
  console.log("UbeswapFactory deployed to:", Ubeswap.address);

  const deployDataPath = path.resolve(__dirname, "../../ubeswap/deploys.json");
  let deploysData = JSON.parse(fs.readFileSync(deployDataPath, "utf8"));
  deploysData.poolDeployer = poolDeployer.address;
  deploysData.factory = Ubeswap.address;
  fs.writeFileSync(deployDataPath, JSON.stringify(deploysData), "utf-8");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
