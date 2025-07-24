const products = [
    {
        id: 1,
        productImg: "./images/Rectangle 15 (18).png",
        title: "Apple laptop D89 RAM 16GB",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Electronics",
        rating: 4.7,
        saleStock: 81,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 189,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Computers",
    },
    {
        id: 2,
        productImg: "./images/Rectangle 15 (1).png",
        title: "Joystick Game Controller",
        currentPrice: 99.99,
        salePrice: 139.99,
        category: "Gaming",
        rating: 4.5,
        saleStock: 51,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 125,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Entertainment",
    },
    {
        id: 3,
        productImg: "./images/Rectangle 15 (2).png",
        title: "Mavic Air Phantom 4 pro",
        currentPrice: 399.99,
        salePrice: 519.99,
        category: "Electronics",
        rating: 4.6,
        saleStock: 25,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 205,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Entertainment",
    },
    {
        id: 4,
        productImg: "./images/Rectangle 15 (3).png",
        title: "Nikon D7500 20.9 Mp Touchscreen",
        currentPrice: 299.99,
        salePrice: 319.99,
        category: "Electronics",
        rating: 4.9,
        saleStock: 42,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 254,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Gadgets",
    },
    {
        id: 5,
        productImg: "./images/Rectangle 15 (4).png",
        title: "Apple Airpods Pro White",
        currentPrice: 39.99,
        salePrice: 69.99,
        category: "Electronics",
        rating: 4.2,
        saleStock: 86,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 215,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Gadgets",
    },
    {
        id: 6,
        productImg: "./images/Rectangle 15 (5).png",
        title: "Apple iMac Retina 5K 27",
        currentPrice: 279.99,
        salePrice: 319.99,
        category: "Electronics",
        rating: 4.4,
        saleStock: 20,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 191,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Computers",
    },
    {
        id: 7,
        productImg: "./images/Rectangle 15 (6).png",
        title: "Apple iPhone X 256GB 3GB RAM",
        currentPrice: 289.99,
        salePrice: 329.99,
        category: "Electronics",
        rating: 4.0,
        saleStock: 98,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 228,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Phones",
    },
    {
        id: 8,
        productImg: "./images/Rectangle 15 (7).png",
        title: "BEATS 1 Wireless Headphone",
        currentPrice: 89.99,
        salePrice: 119.99,
        category: "Gaming",
        rating: 4.2,
        saleStock: 61,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 290,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Gadgets",
    },
    {
        id: 9,
        productImg: "./images/Rectangle 15 (8).png",
        title: "Lanu Wi-fi roater",
        currentPrice: 159.99,
        salePrice: 179.99,
        category: "Electronics",
        rating: 4.8,
        saleStock: 53,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 710,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Gadgets",
    },
    {
        id: 10,
        productImg: "./images/Rectangle 15 (9).png",
        title: "Samsung TV S33",
        currentPrice: 359.99,
        salePrice: 429.99,
        category: "Electronics",
        rating: 4.3,
        saleStock: 87,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 354,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Computers",
    },
    {
        id: 11,
        productImg: "./images/Rectangle 15 (10).png",
        title: "Huni water heaters",
        currentPrice: 39.99,
        salePrice: 49.99,
        category: "Grocery",
        rating: 4.1,
        saleStock: 48,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 298,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Grocery",
    },
    {
        id: 12,
        productImg: "./images/Rectangle 15 (11).png",
        title: "Hi sneakers",
        currentPrice: 99.99,
        salePrice: 119.99,
        category: "Clothes",
        rating: 4.7,
        saleStock: 12,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 128,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Clothes",
    },
    {
        id: 13,
        productImg: "./images/Rectangle 15 (12).png",
        title: "Coffee machine life-meaning",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Grocery",
        rating: 4.4,
        saleStock: 19,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 418,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Kitchen",
    },
    {
        id: 14,
        productImg: "./images/Rectangle 15 (13).png",
        title: "Washing machine M24",
        currentPrice: 369.99,
        salePrice: 429.99,
        category: "Grocery",
        rating: 4.5,
        saleStock: 66,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 522,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Grocery",
    },
    {
        id: 15,
        productImg: "./images/Rectangle 15 (14).png",
        title: "Mi S345 RAM 8GB",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Electronics",
        rating: 4.9,
        saleStock: 99,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 635,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Phones",
    },
    {
        id: 16,
        productImg: "./images/Rectangle 15 (15).png",
        title: "Rayno toaster F45",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Grocery",
        rating: 4.3,
        saleStock: 112,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 385,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Kitchen",
    },
    {
        id: 17,
        productImg: "./images/Rectangle 15 (16).png",
        title: "Beast iron steel M443",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Grocery",
        rating: 4.1,
        saleStock: 57,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 655,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Grocery",
    },
    {
        id: 18,
        productImg: "./images/Rectangle 15 (17).png",
        title: "HP laptop U43 Gen11",
        currentPrice: 59.99,
        salePrice: 89.99,
        category: "Electronics",
        rating: 4.8,
        saleStock: 78,
        isAvailable: true,
        authorImg: "./images/author-img.png",
        author: "Eshop Spot",
        reviews: 258,
        star: "./images/star.png",
        cart: "./images/shopping-cart.png",
        type: "Computers",
    },
];

