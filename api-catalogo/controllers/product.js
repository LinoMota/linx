import Product from "../models/product.js";

const mainEndpoint = async (req, res) => {
    const id = req.body.id || null
    const format = req.body.format || "complete"

    try {

        if (id === null)
            throw new Error("Nenhum id informado !")

        const product = await Product.findOne({
            id: id
        });

        if (product == null)
            throw new Error(`Nenhum produto com o id ${id} foi encontrado !`);

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
            message: e.message
        })
    }
}

export default {
    mainEndpoint
}