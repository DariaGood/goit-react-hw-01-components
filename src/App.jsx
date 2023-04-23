import React from 'react';
import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import data from './components/statistics/data.json';
import Friends from './components/friends/Friends';
import friends from './components/friends/allfriends.json';
import TransactionHistory from './components/transaction/TransactionHistory';
import transactions from './components/transaction/transactions.json'

// import ReactDOM from 'react-dom/client';
// import { App } from './components/App';
//import './index.css';


export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
}
