import {Link, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Contact  from "./pages/Contact";
import About  from "./pages/About";
import Menu from "./pages/Menu";
import NavigationBar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "./components/Footer";




function App() {
//element={}
/*<Link to="/">
      <button>Homepage</button>
    </Link>
    <Link to="/menu">
      <button>Menu</button>
    </Link>
    <Link to="/contact">
      <button>Contact</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/cart">
      <button>Cart</button>
    </Link>
    <div className='App'>
    </div>*/
  return (
    <div className="App">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img className="pizzalogo" src="/pizzaLogo.png" alt=""/>
          GEOVANNI PIZZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
           </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart"> Cart </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
      <Route path="" element={ <Homepage />} />
      <Route path="cart" element={ <Cart />} />
      <Route path="contact" element={ <Contact />} />
      <Route path="about" element={ <About />} />
      <Route path="menu" element={ <Menu />} />
      
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
