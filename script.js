(function(){

    "use strict"
    var button = document.querySelector("button");
    button.addEventListener('click',function(){

        var input=document.getElementById('seacrhbar').value;
        var gifsUrl ="https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=xBCdWDUgSFr6exIs20uCWDxvj25JKNGk";

        var giphyCall = new XMLHttpRequest();
        giphyCall.open("GET", gifsUrl);
        giphyCall.send();

        //when data is loaded this event will happen
        giphyCall.addEventListener('load',function(event){
        var data =  event.target.response; 
        pushToDom(data);
        });

    });


    document.querySelector(".searchBar").addEventListener('keyup',function(e){

        var input = document.querySelector("input").value;
      
        // if the key ENTER is pressed...
        if(e.which === 13) {

            var gifsUrl ="https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=xBCdWDUgSFr6exIs20uCWDxvj25JKNGk";
            var giphyCall = new XMLHttpRequest();
            giphyCall.open("GET", gifsUrl);
            giphyCall.send();

            //when data is loaded this event will happen
            giphyCall.addEventListener('load',function(event){
            var data =  event.target.response; 
            pushToDom(data);
            });

            // pushToDOM(input);
        }
      
    });


    
    var container = document.getElementById("con2");
    function pushToDom(data){
        
        $("#con2").empty();
        var response = JSON.parse(data);
        var imgsUrl = response.data;

        imgsUrl.forEach(element => { 
        var alternate = "image";
        var className = "imageClass";
        container.innerHTML += `<img src=${element.images.fixed_height.url} class = ${className} alt= ${alternate}>`;
        
        });
    }

})();