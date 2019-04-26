import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Photo from "./components/Photo";
import Header from "./components/Header";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";
import EditPhoto from "./components/EditPhoto";
import NewPhoto from "./components/NewPhoto";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/article" component={Menu} />
                        <Route exact path="/photo" component={Photo} />
                        <Route exact path='/article/:id' component={Article}/>
                        <Route exact path='/NewArticle' component={NewArticle}/>
                        <Route exact path='/NewPhoto' component={NewPhoto}/>
                        <Route exact path='/photo/:id' component={EditPhoto}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
