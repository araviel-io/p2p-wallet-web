import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as web3 from '@safecoin/web3.js';
import { styled } from 'linaria/react';

import { Button } from 'components/ui';
import { openModal } from 'store/actions/modals';
import { SHOW_MODAL_RECIEVE_TOKENS } from 'store/constants/modalTypes';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
`;

type Props = {
  publicKey?: web3.PublicKey;
};

export const ActionsWidget: FunctionComponent<Props> = ({ publicKey }) => {
  const dispatch = useDispatch();

  const handleReceiveClick = () => {
    dispatch(openModal(SHOW_MODAL_RECIEVE_TOKENS, { publicKey, isSol: true }));
  };

  return (
    <Wrapper>
      <Actions>
        {publicKey ? (
          <Link to={`/send/${publicKey?.toBase58()}`}>
            <Button primary>Send</Button>
          </Link>
        ) : undefined}
        <Button primary onClick={handleReceiveClick}>
          Receive
        </Button>
        {publicKey ? (
          <Link to={`/swap/${publicKey?.toBase58()}`}>
            <Button primary>Swap</Button>
          </Link>
        ) : undefined}
      </Actions>
      {/* <Button>Top-up with a card</Button> */}
    </Wrapper>
  );
};
