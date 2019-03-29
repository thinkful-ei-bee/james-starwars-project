import React from 'react';
import './Search.css'

export default class Search extends React.Component {
    state = {
        input: null,
        results: []
    };

    handleSubmit = e => {
        e.preventDefault();
    
        fetch(`https://swapi.co/api/people?search=${this.state.input}`)
        .then(res => {
            if (!res.ok) {
                throw Error;
            }
            return res.json();
        })
        .then(data => {
            this.setState({
                results: data.results
            });
        });
    }

    handleSearch = searchInput => {
        this.setState({
            input: searchInput
        });
    }


    render() {
        return (
            <div className="search-main">
            <form className="search-form" 
            onSubmit={e => this.handleSubmit(e)}>
                <input
                    className="search-input" type="text"
                    placeholder="JarJar Binks"
                    required
                    onChange={e => this.handleSearch(e.target.value)}
                   />
                   <button type="submit" className="search-button">
                    Use the Force
                   </button>
                   </form>

            <ul>
                {this.state.results.map((result, index) => {
                    return (
                        <li key={index}>
                        <p>{result.name}</p>
                        </li>
                    );   
                })} 
            </ul>       
            
            </div>
        );
            }
}