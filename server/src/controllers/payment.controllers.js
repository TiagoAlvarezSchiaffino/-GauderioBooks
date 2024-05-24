import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)

export const createSession = async (req, res) => {
    let newArray = [];
    const data = req.body

    data.forEach((product) => {
        newArray.push({
            price_data: {
                product_data: {
                    name: product.title
                },
                currency: 'usd',
                unit_amount: product.price * 100
            },
            quantity: product.quantity
        });
    });


    const session = await stripe.checkout.sessions.create({
        line_items: newArray,
        mode: 'payment',
        success_url: 'https://gauderiolibros.vercel.app/',
        cancel_url: 'https://gauderiolibros.vercel.app/books'
    })

    return res.json(session)
}