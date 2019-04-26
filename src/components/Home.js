import React, { Component } from 'react';
import '../style/Home.css'



class Home extends Component {

    Article = () => {
        this.props.history.push('/article');
    };

    Photo = () => {
        this.props.history.push('/Photo');

    };

    render() {
        return (
            <div className="form-inline">
                <div className="div1 bg-primary col-6" onClick={this.Article}><h1 className="titre1 text-center">ARTICLES</h1></div>
                <div className="div1 bg-danger col-6" onClick={this.Photo}><h1 className="titre1 text-center">PHOTOS</h1></div>
                <div className="div1 bg-dark col-6" onClick={this.Photo}><h1 className="titre1 text-center">PHOTOS</h1></div>
                <div className="div1 bg-warning col-6" onClick={this.Article}><h1 className="titre1 text-center">ARTICLES</h1></div>
            </div>
        );
    }
}
export default Home;
