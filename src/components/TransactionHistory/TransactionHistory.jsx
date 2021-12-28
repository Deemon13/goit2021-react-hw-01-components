import PropTypes from 'prop-types';

import {
  TransactionsWrapper,
  Transactions,
  TransactionsHead,
  TransactionsHeadRow,
  TransactionsHeadRowType,
  TransactionsHeadRowCurrency,
  TransactionRow,
  TransactionType,
  TransactionCurrency,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <TransactionsWrapper>
      <Transactions>
        <TransactionsHead>
          <TransactionsHeadRow>
            <TransactionsHeadRowType>Type</TransactionsHeadRowType>
            <th>Amount</th>
            <TransactionsHeadRowCurrency>Currency</TransactionsHeadRowCurrency>
          </TransactionsHeadRow>
        </TransactionsHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionRow key={id}>
              <TransactionType>{type}</TransactionType>
              <td>{amount}</td>
              <TransactionCurrency>{currency}</TransactionCurrency>
            </TransactionRow>
          ))}
        </tbody>
      </Transactions>
    </TransactionsWrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
