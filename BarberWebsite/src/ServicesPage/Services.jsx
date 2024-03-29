import React from 'react';
import './Services.css'; // Import CSS file for component-specific styles

function ServicePage() {
  const services = [
    {
      name: 'Men Skin Fade',
      price: '$25',
      description: 'A trendy haircut with a smooth skin fade for men.',
    },
    {
      name: 'Men Normal Haircut',
      price: '$20',
      description: 'A classic haircut for men, maintaining the natural hair length.',
    },
    {
      name: 'Women Haircut',
      price: '$30',
      description: 'A stylish haircut tailored to suit women’s preferences.',
    },
    {
      name: 'Hair Art',
      price: '$40+',
      description: 'Express your creativity with unique hair designs and patterns.',
    },
  ];

  return (
    <div className='page'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="service-page">
   
 
      <h1>Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <strong>{service.price}</strong> {/* Place the price element at the end */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ServicePage;
