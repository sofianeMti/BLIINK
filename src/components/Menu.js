import React, { Component } from 'react';
import { Alert } from 'reactstrap'
import '../style/Menu.css'


class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {

            data : [],
            visible : false
        }
    }

    getData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await response.json();
        console.log(res);

        this.setState({data : res})
    };

    componentDidMount(){

        this.getData();
    }

    delete = async (e, id) => {
        console.log(id);
       const del =  await fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
            method: 'DELETE'
        });
        console.log(del);

        ///////////////////////ALERTE

        this.setState({
            visible : true
        });

        setTimeout(
            function() {
                this.setState({visible: false});
            }
                .bind(this),
            3000
        );

        ///////////////////////remettre a jour le component

        this.componentDidMount();
    };

    edit = async (e, id) => {
        console.log(id);
         this.props.history.push('/article/'+id);
    };

    render() {
        return (
            <div className="form-inline col-12 bloc">
                <div className="bg-warning">
                    <Alert className="col-2 alert" isOpen={this.state.visible}>posts delete</Alert>
                </div>
                {
                    this.state.data.map((array, i) => {
                        return (
                            <div className="div5 col-3">
                                <h4 className="title" key={i+'title'}>{array.title}</h4>
                                <p  className="text" key={i+'body'}>{array.body}</p>
                                <div className="BlocButton">
                                    <button type="button" className="btn btn-danger button1" onClick={(e)=> {this.delete(e, array.id)}}><span className="delete">Delete</span></button>
                                    <button type="button" className="btn btn-warning button2" onClick={(e)=> {this.edit(e, array.id)}}><span className="delete">Edit</span></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default Menu;
