import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export function useCapturarPostagem(){

  const [postagens, setPostagens] = useState([]);

  const buscarPostagem = async()=>{
  try {
    const result = await axios.get(`${BASE_URL}comments`)
  setPostagens(result.data)
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

return postagens;

}
