import React, {Component} from 'react';
import HighScore from './HighScore'
import './css/style.css'

class Applicaion extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
        
    }

    componentDidUpdate(props, state){
        console.log('Update from ', state, 'to', this.state)
        if (this.state.count > 10 && this.state.overTen == false ) {
            console.log('entrou')
            this.setState({overTen: true})
        }
    }

    limparContador = (e) => {
        this.setState({
            count: 0,
            overTen: false
        })
    }

    render(){
        let {count} = this.state
        
        let name = 'Gilcemar'
        return(
            <div>
                <h1><strong>Hello {name}</strong></h1>
                <p>Cliques {count} </p>
                <HighScore 
                    overTen={this.state.overTen} 
                    onLimpar={this.limparContador}
                />

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