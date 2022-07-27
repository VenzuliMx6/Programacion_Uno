import Producto from "./producto.js";

function save_data() {
  let name = document.getElementById("inp_name").value;
  let price = document.getElementById("inp_price").value;
  let url = document.getElementById("inp_url").value;

  let product = new Producto(name, price, url);
  product.save_product();
}

const btn = document.getElementById("btn_upload_pr");
btn.addEventListener("click", save_data);

function catalog_product() {
  let product = new Producto();
  product.obtain_product;
}

catalog_product();