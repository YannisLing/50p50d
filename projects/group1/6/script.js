const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

function checkBoxes(){
  const triggerBottom = window.innerHeight * 4/5;
  /* 从页面顶部到底部4/5的距离 */
  boxes.forEach(box=>{
    const boxFromTop=box.getBoundingClientRect().top;
    //boxFromTop是每个盒子距离顶部的距离
    if(boxFromTop<triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show')
    }
  })
}