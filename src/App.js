import React from 'react';
import './App.css';
import { Container,Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Sidebar from './component/Sidebar';
import DreamCommunity from './component/DreamCommunity';
import DreamCommunityMenu from './component/DreamCommunityMenu';
import Events from './component/Events';


function App() {
  return (
    <div className="App">
     
    <Container fluid >
  <Row className="pagecontainer">
        <Col xs="2" sm="2"md="2" lg="2">
          <Sidebar/></Col>
        <Col className="DreamCommunity" xs="10" sm="10"md="10" lg="10">
        <DreamCommunity/>
        <DreamCommunityMenu/>
        <Events/>
          </Col>
      </Row>
      </Container>
      </div>
  );
}


export default App;