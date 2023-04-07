import axios from 'axios';
import React, { Component } from 'react';
import profilImg from '../profil.jpg';

class Profile extends Component {

    state = {
        data: {}
    }

    componentDidMount() { 
        const data = this.props.match.params.profilId;

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((resp) => {
            // console.log(resp.data[data])
            this.setState({
                data: resp.data[data]
            })
        })
        .catch(() => {
            console.log("Nous avons une erreur")
        })
    }

    render() {

        const { email, name, phone } = this.state.data;

        return (
            <div className='container mt-3'>
                <h1>Profile</h1>
                <img src={profilImg} alt='profile' width="200" />

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Nom:</strong> {name}</li>
                    <li className='list-group-item'><strong>Email:</strong> {email}</li>
                    <li className='list-group-item'><strong>Tél:</strong> {phone}</li>
                </ul>
            </div>
        )
    }
}

export default Profile;