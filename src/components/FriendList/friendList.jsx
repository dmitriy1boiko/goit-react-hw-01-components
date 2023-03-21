import { FriendListItem } from 'components/FriendListItem/friendListItem';
import PropTypes from 'prop-types';
import { List, ListItem } from './FriendList.styled';

const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <FriendListItem item={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default FriendList;

FriendList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};
