import styled from '@emotion/styled';

const TransactionsWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 320px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.backgroundColorDark};
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const Transactions = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
`;

const TransactionsHead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
  background-color: ${({ theme }) => theme.colors.backgroundColorLight};
`;

const TransactionsHeadRow = styled.tr`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
const TransactionsHeadRowType = styled.th`
  border-top-left-radius: 12px;
  text-align: left;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 6px;
`;
const TransactionsHeadRowCurrency = styled.th`
  border-top-right-radius: 12px;
  text-align: right;
  padding-right: 6px;
`;

const TransactionRow = styled.tr`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 500;

  :not(:last-child) {
    border-bottom: 1px dashed ${({ theme }) => theme.colors.mainColor};
  }
`;

const TransactionType = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: left;
  padding-left: 6px;
`;

const TransactionCurrency = styled.td`
  text-align: right;
  padding-right: 6px;
`;

export {
  TransactionsWrapper,
  Transactions,
  TransactionsHead,
  TransactionsHeadRow,
  TransactionsHeadRowType,
  TransactionsHeadRowCurrency,
  TransactionRow,
  TransactionType,
  TransactionCurrency,
};
