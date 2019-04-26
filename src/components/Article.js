import React, { Component } from 'react';
import '../style/Article.css'
import {Alert} from "reactstrap";

class Article extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : [],
            title : '',
            text : '',
            Alert : false
        }
    }

    async componentDidMount() {

        const {id} = this.props.match.params;
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
        const json = await response.json();
        this.setState({data : json})
    }

    title = (event) =>{
        const titles = event.target.value;
        this.setState({
            title: titles
        });
    };

    text = (event) =>{
        const texts = event.target.value;
        this.setState({
            text: texts
        });
    };

     send = async () =>{
         const id = this.state.data.id;
         const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: this.state.title,
                body: this.state.text,
                userId: this.state.data.userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
         const json = response.json();
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
        //console.log(this.state.data);
        return (
            <div className="blocArticle">
                <h1 className="titreArticle">Article {this.state.data.id}</h1>
                <div className="edit">
                <h3 className="container col-6 txt1">{this.state.data.title}</h3>
                    <div className="input-group container mb-3 col-6">
                        <input type="text" className="form-control" placeholder="Edit title"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.title} />
                    </div>
                <p className="container col-6 txt">{this.state.data.body}</p>
                    <div className="input-group container mb-3 col-6">
                        <input type="text" className="form-control" placeholder="Edit text"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.text}/>
                    </div>
                    <div className="input-group-append but">
                        <button className="btn btn-outline-secondary col-12" type="button" onClick={this.send}>Valider</button>
                    </div>
                </div>
                    <Alert className="col-5 alerts" isOpen={this.state.Alert}>posts edit</Alert>
            </div>
        );
    }
}
export default Article;
