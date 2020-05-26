var addButton = document.getElementById("add");
addButton.type = "button";
addButton.className = "add";
addButton.addEventListener('click', function(){
    var condModel = new Conditioner("LG", 0);
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
    document.getElementsByClassName("cond")[0].style.display == "block";
    addButton.addEventListener('click', function(){
        if(document.getElementsByClassName("cond")[0].style.display == "block"){
            document.getElementsByClassName("cond").style.display = "none";
            document.getElementsByClassName("cam")[0].style.display ="none";
            document.getElementsByClassName("sig")[0].style.display ="none";
        }
        else{
            document.getElementsByClassName("cond").style.display ="none";
        }
    })    
});

// var addButton = document.getElementById("add");
// addButton.addEventListener('click', function(){
//     if(document.getElementsByClassName("cond") == "none") document.getElementsByClassName("cond") == "block";
//     else document.getElementsByClassName("cond") == "block"
// })




var addButton = document.getElementById("camAdd");
addButton.className = "camAdd";
addButton.addEventListener('click', function(){
    var camModel = new Camera("");
    var viewCamModel = new ViewCamera(camModel, document.getElementById("root"));
    viewCamModel.render();
    document.getElementsByClassName("cam")[0].style.display = "block";
    addButton.addEventListener('click', function(){
        if(document.getElementsByClassName("cam")[0].style.display == "block"){
            document.getElementsByClassName("cam")[0].style.display = "none";
            document.getElementsByClassName("cond")[0].style.display ="none";
            document.getElementsByClassName("sig")[0].style.display ="none";
        }
        else{
            document.getElementsByClassName("cam")[0].style.display ="none";
        }
    })    
});

var addButton = document.getElementById("sigAdd");
addButton.className = "sigAdd";
addButton.addEventListener('click', function(){
    var sigModel = new Signaling("");
    var viewSigModel = new ViewSignaling(sigModel, document.getElementById("root"));
    viewSigModel.render();

     document.getElementsByClassName("sig")[0].style.display = "block";
     addButton.addEventListener('click', function(){
        if(document.getElementsByClassName("sig")[0].style.display == "block"){
            document.getElementsByClassName("sig")[0].style.display = "none";
            document.getElementsByClassName("cond").style.display ="none";
            document.getElementsByClassName("cam")[0].style.display ="none";
        }
        else{
            document.getElementsByClassName("sig")[0].style.display ="none";
        }
    })
});


