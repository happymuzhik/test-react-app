import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      keywords: ''
    }
  }

  inputChange(e) {
    this.setState({
      keywords: e.target.value
    })
  }

  render() {
    return (
      <header>
        <div>Logo</div>
        <input onChange={::this.inputChange} />
      </header>
    )
  }
}

export default Header; 