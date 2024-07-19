import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/testing');
  };

  return (
    <div className="thank-you">
      <img className='check' src='https://fedesagency.com/century21/check.png' alt='imagen de check'/>
      <h1 className='titleThankYou'>¡Muchas gracias!</h1>
      <h2 className='subTitleThanYou'>Tu solicitud ha sido recibida con éxito.</h2>
      <p className='parrafoThankYou'>Muy pronto uno de nuestros asesores se pondrá en contacto para brindarte toda la información que necesitás.</p>
      <div className='contenedorBoton'>
        <button onClick={handleGoHome}>
          ¡Volver al inicio!
        </button>
        
      </div>
    </div>
  );
}

export default ThankYou;