import React, { useContext, useState } from "react";
import { context } from "../../context";

const FormSignIn = () => {
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const { isOpen, setIsLogin } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    setIsLogin(true);
  }

  return (
    //-----------------SignIn-----------------------------------------------------------

    <form className="flex flex-col p-2" onSubmit={handleSubmit}>
      <h1 className="font-bold text-center text-2xl p-2 items-center">
        Registrate
      </h1>
      <label className="font-bold py-2" htmlFor="usuario">
        Usuario:
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="text"
        id="usuario"
        name="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <label className="font-bold py-2 " htmlFor="nombre">
        Nombre y Apellido:
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
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
      <div className="border-2 rounded mt-5 p-3 flex justify-center items-center">
        <input
          className="mr-4"
          type="checkbox"
          id="captcha"
          name="captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />
        <label htmlFor="captcha">No soy un robot. 🤖</label>
      </div>
      <div className="p-5">
        <p className="text-xs">
        Ya estas registrado? haz click{" "}
          <span className="font-bold cursor-pointer" onClick={handleLogin}>
            aqui
          </span>
        </p>
      </div>

      <input className="bg-black text-white mt-2 rounded p-2" type="submit" />
    </form>
  );
};

export default FormSignIn;
