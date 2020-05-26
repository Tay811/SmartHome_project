
function Signaling(model){
    Service.call(this, model);
    this._password = "1234";
} 

Signaling.prototype = Object.create(Service.prototype);
Signaling.prototype.constructor = Signaling;

Signaling.prototype.pasCheck = function(){
    this._password = prompt("Пароль от сигнализации: ");
        for(i=1; i < 3; i++){
            if (this._password == '1234') {
                this.off();
                alert('Внимание! Сигнализация отключена!');
                break;
            } 
            else if ((this._password != '1234') && (i != 3)) {
                prompt('Пароль неверен! ');
            } 
            else{
                alert('Ваши деньги под охраной!');
                this.on();
            }
        }
} 

Signaling.prototype.getPassword = function(){
    return this._password;
}  
