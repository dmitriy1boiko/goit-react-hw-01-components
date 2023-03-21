import PropTypes from 'prop-types';
import { ItemDiv, ListStatus, Image, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({item:{avatar, name, isOnline}}) => {
  return <ItemDiv>
  <ListStatus online={isOnline}></ListStatus>
  <Image src={avatar} alt="User avatar"/>
  <FriendName>{name}</FriendName>
</ItemDiv>
};

FriendListItem.propTypes= {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
  
};