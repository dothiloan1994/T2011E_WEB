var clicked;

function changeprice(size){
    var sizeS = document.getElementById("sizeS");
    var sizeM = document.getElementById("sizeM");
    var sizeL = document.getElementById("sizeL");
    var price = document.getElementById("price");
    clicked = size;
    if(size=='sizeS') {
        sizeM.style.border = "2px solid lightgrey";
        sizeM.style.color = "lightgrey";
        sizeL.style.border = "2px solid lightgrey";
        sizeL.style.color = "lightgrey";
        sizeS.style.border = "2px solid darkred";
        sizeS.style.color = "darkred";
        price.innerHTML = "39,000 VND";
    }
    if(size=='sizeM') {
        sizeS.style.border = "2px solid lightgrey";
        sizeS.style.color = "lightgrey";
        sizeL.style.border = "2px solid lightgrey";
        sizeL.style.color = "lightgrey";
        sizeM.style.border = "2px solid darkred";
        sizeM.style.color = "darkred";
        price.innerHTML = "49,000 VND";
    }
    if(size=='sizeL') {
        sizeM.style.border = "2px solid lightgrey";
        sizeM.style.color = "lightgrey";
        sizeS.style.border = "2px solid lightgrey";
        sizeS.style.color = "lightgrey";
        sizeL.style.border = "2px solid darkred";
        sizeL.style.color = "darkred";
        price.innerHTML = "59,000 VND";
    }
}
function onmouseoverSize(size){
    var s = document.getElementById(size);
    s.style.border = "2px solid darkred";
    s.style.color = "darkred";
}
function onmouseoutSize(size){
    if(clicked!=size) {
        var s = document.getElementById(size);
        s.style.border = "2px solid lightgrey";
        s.style.color = "lightgrey";
    }
}