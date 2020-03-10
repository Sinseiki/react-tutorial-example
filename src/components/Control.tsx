import React, { Component } from 'react';
class Control extends Component<{onChangeMode:Function}> {
    render(){
      console.log('Subject render');
      return (
        <ul>
          <li><a href="/create" onClick={function(this:any,e:any){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(this:any,e:any){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input  onClick={function(this:any,e:any){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

export default Control; 