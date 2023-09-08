import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";

const Button = function (a) {
  const { onClick,inner, className, bs, text } = a;
  return (
    <button onClick={onClick} className={className} style={bs}>
      <div>{(inner||text)}</div>
    </button>
  );
};
const Input = function (a) {
  const { Error,  ...c } = a;
  c.id=Error?.type
  return (
    <div className="">
      <div className="input-label">{a?.placeholder}:</div>
      <input className={"input"+(Error?.type && Error?.type === Error?.is?.type?" input-error":"")} {...c} />
      {Error?.type && Error?.type === Error?.is?.type && (
        <div className="input-error-text">{Error?.is?.name}</div>
      )}
    </div>
  );
};
const getButtonStyle = function (a) {
  return a ? {} : {};
};

function App() {
  const [Err, sErr] = useState({ type: null, name: null });
  const [t, n] = useState(false );
  const nm = useRef(null)
  const Em = useRef(null)
  const ps = useRef(null)
  const cps = useRef(null);
  function run(){alert("sistema ok!")}
  function verific() {
    const i_nm = String(document .querySelector("#nm")?.value).trim();
    const i_Em = String(document .querySelector("#em")?.value).trim();
    const i_ps = String(document .querySelector("#ps")?.value).trim();
    const i_cps = String(document .querySelector("#cps")?.value).trim();
    if(i_nm.length<3){sErr({ type: "nm", name: "Cara, Seu nome precisa de três ou mais caracteres" });return}
    if(!/^(\S){1,150}\@\w{1,5}\.\w{1,5}$/.test(i_Em) ){sErr({ type: "em", name: "Mano, Seu email não ta correto" });return}
    if(i_ps. length <8 ){sErr({ type: "ps", name: "Oia, Contando o tamanho da senha a senha tem menor que 8 carracterias" });return}
    if(i_ps!==i_cps){sErr({ type: "ps", name: "Oia, As Senhas nao bat " });return}
    n(true)
    sErr({ type: null, name: null  });
    run();
  }
  //const [typeIsLogin, st] = useState(false);
  return (
    <div className="app">
      <div>
        <div className="login-header">
          <span>Login com ``hi_n3rd``</span>
        </div>
        <div className="login-tab">
          {/*<Button text="entra" bs={getButtonStyle( !!typeIsLogin)} className="login-tab-button"/>
          <Button text="registrar" bs={getButtonStyle(!typeIsLogin)} className="login-tab-button"/>*/}
        </div>
      </div>
      <div>
        <Input ref={nm} type="text" placeholder="nome" Error={{ type: "nm", is: Err }} />
        <Input
          ref={Em}
          type="email"
          placeholder="email"
          Error={{ type: "em", is: Err }}
        />
        <Input
          ref={ps}
          type="password"
          placeholder="senha"
          Error={{ type: "ps", is: Err }}
        />
        <Input
          ref={cps}
          type="password"
          placeholder="confirme sua senha"
          Error={{ type: "cps", is: Err }}
        />
        <Button onClick={verific} disabled={t} text="registrar" className="login-btn" inner={t&&<div className="loading"/>} />
      </div>
    </div>
  );
}

export default App;
