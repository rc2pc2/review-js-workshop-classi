

/**
 * § Class Product
 *
 * Outlines a Product class
 */
 class Product {
    /**
     * Class Product constructor
     *
     * @param {*} name The product name
     * @param {*} description The product description
     * @param {*} price Product price
     * @param {*} category Product category
     * @param {*} imageUrl Product image url
     * @param {*} likes Product likes, set to 0 by default
     */
    constructor(name, description, price, category, imageUrl, likes = 0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.likes = likes;
    }

    /**
     * Function that adds a like to the given product
     * @returns the current number of likes
     */
    addLike(){
        return this.likes++;
    }

    /**
     * Function that removes a like from the given product
     * @returns the current number of likes
     */
    removeLike(){
        return this.likes--;
    }
}

const newSsd = new Product('2000TB Ultra SSD', 'SSD Super-mega-velocissimo e a bassissimo prezzo', 1999.99, 'Memory', 'https://media.kingston.com/kingston/hero/ktc-articles-solutions-pc-performance-2-types-of-m.2-ssd-hero-lg.jpg');

const products = [
    new Product('2000TB Ultra SSD', 'SSD Super-mega-velocissimo e a bassissimo prezzo', 1999.99, 'Memory', 'https://media.ldlc.com/r1600/ld/products/00/05/79/93/LD0005799307_1.jpg'),
    new Product('1000GB HDD', 'HDD Super-mega-lentissimo e ad altissimo prezzo', 5999.99, 'Memory', 'https://www.tescomaonline.com/media/images/catalog/item/zoom/pa0_647001__1.jpg'),
    new Product('Case EATX Corsaro', 'Case gigantesco che non entra neanche in salone', 699.99, 'Case', 'https://i.pinimg.com/originals/f3/79/ac/f379ac8e8a36fd6401c715c8fa6e5df6.jpg'),
    new Product('Linuovo Laptop 14\'\'', 'Nuovo laptop Linuovo 14 pollici con schermo invisibile', 1599.99, 'Laptop', 'https://www.passionetecnologica.it/Sito/uploads/2014/02/vendi_notebook_usati.jpg'),
    new Product('Walking Desk', 'Scrivania che cammina (rigorosamente da sola), combatti L\'ARTRITE IN POCHI SEMPLICI PASSI', 399.99, 'Office Equipment', 'https://images.csmonitor.com/csm/2015/01/0131-treadmill-desk.jpg?alias=standard_900x600'),
    new Product('Pear mouse wireless', 'Il  mouse più veloce di sempre, esclusivamente nei PearStore', 11999.99, 'Peripherics', 'https://m.media-amazon.com/images/I/61++SfEeLdL._AC_SY450_.jpg')
];

let userCart = [];

// console.log(products);
generateProductsContent(products);

function generateProductsContent(productsList){
    // azzeriamo la pagina dei prodotti prima di popolarla
    document.getElementById('products').innerHTML = "";

    productsList.forEach(element => {
        // console.log(element);

        const {name, description, price, imageUrl, likes} = element;

        document.getElementById('products').innerHTML += `
        <div class="product">
            <img src="${imageUrl}" alt="${name} image">
            <h4 class="title">${name}</h4>
            <p>${description}</p>
            <hr>
            <span class="price">${price}</span>
            <p>&hearts; ${likes}</p>
            <button class="buy_now" data-product-name="${name}" data-product-price="${price}">Buy now</button>
        </div>
        `
    });

    document.querySelectorAll('.buy_now').forEach((element) => {
        element.addEventListener('click', function(){
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            const productInCart = {productName, productPrice};
            userCart.push(productInCart);

            console.log(userCart);
            document.querySelector('div#cart').innerHTML += `
                <li>${productName}</li>
            `

            let somma = 0;
            userCart.forEach((element) => {
                somma += parseFloat(element.productPrice);
            })
            document.querySelector('div#cart span').innerHTML = somma;
            // console.warn();
        });
    });
}



// Classes!!
