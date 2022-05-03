// code when DOM has loaded 
// get buttons and event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play now"){
                alert("you clicked play now");
            }
        })
    }
})