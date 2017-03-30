$( function() {
    $( ".triangle,.circle,.square,.title,.phrase,.phrasealt,.phrasenew,.Rcap,.Ocap,.Wcap,.TYPOcap,.blackpaint2,.blackpaint3,.wilders,.img,.lawsof" ).draggable();
    
    // $( "nav" ).draggable();  		// only blue nav circle draggable
    // $( ".arrow-up" ).draggable();  	// only yellow triangle draggable
    // $( ".arrow-up" ).draggable();  	// only red floating box draggable
    // $( ".content" ).draggable();		// only green content circle draggable
    // $( "#my-image" ).draggable();	// only cogwheel draggable

  
} );var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 700;
canvas.height = 900;

var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.strokeStyle = "black";
function getColor(colour){ctx.strokeStyle =  colour;}

function getSize(size){ctx.lineWidth = size;}


//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

//img float around and shit
$('.img').each(function(){
    $(this).css({'marginTop' : getRandomInt(-100,600), 'marginTop' : getRandomInt(-100,600)});
});