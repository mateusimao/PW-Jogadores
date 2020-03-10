import React from 'react'

class PlayerDetail extends React.Component {

    render(props){
        return(
            <div>
                <h1>{this.props.VETJogadores.nome}</h1>
                <h2>{this.props.VETJogadores.pais}</h2>
                <h3>{this.props.VETJogadores.time}</h3>
            </div>
        )
    }
}

export default PlayerDetail