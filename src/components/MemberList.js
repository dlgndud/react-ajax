import React, { Component } from 'react'
import axios from 'axios'

class MemberList extends Component {

    // local rendering
    state = {
      list:[]
    }
  
    componentDidMount() {
      axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(response => {
        this.setState({list:response.data});
        this.props.onSetMember(response.data)
      })
    }

    handlerMemberDelete = id => {
        if(window.confirm("Really?")) {
            axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    }
  
    render() {
      return(
        <nav>
          <ul>
           {
             this.state.list.map(m=> {
              return <li key={m.id}><a href="/" data-id={m.id} data-name={m.name} onClick={
                (event) => {
                  event.preventDefault();
                  //alert(event.target.dataset.id +','+ event.target.dataset.name);
                  this.props.onView(event.target.dataset.id);
                }
              }>{m.name} | {m.email}</a> <a href="/delete" data-id={m.id} onClick={
                  event => {
                      event.preventDefault();
                      this.handlerMemberDelete(event.target.dataset.id);
                  }
              }>[x]</a></li>
             })
           }
          </ul>
        </nav>
      )
    }
  }

export default MemberList