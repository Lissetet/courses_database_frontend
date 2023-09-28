import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';


function App() {

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Courses />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
