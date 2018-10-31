# model definitions in backbone.

### model type
model is backbone object with data and ability to store state and interact with a view.

### Create and update
you can create a model by setting it up like this
``
// this is a constructor function
var Song = Backbone.Model.extend();  

initialize is called automatically upon instance creation 
``
var Song = Backbone.Model.extend(
initialize: function(){  
  // this is a native backbone method
  //we do something here
);
``

``
var newSong = new Song();
``

####setting up attributes: 
- while creating instance  
 
   ````  
    var newSong = new Song({  
    title: "Blue in Green",  
    artist: "Miles Davis"
     }
    );
   ````
   
- using the set() function
   ````
        song.set("title", "my title);
        song.set({
        title: "my title",
        type: "my song type"
        })
   ````
- get attributes using get() function
   ````
   song.get("title");
   ````
- un setting by unset() function.
    ````
    song.unset("title");
    ````
- convert to json :
    ````
    song.toJson();
    ````    
- check attributes: has()
    ````
    song.has("title");
    ````
- defaults, using defaults in constructor. 
    ````
    var Songs =Backbone.Model.Extend(
    {
        defaults: {
            genere: "jazz"
        }
    })
    ````
- clear, using ();
    ````
    song.clear();
    ````

#### validation

using validate method of a backbone object.
    
   ````javascript
   var Song = Backbone.Model.extend({
        validate: function(attrs){
        if (!attrs.title) return "title is required"
        }
   });
   ````   
using build in methods
   ````javascript
    var song = new(song);
    song.isValid;
    var lastError = song.validationError
   ````     

#### inheritance: 



   
#### Server requests
- fetch() - GET
- save() -POST/PUT
- destroy - DELETE  

#### urlRoot 
