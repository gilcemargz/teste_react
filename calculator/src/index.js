import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'

class Calculadora extends Component{

    constructor(props){
      super(props)
      this.state = {
        resultado: 0
      }
    }

    calcula(props){
      let resultado = Number(props.valores[0])
      console.log(props.valores[0])
      console.log(props.valores[1])

      for (let index = 0; index < props.oper.length; index++) {
        const element = props.oper[index];
        
        switch (element) {
          case '+':
            resultado += Number(props.valores[index + 1])
            break;
  
          case '-':
            resultado -= Number(props.valores[index + 1])
            break;
          
          case '/':
            resultado /= Number(props.valores[index + 1])
            break;
          
          case '*':
            resultado *= Number(props.valores[index + 1])
            break;
            
          default:
            alert('Operação não encontrada')
            break;
        } 

      }
      return resultado
    }

    acao(props){
      let atual = this.state.resultado
      let novo
      let valores = []
      let operacoes = []
      let resultadoTemporario = 0

      if(props.valor === 'Zerar'){
        novo = 0
        this.setState({resultado: novo})
        return
      }

      if(props.valor === '='){
        let numero
      
        for (let index = 0; index < atual.length; index++) {
          const element = atual[index];
          let proxCaractere

          if(index < atual.length-1){
            proxCaractere = atual[index+1];
          }

          
          if (!isNaN(element) || element === '.') {
            console.log('É numero ou ponto' + element )
            numero = element
            resultadoTemporario = String(resultadoTemporario) + String(numero)

            if(isNaN(proxCaractere)){
              if(proxCaractere !== '.'){
                console.log('Guardou' + resultadoTemporario )
                valores.push(resultadoTemporario)
                resultadoTemporario = 0
              }
            } 
          } else {
            console.log('Não É' + element )
            operacoes.push(element)
          }
        }

        novo = this.calcula({
                              valores: valores, 
                              oper: operacoes
                            })

      } else {
        if(atual===0){
          novo = String(props.valor)
        }else {
          novo = String(atual) + String(props.valor)
        }
      }
      
      this.setState({resultado: novo})
      
    }

    botao(props){
      return(
        <button onClick={(e) => this.acao({valor: props.conteudo})}>{props.conteudo}</button>
      )
    }

    render(){
      return(<div>
                <div>
                  <h1>{this.state.resultado}</h1>
                </div>  
                <div>
                  {this.botao({conteudo: 7})}
                  {this.botao({conteudo: 8})}
                  {this.botao({conteudo: 9})}
                  {this.botao({conteudo: '/'})}      
                </div>
                <div>
                  {this.botao({conteudo: 4})}
                  {this.botao({conteudo: 5})}
                  {this.botao({conteudo: 6})}
                  {this.botao({conteudo: '*'})}      
                </div>
                <div>
                  {this.botao({conteudo: 1})}
                  {this.botao({conteudo: 2})}
                  {this.botao({conteudo: 3})}
                  {this.botao({conteudo: '-'})}      
                </div>
                <div>
                  {this.botao({conteudo: '.'})}
                  {this.botao({conteudo: 0})}
                  {this.botao({conteudo: '='})}
                  {this.botao({conteudo: '+'})}      
                  {this.botao({conteudo: 'Zerar'})}      
                </div>
              </div>
    ) 
    }
}




ReactDOM.render(
  <div className='calculadora'>
    <Calculadora />
  </div>,
  document.getElementById('root')
);
