import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistic';

import user from 'components/List_Obj/user.json';
import data from 'components/List_Obj/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
