import React from 'react';

import { SongProvider } from './SongContext';

import Header from './Components/AppComponents/Header';
import Footer from './Components/AppComponents/Footer';
import SongList from './Components/SongComponents/SongList';
import SongForm from './Components/SongComponents/SongForm';

function App() {
  return (
    <div className="App">
      <SongProvider>
          <Header />
          <SongForm />
          <SongList />
          <Footer />
      </SongProvider>
    </div>
  );
}

export default App;
