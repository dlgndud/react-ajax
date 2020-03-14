import React, { Component } from 'react';
import axios from 'axios'

import MemberList from './components/MemberList';
import MemberRegist from './components/MemberRegjst';
import MemberView from './components/MemberView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected_member_id:1,
      list:[] // sample code in ./public/list.json
    }
    //this.handlerOnView = this.handlerOnView.bind(this);
  }

  handlerOnSubmit = event => {
    event.preventDefault();
    axios.post('http://jsonplaceholder.typicode.com/users', {name:this.state.name})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  handlerOnChange = event => {
    this.setState({name:event.target.value});
  }

  handlerOnView = (id) => {
    this.setState({selected_member_id:Number(id)});
  }

  handlerOnSetMember = (_list) => {
    this.setState({list:_list})
  }

  MemberViwe() {
    let i = 0;
    let _member = {}
    while(i < this.state.list.length) {
      //debugger
      if(this.state.list[i].id===this.state.selected_member_id) {
        _member = this.state.list[i]; break;
      }
      i++;
    }
    return <MemberView member={_member}></MemberView>
  }

  render() {
  return (
    <div className="App">
      <h1>Member</h1>
      <MemberList onView={this.handlerOnView} onSetMember={this.handlerOnSetMember}></MemberList>
      <MemberRegist onSubmit={this.handlerOnSubmit} onChange={this.handlerOnChange} ></MemberRegist>
      {this.MemberViwe()}
    </div>
  );
  }
}

export default App;
