class Cart {
    constructor(product, price) {
        this.product = product
        this.price = price
        this.products = [];
        this.toshow = []
        this.product.addEventListener("click", this)
    }

    showProducts() {
        this.toshow = [...new Set(this.products)]
        this.product.innerHTML = "";

        this.toshow.forEach((product) => {
            const qty = this.products.filter((p) => p.id === product.id).length;
            console.log(qty)
            this.createcard(product, qty)
        })
        this.calculate();
    }

    createcard(data, qty) {
        const cardEle = document.createElement("div")
        const imgEle = this.productimg(data)
        const infoELe = this.productinfo(data);
        const ControlELe = this.productControl(data, qty);
        cardEle.innerHTML = imgEle;
        cardEle.innerHTML += infoELe;
        cardEle.innerHTML += ControlELe;
        this.product.appendChild(cardEle)
    }

    productimg(data) {
        const {image, alt} = data
        const imgJSX = `<img src=${image} alt=${alt} />`
        return imgJSX
    }

    productinfo(data) {
        const {name, prices} = data;
        console.log(data)
        const infoJsx = `
       <div id="cart-info">
       <h4>${name}</h4>
       <p>${prices}</p>

</div>
       `
        return infoJsx
    }

    productControl(data, qty) {
        const {id} = data;

        const controlJSX = `
            <div id="cart-control">
            <div>
            <button data-id=${id} type="button">-</button>
            <span>${qty}</span>
            <button data-id=${id} type="button">+</button>
</div>
<button class="remo" data-id=${id} type="button">Remove</button>

</div>
        `
        return controlJSX
    }

    handleEvent(event) {
        const tagname = event.target.tagName
        const id = event.target.dataset.id;
        const type = event.target.innerText;

        if (tagname !== "BUTTON") {
            return
        }

        switch (type) {
            case "+":
                this.increase(id)
                break
            case "-":
                this.decrease(id)
                break
            case "Remove":
                this.remove(id)
                break
        }
    }

    increase(id) {
        const product = this.products.find((p) => p.id === +id)
        this.products.push(product);
        this.showProducts();
    }

    decrease(id) {
        const index = this.products.findIndex((p) => (p.id === id));
        this.products.splice(index, 1)
        this.showProducts()
    }

    remove(id) {
        const newPRODUCTS = this.products.filter((p) => p.id !== +id)
        this.products = newPRODUCTS
        this.showProducts();
    }

    calculate() {
        const totals = this.products.reduce((acc , cur) => {
            ( acc += cur.price)
        }, 0)
        this.price.innerText ="$" + totals;
    }
}

export default Cart

