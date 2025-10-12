let links = document.querySelectorAll('.box a')

for(link of links){
    link.style.color="purple";
}
for(i=0; i<links.length;i++){
    links[i].style.color ="green";
}

//the following lines are used to create elements in html file from js file
let para1=document.createElement('p');
para1.innerText="Hey I am Red";
document.querySelector('body').append(para1);
para1.classList.add("red");

let h3=document.createElement("h3");
h3.innerText="Hey I am Blue";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");


h1.innerText="i am in a div";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);

div.classList.add("box")

document.querySelector("body").append(div);
// document.querySelector("body").prepend(div)
//prepend adds the content at the top and append adds the content at the bottom


