const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);/* 30ms循环定时器 ，30ms执行一次blurring*/

function blurring(){
  load++;
  if(load>99){
    clearInterval(int);//清除定时器
  }
  loadText.textContent=`${load}%`//更新加载进度
  loadText.style.opacity=scale(load,0,100,1,0)//load的范围是0到100，对应透明度变换到1到0
  bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`//模糊度从30到0
}

const scale = (num,in_min,in_max,out_min,out_max)=>((num-in_min)*(out_max-out_min))/(in_max-in_min)+out_min//这玩意在数学上叫什么变换来着