import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Error from "../components/Error";
import './App.css'


class App extends Component {
    constructor() {
        super();
        //This state is what defines our app
        //They usually le=ive in the parent component
        //Components that have state are called smart components
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }


    //Life cycle methods react

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        //This gives us the value of the search change
        console.log(event.target.value);

    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1"> Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Error>
                            <CardList robots={ filteredRobots } />
                        </Error>
                    </Scroll>
                </div>
            );
        }
    }
}




export default App;