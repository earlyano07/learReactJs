import React, { Component } from 'react';

import Header from 'parts/Header.js';
import Hero from 'parts/Hero.js';
import landingPage from 'json/landingPage.json';
import MostPicked from './../parts/MostPicked';
import Footer from 'parts/Footer';
// import Categories from './../parts/Categories';

class LandingPages extends Component {

    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
      }
      
    render() {
        // const { page } = this.props;

        // if (!page.hasOwnProperty("landingPage")) return null;

        return (
            <>
                <Header {...this.props}> </Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked
                    refMostPicked={this.refMostPicked}
                    data={landingPage.mostPicked}
                />
                <Footer />
            </>   
        );
    }
}

export default (LandingPages); 