$(document).ready(function() {
    // $(".kal_cont").each(function(i){ 
    //     $(this).mousemove(function(e) {
    //         $(this).find(".ksc").each(function(i){ 
    //             $(this).css({backgroundPosition: e.pageX+"px "+e.pageY+"px"});
    //         });
    //     });
    // });
    var speedX=0,
    speedY=0,
    interval=50/200,
    posX=0,
    posY=0;


    $(".ksc").css({backgroundPosition:posX+"px "+posY+"px"});

function event(e){
	// alert("jj");
	var acc=e.accelerationIncludingGravity,
	    accX=acc.x,
	    accY=acc.y;
	    if(Math.abs(accX)<2){
	    	accX=0;
	    }

	    if(Math.abs(accY<2)){
	    	accY=0;
	    }

	    // alert(interval);

	var lengthX=speedX*interval+(accX*Math.pow(interval,2))/2;
	var lengthY=speedY*interval+(accY*Math.pow(interval,2))/2;
    // alert(lengthX);


	posX=posX+lengthX;
	posY=posY+lengthX;

	// alert(posX);

	$(".ksc").css({backgroundPosition: posX+"px "+posY+"px"});
	speedX=speedX+accX*interval;
	speedY=speedY+accY*interval;
}
window.addEventListener("devicemotion",event,false);
});

