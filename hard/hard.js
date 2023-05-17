window.onload = function () {
  let buttons = document.getElementsByClassName("btn");
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", () => {
     changeClass(btn.id)
     

    });
  }
};


function changeClass(className){
    let body = document.getElementById("body");
    let classes = body.classList;
    classes.remove(classes.item(0));
    classes.add(className);

}