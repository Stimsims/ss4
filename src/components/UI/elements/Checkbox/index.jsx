import React from 'react';

class Checkbox extends React.Component{
    constructor(props){
        super(props);
        //console.log('checkbox constructor props', props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
       // console.log('checkbox handle change ' + e.target.value + " type of " + (typeof e.target.value), e);
        this.props.onInput(this.props.id, e.target.value);
    }
    renderOptions(){
        return this.props.options.map((o, i) => {
            // console.log(`mapping radio selected == ${this.props.selected} nan? ${typeof this.props.selected} 
            //     i == ${i} nan? ${typeof i} checked? ${this.props.selected == i}`)
            return (
                <div className="radio">
                    <label>
                        <input type={this.props.multiple?'checkbox':'radio'} value={i} checked={this.props.selected == i} 
                        onChange={this.handleChange}/>
                        {o}
                    </label>
                </div>
            )
        })
    }
    render(){
        return <div>
            <form>
                {this.renderOptions()}
            </form>
        </div>
    }
}
Checkbox.displayName = 'Checkbox';
export default Checkbox;

/*
                       <Checkbox id={s.key} options={s.options} onInput={this.handleInput} 
                            selected={this.state.inputs[s.key]} multiple={false} />
*/