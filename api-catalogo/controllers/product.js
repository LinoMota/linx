import Product from "../models/product.js";

const mainEndpoint = async (req, res) => {
    const id = req.body.id
    const format = req.body.format || "complete"

    try {
        console.log(id)

        const product = await Product.findOne({
            id: id
        });

        let response = product;

        if (format === "compact") {
            const {
                name,
                price,
                status,
                categories
            } = product

            response = {
                name,
                price,
                status,
                categories
            }
        }
        res.status(200).json(response)
    } catch (e) {
        res.status(404).json({
            message: "Produto inexistente."
        })
    }
}

export default {
    mainEndpoint
}