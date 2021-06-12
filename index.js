

// toggle ----> alter the button when we click on the toggle button it will display the result when we again 
// clikc it it will undo the result

// get the element of the link using its class name

let links = document.querySelector(".links");
// console.log(links);

// get the button toggle

let toggle = document.querySelector('.nav-toggle');
console.log(toggle)


let text = document.querySelector('.centered');
console.log(text);


toggle.addEventListener("click" , ()=>{
    links.classList.toggle('show-links');
    if (links.classList.contains('show-links')) {
        // text.style.color = "blue";
        // text.style.position = "absolute"
        text.style.top = "315px"
        text.style.left = "50px"
    }
    else{
        // text.style.position = "absolute"
        text.style.top = "150px"
        text.style.left = "50px"
        // text.style.color = "red";
    }


    // alternative of the toggle
    // if(links.classList.contains('show-links')){
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    }
)
