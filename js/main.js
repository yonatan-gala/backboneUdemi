var Vehicle = Backbone.Model.extend({
    idAttribute: "songId",
    urlRoot: "api/vehicles",
    defaults: {
        registrationNumber: "000000"
    },
    start: function () {
        console.log("Vehicle started");
    },
    validate: function (objectAttributes) {
        if (!objectAttributes.registrationNumber) {
            return "registrationNumber is required"
        }
    }
});

var Car = Vehicle.extend({
    start: function () {
        console.log("Car with registration number " + this.attributes.registrationNumber + " started");
    }
});

var newCar = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});