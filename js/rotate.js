$( ".image_rotate" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(90deg)");
    } else {
        $(this).css("transform","" );
    }
});

//http://jsfiddle.net/taekyeom/rv5PR/1259/