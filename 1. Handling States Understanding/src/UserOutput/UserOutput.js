import React, {Component} from 'react';

// Class Based Component

class UserOutput extends Component {
    render() {
        return(
            <div style = {this.props.style}>
                <p>Paragraph from UserOutput</p>
                <p>I'm {this.props.name}</p>
            </div>
        )
    }
}

export default UserOutput;