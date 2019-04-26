import React, { Component } from 'react'
import '../style/EditPhoto.css'


class EditPhoto extends Component {

    constructor(props){
        super(props);

        this.state = {data : [], titre : '', image : ''}
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response =  await fetch('https://jsonplaceholder.typicode.com/photos/'+ id);
        const json = await response.json();
        console.log(json);
        this.setState({data : json})
    }
     ChangeTitle = (e) =>{
        const title = e.target.value;
        this.setState({titre : title})
     };

    ChangeImage = (e) =>{
        const img = e.target.value;
        this.setState({image : img})
    };

    Send = async () => {
        const id = this.state.data.id;
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/'+ id, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: this.state.titre,
                body: this.state.image,
                userId: this.state.data.userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const json = response.json();
        console.log(json);
    };
    render() {
        return (
            <div>
              <h1 className="titrePhoto">Photo N°{this.state.data.id}</h1>
                <div className="BlocEditPhoto">
                    <h4 className="titrePhoto">{this.state.data.title}</h4>
                    <div className="input-group container mb-3 col-6">
                    <input type="text" className="form-control" placeholder="Edit title"
                           aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.ChangeTitle} />
                        <input type="text" className="form-control" placeholder="Edit image"
                               aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.ChangeImage} />
                        <div className="input-group-append butt">
                            <button className="btn btn-outline-secondary col-12" type="button" onClick={this.Send}>Valider</button>
                        </div>
                    </div>
                    <img src={this.state.data.url} className="images"/>
                </div>
            </div>
        );
    }
}
export default EditPhoto;
