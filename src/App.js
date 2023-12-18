import './App.css';
import Header from './component/Header.js';
import Introduction from './component/Introduction.js';
import WorkExperience from './component/WorkExperience';
import Education from './component/Education';
import Skills from './component/Skills';
import Other from './component/Other';
import Project from './component/Project';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/myprofile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogWithId />} /> // 使用一個具名元件
      </Routes>
    </Router>
  );
}

function BlogWithId() {
  const id = useParams(); // 取得動態參數的值
  return <Blog id={id.id} />; // 將 id 傳遞給 Blog 元件
}

export default App;
