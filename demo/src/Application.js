import React, {Component} from 'react';

class Applicaion extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidUpdate(props, state){
        console.log('Update from ', state, 'to', this.state)
    }

    render(){
        let {count} = this.state
        
        let name = 'Gilcemar'
        return(
            <div>
                <h1><strong>Hello {name}</strong></h1>
                <p>Cliques {count} </p>
                <span>
                    <button onClick={(e) => this.handleClick()}>Click me</button>
                </span>
                <ol>
                    <li>First</li>
                </ol>
            </div>
        ) 
    }

}

export default Applicaion;