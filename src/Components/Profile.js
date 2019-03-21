import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Hola {this.props.match.params.username}</h2>
      </div>
    );
  }
}

// {...this.props} propaga las props que recibe el padre al hijo directo, el problema es que a veces el hijo directo en si no va a necesitar esas props.
// WithRouter es un compomente que va a tener las props de mi router y lo paso al hijo al que quiero que las tenga
// solamente los hijos directos tienen acceso a las props de la ruta, por eso necesito el WithRouter ya que me da la capacidad de pasar las props a hijos no directos sin tener que "pasar" por un hijo directo


export default withRouter(Profile);