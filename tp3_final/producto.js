export default class Producto {
  constructor(pr_name, pr_price, pr_url) {
    this.name = pr_name;
    this.price = pr_price;
    this.url = pr_url;
  }

  save_product() {
    let nw_product = {
      name: this.name,
      price: this.price,
      url: this.url,
    };

    if ("product_list" in localStorage) {
      let product_catalogue = JSON.parse(localStorage.getItem("product_list"));
      product_catalogue.push(nw_product);
      localStorage.setItem("product_list", JSON.stringify(product_catalogue));

      this.obtain_product();
    } else {
      let product_catalogue = [];
      product_catalogue.push(nw_product);
      localStorage.setItem("product_list", JSON.stringify(product_catalogue));
    }
  }

  obtain_product() {
    let product_list = JSON.parse(localStorage.getItem("product_list"));

    let rows = [];
    product_list.forEach((element) => {
      let row = `
        
            <tr>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>${element.url}</td>
                <td>
                <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"> <i class = "fa fa-trash"></i> </button>       
                <button onclick="editar(${index})" class="btn btn-primary btn-sm" > <i class = "fa fa-edit"></i>
                </td>
            <tr>`;
      rows.push(row);
    });
    document.getElementById("tbody").innerHTML = rows.join("");
  }
}
