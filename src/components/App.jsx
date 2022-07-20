import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import { Test } from './Test/Test';

import user from 'components/List_Obj/user.json';
import data from 'components/List_Obj/data.json';
import friends from 'components/List_Obj/friends.json';
import transactions from 'components/List_Obj/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
