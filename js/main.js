// $(document).ready(function() {
//     $(".kal_cont").each(function(i){ 
//         $(this).mousemove(function(e) {
//             $(this).find(".ksc").each(function(i){ 
//                 $(this).css({backgroundPosition: e.pageX+"px "+e.pageY+"px"});
//             });
//         });
//     });
// });
var speedX=0,
    speedY=0,
    interval=0,
    posX=0,
    posY=0;

    $(".ksc").click(function(){
    	alert("ll");
    })

    $(".ksc").css({backgroundPosition:posX+"px "+posY+"px"});

function event(e){
	// alert("jj");
	var acc=e.accelerationIncludingGravity,
	    accX=acc.x,
	    accY=acc.y,
	    interval=e.interval/100;

	    // alert(interval);

	var lengthX=speedX*interval+(accX*Math.pow(interval,2))/2;
	var lengthY=speedY*interval+(accY*Math.pow(interval,2))/2;
    // alert(lengthX);


	posX=posX+lengthX;
	posY=posY+lengthY;

	// alert(posX);

	$(".ksc").css({backgroundPosition: posX+"px "+posY+"px"});
	speedX=accX*interval;
	speedY=accY*interval;
}
window.addEventListener("devicemotion",event,false);