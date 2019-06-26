"use strict";//che do nghiem ngat
let view = document.getElementById("view");

function getValue(value) {
    view.value += value;
}

function equalValue() {
    let result = eval(view.value);//tinh toan mot chuoi string phep tinh
    display(result);
}

function display(result) {
    view.value = result;
}

function remove() {
    view.value = "";
}