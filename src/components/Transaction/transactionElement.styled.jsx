import styled from 'styled-components';

export const TransactionBodyList = styled.tr`
  &:nth-child(even) {
    background: #c3d7de;
  }
`;

export const TransactionBodyItem = styled.td`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
  text-align: center;
  padding: 15px;
  border: 1px solid #e1e1e1;
`;
