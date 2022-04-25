import {useEffect, useState } from 'react';

export default function Root(props) {
  
  const sectionStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightBlue'
  }

  const userStyle = {
    marginTop: '10px'
  }

  return (

  <section style={sectionStyle}>
    <h1>ABOUT SECTION</h1>
    <p>Made in react</p>
    <p style={userStyle}><b>User:</b> {props.myProp.name + ' ' + props.myProp.lastname}</p>
    
  </section>
  
  );



  
}
