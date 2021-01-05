import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

import "./App.css";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Fundamentos React</h1>
      </center>

      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="#080">
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
      </div>
    </div>
  );
}

export default App;
