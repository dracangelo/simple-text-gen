import React, { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: props.value
            };
        }
        render() {
            return (
                <div className="output">
                    <div className="output-text">
                        {this.props.value}
                    </div>
                </div>
            );
        }

    }
    

    export default Text;