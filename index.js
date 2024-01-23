const increasebtn = document.getElementById("inc");
const decresebtn = document.getElementById("dec");
const resetbtn = document.getElementById("reset");
let numb = 0;

increasebtn.onclick = function(){
    numb++;
    document.getElementById("num").textContent = numb;
}
decresebtn.onclick = function(){
    numb--;
    document.getElementById("num").textContent = numb;
}
res.onclick = function(){
    numb = 0;
    document.getElementById("num").textContent = numb;
}