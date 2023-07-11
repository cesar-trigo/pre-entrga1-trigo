// REALIZE UNA CALCULODORA CON 5 OPERACIONES BASICAS 
// TRATE DE QUE PUEDA CACHEAR LOS ERRORES EN CADA OPCION 
// TAMBIEN SE INTENTO UTILIZAR LOS VISTO LAS ULTIMAS 4 CLASES
// SI BIEN NO ES TAN COMPLEJO HACER UNA CALCULADOR INTENTE QUE SEA LO MAS DINAMICA POSIBLE

//DE CLARACION DE CONSTANTE,VARIABLES
const CONTINUAR = 3;
let contador1;
let contador2;
//FUNCION PARA EL ELEGIR METODO
function calculadora() {
  let tipo;
  let numero1;
  let numero2;

  while (tipo !== 1 && tipo !== 2 && tipo !== 3 && tipo !== 4) {
    tipo = parseInt(prompt("Ingrese un numero para realizar la algunas de las siguentes operaciones \n 1) + suma \n 2) - resta \n 3) * multiplicacion \n 4) / dividendo \n 5) % porcentaje"));
    comprobarNumeros(CONTINUAR, numero1, numero2);
    switch (tipo) {
      case 1:
        sumar(CONTINUAR, contador1, contador2);
        break;
      case 2:
        restar(CONTINUAR, contador1, contador2);
        break;
      case 3:
        multiplicar(CONTINUAR, contador1, contador2);
        break;
      case 4:
        dividir(CONTINUAR, contador1, contador2);
        break;
      case 5:
        porcentaje(CONTINUAR, contador1, contador2);
        break;
      default:
        alert("Numero incorrecto.")
        break;
    }
  }
}

calculadora()

//FUNCION PARA COMPROBAR NUMEROS
//UTILICE EL TERNARIO POR QUE SOLO ERAN DOS OPCIONES
function comprobarNumeros(a, b, c) {
  let seguir = a;
  while (seguir === 3) {
    b = parseInt(prompt("Ingrese el primer número:"));
    !isNaN(b) ? (
      contador1 = b
    ) : (
      alert("Error en primer numero.")
    );

    c = parseInt(prompt("Ingrese el segundo número:"));
    !isNaN(c) ? (
      contador2 = c,
      seguir = 1
    ) : (
      alert("Error en segundo numero.")
    );
  }
}

//FUNCION PARA CADA OPERACION
function sumar(e, p, s) {
  let resultado;
  resultado = p + s,
    alert(`Este es el resultado de ${p} + ${s} = ${resultado}`),
    consulta(e);
};

function restar(e, p, s) {
  let resultado;
  resultado = p - s,
    alert(`Este es el resultado de ${p} - ${s} = ${resultado}`),
    consulta(e);
};

function multiplicar(e, p, s) {
  let resultado;
  resultado = p * s,
    alert(`Este es el resultado de ${p} x ${s} = ${resultado}`),
    consulta(e);
};

function dividir(e, p, s) {
  let resultado;
  resultado = p / s,
    alert(`Este es el resultado de ${p} / ${s} = ${resultado}`),
    consulta(e);
};

function porcentaje(e, p, s) {
  let resultado;
  resultado = (p * s) / 100,
    alert(`Este es el resultado de ${p} % ${s} = ${resultado}`),
    consulta(e);
};


//FUNCION PARA VOLVER A COMEZAR O FINALIZAR 
function consulta(e) {
  let seguir = e;
  while (seguir === 3) {
    seguir = parseInt(prompt("Desea hacer otro calculo ? \n seleccione : \n 1) para volver a la calculadora  \n 2) para salir"));
    if (seguir === 2) {
      alert("Gracias por su prueba.")
    } else if (seguir === 1) {
      calculadora();
    } else {
      alert("Opcion no valida.");
    };
  };
};