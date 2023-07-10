const catalogue = document.getElementById("milkshake-catalogue");

class Milkshake {
    constructor(id, img, place, flavor, price) {
        this.id = id;
        this.img = img;
        this.place = place;
        this.flavor = flavor;
        this.price = price;
    }
}

const milkshake1 = new Milkshake(1, "url('img/1.jpg')", "El Moro 'Parque Tepeyac'", "Vainilla", "$75");
const milkshake2 = new Milkshake(2, "url('img/2.jpg')", "Vips 'Plaza Tepeyac'", "Vainilla", "$70");
const milkshake3 = new Milkshake(3, "url('img/3.webp')", "Café Andares", "Vainilla", "$55");

let milkshakeArray = [milkshake1, milkshake2, milkshake3];

for (let i = 0; i < milkshakeArray.length; i++) {
    createMilkshakeCards(i);
}

function createMilkshakeCards(i) {
    const milkshakeCard = document.createElement("div");
    const milkshakePhoto = document.createElement("div");
    const milkshakeInfo = document.createElement("div");
    const milkshakePlace = document.createElement("div");
    const milkshakeFlavor = document.createElement("div");
    const milkshakePrice = document.createElement("div");

    milkshakeCard.className = "milkshake-card";
    milkshakeCard.id = milkshakeArray[i].id;

    milkshakePhoto.className = "milkshake-photo";
    milkshakePlace.className = "milkshake-place";
    milkshakeFlavor.className = "milkshake-flavor";
    milkshakePrice.className = "milkshake-price";
    milkshakeInfo.className = "milkshake-info";

    milkshakePhoto.style.backgroundImage = milkshakeArray[i].img;
    milkshakePlace.innerText = milkshakeArray[i].place;
    milkshakeFlavor.innerText = milkshakeArray[i].flavor;
    milkshakePrice.innerText = milkshakeArray[i].price;

    milkshakeCard.appendChild(milkshakePhoto);
    milkshakeCard.appendChild(milkshakeInfo);

    milkshakeInfo.appendChild(milkshakePlace);
    milkshakeInfo.appendChild(milkshakeFlavor);
    milkshakeInfo.appendChild(milkshakePrice);
    catalogue.appendChild(milkshakeCard);
}
