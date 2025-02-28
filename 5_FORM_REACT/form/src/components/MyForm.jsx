import React, { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 8 - Controlled inputs
  // 3 - Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [hole, setHole] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  //console.log(name);
  //console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email, bio, hole);

    // 7 - Limpar forms
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/*1 - Criação de Forms */}
      {/* 5 - Enviando forms com onSubmit */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo Inputt */}
        <label>
          {/* 4 - Simplificação de manipulão de Dados */}
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
            <span>Bio:</span>
            <textarea name="bio" placeholder="Digite a sua Bio" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        {/* 9 - Select */}
        <label>
            <select name="hole" onChange={(e) => setHole(e.target.value)}>
                <option value="user">Usuario</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>    
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
