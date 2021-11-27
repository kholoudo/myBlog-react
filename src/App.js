import './App.css';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog';
import Login from './LogForm';
import Register from './RegForm';



function App() {
  return (
    <div >
    <Router>
    <NavBar/>        
   
   <Routes>
<Route exact path="/" exact element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/about" element={<Blog/>}></Route>
<Route exact path="/contact" element={<Contact/>}></Route>
<Route exact path="/login" element={<Login/>}></Route>
<Route exact path="/register" element={<Register/>}></Route>

</Routes>
</Router>

</div>
  );
}

export default App;
