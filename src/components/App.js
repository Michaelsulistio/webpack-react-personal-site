import React from 'react';
import HomeAppBar from './HomeAppBar';
import About from './About'
import {
  BrowserRouter,
  Switch,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
      <div>
        <HomeAppBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<About />} />
          <Route path="/tictactoe" element={<About />} />
        </Routes>
      </div>
  );
};

export default App;
