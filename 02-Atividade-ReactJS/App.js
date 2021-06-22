import React from 'react';
import ListaProdutos from './src/Produtos/ListaProdutos'
import ListaProdutos2 from './src/Produtos/ListaProdutos2'
import DigiteSeuNome from './src/components/DigiteSeuNome'

export default function App() {
  return (
  <>
    <DigiteSeuNome/>
    <ListaProdutos/>
    <ListaProdutos2/>
  </>
  );
}