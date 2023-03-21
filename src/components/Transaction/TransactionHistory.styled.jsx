import styled from 'styled-components';

export const TableTransaction = styled.table`
  width: 700px;
  margin: 0 auto;

  box-shadow: 10px 10px 23px #9f9f9f, -5px -5px 23px #ffffff;
`;
export const TransactionTitle = styled.tr`
  height: 60px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  background-color: #3db4d1;
`;
export const TransactionItem = styled.th`
  padding: 10px;
`;
export const TransactionBody = styled.tbody`
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;
