import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Article from "./pages/Article";
import Contentplace from "./pages/Contentplace";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Contentplace />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/article/:articleId' element={  <Article /> }/>
      </Routes>
    </Router>
  )
}

export default App
