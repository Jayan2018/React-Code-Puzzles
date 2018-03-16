import React from 'react';
import {Circle} from 'react-konva';
import Konva from 'konva';

class ColoredCircle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        };
    }

    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };

    render() {
        return (
            <Circle
                x={250}
                y={250}
                radius={this.props.radius}
                fill={this.state.color}
                shadowBlur={5}
                onClick={this.handleClick}
                stroke={'black'}
                strokeWidth={4}
            />
        );
    }
}

export default ColoredCircle;