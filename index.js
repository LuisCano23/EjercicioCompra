precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cant= Number(document.querySelector(".cantidad"));
total= document.querySelector(".valor-total");
valor= cant*total;

/*function sumas(){
    cant= Number(document.querySelector(".cantidad"));
    total= document.querySelector(".valor-total");
    valor= cant*total;
    total.innerHTML=valor
}

function restas(){
    cant= Number(document.querySelector(".cantidad"));
    total= document.querySelector(".valor-total");
    valor= cant*total;
    total.innerHTML=valor
}

console.log(valor, cant, total)/*