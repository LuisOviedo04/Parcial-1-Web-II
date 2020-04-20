import React from 'react';
import "./index.css"
import "./reset.css"
import ima from './Imagenes/ima.jpg';
import fuego from './Imagenes/fuego.png';
import miguel from './Imagenes/miguel.png';

class App extends React.Component{
  handleChange = e =>{
    console.log({
      name:e.target.name,
      value:e.target.value,
    });
  };

  handleClick = e =>{
    console.log("Button was clicked");
  };

  handleSubmit = e =>{
    e.preventDefault();
    console.log("Form was submitted");
  };

  render(){
    return (
      <body>
        <div className="cuerpo">
          <div className="imag_principal">
            <div>
              <img
                src={ima}
                height="360px"
                width="720px"
                alt="imagen principal"
              />
            </div>
          </div>
          <div className="cuadro">
            <div className="cuadro_2">
              <div className="c_text1">
                <p className="text1">
                  ¡YA LLEGA EL 2° ANIVERSARIO! <br />
                ¡CON UNA NUEVA VERSIÓN!
              </p>
              </div>

              <div className="c_texto2">
                <div className="c_texto2_1">
                  <p className="text2">
                    ¡NUEVO MODO 4 VS 4, NUEVO PERSONAJE!<br />
                  ¡PUEDES SER UNO DE LOS PRIMETOS EN PROBAR ESTA ACTUALIZACIÓN,<br />
                  TAN SÓLO ENVÍANOS TU INFO!
                </p>
                </div>

                <div className="c_texto2_2">
                  <p className="text3">
                    <form>
                      <div className="form-group">
                        <label>ID de jugador </label>
                        <input onClick={this.handleClick} 
                        className="form-control" type="text" name="ID de jugador"/>
                      </div>

                      <div className="form-group2">
                        <label>Correo en el juego </label>
                        <input onClick={this.handleClick} 
                        className="form-control" type="text" name="Correo del juego"/>
                      </div>
                      <button onClick={this.handleClick} className="btn btn-primary">
                        Enviar
                      </button>                      
                    </form>
                  </p>
                </div>

                <div className="fuego">
                  <div>
                    <img src={fuego} height="80px" width="540px" alt="fuego" />
                  </div>
                </div>
              </div>
            </div>

            <div className="miguel">
              <div>
                <img src={miguel} height="360px" width="190px" alt="Personaje" />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