const leftBars = [
    {
        barImgClass: "fa-solid fa-house",
        barText: "Home",
        functionName: "home",
        onclickFunc() {
            decider(this.functionName)
        },
    },
    {
        barImgClass: "fa-solid fa-house navi-icon",
        barText: "Discover",
        barChild: [
            "Electronics",
            "Clothes",
            "Gaming",
            "Grocery",
        ],
        functionName: "discover",
        onclickFunc() {
            decider(this.functionName)
        },
    },
    {
        barImgClass: "fa-solid fa-box",
        barText: "Popular Products",
        functionName: "popularity",
        onclickFunc() {
            decider(this.functionName)
        },
    },
    {
        barImgClass: "fa-solid fa-user",
        barText: "Top Authors",
        functionName: "topAuthors",
        onclickFunc() {
            decider(this.functionName)
        },
    },
    {
        barImgClass: "fa-solid fa-square-rss",
        barText: "Feed",
        functionName: "feed",
        onclickFunc() {
            decider(this.functionName)
        },
    },
    {
        barImgClass: "fa-solid fa-headset",
        barText: "Contact",
        functionName: "contact",
        onclickFunc() {
            decider(this.functionName)
        },
    }
]


class LeftBar {
    constructor(barImgClass, barText, barChild, functionName, onclickFunc,) {
        this.barImgClass = barImgClass;
        this.barText = barText;
        this.barChild = barChild;
        this.functionName = functionName;
        this.onclickFunc = onclickFunc;

        this.liContainer = null;
    }
    display() {
        const li = document.createElement("li");
        li.className = "nav-list";
        li.addEventListener("click", () => {
            this.onclickFunc(this.functionName);
        })

        const mainDiv = document.createElement("div");
        mainDiv.className = "navi";
        mainDiv.innerHTML = `
            <i class="${this.barImgClass}"></i>
            <span>${this.barText}</span>
        `;
        li.appendChild(mainDiv);

        // If has children
        if (this.barChild) {
            this.liContainer = document.createElement("div");
            this.liContainer.className = "nimadir"
            this.liContainer.innerHTML = `<div class="line"><div class="indicator"></div></div>`
            this.liContainer.style.display = "none"

            const childList = document.createElement("ul");
            childList.className = "inside-ul";

            this.barChild.forEach(childText => {
                const childLi = document.createElement("li");
                childLi.className = "selected-li";
                childLi.textContent = childText;

                childLi.addEventListener("click", (e) => {
                    e.stopPropagation()
                    filterByCategory(childText);
                });

                childList.appendChild(childLi);
            });

            // Toggle visibility on click
            mainDiv.addEventListener("click", (e) => {
                e.stopPropagation();
                this.liContainer.style.display = this.liContainer.style.display === "none" ? "flex" : "none";
                discovery();
            });

            this.liContainer.appendChild(childList)
            li.appendChild(this.liContainer);

        }
        return li;
    }
}

function hideAllLiContainers() {
    document.querySelectorAll(".nimadir").forEach(container => {
        container.style.display = "none";
    });
}



const leftNav = document.querySelector(".left-nav-bar");
leftBars.forEach(obj => {
    const leftBar = new LeftBar(obj.barImgClass, obj.barText, obj.barChild, obj.functionName, obj.onclickFunc,);
    leftNav.appendChild(leftBar.display())
})
const submenuItems = document.querySelectorAll(".selected-li");
const indicator = document.querySelector(".indicator");

submenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const offset = item.offsetTop;
        indicator.style.transition = "top 0.4s ease"
        indicator.style.top = `${offset - 209}px`;

        submenuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

