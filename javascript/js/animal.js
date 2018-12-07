
var Animal = function() {

    var instance = this;
    var type = "Undefined";

    this.MakeSound = function() {
        console.log(this.type +  " says: whats up");
    }
}

export default Animal;
