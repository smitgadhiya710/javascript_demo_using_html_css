const data = [
  {
    img: "https://cdn.pixabay.com/photo/2020/05/29/22/00/field-5236879_640.jpg",
    title: "this is first image",
    content:
      "Pellentesque faucibus eget sem eget ultrices. Nunc a sem vitae magna pulvinar maximus posuere sed tellus. In vehicula mi nisi. Maecenas faucibus sodales risus dictum suscipit. Fusce ut suscipit lacus, id dignissim lectus. Aliquam et sapien velit. Morbi id neque nunc. Vivamus ullamcorper feugiat enim vitae porttitor. Nulla semper ut tortor id consequat. Vestibulum elementum interdum nisl, a rutrum ex faucibus aliquam. Curabitur velit leo, porttitor ac nunc sit amet, porttitor malesuada ni",
  },
  {
    img: "https://cdn.pixabay.com/photo/2024/02/22/22/37/mountain-8590965_1280.jpg ",
    title: "this is second imaga",
    content:
      "The gentle sway of branches, the chorus of waking birds, and the first whispers of sunlight painting the sky in hues of pink and gold—all combine to create a fleeting moment of perfect harmony. It is in these moments that we find ourselves most connected to the rhythm of nature, ",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/09/30/14/30/lavender-7489530_640.jpg",
    title: "Welcome",
    content:
      "Pellentesque faucibus eget sem eget ultrices. Nunc a sem vitae magna pulvinar maximus posuere sed tellus. In vehicula mi nisi. Maecenas faucibus sodales risus dictum suscipit. Fusce ut suscipit lacus, id dignissim lectus. Aliquam et sapien velit. Morbi id neque nunc. Vivamus ullamcorper feugiat enim vitae porttitor. Nulla semper ut tortor id consequat. Vestibulum elementum interdum nisl, a rutrum ex faucibus aliquam. Curabitur velit leo, porttitor ac nunc sit amet, porttitor malesuada nibh",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/11/28/09/02/road-5784006_640.jpg",
    title: "this is forth image",
    content:
      "Morbi id neque nunc. Vivamus ullamcorper feugiat enim vitae porttitor. Nulla semper ut tortor id consequat. Vestibulum elementum interdum nisl, a rutrum ex faucibus aliquam. Curabitur velit leo, porttitor ac nunc sit amet, porttitor malesuada nibh  ",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/08/04/10/21/lake-6521474_640.jpg",
    title: "this is fifth image",
    content:
      "In the quiet stillness of early morning, when the world is wrapped in a blanket of soft mist, there exists a profound sense of serenity. The gentle sway of branches, the chorus of waking birds, and the first whispers of sunlight painting the sky in hues of pink and gold—all combine to create a fleeting moment of perfect harmony.",
  },
];

let currentIndex = 0;

function updateImage() {
  document.getElementById("imageDisplay").src = data[currentIndex].img;
  document.getElementById("imgtitle").textContent = data[currentIndex].title;
  document.getElementById("imgcontent").textContent =
    data[currentIndex].content;
}

document.getElementById("prevButton").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  updateImage();
});

document.getElementById("nextButton").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % data.length;
  updateImage();
});

const login = document.getElementById("login");
const signin = document.getElementById("signin");
const overlay = document.getElementById("overlay");

function closePopup() {
  login.style.display = "none";
  signin.style.display = "none";
  overlay.style.display = "none";
}

function formid(id) {
  signin.style.display = "none";

  if (id === "login") {
    login.style.display = "block";
  } else if (id === "signin") {
    signin.style.display = "block";
  }

  overlay.style.display = "block";
}

