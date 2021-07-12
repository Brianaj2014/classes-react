import React, { Component } from 'react';
import ChirpCard from "./components/ChirpCard";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [],
            newUser: "",
            newMessage: ""
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                chirps: [
                    {username: "Shrek", message: "Chirp1!"},
                    { username: "Shrek", message: "Chirp2!" },
                    { username: "Shrek", message: "Chirp3!" },
                ]
            })
        }, 500)
    }

    handleNewUserChange = e => this.setState({ newUser: e.target.value })
    handleNewMessageChange = e => this.setState({ newMessage: e.target.value });
    handleCreateNewChirp = () => {
        const newChirp = {
            username: this.state.newUser,
            message: this.state.newMessage
        };
        const newestFirstArr = [...this.state.chirps, newChirp]

        this.setState({ chirps: newestFirstArr });
    }

    render() {
        return (
            <div className="container">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Where is my Wife?</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        onChange={this.handleNewUserChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">How you get here?</label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={this.handleNewMessageChange}></textarea>
                </div>
                <button
                    className="btn btn-dark mb-3"
                    type="submit"
                    onClick={this.handleCreateNewChirp}
                >Chirp</button>

                {this.state.chirps.reverse().map(chirp => <ChirpCard chirp={chirp} />)}
            </div>
        );
    }
}

export default App;
