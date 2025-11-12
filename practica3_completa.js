
/* ============================================================
   BLOQUE 1 - Ejercicios individuales (un solo número)

   1) Serie de Fibonacci

function serieFibonacci() {
  let n = 8;
  let a = 0;
  let b = 1;
  let c = 0;
  var salida = "Fibonacci: ";
  if (n <= 0) {
    console.log("n debe ser > 0");
    return;
  }
  for (let i = 1; i <= n; i++) {
    salida = salida + a;
    if (i < n) salida = salida + ", ";
    c = a + b;
    a = b;
    b = c;
  }
  console.log(salida);
}
// serieFibonacci();

/* ============================================================
   2) Divisores de un número
============================================================ */
function divisoresNumero() {
  let numero = 12;
  var texto = "Divisores de " + numero + ": ";
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      texto = texto + i + " ";
    }
  }
  console.log(texto);
}
// divisoresNumero();

/* ============================================================
   3) Suma de los divisores
============================================================ */
function sumaDivisores() {
  let numero = 12;
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      suma = suma + i;
    }
  }
  console.log("Suma de divisores de " + numero + ":", suma);
}
// sumaDivisores();

/* ============================================================
   4) Número perfecto
============================================================ */
function numeroPerfecto() {
  let numero = 28;
  let suma = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      suma = suma + i;
    }
  }
  if (suma === numero) {
    console.log(numero + " es un número perfecto");
  } else {
    console.log(numero + " no es perfecto");
  }
}
// numeroPerfecto();

/* ============================================================
   5) Número primo
============================================================ */
function numeroPrimo() {
  let numero = 11;
  if (numero <= 1) {
    console.log(numero + " no es primo");
    return;
  }
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
    }
  }
  if (esPrimo) {
    console.log(numero + " es primo");
  } else {
    console.log(numero + " no es primo");
  }
}
// numeroPrimo();

/* ============================================================
   6) Invertir número
============================================================ */
function invertirNumero() {
  let numeroOriginal = 12340;
  if (numeroOriginal === 0) {
    console.log("Número invertido: 0");
    return;
  }
  let n = numeroOriginal;
  let invertido = 0;
  while (n > 0) {
    let dig = n % 10;
    invertido = invertido * 10 + dig;
    n = (n - dig) / 10;
  }
  console.log("Número original:", numeroOriginal, "→ invertido:", invertido);
}
// invertirNumero();

/* ============================================================
   7) Contar dígitos
============================================================ */
function contarDigitos() {
  let numeroOriginal = 9876;
  if (numeroOriginal === 0) {
    console.log("Cantidad de dígitos de 0: 1");
    return;
  }
  let n = numeroOriginal;
  let contador = 0;
  while (n > 0) {
    let dig = n % 10;
    contador = contador + 1;
    n = (n - dig) / 10;
  }
  console.log("Cantidad de dígitos de", numeroOriginal + ":", contador);
}
// contarDigitos();

/* ============================================================
   8) Factorial
============================================================ */
function factorialNumero() {
  let n = 5;
  if (n < 0) {
    console.log("Factorial no definido");
    return;
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(n + "! =", fact);
}
// factorialNumero();

/* ============================================================
   9) Sumas sucesivas
============================================================ */
function sumasSucesivas() {
  let numero = 3;
  let veces = 4;
  let resultado = 0;
  for (let i = 1; i <= veces; i++) {
    resultado = resultado + numero;
  }
  console.log(numero, "sumado", veces, "veces =", resultado);
}
// sumasSucesivas();

/* ============================================================
   10) Restas sucesivas
============================================================ */
function restasSucesivas() {
  let numero = 15;
  let valor = 4;
  let n = numero;
  while (n - valor >= 0) {
    n = n - valor;
  }
  console.log("Resultado de restas sucesivas:", n);
}
// restasSucesivas();


/* ============================================================
   BLOQUE 2 - Ejercicios con ARREGLOS
============================================================ */

/* ============================================================
   1) Serie de Fibonacci (lista)
============================================================ */
function serieFibonacciLista() {
  let n_valores = [5, 8, 10];
  for (let j = 0; j < n_valores.length; j++) {
    let n = n_valores[j];
    let a = 0, b = 1, c = 0;
    let texto = "Fibonacci(" + n + "): ";
    for (let i = 1; i <= n; i++) {
      texto = texto + a + " ";
      c = a + b;
      a = b;
      b = c;
    }
    console.log(texto);
  }
}
// serieFibonacciLista();

/* ============================================================
   2) Divisores (lista)
============================================================ */
function divisoresLista() {
  let numeros = [6, 10, 15];
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let texto = n + " → ";
    for (let j = 1; j <= n; j++) {
      if (n % j === 0) {
        texto = texto + j + " ";
      }
    }
    console.log(texto);
  }
}
// divisoresLista();