let leftNavIsVisible = true;

function leftNavDisplay() {
    if (leftNavIsVisible) {
        leftNav.innerHTML = ``;
        leftNavIsVisible = false;
    } else {
        leftBars.forEach(obj => {
            const leftBar = new LeftBar(obj.barImgClass, obj.barText, obj.barChild);
            leftNav.appendChild(leftBar.display())
        })
        const submenuItems = document.querySelectorAll(".selected-li");
        const indicator = document.querySelector(".indicator");

        submenuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                const offset = item.offsetTop;
                indicator.style.top = `${offset - 209}px`;

                submenuItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            });
        });
        leftNavIsVisible = true;
    }
}

const addedProducts = [];

function proDisplay() {
    class Product {
        constructor(id, productImg, title, currentPrice, salePrice, category, rating, saleStock, authorImg, author, reviews, star, cart, isAvailable, type) {
            this.id = id;
            this.productImg = productImg;
            this.title = title;
            this.currentPrice = currentPrice;
            this.salePrice = salePrice;
            this.category = category;
            this.rating = rating;
            this.saleStock = saleStock;
            this.authorImg = authorImg;
            this.author = author;
            this.reviews = reviews;
            this.star = star;
            this.cart = cart;
            this.isAvailable = isAvailable;
            this.type = type;
        }

        render() {
            const div = document.createElement("div");
            div.className = "product-card";
            div.innerHTML = `
                <div class="product-img">
                    <img src="${this.productImg}">
                </div>

                <div class="product-info">
                    <img src="${this.authorImg}" width="25px" height="25px">
                    <div class="product-rest">
                        <div class="product-title">
                            <h2>${this.title}</h2>
                            <p>${this.author}</p>
                        </div>
                        <div class="product-bottom">
                            <div class="product-price">
                                <div class="price-tag"><span class="current-price">$${this.currentPrice}</span> <del>$${this.salePrice}</del></div>
                                <div class="star-tag"><span>${this.saleStock} sales</span> <div><img src="${this.star}"> <span>${this.rating}(${this.reviews})</span></div></div>
                            </div>
                            <div class="product-cart"><img src="${this.cart}"></div>
                        </div>
                    </div>
                </div>
            `;
            const cartCountDisplay = document.querySelector(".cart-count");
            div.querySelector(".product-cart").addEventListener("click", () => {
                const alreadyAdded = addedProducts.some(p => p.id === this.id);
                if (!alreadyAdded) {
                    addedProducts.push(this);
                }
                let cartCount = addedProducts.length;
                console.log(cartCount)
                cartCountDisplay.textContent = cartCount;
            });

            return div;
        }
    }


    const container = document.querySelector(".product-list");

    products.forEach(obj => {
        const product = new Product(obj.id, obj.productImg, obj.title, obj.currentPrice, obj.salePrice, obj.category, obj.rating, obj.saleStock, obj.authorImg, obj.author, obj.reviews, obj.star, obj.cart, obj.type)
        container.appendChild(product.render())
    });
}
proDisplay();

// dark mode
let notFuoundWhite = "2";
let noLeft = `
    <div class="notFound">
        <img src="./site-images/shrug (${notFuoundWhite}).png">
        <p class="not-found-text">Unfortunately, the product is not found!</p>
    </div>
`;

const moonSun = document.querySelector(".night-mode");
let isNight = false;
function nightMode() {
    if (!isNight) {
        document.documentElement.style.setProperty('--left-bar-color-', '#191922');
        document.documentElement.style.setProperty('--hover-color-', '#201e2c');
        document.documentElement.style.setProperty('--input-color-', '#1f1e24');
        document.documentElement.style.setProperty('--dark-text-', '#fff');
        document.documentElement.style.setProperty('--light-text-', '#000');
        document.documentElement.style.setProperty('--right-bar-color-', '#15141b');
        document.documentElement.style.setProperty('--product-img-', '#191922');
        document.documentElement.style.setProperty('--product-img-hover-', '#292931ff');


        moonSun.classList.replace("fa-moon", "fa-sun");
        isNight = true;
    } else {
        isNight = false;
        document.documentElement.style.setProperty('--left-bar-color-', '#F9FAFB');
        document.documentElement.style.setProperty('--hover-color-', '#e5e8eb');
        document.documentElement.style.setProperty('--input-color-', '#F3F5F7');
        document.documentElement.style.setProperty('--dark-text-', '#000');
        document.documentElement.style.setProperty('--light-text-', '#fff');
        document.documentElement.style.setProperty('--right-bar-color-', '#ffffff');
        document.documentElement.style.setProperty('--product-img-', '#fafafd');
        document.documentElement.style.setProperty('--product-img-hover-', '#e1e4e9');


        moonSun.classList.replace("fa-sun", "fa-moon");
    }
}
moonSun.addEventListener("click", () => {
    nightMode();
})
// dark mode


