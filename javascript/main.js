import {fetchdata} from "../utils/httpReq.js";
import Products from "../models/Products.js";
import Cart from "../models/Cart.js";

const productsNode = document.getElementById("products");
const cartlistnode = document.getElementById("cart-list")
const totalpricenode = document.getElementById("total-price").querySelector("span")

async function rander() {
    const datafile = await fetchdata()
    const Cartinfo = new Cart(cartlistnode, totalpricenode);
    const productsInfo = new Products(productsNode, datafile, Cartinfo)


    productsInfo.showProducts()

}


document.addEventListener("DOMContentLoaded", rander);

