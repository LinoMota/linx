import axios from 'axios';

async function mostPopular() {
    const url = process.env.MOST_POPULAR_URL || "https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json";
    return (await axios.get(url)).data;
}

async function priceReduction() {
    const url = process.env.PRICE_REDUCTION_URL || "https://wishlist.neemu.com/onsite/impulse-core/ranking/pricereduction.json";
    return (await axios.get(url)).data;
}

function requestProductResolver(url, id) {
    return axios.get(url, {
        data: {
            id: id,
            format: "complete"
        }
    })
}

async function getProductInfo(productIds, maxProducts) {

    const url = process.env.API_CATALOG || "http://localhost:3334/products";

    let responseProducts = [];
    for (let i = 0, j = 0; i < maxProducts && j < productIds.length; j++) {
        await requestProductResolver(url, productIds[j]).then((res) => {
            responseProducts.push(res.data)
            i++;
        }).catch(error => {})
    }
    return responseProducts;
}


function arrayIdFilter(productRecomendationArray) {
    return productRecomendationArray.map(_ => _.recommendedProduct.id);
}

const mainEndpoint = (req, res) => {
    let {
        maxProducts
    } = req.body

    maxProducts = (maxProducts === undefined || maxProducts < 10) ? 10 : maxProducts;

    Promise.all([
        mostPopular(),
        priceReduction()
    ]).then(responses => {

        let [popular, pReduction] = responses;

        popular = arrayIdFilter(popular);
        pReduction = arrayIdFilter(pReduction);

        Promise.all([
            getProductInfo(popular, maxProducts),
            getProductInfo(pReduction, maxProducts)
        ]).then(_responses => {

            let [popular, pReduction] = _responses;

            res.status(200).json({
                mostPopular: popular,
                priceReduction: pReduction
            })

        })

    }).catch(error => {
        console.log(error)
        res.status(404).json({
            message: error.message
        })
    })
}

export default {
    mainEndpoint
};