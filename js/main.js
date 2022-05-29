

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
        return ++this.likes;
    }

    /**
     * Function that removes a like from the given product
     * @returns the current number of likes
     */
    removeLike(){
        return --this.likes;
    }
}

const products = [
    new Product('2000TB Ultra SSD', 'SSD Super-mega-veloce e a bassissimo prezzo', 1999.99, 'Memory', 'https://media.ldlc.com/r1600/ld/products/00/05/79/93/LD0005799307_1.jpg'),
    new Product('1000GB HDD', 'HDD Eastern Analog a 365RPM, leggermente datato, ma fa il suo lavoro.', 130.99, 'Storage', 'https://m.media-amazon.com/images/I/71bqA2Ee-lL._AC_SY450_.jpg'),
    new Product('Case EATX Corsaro', 'Case gigantesco che non entra neanche in salone, a forma di scialuppa.', 699.99, 'Case', 'https://www.aquatuning.it/media/image/d1/f3/b3/Thermaltake_PC_Gehaeuse_AH_T600_Snow_1019245_01.jpg'),
    new Product('Linuovo Laptop 14\'\'', 'Nuovo laptop Linuovo 14 pollici con schermo invisibile', 1599.99, 'Laptop', 'https://www.passionetecnologica.it/Sito/uploads/2014/02/vendi_notebook_usati.jpg'),
    new Product('Walking Desk', 'Scrivania che cammina, combatti l\'artrite in pochi semplici passi', 399.99, 'Office Equipment', 'https://images.csmonitor.com/csm/2015/01/0131-treadmill-desk.jpg?alias=standard_900x600'),
    new Product('Pear mouse wireless', 'Il  mouse più veloce di sempre, esclusivamente nei PearStore', 11999.99, 'Peripherics', 'https://m.media-amazon.com/images/I/61++SfEeLdL._AC_SY450_.jpg'),
    new Product('Monitor DELL 17\'\'', 'Monitor DELL a tubo catodico che non si rifiuta di eseguire Windows 8: attenzione alla profondità', 99.99, 'Case', 'https://www.picclickimg.com/d/l400/pict/394053029167_/Rare-Ecran-DELL-17-CRT-VGA-E771A-moniteur.jpg'),
    new Product('Cup Holder RGB', 'Per non perdere le tue bevande anche nelle sessioni più notturne!', 399.99, 'Desk Hardware', 'https://ae01.alicdn.com/kf/H9b14031c02b84525bfb7f09dcced5678f/2-6-inche-Universal-LED-Car-Cup-Holder-RGB-Light-Mat-Pad-Drink-Coaster-Interior-Decoration.jpg_Q90.jpg_.webp'),
];

let userCart = [];

// console.log(products);
generateProductsContent(products);

function generateProductsContent(productsList){
    let somma = 0;
    // azzeriamo la pagina dei prodotti prima di popolarla
    document.getElementById('products').innerHTML = "";

    productsList.forEach((element, index) => {
        // console.log(element);

        const {name, description, price, imageUrl, likes} = element;

        document.getElementById('products').innerHTML += `
        <div class="product">
            <img src="${imageUrl}" alt="${name} image">
            <h4 class="title">${name}</h4>
            <p>${description}</p>
            <hr>
            <span class="price">${price}</span>
            <p class="product-hearts" product-index="${index}">&hearts; ${likes}</p>
            <button class="buy-now" data-product-name="${name}" data-product-price="${price}">Buy now</button>
        </div>
        `
    });

    document.querySelectorAll('.product-hearts').forEach((element) => {
        element.addEventListener('click', function(){
                this.innerHTML = "&hearts; " + productsList[this.getAttribute('product-index')].addLike();
            });
        });

    document.querySelectorAll('.buy-now').forEach((element) => {
        element.addEventListener('click', function(){
            somma = 0;

            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            const productInCart = {productName, productPrice};
            userCart.push(productInCart);

            // console.log(userCart);
            const newCartProduct = document.createElement("li");
            newCartProduct.innerHTML = `<li class="cart-element">${productName}</li>`;

            newCartProduct.addEventListener('click', () => {
                userCart.splice( userCart.indexOf(productInCart), 1);
                somma -= productPrice;
                document.querySelector('div#cart span').innerHTML = somma.toFixed(2);
                newCartProduct.remove()
                console.warn(userCart);
            } )

            document.querySelector('div.cart-elements').appendChild(newCartProduct);

            userCart.forEach((element) => {
                console.warn(userCart);
                somma += parseFloat(element.productPrice);
            })

            document.querySelector('div#cart span').innerHTML = somma.toFixed(2);
            // console.warn();
        });
    });

    document.querySelector('button.cart-cleaner').addEventListener("click", (element) => {
        somma = 0;
        userCart = [];
        document.querySelector('div#cart span').innerHTML = "0.00";
        document.querySelector('div.cart-elements').innerHTML = "";
    });
}



// Classes!!
