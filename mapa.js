const depar = document.querySelectorAll("a");
const mapa = document.querySelector(".mapadiv");

const codigos = {
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

depar.forEach((dp) => {
  dp.addEventListener("click", () => {
    console.log(dp);
    console.log(dp.childNodes);
    console.log(dp.childNodes[1].id);
  });
});
