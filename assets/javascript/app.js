//Array for the buttons
var cityButtons = ["Sergio Aguero","Kevin De Bruyne","Raheem Sterling","David Silva","Leroy Sane","Vincent Kompany","Bernardo Silva","Ederson"]

var person = $(this).attr("data-city");

function gifDisplay(){

        var x = $(this).attr("city");
        //api for giphy limited to 10 GIFs
        queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
        +x+
        "&api_key=9Oqs90bVp8l54t9tNVrL4Mkt7eZO5v1O&limit=10";
        //creating ajax call for specifc player selected
        $.ajax({
            url: queryURL,
            method: "GET"
          })

            .done(function(response){
                //console logging to make sure API and response to  Ajax call is working
                console.log(queryURL);
                console.log(response);
                for(var i=0; i<response.data.length;i++){
                    //calling a new div in jQuery
                    var cityDiv = $('<div>');


                    // Creating a paragraph tag with the result item's rating
                    var rating = $('<p>').text("Rating: "+response.data[i].rating);
                    // Creating and storing an image tag
                    var cityImage = $('<img>');
                    cityImage.addClass("gif")
                    cityImage.attr({
                        // Setting the src attribute of the image to a property pulled off the result item
                        src: response.data[i].images.downsized_still.url, 
                        dataAnimate: response.data[i].images.downsized.url,
                        dataStill: response.data[i].images.downsized_still.url, 
                        dataState: "still"
                        });
                    // Appending the paragraph and image tag to the animalDiv
                    cityDiv.append(rating);
                    cityDiv.append(cityImage);
                    // Prependng the animalDiv to the HTML page in the "#gifsHere" div
                    $("#gifsHere").prepend(cityDiv);
                    //to confirm we're collecting data giphy api
                    console.log(response);
                }
        
        });   
}


//function to animate gif
$(document).on("click", ".gif", function animate() {  
    var state = $(this).attr("dataState");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("dataAnimate"));
        $(this).attr("dataState", "animate");
    }else {
        $(this).attr("src", $(this).attr("dataAnimate"));
        $(this).attr("dataState", "animate");
        }
    });
        



function renderDisplay() {
    $("#buttonsHere").empty();
       for (var i = 0; i < cityButtons.length; i++) {
       var button = $("<button>");
       button.addClass("sky");
       button.attr("city", cityButtons[i]);
       button.text(cityButtons[i]);
       $("#buttonsHere").append(button);
       }
   }
$(document).on("click",".sky", gifDisplay);
renderDisplay();

