
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
    var liHeight=document.querySelector(".list_left ul li").offsetHeight;
    var liArr=document.querySelector(".list_left ul li");
    for(var i=0;i<liArr.length;i++){
        liArr.dataset["index"]=i;
    }
    fox_tap(moveUl,function(e){
        console.log("触发了tap事件");
        console.log(e);
        console.log(e.target);
        console.log(e.target.parentNode);
        for(vari=0;i<liArr.length;i++){
            liArr[i].className="";
        }
        e.target,prentNode.className="current";
        var currentIndex= e.target.parentNode.dataset['index'];
        console.log("索引值为："+currentIndex);
        var moveDistance=currentIndex*liHeight*-1;
        if(moveDistance>maxDistance){
            moveDistance=maxDistance;
        }else if(moveDistance<minDistance){
            moveDistance=minDistance;
        }
        stantTransition();
        setTransfrom(moveDistance);

    })

}