// filter by input
const input = document.querySelector(".search-input");
const mainDiv = document.querySelector(".product-list");

function showNoLeft() {
    mainDiv.innerHTML = noLeft;
}

function notFoundDisplay() {
    mainDiv.innerHTML = "";
    const searchValue = input.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchValue)
    );

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card";

            div.innerHTML = `
                <div class="product-img">
                    <img src="${product.productImg}">
                </div>

                <div class="product-info">
                    <img src="${product.authorImg}" width="25px" height="25px">
                    <div class="product-rest">
                        <div class="product-title">
                            <h2>${product.title}</h2>
                            <p>${product.author}</p>
                        </div>
                        <div class="product-bottom">
                            <div class="product-price">
                                <div class="price-tag"><span class="current-price">$${product.currentPrice}</span> <del>$${product.salePrice}</del></div>
                                <div class="star-tag"><span>${product.saleStock} sales</span> <div><img src="${product.star}"> <span>${product.rating}(${product.reviews})</span></div></div>
                            </div>
                            <div class="product-cart"><img src="${product.cart}"></div>
                        </div>
                    </div>
                </div>
            `;
            const cartCountDisplay = document.querySelector(".cart-count");
            div.querySelector(".product-cart").addEventListener("click", () => {
                const alreadyAdded = addedProducts.some(p => p.id === product.id);
                if (!alreadyAdded) {
                    addedProducts.push(product);
                }

                let cartCount = addedProducts.length;
                console.log(cartCount);
                cartCountDisplay.textContent = cartCount;
            });
            mainDiv.appendChild(div);
        });
    } else {
        showNoLeft()
    }
}

input.addEventListener("input", () => {
    notFoundDisplay();
});

moonSun.addEventListener("click", () => {

    notFuoundWhite = notFuoundWhite === "2" ? "1" : "2";

    noLeft = `
        <div class="notFound">
            <img src="./site-images/shrug (${notFuoundWhite}).png">
            <p class="not-found-text">Unfortunately, the product is not found!</p>
        </div>
    `;
})

// filter by input

// filter by type

function filterByType(proType) {
    if (proType == "all") {
        mainDiv.innerHTML = "";
        proDisplay()
    } else {
        mainDiv.innerHTML = "";
        const typeFilteredProducts = products.filter(product => {
            return product.type.toLowerCase() === proType.toLowerCase();
        });
        console.log(proType)

        if (typeFilteredProducts.length > 0) {
            typeFilteredProducts.forEach(product => {
                const div = document.createElement("div")
                div.className = "product-card"
                div.innerHTML = `
                    <div class="product-img">
                        <img src="${product.productImg}">
                    </div>

                    <div class="product-info">
                        <img src="${product.authorImg}" width="25px" height="25px">
                        <div class="product-rest">
                            <div class="product-title">
                                <h2>${product.title}</h2>
                                <p>${product.author}</p>
                            </div>
                            <div class="product-bottom">
                                <div class="product-price">
                                    <div class="price-tag"><span class="current-price">$${product.currentPrice}</span> <del>$${product.salePrice}</del></div>
                                    <div class="star-tag"><span>${product.saleStock} sales</span> <div><img src="${product.star}"> <span>${product.rating}(${product.reviews})</span></div></div>
                                </div>
                                <div class="product-cart"><img src="${product.cart}"></div>
                            </div>
                        </div>
                    </div>
                `;
                const cartCountDisplay = document.querySelector(".cart-count");
                div.querySelector(".product-cart").addEventListener("click", () => {
                    const alreadyAdded = addedProducts.some(p => p.id === product.id);
                    if (!alreadyAdded) {
                        addedProducts.push(product);
                    }

                    let cartCount = addedProducts.length;
                    console.log(cartCount);
                    cartCountDisplay.textContent = cartCount;
                });
                mainDiv.appendChild(div);
            })
        } else {
            function notFoundChange(order) {
                mainDiv.innerHTML = `
                    <div class="notFound">
                        <img src="./site-images/shrug (${order}).png">
                        <p class="not-found-text">Unfortunately, the product is not found!</p>
                    </div>
                `
            }
            notFoundChange(notFuoundWhite);
        }

    }

}

