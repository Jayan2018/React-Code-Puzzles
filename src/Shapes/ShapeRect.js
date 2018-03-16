import React from 'react';
import {Rect} from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {

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
            <Rect
                x={50}
                y={50}
                width={this.props.width}
                height={this.props.height}
                fill={this.state.color}
                shadowBlur={5}
                onClick={this.handleClick}
            />
        );
    }
}

export default ColoredRect;