import styled from 'styled-components';

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;
export const ListStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  
  background-color: ${props =>{
    return props.online ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
`;
export const FriendName = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-left: 20px;
`;
