const departamentos = document.querySelectorAll("a");
// const mapa = document.querySelector(".mapadiv");

const url = 'https://www.google.com/search?q=';

const codigosDepartamentos = {
  COL1283: "Amazonas",
  COL1314: "Antioquia",
  COL1315: "Boyacá",
  COL1316: "Córdoba",
  COL1317: "Santander",
  COL1318: "La Guajira",
  COL1342: "San Andrés y Providencia",
  COL1397: "Caldas",
  COL1398: "Cundinamarca",
  COL1399: "Bogota",
  COL1400: "Quindío",
  COL1401: "Risaralda",
  COL1402: "Tolima",
  COL1403: "Caquetá",
  COL1404: "Cauca",
  COL1405: "Huila",
  COL1406: "Nariño",
  COL1407: "Putumayo",
  COL1408: "Valle del Cauca",
  COL1412: "Atlántico",
  COL1413: "Bolívar",
  COL1414: "Cesar",
  COL1415: "Chocó",
  COL1416: "Magdalena",
  COL1417: "Sucre",
  COL1420: "Arauca",
  COL1421: "Norte de Santander",
  COL1422: "Casanare",
  COL1423: "Guaviare",
  COL1424: "Guainía",
  COL1425: "Meta",
  COL1426: "Vaupés",
  COL1427: "Vichada",
};

//Se recorren los enlaces individuales
departamentos.forEach((departamento) => {
  departamento.addEventListener("click", () => {
  //Se accede a la informacion individual de la zona que se hizo click
    const codigoDepartamento = departamento.childNodes[1].id;
    console.log(codigosDepartamentos[codigoDepartamento]);
    //Con el codigo accedemos al valor en el objeto codigosDepartamentos
    //Para usar como valor en la busqueda
    const query = codigosDepartamentos[codigoDepartamento];
    //Enviamos a una funcion una url concatenada a la busqueda especifica
    abrirNuevoTab(`${url+query}`);

    // console.log(Object.keys(codigosDepartamentos));
    // console.log(Object.values(codigosDepartamentos));
  });
});

function abrirNuevoTab(url) {
  // Abrir nuevo tab
  var win = window.open(url, '_blank');
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
}



/**
 *  CREDITOS
 *  https://www.youtube.com/watch?v=g2-iIbYWWII
 *  APOYO
 *  https://simplemaps.com/resources/svg-co
 *  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
 *  https://unipython.com/como-abrir-una-nueva-pestana-con-java-script/
 */
