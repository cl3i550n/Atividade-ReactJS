import React from 'react';
import MinMax from './src/components/MinMax.js'
import Titulo from './src/components/Titulo.js'
import Botao from './src/components/Botao.js'
import Contador from './src/components/Contador.js'
import PaiDireta from './src/components/direta/Pai.js'
import PaiIndireta from './src/components/indireta/Pai.js'
import Diferenciar from './src/components/Diferenciar.js'
import Familia from './src/components/Familia.js'
import Membro from './src/components/Membro.js'
import ParImpar from './src/components/ParImpar.js'
import UsuarioLogado from './src/components/UsuarioLogado.js'


export default function App() {
  return (
    <>
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secundario="Tudo Bem" />
      {/* Exercicio Botao Cadastrar */}
      <Botao />
      {/* Exercicio Contador de Passos */}
      <Contador inicial={0} passo={1} />
      {/* Exercicio Pai Direto e Pai Indireto */}
      <PaiDireta />
      <PaiIndireta />
      {/* Exercicio Diferenciar */}
      <Diferenciar />
      {/* Exercicio Familia e Membros */}
      <Familia>
        <Membro nome="Bia" sobrenome="Arruda" />
        <Membro nome="Carlos" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
        <Membro nome="Gui" sobrenome="Silva" />
        <Membro nome="Rebeca" sobrenome="Silva" />
      </Familia>
      {/* Exercicio Par e Impar */}
      <ParImpar num={3} />
      <ParImpar num={2} />
      {/* Exercicio Condicional */}
      <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
      <UsuarioLogado usuario={{ nome: 'Ana' }} />
      <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} />
      
    </>
  );
}
