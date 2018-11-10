import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase/app';
import App from './App';

import './styles/main.scss';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID
};
firebase.initializeApp(config);

ReactDom.render(<App />, document.getElementById('root'));
