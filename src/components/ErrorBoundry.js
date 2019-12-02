import React, { Component } from 'react'


class  ErrorBoundry extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(){
    this.setState({hasError: true})
  }
  render(){
    const [hasError] = this.state;
    if(hasError){
      return <h1>Ooops. Error!!!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;
