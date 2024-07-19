import React from 'react'

const PropertyInfo = () => {
  return (
    <div className='contenedorProperty'>
        <div>
            <h1>
                Hacemos realidad <br></br> el <span>sueño de tu hogar</span>
            </h1>
            <section className='textArea'>
                <img src='https://fedesagency.com/century21/flechas.png' alt='icono de flechas' />
                <h3>con profesionalismo e integ<span>ridad</span></h3>
            </section>
        </div>
        
        <section className='property'>
            <article>
                <div className='propertyText'>
                    <p>Propiedades desde</p>
                    <h3>u$d 79.500</h3>
                </div>
                <section className='propertyAux'>
                    <p><span>Acompa</span>ñanos a recorrerlas</p>
                    <img src='https://fedesagency.com/century21/flechas.png' alt='icono de flechas' />
                </section>
            </article>
            <article className='videoContainer'>
            <video controls src="https://fedesagency.com/century21/video12deJulio.mp4" width="100%" ></video>
            </article>
            
        </section>
        <div className='contenedorBoton'>
            <button onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}>
                    ¡Quiero más información!
            </button>
        </div>
        <h3 className='direccion'>Av. Monroe 401 | Villa Urquiza | Celular (000)0000</h3>
    </div>
  )
}

export default PropertyInfo