/* ============================================================
   3) Suma de divisores (lista)
============================================================ */
function sumaDivisoresLista() {
  let numeros = [6, 12, 28];
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let suma = 0;
    for (let j = 1; j <= n; j++) {
      if (n % j === 0) {
        suma = suma + j;
      }
    }
    console.log(n + " → " + suma);
  }
}
// sumaDivisoresLista();

/* ============================================================
   4) Números perfectos (lista)
============================================================ */
function numerosPerfectosLista() {
  let numeros = [6, 10, 28, 30];
  let texto = "Números perfectos: ";
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let suma = 0;
    for (let j = 1; j < n; j++) {
      if (n % j === 0) {
        suma = suma + j;
      }
    }
    if (suma === n) {
      texto = texto + n + " ";
    }
  }
  console.log(texto);
}
// numerosPerfectosLista();

/* ============================================================
   5) Números primos (lista)
============================================================ */
function numerosPrimosLista() {
  let numeros = [5, 6, 7, 8, 11];
  let texto = "Primos: ";
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let esPrimo = true;
    if (n <= 1) esPrimo = false;
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        esPrimo = false;
      }
    }
    if (esPrimo) {
      texto = texto + n + " ";
    }
  }
  console.log(texto);
}
// numerosPrimosLista();

/* ============================================================
   6) Invertir varios números
============================================================ */
function invertirNumerosLista() {
  let numeros = [123, 456, 780];
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let original = n;
    let invertido = 0;
    while (n > 0) {
      let dig = n % 10;
      invertido = invertido * 10 + dig;
      n = (n - dig) / 10;
    }
    console.log(original + " → " + invertido);
  }
}
// invertirNumerosLista();

/* ============================================================
   7) Contar dígitos (lista)
============================================================ */
function contarDigitosLista() {
  let numeros = [45, 678, 12345];
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let original = n;
    let cont = 0;
    if (n === 0) cont = 1;
    while (n > 0) {
      let dig = n % 10;
      cont = cont + 1;
      n = (n - dig) / 10;
    }
    console.log(original + " → " + cont + " dígitos");
  }
}
// contarDigitosLista();

/* ============================================================
   8) Factorial (lista)
============================================================ */
function factorialLista() {
  let numeros = [3, 4, 5];
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let fact = 1;
    for (let j = 1; j <= n; j++) {
      fact = fact * j;
    }
    console.log(n + "! = " + fact);
  }
}
// factorialLista();

/* ============================================================
   9) Sumas sucesivas (lista)
============================================================ */
function sumasSucesivasLista() {
  let numeros = [2, 3, 4];
  let veces = 4;
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let resultado = 0;
    for (let j = 1; j <= veces; j++) {
      resultado = resultado + n;
    }
    console.log(n + " × " + veces + " = " + resultado);
  }
}
// sumasSucesivasLista();

/* ============================================================
   10) Restas sucesivas (lista)
============================================================ */
function restasSucesivasLista() {
  let numeros = [15, 22, 30];
  let valor = 4;
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    let original = n;
    while (n - valor >= 0) {
      n = n - valor;
    }
    console.log(original + " → " + n);
  }
}
// restasSucesivasLista();
