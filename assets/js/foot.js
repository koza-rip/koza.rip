$( document ).ready(function() {
    $("#footer").load("/foot.html",function(){
        //INSERT CODE HERE TO BE EXECUTED AFTER LOADING nav.html
        console.log("nav loaded");
    });
});
