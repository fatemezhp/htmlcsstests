let products = [
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 1,
    image: "./images/13131700-200-10 1 3.png",
    size: "XL",
    color: "./images/Group 1000001422.png",
    price: 500000,
    off: 80000,
    quantity: 1,
  },
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 2,
    image: "./images/13131700-200-10 1 3.png",
    size: "sm",
    color: "./images/Group 1000001422.png",
    price: 500000,
    off: 80000,
    quantity: 1,
  },
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 3,
    image: "./images/13131700-200-10 1 3.png",
    size: "XL",
    color: "./images/Group 1000001422.png",
    price: 300000,
    off: 10000,
    quantity: 1,
  },
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 4,
    image: "./images/13131700-200-10 1 3.png",
    size: "XL",
    color: "./images/Group 1000001422.png",
    price: 400000,
    off: 10000,
    quantity: 1,
  },
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 5,
    image: "./images/13131700-200-10 1 3.png",
    size: "XL",
    color: "./images/Group 1000001422.png",
    price: 100000,
    off: 10000,
    quantity: 1,
  },
  {
    title: "by ted پلوشرت مردانه آبی برند ",
    id: 6,
    image: "./images/13131700-200-10 1 3.png",
    size: "XL",
    color: "./images/Group 1000001422.png",
    price: 200000,
    off: 10000,
    quantity: 1,
  },
];

// elements selection

const productsElement = document.getElementById("products");
const totalQuantity = document.getElementById("totalQuantity");
const totalPrice = document.getElementById("totalPrice");

// initialize cart and display products

function initializeCart() {
  productsElement.innerHTML = "";
  products.map((product) => {
    return (productsElement.innerHTML += `<div id="card" class="sm:col-span-12 col-span-12 shadow grid grid-cols-12 rounded">
            <!-----------------------------------right-->
            <div class="p-2 col-span-7 grid grid-cols-4">
            <div class="col-span-1 flex flex-col gap-4">
            <div class="rounded border border-gray-200  h-[90px] flex items-center">
            <img class="m-auto" src='${product.image}' alt="">
            </div>
            <div class="rounded border border-gray-200 h-9 flex items-center justify-evenly">
            <button  class="text-xl mb-1 text-center text-green-600 font-semibold" onclick="increaseQuantity(${
              product.id
            })" >+</button>
            <input   type="number" id="quantityInput" value='${
              product.quantity
            }' min="1" class="w-7 text-center appearance-none" >
            <button   class="align-middle text-xl mb-1 text-center text-red-600 font-semibold" onclick="decreaseQuantity(${
              product.id
            })" >-</button>
            </div>
            </div>
                                    <div class="col-span-3 pr-8 text-sm leading-8">
                                        <h6 id="tit1">${product.title}</h6>
                                        <span class="text-base">${
                                          product.size
                                        }</span>
                                        <img class="w-16 mt-3" src='${
                                          product.color
                                        }' alt="">
                                    </div>
                                </div>
                                <!-----------------------------------left -->
                                <div class="col-span-5 flex justify-end p-4">
                                <div class="flex flex-col justify-between">
                                    <button onclick="removeProduct(${
                                      product.id
                                    })" class="flex justify-end" class="delete">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.25 4.5H3.75H15.75" stroke="#D1182B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z" stroke="#D1182B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.5 8.25V12.75" stroke="#D1182B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 8.25V12.75" stroke="#D1182B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    </button>
                                    
                                    <div class="">
                                        <div class="text-xs text-red-600 font-medium">تخفیف
                                        <span class="text-sm">${
                                          product.off
                                        }</span></div>
                                            <div class="text-lg" id="price1"><span>${
                                              product.price * product.quantity
                                            }</span><span class="text-sm"> تومان</span> </div>
                                            
                                            </div>
                                        </div>
                                        
                            </div>
                        </div>`);
  });

  let totalQ = null;

  products.forEach((item) => {
    totalQ += item.quantity;
  });
  totalQuantity.innerHTML = `(${totalQ} کالا) `;

  let totalP = null;

  products.forEach((item) => {
    totalP += item.price * item.quantity;
  });
  totalPrice.innerHTML = `${totalP} تومان`;
}

function increaseQuantity(id) {
  const targetProduct = products.filter((product) => product.id === id);
  targetProduct[0].quantity += 1;
  initializeCart();
}

function decreaseQuantity(id) {
  const targetProduct = products.filter((product) => product.id === id);

  if (targetProduct[0].quantity > 1) {
    targetProduct[0].quantity -= 1;
  }
  initializeCart();
}

function removeProduct(id) {
  const targetIndex = products.findIndex((item) => item.id === id);
  products.splice(targetIndex, 1);
  initializeCart();
}

// initial Cart

initializeCart();
