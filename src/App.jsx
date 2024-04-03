// App.js
import React from 'react';
import { LanguageProvider } from './LanguageContext.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import Greeting from './Greeting.jsx';

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector App</h1>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvider>
  );
};

export default App;
