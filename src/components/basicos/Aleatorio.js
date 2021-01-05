export default function Aleatorio() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const nMin = 1;
  const nMax = 99;

  return (
    <div>
      <p>Nº mínimo: {nMin}</p>
      <p>Nº maximo: {nMax}</p>
      <strong>
        <p>Nº aleatório: {getRandomInt(nMin, nMax)}</p>
      </strong>
    </div>
  );
}
