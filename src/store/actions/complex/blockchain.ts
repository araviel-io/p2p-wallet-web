import * as web3 from '@safecoin/web3.js';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import nacl from 'tweetnacl';
import { derivePath } from 'ed25519-hd-key';

import { getBalance, getTokenAccountInfo } from 'store/actions/solana';
import {
  changeEntrypointAction,
  changeFeeCalculatorAction,
  changeMinBalanceForRentExceptionAction,
  connectionReadyAction,
  createAccountAction,
} from 'store/commands';
import { AppAsyncThunk, AppThunk } from 'store/types';

import { ApiSolanaService } from '../../middlewares/solana-api/services';

export const establishConnection = (entrypoint?: string): AppAsyncThunk<void> => async (
  dispatch,
  getState,
) => {
  let entrypointUrl = entrypoint;
  if (!entrypointUrl) {
    entrypointUrl = getState().data.blockchain.entrypoint;
  }

  const connection = ApiSolanaService.changeEntrypoint(entrypointUrl).getConnection();

  try {
    const { feeCalculator } = await connection.getRecentBlockhash();
    const minBalanceForRentException: number = await connection.getMinimumBalanceForRentExemption(
      0,
    );

    dispatch(changeFeeCalculatorAction(feeCalculator));
    dispatch(changeMinBalanceForRentExceptionAction(minBalanceForRentException));

    const { account } = getState().data.blockchain;

    if (account) {
      await dispatch(getTokenAccountInfo(account.publicKey));
    }

    dispatch(connectionReadyAction());

    localStorage.setItem('entrypoint', entrypointUrl);

    return Promise.resolve();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to establish connection', error);
    return Promise.reject();
  }
};

export const changeEntrypointAndConnect = (entrypoint: string): AppThunk => (dispatch) => {
  dispatch(changeEntrypointAction(entrypoint));
  void dispatch(establishConnection(entrypoint));
};

export const createAccount = (mnemonic: string): AppThunk => async (dispatch) => {
  /*
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const keyPair = nacl.sign.keyPair.fromSeed(seed.slice(0, 32));*/
  //const mnemonic = bip39.generateMnemonic(256);
  const seed = await bip39.mnemonicToSeed(mnemonic);
  //added
  const derivedSeed = deriveSeed(seed);
  const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);

  localStorage.setItem('secretKey', JSON.stringify([...keyPair.secretKey]));
  dispatch(createAccountAction(keyPair.secretKey));
  dispatch(getTokenAccountInfo(new web3.PublicKey(keyPair.publicKey)));
};
// that's more a "regenerate account" than accessing one
export const accessAccount = (mnemonic: string): AppThunk => async (dispatch) => {
  
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const derivedSeed = deriveSeed(seed);
  //const derivedSeed = bip32.fromSeed(seed).derivePath(`m/501'/0'/0/0`).privateKey;
  const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);

  localStorage.setItem('secretKey', JSON.stringify([...keyPair.secretKey]));
  dispatch(createAccountAction(keyPair.secretKey));
  dispatch(getTokenAccountInfo(new web3.PublicKey(keyPair.publicKey)));
};

function deriveSeed(seed) {
  // you can create others derive path from wallet.safecoin.org
  const path44Change = `m/44'/19165'/0'/0'`;
  return derivePath(path44Change, seed).key;    
}