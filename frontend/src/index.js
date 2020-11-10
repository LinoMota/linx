import './styles/main.scss';


(() => {

    function scrollCarousel(element, leftValue) {
        element.scrollTo({
            left: leftValue,
            behavior: 'smooth'
        })
    }

    function setUpCarousel(element) {

        const [bt, bt_, carousel] = element.children

        let elementWidth = (carousel.scrollWidth / 16)

        carousel.scroll({
            behavior: 'smooth'
        })

        let numElements = carousel.children.length

        let currentElement = 0

        bt.addEventListener('click', () => {
            currentElement = (currentElement == 0) ? currentElement : currentElement - 1
            scrollCarousel(carousel, elementWidth * currentElement)
        })
        bt_.addEventListener('click', () => {
            currentElement = (numElements >= 4 && currentElement == (numElements - 4)) ? currentElement : currentElement + 1;
            scrollCarousel(carousel, elementWidth * currentElement)
        })
    }

    function getProductsData() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3335?maxProducts=16')
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(_ => reject("Api está indisponível"))
        })
    }

    function createProductDiv(data, rank = 0) {

        const {
            oldPrice,
            price,
            installment,
            images,
            name
        } = data

        const discount = 100 - ((price * 100) / oldPrice)

        const info = (rank != 0) ?
            `<div class="product__rank">${rank}º</div>` :
            `<div class="product__discount">${Math.floor(discount)}%</div>`

        return `<div class="product">
                    ${info}
                <img class="product__image"
                    src="${images.default}">
                <div class="product__info">
                    <h4 class="product__info__title">${name}</h4>
                    <h6 class="product__info__prev_price">R$ ${oldPrice}</h6>
                    <p class="product__info__current_price">Por <a>R$ ${price}</a> </p>
                    <p class="product__info__installments">${installment.count}x R$ ${installment.price}</p>
                </div>
            </div>`

    }

    async function loadData() {
        const carousels = document.querySelectorAll('.card__carousel__content')

        const {
            mostPopular,
            priceReduction
        } = await getProductsData()

        mostPopular.forEach((data, i) => {
            carousels[0].innerHTML += (createProductDiv(data, i + 1))
        });

        priceReduction.forEach(data => {
            carousels[1].innerHTML += (createProductDiv(data))
        });

    }

    async function start() {

        await loadData()

        const [carousel1, carousel2] = document.querySelectorAll('.card__carousel')

        setUpCarousel(carousel1)
        setUpCarousel(carousel2)

    }

    start()
})()