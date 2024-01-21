import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Article from "./pages/Article";
import Contentplace from "./pages/Contentplace";
import Session from "./pages/Session";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Contentplace />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/article/:articleId' element={<Article />} />
        <Route path='/booking' element={<Session />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App