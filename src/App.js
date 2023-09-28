import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UpdateCourse from './components/UpdateCourse';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/:id/update" element={<UpdateCourse />} />
      </Routes>
    </div>
  );
}

export default App;
