import React from 'react'

class MemberView extends React.Component {
    render() {
        const style = {
            backgroundColor : 'skyblue',
            border: '1px solid black',
          }

        return(
            <article style={style}>
                <h2>Member View</h2>
                <ul>
                    <li>{this.props.member.name}</li>
                    <li>{this.props.member.email}</li>
                    <li>{this.props.member.phone}</li>
                    <li>{this.props.member.website}</li>
                </ul>
            </article>
        )
    }
}

export default MemberView;