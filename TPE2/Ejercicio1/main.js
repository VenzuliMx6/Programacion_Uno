const consumir_dolar = async () => {
  //Traer los objetos de la API
  const dolares = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );

  const datos_dolar = await dolares.json();

  let lista_dolares = [];

  datos_dolar.forEach((dolares) => {
    let fila = `
   
        <tr>
    <td>${dolares.casa.nombre}</td>
    <td>${dolares.casa.compra}</td>
    <td>${dolares.casa.venta}</td>
        <tr>
    `;

    lista_dolares.push(fila);
  });

  document.getElementById("tabla_cuerpo").innerHTML = lista_dolares.join("");
};
consumir_dolar();
