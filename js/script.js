$('#nav>ul>li').hover(function(){
    $(this).find('ul').stop().slideDown()  //너가 마우스 올린 그곳에 find찾아 ul을
},function(){
    $(this).find('ul').stop().slideUp()
});

var slide=$('#slide ul li');
var current=0;

setInterval(function(){
    var prev=slide.eq(current);
    current++;
    move(prev, 0, '100%');
    if(current==slide.size()){
        current=0;
    }
    var next=slide.eq(current);
    move(next, '-100%', 0);
},2000);

function move(tg, start, end){
    tg.css('top',start).stop().animate({top:end},500);
}


$('.el2').hover(function(){
    $(this).css('cursor','pointer')
},function(){
    $(this).css('cursor','nolmar')
});

$('.el2').click(function(){
    $('.pop').fadeIn();
});
$('.btn').click(function(){
    $('.pop').fadeOut();
});