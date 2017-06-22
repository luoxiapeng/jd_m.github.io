window.onload=function(){
    // 头部通栏
    headerScroll();
    // 倒计时
    cutDownTime();
    // 轮播图
    banner_03();
}
function headerScroll(){
    // 获取值
    var  jd_nav=document.querySelector(".jd_nav");
    var  maxDistance=jd_nav.offsetWidth+jd_nav.offsetTop;
    var jd_header=document.querySelector(".jd_header");
    jd_header.style.backgroundColor="rgba(201,21,35,0)";
    window.onscroll=function(){
        var scrollDistance=window.document.body.scrollTop;
        var  precent=scrollDistance/maxDistance;
        console.log(precent);
        if(precent>1){
            precent=1;
        }
        jd_header.style.backgroundColor='rgba(201,21,35,'+precent+')';
    }

}
function cutDownTime(){
    var liArr=document.querySelectorAll(".time span")
     var totalHour=3;
     var totalSec=3*60*60;
     var timer=setInterval(function(){
        // 小于0 关闭定时器
        if(totalSec<=0){
            clearInterval(timer);
            console("活动已经结束");
        }
              totalSec--;
              var hour=Math.floor(totalSec/3600);
              var miute=Math.floor(totalSec%3600/60);
              var sec=totalSec%60;
              // 小时十位
              liArr[0].innerHTML=Math.floor(hour/10);
              // 小时个位
              liArr[1].innerHTML=hour%10;
              // 分钟
              liArr[3].innerHTML=Math.floor(miute/10);
              liArr[4].innerHTML=miute%10;
              // 秒
              liArr[6].innerHTML=Math.floor(sec/10);
              liArr[7].innerHTML=sec%10;


     },1000)
}
// // 只是轮播而已没有事件
// function banner(){
//     // 获取值
//       var moveUl=document.querySelector(".banner_images");
//       var  indexLiArr=document.querySelectorAll(".banner_index li");
//       // 获取body的总宽度
//       var width=document.body.offsetWidth;
//       // 增加索引
//       var index=1;
//       var timerId=setInterval(function(){
//         index++;
//         // 图片的索引
//         if(index>=9){
//             index=1;
//         }
//         // 移动ul
//         moveUl.style.transform='translateX('+index*width*-1+'px)';
//         // 初始化li的样式
//         for(var i=0;i<indexLiArr.length;i++){
//            indexLiArr[i].className="";
//         }
//         // 给li样式
//         indexLiArr[index-1].className='current';
//       },2000);
// }

// function banner_02(){
//      // 获取值
//       var moveUl=document.querySelector(".banner_images");
//       var  indexLiArr=document.querySelectorAll(".banner_index li");
//       // 获取body的总宽度
//       var width=document.body.offsetWidth;
//       // 添加过度效果
//     moveUl.style.transition = 'all .3s';
//       // 增加索引
//       var index=1;
//       var timerId=setInterval(function(){
//         index++;
//         // 图片的索引
//         if(index>=9){
//             index=1;
//             // 关闭过渡
//             moveUl.style.transtion="";
//         }
//         // 移动ul
//         moveUl.style.transform='translateX('+index*width*-1+'px)';
//         // 初始化li的样式
//         for(var i=0;i<indexLiArr.length;i++){
//            indexLiArr[i].className="";
//         }
//         // 给li样式
//         indexLiArr[index-1].className='current';
//       },2000);
// }


function banner_03(){
    var width=document.body.offsetWidth;
    var moveUl=document.querySelector(".banner_images");
    var indexLiArr=document.querySelectorAll(".banner_index li");
    var index=1;
    var startTranslate=function(){
        moveUl.style.transition='';

    }
    var moveUlTransform=function(distance){
        moveUl.style.transform='translateX('+distance+'px)';
    }
    var endTransition=function(){
        moveUl.style.transition = 'all .3s';
    }
    var timerId=setInterval(function(){
        index++;
        //moveUl.style.transition="all .3s";
        endTransition();
         //moveUl.style.transform='translateX('+index*width*-1+'px)';
        moveUlTransform(index*width*-1);
    },1000);

    moveUl.addEventListener("webkitTransitionEnd",function(){
        if(index>8){
            index=1;
            //moveUl.style.transition='';
            startTranslate();
          //moveUl.style.transform='translateX('+index*width*-1+'px)';
            moveUlTransform(index*width*-1);

        }else if(index<1){
            index=8;
            //moveUl.style.transition="";
            startTranslate();
            //moveUl.style.transform='translateX('+index*width*-1+'px)';
            moveUlTransform(index*width*-1);
        }
        for(var i=0;i<indexLiArr.length;i++){
            indexLiArr[i].className='';
        }
          indexLiArr[index-1].className= 'current';
    })
     
    // 过渡 结束事件 用来 修正 index的值 并修改索引
    moveUl.addEventListener('webkitTransitionEnd',function () {
        console.log('过渡结束');

        //  如果 index 太大了 
        if (index>8) {
            index = 1;

            // 关闭过渡
            //moveUl.style.transition = '';
            startTranslate();

            // 瞬间 修改一下 ul 的位置
            //moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            moveUlTransform(index*width*-1);
        }else if(index<1){
            // 跳到倒数第二张
            index= 8;

            // 关闭过渡
            //moveUl.style.transition = '';
            startTranslate();
            // 瞬间 修改一下 ul 的位置
            //moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            moveUlTransform(index*width*-1);
        }

        // 修改 索引li标签的 class
        for (var i = 0; i < indexLiArr.length; i++) {
            indexLiArr[i].className = '';
        }

        // 有一个 1的 差值
        indexLiArr[index-1].className = 'current';

    })


    // 注册 三个 touch事件

    // 定义变量 记录 开始的X
    var startX = 0;

    // 记录移动的值
    var moveX = 0;

    // 记录 distanceX
    var distanceX = 0;


    // 触摸开始
    moveUl.addEventListener('touchstart',function (event) {
        // 关闭定时器
        clearInterval(timerId);

        // 关闭过渡效果
        //moveUl.style.transition = '';
        startTranslate();

        // 记录开始值
        startX = event.touches[0].clientX;

    })

    moveUl.addEventListener('touchmove',function (event) {
        moveX = event.touches[0].clientX - startX;
        moveUl.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
        moveUlTransform(moveX+index*-1*width);
    })

   
    moveUl.addEventListener('touchend',function (event) {
        var maxDistance = width/3;
        if (Math.abs(moveX)>maxDistance) {
            if (moveX>0) {
                index--;
            }else{
                index++;
            }
            //moveUl.style.transition = 'all .3s';
            endTransition();
            //moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            moveUlTransform(index*width*-1);

        }else{
          
            //moveUl.style.transition = 'all .3s';
            endTransition();
            //moveUl.style.transform = 'translateX('+(index*-1*width)+'px)';
            moveUlTransform(index*width*-1);
        }

        // 记录结束值

        // 开启定时器
        timerId = setInterval(function () {
            // 累加
            index++;

            //moveUl.style.transition = 'all .3s';
            endTransition();

            // 修改 ul的位置
            //moveUl.style.transform = 'translateX('+index*width*-1+'px)';
            moveUlTransform(index*width*-1);
        },1000)
    })
}
