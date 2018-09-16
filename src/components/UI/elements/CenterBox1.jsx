import React from 'react';
import styled from 'styled-components';

class CenterBox extends React.PureComponent{

    render(){
        return <Box>
                <Center>
                    <Child>
                    {this.props.children}
                    </Child>
                </Center>
            </Box>
    }
}
CenterBox.displayName = 'CenterBox';
export default CenterBox;

const Box = styled.div`
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
`

const Center = styled.div`
    display: table-cell;
    vertical-align: middle;
`

const Child = styled.div`
    margin-left: auto;
    margin-right: auto;
`