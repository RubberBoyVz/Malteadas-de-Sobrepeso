const catalogue = document.getElementById("milkshake-catalogue");

const milkshake1 = {
    id: 1,
    img: "url('img/1.jpg')",
    place: "El Moro 'Parque Tepeyac'",
    flavor: "Vainilla",
    price: "$75",
};

const milkshakeCard = document.createElement("div");
const milkshakePhoto = document.createElement("div");
const milkshakeInfo = document.createElement("div");
const milkshakePlace = document.createElement("div");
const milkshakeFlavor = document.createElement("div");
const milkshakePrice = document.createElement("div");

milkshakeCard.className = "milkshake-card";
milkshakeCard.id = milkshake1.id;

milkshakePhoto.className = "milkshake-photo";
milkshakePlace.className = "milkshake-place";
milkshakeFlavor.className = "milkshake-flavor";
milkshakePrice.className = "milkshake-price";
milkshakeInfo.className = "milkshake-info";

milkshakePhoto.style.backgroundImage = milkshake1.img;
milkshakePlace.innerText = milkshake1.place;
milkshakeFlavor.innerText = milkshake1.flavor;
milkshakePrice.innerText = milkshake1.price;

milkshakeCard.appendChild(milkshakePhoto);
milkshakeCard.appendChild(milkshakeInfo);

milkshakeInfo.appendChild(milkshakePlace);
milkshakeInfo.appendChild(milkshakeFlavor);
milkshakeInfo.appendChild(milkshakePrice);
catalogue.appendChild(milkshakeCard);
