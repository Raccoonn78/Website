
jQuery(document).ready(function($){
    $('<style>'+
        '.scrollTop{ display:none; z-index:9999; position:fixed;'+
            'bottom:20px; left:90%; width:88px; height:118px;'+
            'background:url(C:/Users/DimaM/Desktop/практикаhtml/курсовая_работа/hours/up2.png) 0 0 no-repeat; }' +
        '.scrollTop:hover{backgroung-color:red; background-position:0 0;}'
    +'</style>').appendTo('body');
    var
    speed = 950,
    $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		
    $scrollTop.click(function(e){
        e.preventDefault();
        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });

    //появление
    function show_scrollTop(){
        ( $(window).scrollTop() > 330 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
    show_scrollTop();
});
