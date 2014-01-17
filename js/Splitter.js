var Splitter = function(idMainDiv) {
    //This section is similar to the initialize() method from prototypejs.
    this.idMainDiv = idMainDiv;

    //Adding a method to an object
    this.split = function () {
        $('#'+this.idMainDiv).split({orientation:'vertical', position:'50%'});
    }
}