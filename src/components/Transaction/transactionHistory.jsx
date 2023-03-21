import PropTypes from 'prop-types';
import TransactionElement from './transactionElement';
import {TableTransaction, TransactionTitle, TransactionItem, TransactionBody} from "./TransactionHistory.styled";


export default function TransactionHistory({ items }) {
  return (
    <TableTransaction >
      <thead>
        <TransactionTitle>
          <TransactionItem>Type</TransactionItem>
          <TransactionItem>Amount</TransactionItem>
          <TransactionItem>Currency</TransactionItem>
        </TransactionTitle>
      </thead>
      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionElement
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TransactionBody>
    </TableTransaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};