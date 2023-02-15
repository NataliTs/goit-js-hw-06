const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGallery = document.querySelector(".gallery");
console.log(ulGallery);

const murkupUlImage = images
  .map(
    (image) =>
      `<li><img class="picture" src="${image.url}" alt="${image.alt}" width="320"</li>`
  )
  .join("");
console.log(murkupUlImage);

ulGallery.insertAdjacentHTML("afterbegin", murkupUlImage);

ulGallery.style.display = "flex";
ulGallery.style.flexDirection = "column";
ulGallery.style.alignItems = "center";
ulGallery.style.listStyleType = "none";
ulGallery.style.gap = "40px";
