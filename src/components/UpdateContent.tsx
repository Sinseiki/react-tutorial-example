import React, { Component } from 'react';

class UpdateContent extends Component<{data:any, onSubmit:Function},{title:string,desc:string}>{
    constructor(props:any){
        super(props);
        this.state = {
          title:this.props.data.title,
          desc:this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
      }
      inputFormHandler(e: { target: { name: any; value: any; }; }) {
        this.setState({ [e.target.name]: e.target.value } as Pick<{title:string,desc:string}, keyof {title:string,desc:string}>);
      }
    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      return (
        <article>
            <h2>Update</h2>
            <form action="/create_process" method="post"
              onSubmit={function(this:any,e:any){
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
              }.bind(this)}
            >
              <p>
              <input 
                  type="text" 
                  name="title" 
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.inputFormHandler}
                ></input>
                </p>
              <p>
                <textarea 
                  onChange={this.inputFormHandler} 
                  name="desc" 
                  placeholder="description" 
                  value={this.state.desc}></textarea>
              </p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
        </article>
      );
    }
  }

export default UpdateContent;