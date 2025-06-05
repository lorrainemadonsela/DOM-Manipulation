const title = document.getElementById('title');

title.style.color = 'green';
title.style.fontSize = 'xx-large';

const h3Elements = document.getElementsByTagName('h3');
for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.textTransform = 'uppercase';
}

const fruList = document.getElementById('fruList');
if (fruList) {
    let newFruit = document.createElement('li');
    newFruit.textContent = 'Grapes';
    fruList.appendChild(newFruit);
}
const img1 = document.createElement('newFruit');

img1.src = 'Images/grapes.png';
img1.alt = 'grape fruit';
fruList.appendChild(img1);

const vegList = document.getElementById('vegList');
if (vegList) {
    let newVegetable = document.createElement('li');
    newVegetable.textContent = 'Carrots';
    vegList.appendChild(newVegetable);
}

const img2 = document.createElement('newVegetable');

img2.src = 'Images/carrots.png';
img2.alt = 'carrot vegetable';
vegList.appendChild(img2);