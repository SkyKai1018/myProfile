import './App.css';
import Header from './component/Header.js';
import Introduction from './component/Introduction.js';
import WorkExperience from './component/WorkExperience';
import Education from './component/Education';
import Skills from './component/Skills';
import Other from './component/Other';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <WorkExperience />
      <Project />
      <Education />
      <Skills />
      <Other />
    </div >
  );
}

export default App;
