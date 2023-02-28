
const drawOrder = async (obj) => {
        for (const order of obj) {
            const div$$ = document.createElement('div')
            const h4$$ = document.createElement('h4')
            const h5$$ = document.createElement('h5')

            h4$$.innerHTML = `Número de pedido: ${order.id}`
            h5$$.innerHTML = `Fecha de pedido: ${order.date}`
            
            div$$.appendChild(h4$$)
            div$$.appendChild(h5$$)
            
            for (const product of order.products) {
                const prenda = await getProduct(product.productId)

                const h3$$ = document.createElement('h3')
                const span$$ = document.createElement('span')
                
                h3$$.innerHTML = prenda
                span$$.innerHTML += `Cantidad: ${product.quantity} `
                

                div$$.appendChild(h3$$)
                div$$.appendChild(span$$)
                document.body.appendChild(div$$)
            }
        }
    }

async function addProduct(num) {
    const callApiProduct = await fetch(`http://localhost:3000/products/${num}`)
    const getApiProduct = await callApiProduct.json()
    return getApiProduct
}

const getProduct = async (num) => {
    const objProducts = await addProduct(num)
    const items = objProducts.name
    return items
}

async function addOrder() {
    const orderArray = []
    const callApiOrder = await fetch('http://localhost:3000/orders')
    const getApiOrder = await callApiOrder.json()
    orderArray.push(getApiOrder)

    const pedidosOrdenados = orderArray[0].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return pedidosOrdenados
}

const init = async () => {
    const objOrders = await addOrder()
    drawOrder(objOrders)
}

init()