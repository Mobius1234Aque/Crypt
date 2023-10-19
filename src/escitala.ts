export function cifrarEscitala(texto: string, anchura: number): string {
  let textoCifrado = '';
  for (let i = 0; i < anchura; i++) {
    let j = i;
    while (j < texto.length) {
      textoCifrado += texto[j];
      j += anchura;
    }
  }
  return textoCifrado;
}

export function descifrarEscitala(textoCifrado: string, anchura: number): string {
  let textoDescifrado = '';
  const filas = Math.ceil(textoCifrado.length / anchura);
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < anchura; j++) {
      const indice = j * filas + i;
      if (indice < textoCifrado.length) {
        textoDescifrado += textoCifrado[indice];
      }
    }
  }
  return textoDescifrado;
}
