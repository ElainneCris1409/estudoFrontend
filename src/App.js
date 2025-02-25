import { useState } from "react"; // useState é um Hook do React que gerencia o estado dentro do componente
import { getUser, postUser } from "./api/api"; // Importa as funções da API
import "./App.css"; // Importa o estilo CSS

function App() {
  const [user, setUser] = useState(null); // Armazena os dados do usuário
  const [error, setError] = useState(null); // Armazena mensagens de erro
  const [newUser, setNewUser] = useState({ name: "", email: "", company: "" }); // Armazena os dados do novo usuário

  // Função para buscar um usuário (GET)
  const handleGetUser = async () => {
    try {
      const userData = await getUser(1); // Busca usuário com ID 1
      setUser(userData); // Atualiza o estado user com os dados do usuário
      setError(null); // Limpa o estado error
    } catch (err) {
      setError("Erro ao buscar usuário.");
      setUser(null); // Limpa o estado user
    }
  };

  // Função para criar um novo usuário (POST)
  const handlePostUser = async () => {
    try {
      const createdUser = await postUser(newUser); // Envia os dados do usuário para a API
      alert("Usuário cadastrado com sucesso! Veja no console.");
      console.log(createdUser);
      setNewUser({ name: "", email: "", company: "" }); // Limpa o formulário após o envio
    } catch (err) {
      setError("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Consumindo API Pública com AXIOS</h1>

        {/* Botão para buscar usuário */}
        <button onClick={handleGetUser}>Buscar Usuário</button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {user && (
          <div>
            <h2>Nome: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Empresa: {user.company.name}</p>
          </div>
        )}

        {/* Formulário para cadastrar novo usuário */}
        <h2>Cadastrar Novo Usuário</h2>
        <input
          type="text"
          placeholder="Nome"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Empresa"
          value={newUser.company}
          onChange={(e) => setNewUser({ ...newUser, company: e.target.value })}
        />
        <button onClick={handlePostUser}>Cadastrar</button>
      </header>
    </div>
  );
}

export default App;
