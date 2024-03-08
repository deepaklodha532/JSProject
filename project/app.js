//  select field
let selectField  =  document.getElementById('selectField') ; 

//selecttext
let selectText =  document.getElementById('selectText' );


//list 
let list  = document.getElementById("list") ;

//arrowIcon
let arrowIcon =  document.querySelector(".arrowIcon");
console.log(arrowIcon)
//options 
let options =  document.getElementsByClassName("option")

// console.log(selectField);
// console.log(selectText);
// console.log(list); 
// console.log(arrowIcon);
// console.log(options);

selectField.addEventListener('click', ()=>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

);