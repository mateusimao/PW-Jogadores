// Importar bibliotecas React e ReactDOM
import React from 'react';

import ReactDOM from 'react-dom';

import PlayerDetail from './PlayerDetail';
import 'bootstrap/dist/css/bootstrap.css'

// Criar componente React
class App extends  React.Component {  
      
      VETjogadores = [
            {
                nome : 'Mateus',
                pais : 'Brasil',
                time : 'Unievangelica'
                },
            {
                nome : 'Gabigol',
                pais : 'Brasil',
                time : 'Flamengo'
                },
            {
                nome : 'Corona',
                pais : 'China',
                time : 'Virus'
                },
            {
                nome : 'Clara',
                pais : 'Brasil',
                time : 'Unievangelica'
                },
            {
                nome : 'Gabriel',
                pais : 'Brasil',
                time : 'Unievangelica'
                }
      ]


      constructor(props){

            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.VETjogadores.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <PlayerDetail nome="Mateus" VETJogadores={this.VETjogadores[this.state.indice]}>
                        </PlayerDetail>
                        <br/>

                        <button type="button" className ="btn-outline-info" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn-outline-info"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