// filter by type

// filter by category

function filterByCategory(proCategory) {
    mainDiv.innerHTML = "";

    const categoryFilteredProducts = products.filter(product =>
        product.category.toLowerCase() === proCategory.toLowerCase()
    );

    if (categoryFilteredProducts.length > 0) {
        categoryFilteredProducts.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card";
            div.innerHTML = `
                <div class="product-img">
                    <img src="${product.productImg}">
                </div>

                <div class="product-info">
                    <img src="${product.authorImg}" width="25px" height="25px">
                    <div class="product-rest">
                        <div class="product-title">
                            <h2>${product.title}</h2>
                            <p>${product.author}</p>
                        </div>
                        <div class="product-bottom">
                            <div class="product-price">
                                <div class="price-tag"><span class="current-price">$${product.currentPrice}</span> <del>$${product.salePrice}</del></div>
                                <div class="star-tag"><span>${product.saleStock} sales</span> <div><img src="${product.star}"> <span>${product.rating}(${product.reviews})</span></div></div>
                            </div>
                            <div class="product-cart"><img src="${product.cart}"></div>
                        </div>
                    </div>
                </div>
            `;

            const cartCountDisplay = document.querySelector(".cart-count");
            div.querySelector(".product-cart").addEventListener("click", () => {
                const alreadyAdded = addedProducts.some(p => p.id === product.id);
                if (!alreadyAdded) {
                    addedProducts.push(product);
                }

                let cartCount = addedProducts.length;
                console.log(cartCount);
                console.log("hello");
                cartCountDisplay.textContent = cartCount;
            });

            mainDiv.appendChild(div);
        });
    } else {
        function notFoundChange(order) {
            mainDiv.innerHTML = `
                <div class="notFound">
                    <img src="./site-images/shrug (${order}).png">
                    <p class="not-found-text">Unfortunately, the product is not found!</p>
                </div>
            `;
        }

        notFoundChange(notFuoundWhite);
    }
}


// filter by category

// filter by popularity

function popularity() {
    mainDiv.innerHTML = "";
    const filterPopularity = products.filter(product => {
        return product.reviews >= 300;
    })

    if (filterPopularity.length > 0) {
        filterPopularity.forEach(product => {
            const div = document.createElement("div")
            div.className = "product-card"
            div.innerHTML = `
                <div class="product-img">
                    <img src="${product.productImg}">
                </div>

                <div class="product-info">
                    <img src="${product.authorImg}" width="25px" height="25px">
                    <div class="product-rest">
                        <div class="product-title">
                            <h2>${product.title}</h2>
                            <p>${product.author}</p>
                        </div>
                        <div class="product-bottom">
                            <div class="product-price">
                                <div class="price-tag"><span class="current-price">$${product.currentPrice}</span> <del>$${product.salePrice}</del></div>
                                <div class="star-tag"><span>${product.saleStock} sales</span> <div><img src="${product.star}"> <span>${product.rating}(${product.reviews})</span></div></div>
                            </div>
                            <div class="product-cart"><img src="${product.cart}"></div>
                        </div>
                    </div>
                </div>
            `;
            const cartCountDisplay = document.querySelector(".cart-count");
            div.querySelector(".product-cart").addEventListener("click", () => {
                const alreadyAdded = addedProducts.some(p => p.id === product.id);
                if (!alreadyAdded) {
                    addedProducts.push(product);
                }

                let cartCount = addedProducts.length;
                console.log(cartCount);
                cartCountDisplay.textContent = cartCount;
            });
            mainDiv.appendChild(div);
        });
    } else {
        function notFoundChange(order) {
            mainDiv.innerHTML = `
                <div class="notFound">
                    <img src="./site-images/shrug (${order}).png">
                    <p class="not-found-text">Unfortunately, the product is not found!</p>
                </div>
            `;
        }
        notFoundChange(notFuoundWhite);
    }

}

// filter by popularity

// press discover

