const cards = document.querySelector(".cards");
const card_products = document.querySelector(".card_products");
const modal_login = document.querySelector(".modal_login");
const ragistratsion = document.querySelector(".ragistratsion");
const sign_in = document.querySelector(".sign-in");
const modal_sign_in = document.querySelector(".modal_sign_in");
const exit_sign = document.querySelector(".exit_sign");
const exit = document.querySelector(".exit");
const menu = document.querySelector(".menu");
const mobile_link = document.querySelector(".mobile_link");


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("img1")) {
    document.querySelector(".katta-img").setAttribute("src", e.target.getAttribute("src"));
  }
})


menu.addEventListener("click", () => {
     mobile_link.classList.toggle("active");
     menu.classList.toggle("active");
});


// card img
const card_modal = document.querySelector(".card-modal");
const card_img = document.querySelector(".card_img");
const products_exit = document.querySelector(".products-exit");
const products_btn = document.querySelector(".products-btn");

// sign in
sign_in.addEventListener("click", () => {
  modal_sign_in.classList.add("active");
});

exit_sign.addEventListener("click", () => {
  modal_sign_in.classList.remove("active");
});

// sign up start

ragistratsion.addEventListener("click", () => {
  modal_login.classList.add("active");
});

exit.addEventListener("click", () => {
  modal_login.classList.remove("active");
});

