import React from 'react';
import HomeAppBar from './HomeAppBar';
import About from './About'
import TicTacToe from './TicTacToe'
import Projects from './Projects'
import Contact from './Contact'
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
  );
};

export default App;
