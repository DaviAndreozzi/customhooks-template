import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export function useCapturarNome(){

  const [nomeUsuarios, setNomeUsuarios] = useState([]);

  const buscarNomes = async()=>{
    try {
      const result = await axios.get(`${BASE_URL}users`)
      setNomeUsuarios(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buscarNomes()
  }, []);

  return nomeUsuarios;

}
