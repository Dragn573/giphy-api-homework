var foods = ["Gyros", "Korean", "Rice", "Steak"];
            
    
    function displayFoodInfo() {
    var foods = $(this).attr("data-name");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    foods + "+ food&rating=pg-13&api_key=11lKruSBHBilwkzH942UzOPS30jaGKgu&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.data;
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var foodDiv = $("<div class=food>");
                var p = $("<p>").text("rated: " + results[i].rating);
                var foodImage = $("<img>");
                foodImage.attr("src", results[i].images.fixed_height.url);
                foodImage.attr("class","foodPic");
                foodDiv.append(foodImage).append(p);
                $("#foods-view").prepend(foodDiv);
            
    
    
        $('body').on('click', '.gif', function() {
            var src = $(this).attr("src");
            if($(this).hasClass('playing')){
               //stop
               $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
               $(this).removeClass('playing');
            } else {
              //play
              $(this).addClass('playing');
              $(this).attr('src', src.replace(/\_s.gif/i, ".gif"));