function discovery() {
    mainDiv.innerHTML = "";
    const discoveryFilteredProducts = products.filter(product => {
        return product.category.toLowerCase() === "electronics";
    })

    if (discoveryFilteredProducts.length > 0) {
        discoveryFilteredProducts.forEach(product => {
            const div = document.createElement("div")
            div.className = "product-card"
            div.innerHTML = `
                <div class="product-img">
                    <img src="${product.productImg}">
                </div>

                <div class="product-info">
                    <img src="${product.authorImg}" width="25px" height="25px">
                    <div class="product-rest">
                        <div class="product-title">
                            <h2>${product.title}</h2>
                            <p>${product.author}</p>
                        </div>
                        <div class="product-bottom">
                            <div class="product-price">
                                <div class="price-tag"><span class="current-price">$${product.currentPrice}</span> <del>$${product.salePrice}</del></div>
                                <div class="star-tag"><span>${product.saleStock} sales</span> <div><img src="${product.star}"> <span>${product.rating}(${product.reviews})</span></div></div>
                            </div>
                            <div class="product-cart"><img src="${product.cart}"></div>
                        </div>
                    </div>
                </div>
            `;
            const cartCountDisplay = document.querySelector(".cart-count");
            div.querySelector(".product-cart").addEventListener("click", () => {
                const alreadyAdded = addedProducts.some(p => p.id === product.id);
                if (!alreadyAdded) {
                    addedProducts.push(product);
                }

                let cartCount = addedProducts.length;
                console.log(cartCount);
                console.log("hello");
                cartCountDisplay.textContent = cartCount;
            });
            mainDiv.appendChild(div);
        });
    } else {
        function notFoundChange(order) {
            mainDiv.innerHTML = `
                <div class="notFound">
                    <img src="./site-images/shrug (${order}).png">
                    <p class="not-found-text">Unfortunately, the product is not found!</p>
                </div>
            `
        }
        notFoundChange(notFuoundWhite);
    }
}

// press discover

// press top authors
const body = document.querySelector("body");
const authorBar = document.querySelector(".best-author");
const xBtn = document.querySelector(".x-btn");
const overlayer = document.querySelector(".overlayer")
let authorBarIsVisible = false;

function bestAuthors() {
    if (!authorBarIsVisible) {
        authorBarIsVisible = true;
        authorBar.style.display = "flex";
        overlayer.style.display = "block"
    }
}
xBtn.addEventListener("click", () => {
    authorBarIsVisible = false;
    authorBar.style.display = "none";
    overlayer.style.display = "none";
});
overlayer.addEventListener("click", () => {
    authorBarIsVisible = false;
    authorBar.style.display = "none";
    overlayer.style.display = "none";
})

// press top authors

// press feed

const feed = document.querySelector(".feed");
const feedBtn = document.querySelector(".feed-btn");
const sendBtn = document.querySelector(".send-btn");
const feedMain = document.querySelector(".feed-main");
const feedLoad = document.querySelector(".feed-load");
const feedThank = document.querySelector(".feed-thank");
const feedComment = document.querySelector("#feed-text");
const feedLast = document.querySelector(".feed-last");
let feedIsVisible = false;

function feedDisplay() {
    if (!feedIsVisible) {
        feed.style.display = "flex";
        overlayer.style.display = "block";
        feedIsVisible = true;
    }
}

feedBtn.addEventListener("click", () => {
    feedIsVisible = false;
    feed.style.display = "none";
    overlayer.style.display = "none"
});
overlayer.addEventListener("click", () => {
    feedIsVisible = false;
    feed.style.display = "none";
    overlayer.style.display = "none";
});
sendBtn.addEventListener("click", () => {
    let commentValidity = feedComment.value.trim().length;

    if (commentValidity > 0) {
        feedLoad.style.transition = "none";
        feedLoad.style.transform = "rotate(0deg)";
        feedLoad.style.display = "flex";
        feedMain.style.display = "none";

        requestAnimationFrame(() => {
            feedLoad.style.transition = "transform 2s linear";
            feedLoad.style.transform = "rotate(1500deg)";
        });

        setTimeout(() => {
            feedLoad.style.display = "none";
            feedThank.style.display = "block";
            feedLoad.style.transform = "rotate(0deg)";
        }, 2000);
    } else {
        alert("You need to drop your comment first.");
    }
});
feedLast.addEventListener("click", () => {
    feedThank.style.display = "none";
    feedMain.style.display = "flex";
    feed.style.display = "none";
    overlayer.style.display = "none";
    feedIsVisible = false;
    feedComment.value = "";
})

// press feed

