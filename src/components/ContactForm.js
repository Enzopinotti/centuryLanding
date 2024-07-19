import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ContactForm() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Datos guardados exitosamente');
        navigate('/thank-you');
      } else {
        console.error('Error al guardar los datos');
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  return (
    <section id="contact-form" className="contact-form">
      <h1 className="titleContact">
        ¿Buscás comprar, vender o alquilar?
      </h1>
      <div>
        <div className='propertyDesktop'>
              <h1>
                  Hacemos realidad <br></br> el <span>sueño de tu hogar</span>
              </h1>
              <section className='textArea'>
                  <img src='https://fedesagency.com/century21/flechas.png' alt='icono de flechas' />
                  <h3>con profesionalismo e integ<span>ridad</span></h3>
              </section>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <section>
              <div className='firstFields'>
                  <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Nombre"
                      required
                  />
                  <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Apellido"
                  />
              </div>
              <div className='secondFields'>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                  />
                  <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Número de teléfono"
                  />
              </div>
          </section>
          
          
          <button type="submit" className='botonSubmit'>¡Quiero más información!</button>
        </form>
      </div>
      
    </section>
  );
}

export default ContactForm;