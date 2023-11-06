import React from 'react';
// import { Link } from 'react-router-dom'; // Agrega esta línea
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const responseGoogle = (response) => {
    // Aquí puedes manejar la respuesta de Google después de iniciar sesión
    console.log(response);
  };

  return (
    
    <div>
      
      <h2>Iniciar sesión con Google</h2>


      <GoogleLogin
        clientId="51789054220-em7uhdls9qi3lsjecphmhc984cb0l72b.apps.googleusercontent.com"
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        
      />
      
    </div>
  );
};

export default Login;
