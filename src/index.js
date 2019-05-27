const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('81f30c3a5371dfe9b75a5ec68320b2343b5177e00eafc96bd1a4ad40259b25d7');
const myWalletAddress = myKey.getPublic('hex');

const nastyCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key of someone', 10);
tx1.signTransaction(myKey);
nastyCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
nastyCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of miner is ...', nastyCoin.getBalanceOfAddress(myWalletAddress));