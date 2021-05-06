import React, { Component } from 'react';

// 20704457-b02886aee8bbd15c3245ed4eb

class Searchbar extends Component{

    state = {
        query: '',
  
    }
    handleChange = e => {
        this.setState({ query: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
        this.setState({ query:''})
    }

  
    render() {
      return (
          <div>
              <header className="Searchbar">
                  <form className="SearchForm" onSubmit={this.handleSubmit}>
                      <button type="submit" className="SearchForm-button">
                          <span className="SearchForm-button-label">Search</span>
                      </button>

                      <input
                          className="SearchForm-input"
                          type="text"
                          autoComplete="off"
                          autoFocus
                          placeholder="Search images and photos"
                          value={this.state.query}
                          onChange={this.handleChange}
                      />
                  </form>
              </header>
           
            
          </div>
      )
    }
}
export default Searchbar;