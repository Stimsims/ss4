import React from 'react';
import { Tree, treeUtil } from 'react-d3-tree';

//const csvSource = 'https://raw.githubusercontent.com/bkrem/react-d3-tree/master/docs/examples/data/csv-example.csv';
/*
    "nodeSvgShape": {
        "shape": "circle",
        "shapeProps": {
            "fill": "red",
            "r": "30"
        }
    },
*/
const myTreeData = [
    {
      name: 'Parent Node',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      nodeSvgShape: {
          key: 'aKey',
        shape: 'line',
        shapeProps: {
            x1: "0", x2: "50", y1: "0", y2: "50",stroke: "blue" 
        },
      },
      children: [
        {
          name: 'Inner Node',
          attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
          },
          nodeSvgShape: {
            shape: 'line',
            shapeProps: {
                x1: "0", x2: "50", y1: "0", y2: "50",stroke: "red" 
            },
          },
        },
        {
          name: 'Level 2: B',
        },
      ],
    },
  ];
  const svgCircle = {
    shape: 'circle',
    shapeProps: {
      width: 20,
      height: 20,
      x: -10,
      y: -10,
    }
  }

export default class Sankey extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: undefined,
        };
    }

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        //          translate: { x: dimensions.width / 2, y: dimensions.height / 2}
        this.setState({
          translate: {
            x: 30,
            y: dimensions.height / 2
          }
        });
    }
    render(){
        /* pathFunc={'elbow'}  orientation={'vertical'} dWrapper` */
        return (
            <div id="treeWrapper" ref={tc => (this.treeContainer = tc)} 
            style={{width: '100%', height: '300px', backgroundColor: 'pink'}}>

                <Tree
                    translate={this.state.translate}
                    collapsible={false} data={this.props.tree}
                   />

            </div>
        )
    }
}