const cardkids = [
  {
    img: "https://www.ecomdeveloper.com/demo/image/cache/catalog/products/boys/ethnic/ETH0056-2-329x329.jpg",
    title: "Boy Kurta Pajama",
    price: "$30",
    size: "M",
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    img: "https://images.unsplash.com/photo-1560506840-ec148e82a604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    title: "Girl Lehenga Choli",
    price: "$45",
    size: "L",
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Girl Anarkali Suit",
    price: "$50",
    size: "S",
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    img: "https://images.unsplash.com/photo-1622290291720-ac961c43ee30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Boy Sherwani",
    price: "$55",
    size: "XL",
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675183713626-81e6de4552e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Girl Gown",
    price: "$60",
    size: "M",
    rate: "☆ ☆ ☆ ☆ ",
  },
];
const cardContainer = document.getElementById("kids");
cardContainer.innerHTML = cardkids
  .map((item) => {
    return `
       <div class="card">
              <img src="${item.img}" alt="${item.title}">
              <div class="card-title">${item.title}</div>
              <div class="card-price">${item.price}</div>
              <div class="card-size">Size: ${item.size}</div>
              <div class="card-rate">Rate: ${item.rate}</div>
          </div>
      `;
  })
  .join("");

const cardmen = [
  {
    image:
      "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D ",
    title: "Men's Casual Shirt",
    price: "$25.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    title: "Men's Denim Jacket",
    price: "$59.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Men's Sports Shoes",
    price: "$75.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Men's T-Shirt",
    price: "$15.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1689327920655-52e42cf05219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww   ",
    title: "Men's Hoodie",
    price: "$35.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnMlMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Men's Chinos",
    price: "$45.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ",
  },
];
const cardContainer2 = document.getElementById("mens");
cardContainer2.innerHTML = cardmen
  .map((item) => {
    return `
       <div class="card">
              <img src="${item.image}" alt="${item.title}">
              <div class="card-title">${item.title}</div>
              <div class="card-price">${item.price}</div>
              <div class="card-size">Size: ${item.size}</div>
              <div class="card-rate">Rate: ${item.rate}</div>
          </div>
      `;
  })
  .join("");

const cardwomen = [
  {
    image:
      "https://images.unsplash.com/photo-1616313253719-c46514cddee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Women's Summer Dress",
    price: "$29.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
    title: "Women's Skinny Jeans",
    price: "$39.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Women's Casual Blouse",
    price: "$24.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675253527708-f07bf2f0d638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Women's Winter Coat",
    price: "$89.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582738509941-360b28c941ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Women's Running Shoes",
    price: "$49.99",
    size: ["S", "M", "L", "XL"],
    rate: "☆ ☆ ☆ ☆ ☆ ",
  },
];
const cardContainer3 = document.getElementById("womens");
cardContainer3.innerHTML = cardwomen
  .map((item) => {
    return `
  <div class="card">
   <img src="${item.image}" alt="${item.title}">
   <div class="card-title">${item.title}</div>
   <div class="card-price">${item.price}</div>
   <div class="card-size">Size: ${item.size}</div>
   <div class="card-rate">Rate: ${item.rate}</div>
  </div>`;
  })
  .join("");

// const kids = document.getElementById("kids");
// const mens = document.getElementById("mens");
// const womens = document.getElementById("womens");

// const k = document.getElementById("k");
// k.addEventListener("click", function () {
//   kids.style.display = "flex";
//   mens.style.display = "none";
//   womens.style.display = "none";
// });

// const m = document.getElementById("m");
// m.addEventListener("click", function () {
//   mens.style.display = "flex";
//   womens.style.display = "none";
//   kids.style.display = "none";
// });

// const w = document.getElementById("w");
// w.addEventListener("click", function () {
//   womens.style.display = "flex";
//   mens.style.display = "none";
//   kids.style.display = "none";
// });

const categories = document.querySelectorAll(".categories");
categories.forEach((categories) => {
  const target = categories.dataset.target;
  categories.addEventListener("click", () => products(target));
});

function products(id) {
  const homepageproduct = document.getElementsByClassName("homepageproduct");
  for (i = 0; i <= homepageproduct.length; i++) {
    document.getElementById(id).style.display = "flex";
    homepageproduct[i].style.display = "none";
  }
}
