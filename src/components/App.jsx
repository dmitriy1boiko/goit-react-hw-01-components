import { Profile } from 'components/Profile/Profile';
import Statistics from './Statistik/statistics';
import FriendList from './FriendList/friendList';
import TransactionHistory from './Transaction/transactionHistory';

import user from '../user/user.json';
import data from '../user/data.json';
import friends from '../user/friends.json';
import transactions from '../user/transactions.json';

const {username, tag, location, avatar, stats} = user
export const App = () => {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends}/>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
