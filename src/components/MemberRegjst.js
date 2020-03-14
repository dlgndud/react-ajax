import React, { Component } from 'react'

class MemberRegist extends Component {
    render() {
        const style = {
            backgroundColor : 'yellow',
            border: '1px solid black',
          }

        return (
            <article style={style}>
                <h2>Member Regist</h2>
                <form onSubmit={function(event) {
                    this.props.onSubmit(event);
                }.bind(this)}>
                    <label>Person
                        <input type="text" name="name" onChange={this.props.onChange}></input>
                        <input type="submit"></input>
                    </label>
                </form>
            </article>
        )
    }
}

export default MemberRegist;