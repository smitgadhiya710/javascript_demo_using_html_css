
// const c = document.getElementById("clothes");
// const p = document.getElementById("perfume");
// const b = document.getElementById("bag");

// function product(id) {
//   if (id === "clothes") {
//     c.style.display = "flex";
//     p.style.display = "none";
//     b.style.display = "none";
//   } else if (id === "perfume") {
//     c.style.display = "none";
//     p.style.display = "flex";
//     b.style.display = "none";
//   } else if (id === "bag") {
//     c.style.display = "none";
//     p.style.display = "none";
//     b.style.display = "flex";
//   }
// }

const clothes = [ 
  {
    img: "https://images.pexels.com/photos/6850812/pexels-photo-6850812.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Floral Print Maxi Dress",
    price: 49.99,
    size: ["S", "M", "L", "XL"],
  },
  {
    img: "https://images.pexels.com/photos/6850894/pexels-photo-6850894.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Cotton Button-Up Shirt",
    price: 29.99,
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Slim Fit Chinos",
    price: 39.99,
    size: ["28", "30", "32", "34", "36"],
  },
  {
    img: "https://images.pexels.com/photos/21621079/pexels-photo-21621079/free-photo-of-woman-in-black-clothes-sitting-on-meadow-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Off-Shoulder Midi Dress",
    price: 54.99,
    size: ["S", "M", "L"],
  },
  {
    img: "https://images.pexels.com/photos/26728902/pexels-photo-26728902/free-photo-of-woman-in-hat-sitting-with-violin.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Denim Jacket",
    price: 59.99,
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    img: "https://images.pexels.com/photos/26571334/pexels-photo-26571334/free-photo-of-smiling-man-with-tattoos-posing.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Pleated Midi Skirt",
    price: 34.99,
    size: ["XS", "S", "M", "L"],
  },
  {
    img: "https://images.pexels.com/photos/26569598/pexels-photo-26569598/free-photo-of-beautiful-woman-sitting-and-posing.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Striped Linen Shirt",
    price: 27.99,
    size: ["S", "M", "L"],
  },
  {
    img: "https://images.pexels.com/photos/21689010/pexels-photo-21689010/free-photo-of-person-in-orange-clothes-holding-flowers-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600 .jpg",
    name: "Wrap Dress",
    price: 49.99,
    size: ["S", "M", "L"],
  },
  {
    img: "https://images.pexels.com/photos/21705272/pexels-photo-21705272/free-photo-of-portrait-of-man-in-hat-and-poncho.jpeg?auto=compress&cs=tinysrgb&w=600ket2.jpg",
    name: "Leather Biker Jacket",
    price: 79.99,
    size: ["S", "M", "L", "XL"],
  },
  {
    img: "https://images.pexels.com/photos/21702122/pexels-photo-21702122/free-photo-of-portrait-of-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "A-Line Mini Skirt",
    price: 29.99,
    size: ["XS", "S", "M", "L"],
  },
];

const cloth = document.getElementById("clothes");
cloth.innerHTML = clothes
  .map((item) => {
    return `
<div class="card">
<img src="${item.img}" alt="${item.title}">
<div class="card-title">${item.name}</div>
<div class="card-price">${item.price}</div>
<div class="card-size">Size: ${item.size}</div>
</div>`;
  })
  .join("");

const perfume = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBuj0Vc283kv4g_OFORX1RFcPdHgmKAiLaQ&s",
    name: "Eau de Parfum",
    brand: "Chanel",
    price: 129.99,
  },
  {
    img: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=600img/perfume2.jpg",
    name: "Flowerbomb",
    brand: "Viktor&Rolf",
    price: 89.99,
  },
  {
    img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    price: 79.99,
  },
  {
    img: "https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&w=600erfume4.jpg",
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 109.99,
  },
  {
    img: "https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg?auto=compress&cs=tinysrgb&w=600ume5.jpg",
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 99.99,
  },
  {
    img: "https://images.pexels.com/photos/965993/pexels-photo-965993.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Acqua di Gioia",
    brand: "Giorgio Armani",
    price: 89.99,
  },
  {
    img: "https://images.pexels.com/photos/916342/pexels-photo-916342.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 119.99,
  },
  {
    img: "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Daisy",
    brand: "Marc Jacobs",
    price: 69.99,
  },
  {
    img: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg?auto=compress&cs=tinysrgb&w=600.jpg",
    name: "Angel",
    brand: "Thierry Mugler",
    price: 79.99,
  },
  {
    img: "https://images.pexels.com/photos/2508558/pexels-photo-2508558.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sauvage",
    brand: "Dior",
    price: 129.99,
  },
];

const perfu = document.getElementById("perfume");
perfu.innerHTML = perfume
  .map((item) => {
    return `
  <div class="card">
   <img src="${item.img}" alt="${item.name}"> 
   <div class="card-title">${item.name}</div>
   <div class="card-price">${item.brand}</div>
   <div class="card-size">Size: ${item.price}</div>
  </div>`;
  })
  .join("");

const bags = [
  {
    img: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Leather Tote Bag",
    brand: "Michael Kors",
    price: 249.99,
  },
  {
    img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Crossbody Bag",
    brand: "Kate Spade",
    price: 179.99,
  },
  {
    img: "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Backpack",
    brand: "Herschel Supply Co.",
    price: 99.99,
  },
  {
    img: "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Shoulder Bag",
    brand: "Coach",
    price: 299.99,
  },
  {
    img: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Clutch",
    brand: "Jimmy Choo",
    price: 199.99,
  },
  {
    img: "https://images.pexels.com/photos/2977304/pexels-photo-2977304.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Weekender Bag",
    brand: "Tumi",
    price: 349.99,
  },
  {
    img: "https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Satchel",
    brand: "Fossil",
    price: 129.99,
  },
  {
    img: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Hobo Bag",
    brand: "Marc Jacobs",
    price: 189.99,
  },
  {
    img: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bucket Bag",
    brand: "Longchamp",
    price: 159.99,
  },
  {
    img: "https://images.pexels.com/photos/2452345/pexels-photo-2452345.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Crossbody Wallet",
    brand: "Rebecca Minkoff",
    price: 149.99,
  },
];

const bag = document.getElementById("bag");
bag.innerHTML = bags
  .map((item) => {
    return `
  <div class="card">
   <img src="${item.img}" alt="${item.name}"> 
   <div class="card-title">${item.name}</div>
   <div class="card-price">${item.brand}</div>
   <div class="card-size">Size: ${item.price}</div>
  </div>`;
  })
  .join("");

  
const product = document.querySelectorAll(".product");
product.forEach((product) => {
  const target = product.dataset.target;
  product.addEventListener("click", () => information(target));
});

function information(id) {
  const items = document.getElementsByClassName("items");
  for (let i = 0; i <= items.length; i++) {
    document.getElementById(id).style.display = "flex";
    items[i].style.display = "none";
  }
}
