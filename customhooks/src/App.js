import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarNome } from "./hook/useCapturarNome";
import { useCapturarPostagem } from "./hook/useCapturaPostagem";
import { useBuscarDados } from "./hook/useBuscarDados";
function App() {
  // const nomeUsuarios = useCapturarNome();
  // const postagens = useCapturarPostagem();
  const nomeUsuarios = useBuscarDados(`${BASE_URL}users`,[])
  const postagens = useBuscarDados(`${BASE_URL}users`,[])
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default App;



