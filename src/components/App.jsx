import { Profile } from 'components/Profile/Profile';
import Statistics from './Statistik/statistics';

import user from '../user/user.json'
import data from '../user/data.json';
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
    </div>
  );
};
