require('@nomiclabs/hardhat-waffle');
require('./tasks/block-number');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task('ahoy', 'Prints Hello World', async (taskArgs, hre) => {
  console.log('Hello World!');
});

task('balance', "Prints an account's balance")
  .addOptionalParam('account', "The account's address")
  .setAction(async (taskArgs) => {
    const account = taskArgs.account || (await hre.ethers.getSigner()).address;
    const balance = await hre.ethers.provider.getBalance(account);
    console.log(`Account balance : ${balance}`);
  });

task('balance2', "Prints an account's balance")
  .addOptionalParam('account', "The account's address")
  .setAction(async (taskArgs) => {
    const account = taskArgs.account || (await hre.ethers.getSigner()).address;
    const balance = await hre.ethers.provider.getBalance(account);
    console.log(`Account balance : ${balance}`);
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4'
};
