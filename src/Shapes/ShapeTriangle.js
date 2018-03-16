import React from 'react';
import {RegularPolygon} from 'react-konva';
import Konva from 'konva';

class ColoredTriangle extends React.Component {

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
            <RegularPolygon
                x={250}
                y={250}
                sides={this.props.side}
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

export default ColoredTriangle;