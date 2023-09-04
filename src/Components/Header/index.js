import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavTool() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home" style={{ color: 'white' }}>Home</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTool;