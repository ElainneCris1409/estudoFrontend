import axios from "axios";
const url ="http://localhost:3001/clientes"; 

export const getClientes = async () => {
  try {
    const response = await axios.get(url);
    return response.data;

  }
  catch (error) {
    console.error("Erro ao buscar clientes:", error);
    throw error; //throw é usado para lançar um erro no browser
  }

} 

export const getUser = async (id) => {
    try {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
} 
    catch (error) {
  console.error("Erro ao buscar usuário:",error);
  throw error;  
};
};

export const postUser = async (data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    }

    catch (error) {
        console.error("Erro ao criar usuário:",error);
        throw error;
    };
};  