const products = [
  {
    id: 0,
    img: "./image/card1.png",
    imgs: [
      "https://static.wixstatic.com/media/fdc9dd_838ab398091c4ab19aacbfc8684ea628~mv2.jpg/v1/fill/w_576,h_769,al_c,q_85,enc_auto/fdc9dd_838ab398091c4ab19aacbfc8684ea628~mv2.jpg",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/a/z/c/150-pak-choi-salad-vegetable-seed-co536pk-150seeds-atlus-original-imagkzsyyfnfyqgu.jpeg?q=20&crop=false",
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/1/i/5/30-pakchoi-vegetable-seeds-for-home-garden-30-seeds-arshiayat-original-imagvhqnt5hfbqtc.jpeg?q=90&crop=false",
      "https://rukminim2.flixcart.com/image/750/900/kz7bcsw0/plant-seed/k/t/v/40-gi-seeds-pakchoi-vegetable-gromax-india-original-imagb9j4xtffhv2y.jpeg?q=20&crop=false",
    ],
    name: "Green Zaden",
    price: 14.99,
    priseDel: 12,
    desc: "Bok choy (American English, Canadian English, and Australian English), pak choi (British English, South African English, and Caribbean English) or pok choi (Brassica rapa subsp. chinensis) is a type of Chinese cabbage, used as food.",
  },
  {
    id: 1,
    img: "./image/card2.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Potatoes",
    price: 16.44,
    priseDel: 12.99,
    desc: "The potato  is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world. Potatoes are tubers of the plant Solanum tuberosum, a perennial in the nightshade family Solanaceae.",
  },
  {
    id: 2,
    img: "./image/card3.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Red Chili",
    price: 18.33,
    priseDel: 16.99,
    desc: "The chili pepper (also chile pepper or chilli pepper, from Nahuatl is the fruit of plants from the genus Capsicum, members of the nightshade family, Solanaceae. In Britain, Australia, New Zealand, South Africa, India, Malaysia and other Asian countries, the word pepper is usually omitted.",
  },
  {
    id: 3,
    img: "./image/card4.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Mecca",
    price: 12.33,
    priseDel: 12,
    desc: "Corn, Zea mays, belongs to the Poaceae family, and while eaten sometimes as avegetable and sometimes as a grain, it is actually classified by botanists as afruit, as are tomatoes, green peppers, cucumbers, zucchini and other squashes.Sweet corn is a variant in which the sugar in the fruit kernels turns from sugarto starch less slowly after harvest.",
  },
  {
    id: 4,
    img: "./image/card5.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Tomato",
    price: 21.9,
    priseDel: 19,
    desc: "The tomato  is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
  },
  {
    id: 5,
    img: "./image/card6.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Eggplant",
    price: 13.9,
    priseDel: 11,
    desc: "The eggplant is a delicate, tropical perennial plant often cultivated as a tender or half-hardy annual in temperate climates. The stem is often spiny. The flowers are white to purple in color, with a five-lobed corolla and yellow stamens.Some common cultivars have fruit that is egg-shaped, glossy, and purple with white flesh and a spongy, meaty texture. ",
  },
  {
    id: 6,
    img: "./image/card7.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Cauliflower",
    price: 10.99,
    priseDel: 7.98,
    desc: "Cauliflower is one of several vegetables cultivated from the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or mustard) family.",
  },
  {
    id: 7,
    img: "./image/card8.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Green Apple",
    price: 17.9,
    priseDel: 16,
    desc: "The Granny Smith, also known as a green apple or sour apple, is an apple cultivar that originated in Australia in 1868. It is named after Maria Ann Smith, who propagated the cultivar from a chance seedling. The tree is thought to be a hybrid of Malus sylvestris, the European wild apple, with the domesticated apple Malus domestica as the polleniser.",
  },
  {
    id: 8,
    img: "./image/card9.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Mango",
    price: 18.1,
    priseDel: 16.33,
    desc: "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated from the region between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two types of modern mango cultivars: the Indian type and the Southeast Asian type.",
  },
  {
    id: 9,
    img: "./image/card10.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Green Chili",
    price: 11.99,
    priseDel: 9.99,
    desc: "Chili peppers, also spelled chile or chilli (from Classical Nahuatl chīlli), are varieties of the berry-fruit of plants from the genus Capsicum, which are members of the nightshade family Solanaceae, cultivated for their pungency. Chili peppers are widely used in many cuisines as a spice to add heat to dishes.",
  },
  {
    id: 10,
    img: "./image/card11.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Chili",
    price: 24.99,
    priseDel: 18,
    desc: "Chili peppers are believed to have originated in Central or South America and were first cultivated in Mexico. European explorers brought chili peppers back to the Old World in the late 16th century as part of the Columbian Exchange, which led to many cultivars spreading around the world and finding use in both food and traditional medicine.",
  },
  {
    id: 11,
    img: "./image/card12.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Cucumber",
    price: 13.99,
    priseDel: 12.3,
    desc: "The cucumber (Cucumis sativus) is a widely-cultivated creeping vine plant in the family Cucurbitaceae that bears cylindrical to spherical fruits, which are used as culinary vegetables. Considered an annual plant, there are three main types of cucumber—slicing, pickling, and seedless—within which several cultivars have been created.",
  },
  {
    id: 12,
    img: "./image/card13.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Mecca",
    price: 16.99,
    priseDel: 15,
    desc: "Corn, Zea mays, belongs to the Poaceae family, and while eaten sometimes as avegetable and sometimes as a grain, it is actually classified by botanists as afruit, as are tomatoes, green peppers, cucumbers, zucchini and other squashes.Sweet corn is a variant in which the sugar in the fruit kernels turns from sugarto starch less slowly after harvest.",
  },
  {
    id: 13,
    img: "./image/card14.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Lettuce",
    price: 14.99,
    priseDel: 13.9,
    desc: "Lettuce (Lactuca sativa) is an annual plant of the family Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled. One variety, celtuce (asparagus lettuce), is grown for its stems, which are eaten either raw or cooked.",
  },
  {
    id: 14,
    img: "./image/card15.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Chili",
    price: 12.99,
    priseDel: 10.99,
    desc: "Chili peppers are believed to have originated in Central or South America and were first cultivated in Mexico. European explorers brought chili peppers back to the Old World in the late 16th century as part of the Columbian Exchange, which led to many cultivars spreading around the world and finding use in both food and traditional medicine.",
  },
  {
    id: 15,
    img: "./image/card16.png",
    imgs: [
      "../image/card2.png",
      "https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488",
      "https://cdn.mafrservices.com/sys-master-root/h68/he6/10358905471006/442622_main.jpg?im=Resize=480",
      "https://cdn.mafrservices.com/sys-master-root/he8/h2c/9882073497630/404426_main.jpg?im=Resize=480",
    ],
    name: "Red Chili",
    price: 14.99,
    priseDel: 12.99,
    desc: "Chili peppers, also spelled chile or chilli (from Classical Nahuatl chīlli), are varieties of the berry-fruit of plants from the genus Capsicum, which are members of the nightshade family Solanaceae, cultivated for their pungency. Chili peppers are widely used in many cuisines as a spice to add heat to dishes.",
  },
];

