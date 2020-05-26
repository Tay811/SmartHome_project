
function Camera(model, _DNCam, _recLiveCam){
    Service.call(this, model);
    this._recLiveCam = "ВИД ИЗОБРАЖЕНИЯ ";
    this._DNCam = "ЗАДАТЬ РЕЖИМ ";
}

Camera.prototype = Object.create(Service.prototype);
Camera.prototype.constructor = Camera;    



Camera.prototype.changeNight = function(){
    if((this._DNCam = "ЗАДАТЬ РЕЖИМ ") && (this._state == true) || (this._DNCam = "ДЕНЬ") && (this._state == true)){
        this._DNCam = "НОЧЬ";
    } else {
        this._DNCam = "ЗАДАТЬ РЕЖИМ "
    }
    };

Camera.prototype.changeDay = function(){
    if((this._DNCam = "ЗАДАТЬ РЕЖИМ ") && (this._state == true) || (this._DNCam = "НОЧЬ") && (this._state == true)){
        this._DNCam = "ДЕНЬ";
    } else {
        this._DNCam = "ЗАДАТЬ РЕЖИМ "
    }
    };    

Camera.prototype.changeRecL = function(){
    if((this._recLiveCam = "ВИД ИЗОБРАЖЕНИЯ ") && (this._state == true) || (this._recLiveCam = "REC") && (this._state == true)){
        this._recLiveCam = "LIVE";
    } else {
        this._recLiveCam = "ВИД ИЗОБРАЖЕНИЯ "
    }
    };

Camera.prototype.changeRec = function(){
    if((this._recLiveCam = "ВИД ИЗОБРАЖЕНИЯ ") && (this._state == true) || (this._recLiveCam = "LIVE") && (this._state == true)){
        this._recLiveCam = "REC";
    } else {
        this._recLiveCam = "ВИД ИЗОБРАЖЕНИЯ "
    }
    };


