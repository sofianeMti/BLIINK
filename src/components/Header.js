import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand logo" href="/">BLIINK</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/article">Article<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/photo">Photo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NewArticle">New Article</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/NewPhoto">New Photo</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;