products.forEach((item) => {
  cards.innerHTML += `
     <div class="card">
              <img class="card_img" onclick="showModal(${item.id})" src="${item.img}" alt="" />
              <div class="heart_eye">
                <span class="heart">
                  <img src="./image/heart2.svg" alt="" />
                </span>
                <span class="eye">
                  <img src="./image/Eye.svg" alt="" />
                </span>
              </div>
              <div class="card_title">
                <div>
                  <p>${item.name}</p>
                  <h6>${item.price}</h6>
                  <img src="./image/Rating.svg" alt="" />
                </div>
                <div class="bag">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </div>
              </div>
            </div> `;
});

const showModal = (id) => {
  console.log(id);
  card_products.innerHTML = `
     <div class="products">
       <div class="products-img">
           <img class="img1" src="${products[id].imgs[0]}" alt="" />
           <img class="img1" src="${products[id].imgs[1]}" alt="" />
           <img class="img1" src="${products[id].imgs[2]}" alt="" />
           <img class="img1" src="${products[id].imgs[3]}" alt="" />
       </div>
       <div class="katta-rasm">
         <img class="katta-img" src="${products[id].img}" alt=""
         />
       </div>
     </div>
     <div class="products-title">
       <div class="products-exit" onclick="exitModal()">
         <i  class="fa-solid fa-x"></i>
       </div>
       <div class="products-text">
         <h1>${products[id].name}</h1>
         <button>In Stock</button>
       </div>
       <div class="products-yulduz">
         <img src="./image/yulduz.png" alt="" />
         <div class="sku">
           <h5>SKU:</h5>
           <p>2,51,594</p>
         </div>
       </div>
       <div class="products-price">
         <h6><del>$${products[id].priseDel}</del></h6>
         <h4>$${products[id].price}</h4>
         <span>64% Off</span>
       </div>
       <hr />
       <div class="products-social">
         <div class="brend">
           Brend:
           <img src="./image/brend.png" alt="" />
         </div>
         <div class="social">
           Share item:
           <a
             target="_blank"
             class="facebook"
             href="https://www.facebook.com/profile.php?id=100095231617106"
             ><img src="./image/Facebook.svg" alt=""
           /></a>
           <a
             target="_blank"
             href="https://twitter.com/xusaboyev83869?t=K0JxhBXJsAjJ7Yy1t5_anw&s=09"
             ><img src="./image/twitter.svg" alt=""
           /></a>
           <a
             target="_blank"
             href="https://github.com/OmadbekXusanboyev"
             ><img src="./image/pinterest.svg" alt=""
           /></a>
           <a
             target="_blank"
             href="https://www.instagram.com/omad_coder_07?igsh=MXAxM2R6Y2hpNG54YQ=="
             ><img src="./image/instagram.svg" alt=""
           /></a>
         </div>
       </div>
       <p class="products-desc">
         ${products[id].desc}
       </p>
       <div class="products-cart">
         <button class="products-number">
           <div class="minus">
             <img src="./image/minus.png" alt="" />
           </div>
           <div class="number">1</div>
           <div class="plus">
             <img src="./image/plus.png" alt="" />
           </div>
         </button>
         <button class="products-btn" onclick="exitModal()">
           Add To Cart <img src="./image/cart-mini.png" alt="" />
         </button>
         <div class="products-heart">
           <img src="./image/heart.png" alt="" />
         </div>
       </div>
       <div class="products-category">
         <h4>Category:</h4>
         <p>Vegetables</p>
       </div>
       <div class="products-tags">
         <h4>Tags:</h4>
         <p>
           Vegetables Healthy <a href="">Chinese</a> Cabbage Green
           Cabbage
         </p>
       </div>
     </div>
   </div>
`;

card_modal.classList.add("active");
};




const exitModal = () => {
  card_modal.classList.remove("active");
};
