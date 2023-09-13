import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { When } from 'react-if';
import { loginContext } from '../../Context/AuthContext/index';
import './style.scss'

function NavTool() {
  const { loggedIn, logout, signin } = useContext(loginContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      username: username,
      password: password,
    }
    signin(obj.username, obj.password)
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{ color: 'white' }}>Home</Navbar.Brand>
          <Navbar.Brand href="/setting" style={{ color: 'white' }}>setting</Navbar.Brand>
          {
            !loggedIn &&
            <Navbar.Brand href="/signup" style={{ color: 'white' }}>signup</Navbar.Brand>
          }

          <When condition={loggedIn}>
            <button onClick={logout} className='butn'>Log Out</button>
          </When>

          <When condition={!loggedIn}>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="UserName"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='butn2'>Login</button>
            </form>
          </When>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTool;


// const headers = {
//   Authorization: `Basic ${btoa(`${obj.username}:${obj.password}`)}`,
// };
// const response = await axios.post(`http://localhost:3001/signin`, null, {
//   headers: headers,
// });
// setData(response.data);
// validateToken(response.data)
// if (response.status === 200) {
//   const token = response.data.token;
//   if (token) {
//     cookie.save('auth', token);
//   }
// }