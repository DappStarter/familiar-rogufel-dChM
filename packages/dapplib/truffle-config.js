require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind evil guess private off suit'; 
let testAccounts = [
"0x635d9464972b43a8dbca57e87509699316b60d509b899098617b60fb467fcab7",
"0xfb0f7d1bf1c68ca63bd3903fcf4a3eec3475e2a263be258282ab0dca2d15daea",
"0x3e2f8b6e4573ee1dffc1089ff19880091fb621e929dfe9c03eda174015b3c16e",
"0xed9ce5a52c0b3df1d22caa5f03b84876812ac7e108b114cfe5d77667041a08a2",
"0x40b9cbe4ed5f1899bfa5f2e902413349c06fbfcd66903ecbfecde512be520e09",
"0xb3b5c1fb3135387d3b6702a1968f533b07337203455e9b4153a93d3facb6911b",
"0x7a869b00b5293540f873df43b21876d36ca151d16cc10150608b88c47a5f67da",
"0xf62596f8d82b394517f9adf271c2c81661b0b626134e15efc15899757e56474a",
"0x2a53608993f62f4dfd7707caf9008a20608c41aeb9e9d2856e1ced6fa430b118",
"0x4fa780e375a795233297e9473c277cc0247d923cd978549e4b0a63b5410189a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

