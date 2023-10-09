import './Styles.css';
import Container from 'react-bootstrap/Container';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <div>
      <NavbarBootstrap className="bg-dark bg-black" data-bs-theme="dark" sticky="top">
        <Container style={{ maxWidth: '5000px' }}>
          <NavbarBootstrap.Brand href="/">
            <span className="text-mustard">Sistema de Moeda Estudantil</span>
          </NavbarBootstrap.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </NavbarBootstrap>
    </div>
  );
};
export default Navbar;