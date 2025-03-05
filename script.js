document.addEventListener("DOMContentLoaded", function () {
    loadCars();

    var carForm = document.getElementById("car-form");
    carForm.addEventListener("submit", addCar);
});

//Carregar os Carros do bac-end (localStorage) para a memória ram

function loadCars() {
    var carList = document.getElementById("car-list");
    var cars = JSON.parse(localStorage.getItem("cars")) || [];
    carList.innerHTML = "";

    for (let i = 0; i < cars.length; i++) {
        addCarToList(cars[i], i);
    }
}

//Adicionar os carros a lista front-end

function addCarToList(car, index) {
    var carList = document.getElementById("car-list");
    var list = document.createElement("li");
    list.className = "list-group-item d-flex justify-content-beetween align-items-center";
    list.innerHTML = "<span> <strong>" + car.model + "<strong/>" + car.year + "- $" + car.price + "</span>" +
        "<button class='btn btn-danger btn-sm' onclick='deleteCar(" + index + ")'>Deletar<button/>"
    carList.appendChild(li);
}

//Adicionar um carro ao localStorage, usando a função saveCars

function addCar(event) {
    event.preventDefault();

    var model = document.getElementById("model").value;
    var year = parseInt(document.getElementById("year").value);
    var price = parseFloat(document.getElementById("price").value);

    var cars = JSON.parse(localStorage, getItem("cars")) || [];
    cars.push({ model: model, year: year, price: price });

    safeCars(cars);
    loadCars();
}

//Salvar os carros, ou adicioná-los no localStorage

function safeCars(cars) {
    localStorage.setItem("cars", JSON.stringify(cars));
}