// press contact
const contact = document.querySelector(".contact");
const contactBtn = document.querySelector(".contact-btn");
let contactIsVisible = false;

function contactDisplay() {
    if (!contactIsVisible) {
        contactIsVisible = true;
        contact.style.display = "flex";
        overlayer.style.display = "block";
    }
}
contactBtn.addEventListener("click", () => {
    contactIsVisible = false;
    contact.style.display = "none";
    overlayer.style.display = "none";
})
overlayer.addEventListener("click", () => {
    contactIsVisible = false;
    contact.style.display = "none";
    overlayer.style.display = "none";
})

// press contact

// press home

function home() {
    proDisplay();
    hideAllLiContainers();
}

// press home

// decide the function

function decider(name) {
    if (name == "home") {
        mainDiv.innerHTML = "";
        home();
    } else if (name == "discover") {
        discovery();
    } else if (name == "popularity") {
        popularity();
    } else if (name == "topAuthors") {
        bestAuthors();
    } else if (name == "feed") {
        feedDisplay();
    } else if (name == "contact") {
        contactDisplay();
    }
}

// decide the function

// cart

const cartIcon = document.querySelector(".cart-icon");
const cartBar = document.querySelector(".cart-bar");
const cartX = document.querySelector(".cart-x")
const cartTotal = document.querySelector(".cart-total");
const cartBuy = document.querySelector(".cart-buy");
const cartClear = document.querySelector(".cart-clear");
let cartIsOpen = false;

function cartDisplay() {
    if (!cartIsOpen) {
        cartIsOpen = true;
        cartBar.style.display = "flex";
        overlayer.style.display = "block";
        cartListDisplay();
    }
}
cartIcon.addEventListener("click", () => {
    cartDisplay();
})
cartX.addEventListener("click", () => {
    cartIsOpen = false;
    cartBar.style.display = "none";
    overlayer.style.display = "none";
})
overlayer.addEventListener("click", () => {
    cartIsOpen = false;
    cartBar.style.display = "none";
    overlayer.style.display = "none";
})

// cart

// add to cart

function cartListDisplay() {
    let totalPrice = 0;
    class CartList {
        constructor(id, productImg, title, currentPrice, salePrice, category, rating, saleStock, authorImg, author, reviews, star, cart, isAvailable, type) {
            this.id = id;
            this.productImg = productImg;
            this.title = title;
            this.currentPrice = currentPrice;
            this.salePrice = salePrice;
            this.category = category;
            this.rating = rating;
            this.saleStock = saleStock;
            this.authorImg = authorImg;
            this.author = author;
            this.reviews = reviews;
            this.star = star;
            this.cart = cart;
            this.isAvailable = isAvailable;
            this.type = type;
        }
        render() {
            const cartDiv = document.createElement("div");
            cartDiv.className = "cart-div";
            cartDiv.innerHTML = `
                <div class="product-cart-img">
                    <img src="${this.productImg}">
                </div>

                <div class="product-cart-info">
                    <img src="${this.authorImg}" width="25px" height="25px">
                    <div class="product-cart-rest">
                        <div class="product-cart-title">
                            <h2>${this.title}</h2>
                            <p>${this.author}</p>
                        </div>
                        <div class="product-cart-bottom">
                            <div class="product-cart-price">
                                <div class="price-cart-tag"><span class="current-cart-price">$${this.currentPrice}</span> <del>$${this.salePrice}</del></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            totalPrice += this.currentPrice;
            console.log(totalPrice)

            return cartDiv;
        }
    }
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    addedProducts.forEach(obj => {
        const cartProducts = new CartList(obj.id, obj.productImg, obj.title, obj.currentPrice, obj.salePrice, obj.category, obj.rating, obj.saleStock, obj.authorImg, obj.author, obj.reviews, obj.star, obj.cart, obj.type);
        cartContainer.appendChild(cartProducts.render());
    });
    console.log(totalPrice)
    cartTotal.textContent = totalPrice;
}

cartBuy.addEventListener("click", () => {
    addedProducts.length = 0;
    cartListDisplay();
    const cartCountDisplay = document.querySelector(".cart-count");
    cartCountDisplay.textContent = 0;
})
cartClear.addEventListener("click", () =>{
    addedProducts.length = 0;
    cartListDisplay();
    const cartCountDisplay = document.querySelector(".cart-count");
    cartCountDisplay.textContent = 0;
})
// add to cart


