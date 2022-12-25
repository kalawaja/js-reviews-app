// local reviews data
const reviews = [
    {
      id: 1,
      name: "leila nunez",
      job: "web developer",
      img:
        "./images/friend-2.png",
      text:
        "Voluptatum eaque assumenda consequatur nihil repudiandae dolores repellat quam eos, est, unde ex labore magnam, aliquam laboriosam ad recusandae? Unde animi ducimus accusamus facere, ipsum corporis id vel aperiam laborum.",
    },
    {
      id: 2,
      name: "serhat kilic",
      job: "web designer",
      img:
      "./images/friend-3.png",
      text:
        "Quod provident commodi alias excepturi odit fugit accusamus consequatur? Mollitia, cum nam reiciendis molestiae atque aliquid beatae, necessitatibus tenetur, quas et sequi minima corporis fugiat. Cupiditate voluptate itaque dolorem debitis!",
    },
    {
      id: 3,
      name: "meiram sole",
      job: "intern",
      img:
      "./images/friend-4.png",
      text:
        "Sapiente consectetur reiciendis obcaecati nulla eveniet ipsam laboriosam dignissimos laborum aperiam nemo ab error voluptates, dolore neque! Earum dolorum a voluptate sed ipsam eligendi optio quos velit explicabo! Provident, distinctio.",
    },
    {
      id: 4,
      name: "adam relit",
      job: "the boss",
      img:
      "./images/friend-5.png",
      text:
        "Animi veritatis, facere nam nulla nihil dignissimos harum dolor, debitis itaque corporis quae voluptatibus ipsam? Pariatur ullam incidunt ea perspiciatis, hic, nulla quos nobis, iste dolorum expedita vitae dolores molestiae.",
    },
];
// select items
const img = document.getElementById("friend-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});