var addButton = document.getElementById("add");
var deleteBtn = document.getElementById("deleteCond");
addButton.type = "button";
addButton.className = "add";
addButton.addEventListener('click', function(){
    var condModel = new Conditioner("LG", 0);
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
    // document.getElementsByClassName("cond")[0].style.display == "block";
    // addButton.addEventListener('click', function(){
    //     if(document.getElementsByClassName("cond")[0].style.display == "block"){
    //         document.getElementsByClassName("cond").style.display = "none";
    //         document.getElementsByClassName("cam")[0].style.display ="none";
    //         document.getElementsByClassName("sig")[0].style.display ="none";
    //     }
    //     else{
    //         document.getElementsByClassName("cond").style.display ="none";
    //     }
    // })    
});

deleteBtn.addEventListener("click", function(){
    document.querySelector(".cond").remove();
    document.querySelector(".cam").remove();
    document.querySelector(".sig").remove();
})

// var addButton = document.getElementById("add");
// addButton.addEventListener('click', function(){
//     if(document.getElementsByClassName("cond") == "none") document.getElementsByClassName("cond") == "block";
//     else document.getElementsByClassName("cond") == "block"
// })




var addButton = document.getElementById("camAdd");
var deleteBtn = document.getElementById("deleteCam");
addButton.className = "camAdd";
addButton.addEventListener('click', function(){
    var camModel = new Camera("");
    var viewCamModel = new ViewCamera(camModel, document.getElementById("root"));
    viewCamModel.render();
    // document.getElementsByClassName("cam")[0].style.display = "block";
    // addButton.addEventListener('click', function(){
    //     if(document.getElementsByClassName("cam")[0].style.display == "block"){
    //         document.getElementsByClassName("cam")[0].style.display = "none";
    //         document.getElementsByClassName("cond")[0].style.display ="none";
    //         document.getElementsByClassName("sig")[0].style.display ="none";
    //     }
    //     else{
    //         document.getElementsByClassName("cam")[0].style.display ="none";
    //     }
    // })    
});

deleteBtn.addEventListener("click", function(){
    document.querySelector(".cam").remove();
    document.querySelector(".cond").remove();
    document.querySelector(".sig").remove();
})


var addButton = document.getElementById("sigAdd");
var deleteBtn = document.getElementById("deleteSig");
addButton.className = "sigAdd";
addButton.addEventListener('click', function(){
    var sigModel = new Signaling("");
    var viewSigModel = new ViewSignaling(sigModel, document.getElementById("root"));
    viewSigModel.render();

    //  document.getElementsByClassName("sig")[0].style.display = "block";
    //  addButton.addEventListener("click", function(){
    //     if(document.getElementsByClassName("sig")[0].style.display == "block"){
    //         document.getElementsByClassName("sig")[0].style.display = "none";
    //         document.getElementsByClassName("cond")[0].style.display ="none";
    //         document.getElementsByClassName("cam")[0].style.display ="none";
    //     }
    //     else{
    //         document.getElementsByClassName("sig")[0].style.display ="none";
    //     }
    // })
});

deleteBtn.addEventListener("click", function(){
    document.querySelector(".sig").remove();
    document.querySelector(".cond").remove();
    document.querySelector(".cam").remove();
})


