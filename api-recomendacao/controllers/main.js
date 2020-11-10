import axios from 'axios';

async function externalApi(algo){
    const endpoint = (algo === 'mostpopular') ? algo : 'pricereduction';
    const url = `https://wishlist.neemu.com/onsite/impulse-core/ranking/${algo}.json`;
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

async function getProductInfo(productIds, maxProducts, discount = false) {

    //comunicando com meu container 
    const url = "http://api-catalogo:3334/products";

    let responseProducts = [];
    for (let i = 0, j = 0; i < maxProducts && j < productIds.length; j++) {
        await requestProductResolver(url, productIds[j]).then((res) => {
            if (discount) {

                let {
                    oldPrice,
                    price
                } = res.data

                if (price < oldPrice) {
                    responseProducts.push(res.data)
                    i++;
                }


            } else {
                responseProducts.push(res.data)
                i++;
            }
        }).catch(error => {})
    }

    responseProducts = (responseProducts.length > 0) ?
        responseProducts.sort(((item, other) => (item.weight > other.weight) ? 1 : -1 )) : []

    return responseProducts;
}


function arrayIdFilter(productRecomendationArray) {
    return productRecomendationArray.map(_ => _.recommendedProduct.id);
}

const mainEndpoint = (req, res) => {
    let {
        maxProducts
    } = req.query

    maxProducts = (maxProducts === undefined || maxProducts < 10) ? 10 : maxProducts;

    Promise.all([
        externalApi('mostpopular'),
        externalApi('pricereduction')
    ]).then(responses => {

        let [popular, pReduction] = responses;

        popular = arrayIdFilter(popular);
        pReduction = arrayIdFilter(pReduction);

        Promise.all([
            getProductInfo(popular, maxProducts),
            getProductInfo(pReduction, maxProducts, true)
        ]).then(_responses => {

            let [popular, pReduction] = _responses;

            res.status(200).json({
                mostPopular: popular,
                priceReduction: pReduction
            })

        })

    }).catch(error => {
        res.status(404).json({
            message: error.message
        })
    })
}

export default {
    mainEndpoint
};