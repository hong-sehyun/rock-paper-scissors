import React, { Component } from 'react';

export default class BoxClass extends Component {
    render() {

        const borderColor = this.props.result === 'win' ? 'green' : this.props.result === 'lose' ? 'red' : 'black';

        const boxStyle = {
            border: `10px solid ${borderColor}`,
            width: '500px',
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px',
        };

        return (
            <div style={boxStyle}>
                <h1>{this.props.title}</h1>
                <img className='item-img' src={this.props.item && this.props.item.img} alt="" />
                <h2>{this.props.result}</h2>
            </div>
        );
    }
}

