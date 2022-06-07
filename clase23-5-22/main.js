const consumir_criptos = async () => {
  const criptos = await fetch(
      /* Traer los objetos de la API */
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  /* Acá se guardan los datos que trae la api en la constante cripto */
  const datos_criptos = await criptos.json();

  /* Se crea un arreglo vacio para llenarlo con el foreach */
  let lista_criptos = [];

  /* Se recorre el arreglo y los elementos, tiene que coindidir con el indice */
  datos_criptos.forEach((criptos) => {
    let fila = `
        
        <tr>
        <td><img class="img-thumbnail" style="width:3rem" src="${criptos.image} " alt=""></td>
        <td>${criptos.name}</td>
        <td>${criptos.symbol}</td>
        <td>$${criptos.current_price}</td>
        <td>${criptos.price_change_percentage_24h}</td>
        <td>${criptos.total_volume}</td>
        </tr>
        
        `;
        /* Este push llena el arreglo con los datos del foreach */
    lista_criptos.push(fila);
  });

  /* Se utiliza para poder hacer uso del código HTML en el JS */
  document.getElementById("tbl_body").innerHTML = lista_criptos.join("");
};
consumir_criptos();

