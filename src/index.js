const changeColorLi = document.querySelectorAll(".changecolor");
const changeSizeLi = document.querySelectorAll(".changesize");
const disappearLi = document.querySelector("#disappear");
const showTimeFooter = document.querySelector("#showtime");
const buttn = document.querySelector("#addToDo");
console.log(changeColorLi, changeSizeLi, disappearLi, buttn);

function changeColor()
{
    this.setAttribute("class", "changedcolor");
}

function changSize()
{
    this.style.fontSize = "3em";
}

// document.addEventListener("keydown",event => 
// {
//     if (event.code === 'Space') 
//     {
//         showTimeFooter.innerHTML = new Date().toLocaleString();
//     }
// });

buttn.addEventListener("click",() => 
{
    const ul = document.querySelector("ul");
    var li = document.createElement('li');
    var task = document.getElementById("inputbox").value;
    console.log(task);
    if(task === "")
    {
        alert("Empty imput!");
        return;
    }
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
});

disappearLi.addEventListener("click", () =>
{
    disappearLi.remove();
});

for(var i = 0; i < changeColorLi.length; i++)
{
    changeColorLi[i].addEventListener("click", changeColor);
}

for(var i = 0; i < changeSizeLi.length; i++)
{
    changeSizeLi[i].addEventListener("click", changSize);
}

console.log("using moment.js");
var intervalId = window.setInterval(function(){
    showTimeFooter.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);