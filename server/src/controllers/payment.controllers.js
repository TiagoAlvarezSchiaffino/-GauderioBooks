import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)

export const createSession = async (req, res) => {
    let nuevoArreglo = [];
    const data = req.body

    data.forEach((producto) => {
        nuevoArreglo.push({
            price_data: {
                product_data: {
                    name: producto.title
                },
                currency: 'usd',
                unit_amount: producto.price * 100
            },
            quantity: producto.cantidad
        });
    });


    const session = await stripe.checkout.sessions.create({
        line_items: nuevoArreglo,
        mode: 'payment',
        success_url: '',
        cancel_url: ''
    })

    return res.json(session)

}