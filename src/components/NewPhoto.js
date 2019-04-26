import React, { Component } from 'react';
import {Alert} from "reactstrap";

class NewPhoto extends Component {
    constructor(props){
        super(props);

        this.state = {
            titre : '',
            image : '',
            Alert : false
        }
    }

    getDataTitle = (e) => {
        console.log(e.target.value);
        const title = e.target.value;
        this.setState({titre : title})
    };

    getDataImage = (e) => {
        console.log(e.target.value);
        const link = e.target.value;
        this.setState({image : link})
    };

    create = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.titre,
                body: this.state.image,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = response.json();
        console.log('create');
        console.log(json);

        this.setState({
            Alert : true
        });

        setTimeout(
            function() {
                this.setState({Alert: false});
            }
                .bind(this),
            3000
        );

    };

    render() {
        return (
            <div>
                <h1 className="titleNewArticle">New Photo</h1>
                <div className="BlocNewArticle">
                    <div className="input-group container mb-3 col-6">
                        <input type="text" className="form-control" placeholder="title"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.getDataTitle}/>
                    </div>
                    <div className="input-group container mb-3 col-6">
                        <input type="text" className="form-control" placeholder="link photo"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.getDataImage}/>
                    </div>
                    <div className="input-group-append but">
                        <button className="btn btn-outline-secondary col-12" type="button" onClick={this.create}>Valider</button>
                    </div>
                </div>
                <Alert className="col-5 alerts" isOpen={this.state.Alert}>image create</Alert>
            </div>
        );
    }
}
export default NewPhoto;
