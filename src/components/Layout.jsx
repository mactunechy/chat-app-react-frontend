
import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main'
import Footer from './Footer';

class Layout extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="app-top" >
                    <Navbar />
                    <Main />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}



export default Layout
