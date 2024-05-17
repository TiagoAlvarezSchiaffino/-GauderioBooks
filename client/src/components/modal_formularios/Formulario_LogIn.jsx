import React, { useContext, useState } from "react";
import { context } from "../../context";

const Formulario_LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isOpen, setIsLogin } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    setIsLogin(false)
  }

  return (
    //-----------------LogIn-----------------------------------------------------------

    <form className="flex flex-col p-2" onSubmit={handleSubmit}>
      <h1 className="font-bold text-center text-2xl p-2 items-center">
        Iniciar sesion
      </h1>
      <label className="font-bold py-2" htmlFor="email">
        Email
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="font-bold rounded py-2" htmlFor="email">
        Contraseña:
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input className="bg-black text-white mt-8 rounded p-2" type="submit" />
      <div className="p-5">
        <p className="text-xs">No soy usuario registrado y quiero <span className="font-bold cursor-pointer" onClick={handleLogin}>crear una cuenta.</span></p>
      </div>
    </form>
  );
};

export default Formulario_LogIn;
