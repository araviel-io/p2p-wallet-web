import web3 from '@safecoin/web3.js';
import { mergeRight } from 'ramda';
import { createReducer } from 'typesafe-actions';

import { changeEntrypointAction, getConfirmedTransactionAsyncAction } from 'store/commands';

type State = {
  [pubkey: string]: web3.ParsedConfirmedTransaction;
};

const initialState: State = {};

export const transactionsNormalizedReducer = createReducer(initialState)
  .handleAction(getConfirmedTransactionAsyncAction.success, (state, { payload, meta }) => {
    return mergeRight(state, { [meta.signature]: payload });
  })
  .handleAction(changeEntrypointAction, () => ({
    ...initialState,
  }));
