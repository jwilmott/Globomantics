import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';

class App extends Component {
    fetchHouses = () => {
        fetch('/houses.json')
            .then(rsp => rsp.json())
            .then(allHouses => {
                this.allHouses = allHouses;
                this.determineFeaturedHouse();
            })
    }

    determineFeaturedHouse = () => {
        if (this.allHouses) {
            const randomIndex = Math.floor(Math.random() * this.allHouses.length);
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({ featuredHouse });
        };
    }



  render() {
    return (
        <div className="container">
            <Header subtitle="Providing stuff worldwide!"/>
        </div>
    );
  }
}

export default App;
