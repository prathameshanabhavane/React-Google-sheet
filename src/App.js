import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabletop from 'tabletop';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super()
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key : '1hvBLTDxnbGVmXEmjgGUm7RB47OG6isPck3VzovuUroY',
            callback : googleData => {
                this.setState({
                    data : googleData
                })
            },
            simpleSheet : true
        })
    }

    render() {
        const { data } = this.state
      return (
        <div className="App">
            <header className="App-header py-5">
                <h1>
                  React + Google sheet demo
                </h1>
                <a
                  className="App-link pt-3"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <a
                  className="App-link"
                  href="https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    See More Info on Medium article
                </a>
                <Container>
                    <Row>
                        {data.map((obj, index) => {
                            return (
                                <Col key={index} lg="4" className="mt-5">
                                    <h2>{obj.Employee}</h2>
                                    <h6>{obj.FavDog}</h6>
                                    <img src={obj.Image} alt={obj.FavDog} className="img-fluid pt-3 img" />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </header>
        </div>
      );
    }
}

export default App;
