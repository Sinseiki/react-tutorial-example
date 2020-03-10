import React, { Component } from 'react';
class Subject extends Component<{title:string,sub:string}>{
    render(){
      console.log('Subject render');
      return (
        <header>
            <h1><a href="/">{this.props.title}</a></h1>
            {this.props.sub}
        </header>  
      );
    }
  }

export default Subject;