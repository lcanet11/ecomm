import './App.css';

import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Container from 'react-bootstrap/Container'


function App() {
  return (
   <div className="App">
    <Router>
      <NavBar />
        <Container>
          <Public />
        </Container>
    </Router>
   </div>
  );
}

export default App;
