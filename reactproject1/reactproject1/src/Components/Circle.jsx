import React, { Component } from 'react';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            borderThickness: '2px',
            borderColor: 'black',
        };
    }

    handleClick = () => {
        const newColor = this.state.color === 'white' ? 'green' : 'white';
        this.setState({ color: newColor });
    };

    render() {
        const { color, borderThickness, borderColor } = this.state;
        const { radius, children } = this.props;

        const circleStyle = {
            
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: '50%',
            backgroundColor: color,
            border: `${borderThickness} solid ${borderColor}`,
            position: 'relative',
        };

        const textStyle = {
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'black',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <div style={circleStyle} onClick={this.handleClick}>
                <span style={textStyle}>{children}</span>
            </div>
        );
    }
}

export default Circle;
