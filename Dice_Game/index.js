var randomNumber1 = Math.ceil(Math.random() * 6);
var randomImageSrc1 = "images/dice" + randomNumber1 + ".png";  // creating random src using random number 1
var img1 = document.querySelectorAll("img")[0];  //selecting the first image
img1.setAttribute("src", randomImageSrc1);        //changing src attribute to random image src


//repeating same procedure for second image 
var randomNumber2 = Math.ceil(Math.random() * 6);
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

//declaring winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Jugnu wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Deenu wins";
}else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}


//refresh button code
var reloadButton = document.querySelector("button");

function reload(){
    reload = location.reload();
}

reloadButton.addEventListener("click", reload, false);