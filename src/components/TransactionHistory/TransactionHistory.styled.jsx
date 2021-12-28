import styled from '@emotion/styled';

const TransactionsWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 320px;
  border-radius: 12px;
  border: 1px solid rgb(0, 255, 0);
  background-color: #353535;
  box-shadow: 5px 5px 20px 2px rgb(0 0 0/ 0.5);
`;

const Transactions = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TransactionsHead = styled.thead`
  border-bottom: 1px solid rgb(0, 255, 0);
  background-color: lightgrey;
`;

const TransactionsHeadRow = styled.tr`
  text-transform: uppercase;
  color: darkgreen;
`;
const TransactionsHeadRowType = styled.th`
  border-top-left-radius: 12px;
`;
const TransactionsHeadRowCurrency = styled.th`
  border-top-right-radius: 12px;
`;

const TransactionRow = styled.tr`
  text-transform: uppercase;
  color: rgb(0, 255, 0);
  font-weight: 500;

  :not(:last-child) {
    border-bottom: 1px dashed rgb(0, 255, 0);
  }
`;

const TransactionType = styled.td`
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: left;
  padding-left: 6px;
`;

const TransactionCurrency = styled.td`
  text-align: left;
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
