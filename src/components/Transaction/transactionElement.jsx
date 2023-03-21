import PropTypes from 'prop-types';
import { TransactionBodyItem, TransactionBodyList } from './transactionElement.styled';

export default function TransactionElement({ type, amount, currency }) {
  return (
    <TransactionBodyList>
      <TransactionBodyItem>{type}</TransactionBodyItem>
      <TransactionBodyItem>{amount}</TransactionBodyItem>
      <TransactionBodyItem>{currency}</TransactionBodyItem>
    </TransactionBodyList>
  );
}

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};