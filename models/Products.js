class Products {

    constructor(parent, products, cart) {
        this.parent = parent
        this.products = products
        this.cart = cart
        this.parent.addEventListener("click", this)
    }


    showProducts() {
        this.products.forEach((product) => {
            this.createcard(product)
        })
    }

    createcard(data) {
        const cardEle = document.createElement("div")

        const imgELe = this.productImg(data)
        const info = this.productinfo(data)

        cardEle.innerHTML = imgELe;
        cardEle.innerHTML += info;

        this.parent.appendChild(cardEle)
    }


    productImg(data) {
        const {image, alt} = data;
        const img = `<img src=${image} alt=${alt}>  `

        return img
    }

    productinfo(data) {
        const {id, prices, name} = data;
        const indfoJsx = `
        <div id="product-info">
        <h3>${name}</h3>
        <div>
        <span>${prices}</span>
        <button type="button" data-id=${id}>+</button>
        </div>
         </div>

        `;
        return indfoJsx
    }


    handleEvent() {
        const elemnt = event.target;
        if (elemnt.tagName === "BUTTON") {
            this.addtocart(elemnt.dataset.id)
        }
    }

    addtocart(id) {
      const product=this.products.find((i) => i.id === +id)
        console.log(product)
        this.cart.products.push(product)
        this.cart.showProducts()
    }
}

export default Products

