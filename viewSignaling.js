
function ViewSignaling (signaling, rootAdd){
    this._signaling = signaling;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewSignaling.prototype = Object.create(Service.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.stateChange = function(){
    if(this._signaling._state){
        this._state.innerText = "ВКЛЮЧЕНА";
    } else{
        this._state.innerText = "ВЫКЛЮЧЕНА"; 
    };
};


ViewSignaling.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "СИГНАЛИЗАЦИЯ";
    name.className = "sigDiv";

    var signaling = document.createElement("div");
    signaling.className = "sig";

    var model = document.createElement("div");
    model.innerHTML = "Модель LG";
    model.className = "mode";
   

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerText = "Вкл";
    onBtn.addEventListener('click', () =>{
        this._signaling.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerText = "Выкл";
    offBtn.addEventListener('click', () =>{
        this._signaling.pasCheck();
        this.stateChange();
    });



    this.stateChange();
    signaling.appendChild(name);
    signaling.appendChild(this._state);
    signaling.appendChild(model);
    signaling.appendChild(onBtn);
    signaling.appendChild(offBtn);
    this._rootAdd.appendChild(signaling);
}