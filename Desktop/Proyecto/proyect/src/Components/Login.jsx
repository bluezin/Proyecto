import React, { useState } from "react";

const Login = () => {
  const [valor, setValor] = useState();

  const handleChange = (event) => {
    setValor(event.target.value)
    console.log(`valor: ${valor}` )
  };

  return (
    <div>
      <form>
        <p>Email:</p>
        <input required onChange={handleChange} />
        <p>Password:</p>
        <input type="password" required onChange={handleChange} />
      </form>
    </div>
  );
};

export default Login;
