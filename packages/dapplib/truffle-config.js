require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan raise stereo solar inner knife bottom topple'; 
let testAccounts = [
"0x9c79757b41e66eb7bc5966017aa51d2674b4ab4e4abb462d4471574f044175ab",
"0x4d1c32cadaaa18da1a04a38dbb4fcadd39428ac5370643fd919058f1b7ccb80b",
"0x14ebcddaf1732ac1aecd1e24f41ab5a2d2c4e0434d6f0384960264a9cea392a3",
"0x81fd5e9ba5a5dd58e24224363b4e795c8a7a9ffa7e7c57ad2444b3ffbab38b70",
"0x6c74689fd3585b209e28d69549d8bf464ddd85acff13ef89447221fb221faa46",
"0xad1883115560964c8e3595b399d61f41cc655dfbc60551ae2fca5e8a750d8b46",
"0x24342c5dc4ea45437672aa4f18fe83aa764e765b4937c893fd214bf7825aac44",
"0x40ba76d6ccb819bf013cb0b19851550e0ed423f19c26a89ea0a64e7027a7c154",
"0xadcf554c471538b003f7d5e6ed321f8b44f891ddc3fd2cb7cc9b629187fca805",
"0x327fe59fe84bc1308479c96455d57601c887f3e5705961f1483775306372a25b"
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

