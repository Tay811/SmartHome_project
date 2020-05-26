function ViewConditioner (conditioner, rootAdd){
    this._conditioner = conditioner;
    this._rootAdd = rootAdd;
    this._state = document.createElement("div");
}

ViewConditioner.prototype = Object.create(Service.prototype);
ViewConditioner.prototype.constructor = ViewConditioner;

ViewConditioner.prototype.stateChange = function(){
    if(this._conditioner._state){
        this._state.innerText = "ВКЛЮЧЕН";
    } else{
        this._state.innerText = "ВЫКЛЮЧЕН"; 
    };
};

ViewConditioner.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "КОНДИЦИОНЕР";
    name.className = "conDiv";

    var condition = document.createElement("div");
    condition.className = "cond";

    var temp = document.createElement("div");
    temp.innerHTML = "Температура равна  " + this._conditioner._currentTemperature;
    temp.className = "tempV";

    var model = document.createElement("div");
    model.innerHTML = "Модель: LG";
    model.className = "lg";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerText = "Вкл";
    onBtn.addEventListener('click', () =>{
        this._conditioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerText = "Выкл";
    offBtn.addEventListener('click', () =>{
        this._conditioner.off();
        this.stateChange();
    });

    var plusTemperature = document.createElement("button");
    plusTemperature.type = "button";
    plusTemperature.className = "plus_temp";
    plusTemperature.innerText = "+";
    plusTemperature.addEventListener('click', () => {
        this._conditioner.plusTemp();
        temp.innerHTML = "Температура равна " + this._conditioner._currentTemperature;
    });

    var minusTemperature = document.createElement("button");
    minusTemperature.type = "button";
    minusTemperature.className = "minus_temp";
    minusTemperature.innerText = "-";
    minusTemperature.addEventListener('click', () => {
        this._conditioner.minusTemp();
        temp.innerHTML = "Температура равна " + this._conditioner._currentTemperature;
    });

    this.stateChange();
    condition.appendChild(name);
    condition.appendChild(this._state);
    condition.appendChild(temp);
    condition.appendChild(model);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    condition.appendChild(plusTemperature);
    condition.appendChild(minusTemperature);
    this._rootAdd.appendChild(condition);
}