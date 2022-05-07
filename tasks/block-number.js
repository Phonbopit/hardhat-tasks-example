task(
  'block-number',
  'Prints the current block number',
  async (taskArgs, hre) => {
    await hre.ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log(`Block number : ${blockNumber}`);
    });
  }
);
