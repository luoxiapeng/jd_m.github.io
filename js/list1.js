window.onload=function(){
   left_scroll();
}
function left_scroll(){
    var moveUl=document.querySelector(".list_left ul");
    var prentHeight=document.querySelector(".list_left").offsetHeight;
    var headerHeight=document.querySelector(".list_header").offsetHeight;
    var ulHeight=moveUl.offsetHeight;
    var minDistance=prentHeight-ulHeight-headerHeight;
    var maxDistance=0;
    var deleyDistance=150;
    var startY=0;
    var  moveY=0;
    var distanceY=0;

    var stantTransition=function(){
        moveUl.style.transition="all .5s";
    }
    var endTransition=function(){
        moveUl.style.transtion="";
    }
    var setTransfrom=function(distance){
        moveUl.style.transform="translateY+('+distance+'px)";
    }
    moveUl.addEventListener("tochstart",function(event){
        startY=event.touches[0].clientY;
    })
    moveUl.addEventListener("touchmove",function(event){
        moveY=event.touches[0].clientY-startY;
        if((moveY+deleyDistance)>(maxDistance+deleyDistance)){
            moveY=0;
            distanceY=maxDistance+deleyDistance;

        }else if((moveY+deleyDistance)<(minDistance-deleyDistance)){
            moveY=0;
            distanceY=minDistance-deleyDistance;
        }
        //moveUl.style.transition="";
        endTransition();
        setTransfrom(moveY+distanceY);
    })
    moveUl.addEventListener("touchend",function(event){

        distanceY+=moveY;
        if(distanceY>maxDistance){
            distanceY=maxDistance;
        }else if(distanceY<minDistance){
            distanceY=minDistance;
        }
        stantTransition();
        setTransfrom(distanceY);
    })
}