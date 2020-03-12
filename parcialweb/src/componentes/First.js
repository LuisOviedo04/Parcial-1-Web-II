import React from 'react';
import "./Styles/estilos.css"
import "./Styles/reset.css"
import ima from '../Imagenes/ima.jpg';
import fuego from '../Imagenes/fuego.png';
import miguel from '../Imagenes/miguel.png';



class First extends React.Component{
    render(){
        return (
            <body>
                <div className="cuerpo">
                    <div className="imag_principal">
                        <div>
                            <img src={ima} height="360px"  width="720px" alt="imagen principal"/>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="cuadro_2">
                            <div className="c_text1">
                                <p className="text1">¡YA LLEGA EL 2° ANIVERSARIO! <br/>
                                ¡CON UNA NUEVA VERSIÓN!  
                                </p>
                            </div>
                        
                        <div className="c_texto2">
                            <div className="c_texto2_1">
                                <p className="text2">¡NUEVO MODO 4 VS 4, NUEVO PERSONAJE, NUEVA <br/>
                                    MASCOTA, NUEVA TEM PODEROSA Y MUCHAS MÁS SORPRESAS!  
                                </p>
                            </div>
            
                           <div className="c_texto2_2">
                                <p className="text3">
                                      ¡PARA CELEBRAR EN 2° ANIVERSARIO DE FREE FIRE, NOS <br/>
                                         NOS GUSTARÍA COMPARTIRTE NUESTROS 4 TEMAS PRINCIPALES <br/>
                                       DENTRO DE LA ACTUALIZACIÓN DEL PARCHE DE ESTA SEMANA!
                                </p>
                            </div>
                        
                        <div className="fuego">
                            <div>
                                <img src={fuego} height="80px" width="540px" alt="fuego"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="miguel">
                    <div>
                        <img src={miguel} height="360px" width="190px" alt="Personaje"/>
                    </div>
                </div>
            </div>
            </div>                
            </body>
        );
    }
}

export default First;