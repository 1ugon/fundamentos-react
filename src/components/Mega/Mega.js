import React, { useState } from "react";

export default (props) => {
  const [numbers, setNumbers] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function gerarNumeros(qtd) {
    var array = Array();

    for (var i = 0; i < qtd; i++) {
      var sortedNumber = getRandomInt(1, 60);

      if (array.includes(sortedNumber)) {
      } else {
        array.push(sortedNumber);
      }
    }

    array.sort((n1, n2) => n1 - n2);
    setNumbers(array);
  }

  return (
    <div>
      <h2>{numbers.join(", ")}</h2>
      <button onClick={() => gerarNumeros(7)}>Gerar Numeros</button>
    </div>
  );
};
