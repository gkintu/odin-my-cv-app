// src/App.jsx

import React from 'react'; // Keep React import if you use JSX only
import GeneralInfo from './components/GeneralInfo'; // Import the General Info component
import Education from './components/Education'; // Import the Education component
import Experience from './components/Experience'; // Import the Experience component
import './styles/App.css'; // Import main App styles

function App() {
  return (
    <div className="app-container"> {/* Main container for the app */}
      <header> {/* Simple header */}
        <h1>CV Generator</h1>
      </header>
      <main> {/* Main content area */}
        {/* Render each section component */}
        <GeneralInfo />
        <Education />
        <Experience />
      </main>
      <footer> {/* Simple footer */}
        <p>Created with React & Vite following Odin Project Guidelines</p>
      </footer>
    </div>
  );
}

export default App;