import React, { FunctionComponent } from 'react';

import { styled } from '@linaria/react';
import { rgba } from 'polished';

import { TokenAccount } from 'api/token/TokenAccount';
import { AmountUSDT } from 'components/common/AmountUSDT';
import { TokenAvatar } from 'components/common/TokenAvatar';
import { shortAddress } from 'utils/tokens';

const Wrapper = styled.div`
  padding: 10px 20px;

  cursor: pointer;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
`;

const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
`;

const TokenName = styled.div`
  max-width: 300px;

  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;

  color: #a3a5ba;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
`;

type Props = {
  tokenAccount: TokenAccount;
  onClick: (tokenAccount: TokenAccount) => void;
};

export const TokenRow: FunctionComponent<Props> = ({ tokenAccount, onClick }) => {
  const handleClick = () => {
    onClick(tokenAccount);
  };

  return (
    <Wrapper onClick={handleClick}>
      <ItemWrapper>
        <TokenAvatar symbol={tokenAccount.mint.symbol} size={44} />
        <Info>
          <Top>
            <TokenName title={tokenAccount.address.toBase58()}>
              {tokenAccount.mint.name || tokenAccount.address.toBase58()}
            </TokenName>
            <AmountUSDT symbol={tokenAccount.mint.symbol} value={tokenAccount.balance} />
          </Top>
          <Bottom>
            <div>{shortAddress(tokenAccount.address.toBase58())}</div>
            <div>
              {tokenAccount?.mint.toMajorDenomination(tokenAccount.balance)}{' '}
              {tokenAccount.mint.symbol}
            </div>
          </Bottom>
        </Info>
      </ItemWrapper>
    </Wrapper>
  );
};
