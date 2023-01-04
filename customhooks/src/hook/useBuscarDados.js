import axios from "axios";
import { useEffect, useState } from "react";

export function useBuscarDados (urlApi,estadoInicial){

  const [dados, setDados]= useState(estadoInicial)

  const buscarDados = async()=>{
    try {
      const result = await axios.get(urlApi)
      setDados(result.data)
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    buscarDados()
  },[])

  return dados;
}