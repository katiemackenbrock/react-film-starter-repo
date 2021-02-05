import React, { Component } from 'react';

class Fave extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFav: false
        }
    }

    handleClick = (e) => {
        console.log('handling click');
        e.stopPropagation()
        this.setState({isFav: !this.state.isFav})
    }

    render() {
        let variable = "add_to_queue"
        if (this.state.isFav) {
            variable = "remove_from_queue"
        }
        return (
            <div className={`film-row-fave ${variable}`} onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}


export default Fave;