import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
        <Table heights={[null, null, '50%','50%']}>
          <p>RealA </p>
          <p>RealB </p>
          <p>RealC</p>
          <p>RealD</p>
        </Table>
*/

export default class Table extends React.Component{
    renderRows(){
        return React.Children.map(this.props.children, (child, i) => {
            let height = this.props.heights[i];
            console.log("table wrapping child of height " + height, child);
            if(this.props.heights[i]){
                return <Row style={{height: this.props.heights[i]}}>{React.cloneElement(child)}</Row>
            }else{
                return <Row>{React.cloneElement(child)}</Row>
            }
        })
    }
    render(){
        return(
            <Tab>
                {/* {React.Children.map(this.props.children, child => {
                    console.log("child", child);
                    console.log("p ", <p>clone me</p>);
                    return <Row>
                        {React.cloneElement(<p>clone me</p>, {
                            onClick: () => {console.log("clone click")} })}
                        </Row>   
                })} */}
                {this.renderRows()}
            </Tab>
        )
    }
}
Table.displayName = 'TableComponent';

Table.PropTypes = {
    heights: PropTypes.array
}


const Tab = styled.div`
    display: table;
    width: 100%;
    height: 100%;
`
const Row = styled.div`
    display: table-row;
`