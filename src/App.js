import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Fundamentos React</h1>
      </center>

      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="green">
          <Primeiro />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="blue">
          <ComParametro
            titulo="Titulo passado como parametro"
            subtitulo="Subtitulo parametizado"
          />
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color="pink">
          <Aleatorio />
        </Card>

        <Card titulo="#04 - Componente com Filhos" color="orange">
          <Familia sobrenome="Lugon">
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#05 - Repetição" color="purple">
          <ListaAlunos />
        </Card>

        <Card titulo="#06 - Tabela de Produtos" color="darkred">
          <TabelaProdutos />
        </Card>

        <Card titulo="#07 - Condicionais" color="yellow">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
        </Card>

        <Card titulo="#08 - Comunicação Direta" color="darkblue">
          <DiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Indireta" color="darkgreen">
          <IndiretaPai />
        </Card>

        <Card titulo="#10 - Componente Controlado" color="darkgrey">
          <Input />
        </Card>

        <Card titulo="#11 - Contador" color="lightblue">
          <Contador numeroInicial={10} />
        </Card>
      </div>
    </div>
  );
}

export default App;
