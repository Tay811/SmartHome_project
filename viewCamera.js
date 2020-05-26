
function ViewCamera (camera, rootAdd){
    this._camera = camera;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
    
}

ViewCamera.prototype = Object.create(Service.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function(){
    if(this._camera._state){
        this._state.innerText = "ВКЛЮЧЕНА";
    } else{
        this._state.innerText = "ВЫКЛЮЧЕНА"; 
    };
};

ViewCamera.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "КАМЕРА";
    name.className = "camDiv";

    var camera = document.createElement("div");
    camera.className = "cam";

    var model = document.createElement("div");
    model.innerHTML = "Модель LG";
    model.className = "lg";

    var modeCam = document.createElement("div");
    modeCam.innerHTML = "Режим "+ this._camera._DNCam;
    modeCam.className = "mode";

    var typeCam = document.createElement("div");
    typeCam.innerHTML = "Изображение " + this._camera._recLiveCam;
    typeCam.className = "typeCam";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerText = "Вкл";
    onBtn.addEventListener('click', () =>{
        this._camera.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerText = "Выкл";
    offBtn.addEventListener('click', () =>{
        this._camera.off();
        this.stateChange();
    });


    var addMode = document.createElement("button");
    addMode.type = "button";
    addMode.className = "Day";
    addMode.innerText = "ДЕНЬ";
    addMode.addEventListener('click', () => {
        this._camera.changeDay();
        modeCam.innerHTML = "Режим " + this._camera._DNCam;
    });

    var addModeN = document.createElement("button");
    addModeN.type = "button";
    addModeN.className = "Night";
    addModeN.innerText = "НОЧЬ";
    addModeN.addEventListener('click', () => {
        this._camera.changeNight();
        modeCam.innerHTML = "Режим " + this._camera._DNCam;
    });

    var typeL = document.createElement("button");
    typeL.type = "button";
    typeL.className = "Live";
    typeL.innerText = "LIVE";
    typeL.addEventListener('click', () => {
        this._camera.changeRecL();
        typeCam.innerHTML = "Изображение "+ this._camera._recLiveCam;
    });

    var typeR = document.createElement("button");
    typeR.type = "button";
    typeR.className = "Rec";
    typeR.innerText = "REC";
    typeR.addEventListener('click', () => {
        this._camera.changeRec();
        typeCam.innerHTML = "Изображение "+ this._camera._recLiveCam;
    }); 

    this.stateChange();
    camera.appendChild(name);
    camera.appendChild(this._state);
    camera.appendChild(model);
    camera.appendChild(modeCam);
    camera.appendChild(typeCam);
    camera.appendChild(onBtn);
    camera.appendChild(offBtn);
    camera.appendChild(addMode);
    camera.appendChild(addModeN);
    camera.appendChild(typeL);
    camera.appendChild(typeR);
    this._rootAdd.appendChild(camera);

}

