// task 2 
const h2 = document.getElementsByTagName("h2");
for (const a of h2) {
    a.style.color = "lightblue";
}

// task 3
document.getElementById('backpack').style.backgroundColor = "tomato";

// task 4

const card = document.getElementsByClassName("card");
for (const cards of card) {
    cards.style.borderRadius = '1.875em';
}

// task 5 //


document.getElementById('logo').addEventListener('click', function () {
    console.log("pear + abdul momin")
})

// task 6

const buyNow = document.getElementsByClassName('btn');

for (const btn of buyNow) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    });

};

// task 7 
const inputSub = document.getElementById('input-n');
const btnSub = document.getElementById('btn-s');

inputSub.addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        btnSub.removeAttribute('disabled');
    } else {
        btnSub.setAttribute('disabled', true);
    }
});

// btnSub.addEventListener('change', function () {
//     console.log(btnSub.value);
// })

btnSub.addEventListener('click', function () {
    console.log("a")
});

// task 8 

document.getElementById('im').addEventListener('mouseenter', function () {
    document.getElementById("im").src = "img/shoes/shoe-2.png";
})

document.getElementById('im').addEventListener('mouseout', function () {
    document.getElementById("im").src = "img/shoes/shoe-1.png";
})


// task 9

document.getElementById('lets').addEventListener('dblclick', function () {

    document.getElementById('lets').style.backgroundColor = "red";
})