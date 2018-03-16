import React, {Component} from 'react';
import './puzzleInput.css'
import {Stage, Layer, Text} from 'react-konva';
import ColoredRect from '../Shapes/ShapeRect';
import ColoredCircle from '../Shapes/ShapeCircle';
import ColoredTriangle from '../Shapes/ShapeTriangle';
import {PostData} from '../Services/PostJson';

class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            shape: 'null',
            width: 0,
            height: 0,
            radius: 0,
            side: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.createShape = this.createShape.bind(this);
    }

    handleChange(myVal) {
        this.setState({value: myVal.target.value});
    }

    displayShape() {
        let forms = [];
        forms.push(
            <div key={forms.length}>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {this.renderShape()}
                    </Layer>
                </Stage>
            </div>
        );
        return forms || null;
    }

    renderShape() {
        console.log(this.state.shape);
        console.log(this.state.width,'this.state.width');

        if (this.state.shape === 'rectangle' || this.state.shape === "square") {
            return < ColoredRect
                width={this.state.width}
                height={this.state.height}/>
        } else if (this.state.shape === "circle") {
            return <ColoredCircle
                radius={this.state.radius}/>
        } else if (this.state.shape === 'octagon' || this.state.shape === 'isosceles') {
            return <ColoredTriangle
                radius={this.state.radius}
                side={this.state.side}/>
        } else if (this.state.shape === 'null') {
            return <Text/>
        } else {
            return <Text
                text="* Please check the spelling"
                fontSize={30}
                fill={'red'}/>
        }
    }

    createShape(value) {
        if (value) {
            PostData(value.trim()).then((result) => {
                let responseJSON = result;
                console.log(responseJSON);
                if (responseJSON) {
                    this.handleShape(responseJSON)
                } else {
                    console.log("Error!!")
                }
            });
        } else {
            this.setState({shape: 'null'});
        }
    }

    handleShape(responseJSON) {
        let valueArray = [];
        if (responseJSON.shape === 'rectangle') {
            this.setState({width: valueArray[7], height: valueArray[12]});
        } else if (responseJSON.shape === 'square') {
            this.setState({shape: responseJSON.shape, width: responseJSON.width, height: responseJSON.height});
        } else if (responseJSON.shape === 'circle') {
            this.setState({radius: responseJSON.radius, shape: responseJSON.shape});
        } else if (responseJSON.shape === 'octagon') {
            this.setState({radius: valueArray[8], side: 8});
        } else if (responseJSON.shape === 'isosceles') {
            this.setState({radius: valueArray[8], side: 3});
        }
    }

    render() {
        return (
            <div>
                <p className="App-intro"><h3>Create your own shapes with your language</h3></p>
                <input type="text" value={this.state.value} onChange={this.handleChange}
                       placeholder={"Draw a circle with a radius of 100"}/>
                <button className="btn btn_add" onClick={() => this.createShape(this.state.value)}>Create Shape</button>
                {this.displayShape()}
            </div>
        )
    }
}

export default Body;
