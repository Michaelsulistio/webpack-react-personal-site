import React from 'react';
import HomeAppBar from './HomeAppBar';
import About from './About'
import TicTacToe from './TicTacToe'
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
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
  );
};

export default App;
