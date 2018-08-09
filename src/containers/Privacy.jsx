import React from 'react';
import Text from './../components/UI/elements/Text.jsx';
import TextBox from './../components/UI/elements/TextBox.jsx';

class Privacy extends React.Component{
    render(){
        return (
            <div className="hello">
                    <TextBox id={'privacy'}>
                        <Text tag={'p'} text={'Privacy'} display={'block'} colorKey={'textInverted'} />
                        <Text tag={'p'} text={'A statement about Privacy'} align={'left'} display={'block'} colorKey={'textInverted'} />
                    </TextBox>
            </div>
        )
    }
}

Privacy.displayName='Privacy';
export default Privacy;
