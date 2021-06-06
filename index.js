

// toggle ----> alter the button when we click on the toggle button it will display the result when we again 
// clikc it it will undo the result

// get the element of the link using its class name

let links = document.querySelector(".links");
// console.log(links);

// get the button toggle

let toggle = document.querySelector('.nav-toggle');
console.log(toggle)


toggle.addEventListener("click" , ()=>{
    links.classList.toggle('show-links');

    // alternative of the toggle
    // if(links.classList.contains('show-links')){
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    }
)
