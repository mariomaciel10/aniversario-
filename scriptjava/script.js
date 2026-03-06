const dataFixa = new Date('2024-02-21T12:00:00');

function calcularTempo() {
  const agora = new Date();

  let diferencaMs = agora - dataFixa;

  if (diferencaMs < 0) {
    document.getElementById('resultado').innerText = "A data ainda não aconteceu!";
    return;
  }
  //conversão
  const segundos = Math.floor(diferencaMs / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  //tranformando as sobras
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  document.getElementById('resultado').innerText = 
    `${dias} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos atrás.`;
}

// Atualiza o contador a cada segundo
setInterval(calcularTempo, 1000);

// Também chama a função logo no começo para não esperar 1s
calcularTempo();