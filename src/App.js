import './App.css';
import Header from './component/Header.js';
import Introduction from './component/Introduction.js';
import WorkExperience from './component/WorkExperience';
import Education from './component/Education';
import Skills from './component/Skills';
import Other from './component/Other';
import Project from './component/Project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog.js';

function Profile() {
  return (
    <div>
      <div className="Profile">
        <Introduction />
        <WorkExperience />
        <Project />
        <Education />
        <Skills />
        <Other />
      </div >
    </div>
  );
}

function NoPage() {
  return <h1>Page not found - 404!!!</h1>;
}

function Home() {
  return <h1>Welcom Home!!!</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home /> }  />
          <Route path="myprofile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
