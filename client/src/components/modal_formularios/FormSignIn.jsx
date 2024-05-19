import React, { useContext, useState } from "react";
import { context } from "../../context";

const FormSignIn = () => {
  const [captcha, setCaptcha] = useState(false);

  const {
    isOpen,
    setIsLogin,
    form,
    errors,
    loading,
    response,
    handleChange,
    handleKeyUp,
    handleSubmit,
  } = useContext(context);

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
        id="userName"
        name="userName"
        value={form.userName}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        required
      />
      {errors.userName && <p className="font-bold text-red-600 text-xs ">{errors.userName}</p>} {/*--error en la validacion---*/}
      <label className="font-bold py-2 " htmlFor="nombre">
        Nombre y Apellido:
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="text"
        id="fullName"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        required
      />
      {console.log(errors.email,errors.fullName, errors.userName)}
      {errors.fullName && <p className="font-bold text-red-600 text-xs ">{errors.fullName}</p>} {/*--error en la validacion---*/}
      <label className="font-bold py-2" htmlFor="email">
        Email
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        required
      />
      {errors.email && <p className="font-bold text-red-600 text-xs ">{errors.email}</p>} {/*--error en la validacion---*/}
      <label className="font-bold rounded py-2" htmlFor="password">
        Contraseña:
      </label>
      <input
        className="bg-slate-200 rounded p-2"
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p className="font-bold text-red-600 text-xs ">{errors.password}</p>} {/*--error en la validacion---*/}
      <div className="border-2 rounded mt-5 p-3 flex justify-center items-center">
        <input
          className="mr-4"
          type="checkbox"
          id="captcha"
          name="captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          required
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
