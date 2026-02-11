const lables=document.querySelectorAll('.form-control label')//选择器的规则适用于这里

lables.forEach(lable=>{
  lable.innerHTML=lable.textContent.split('').map((letter,index)=>{
    return `<span style="transition-delay:${index*50}ms">${letter}</span>`
  }).join('')//把每个字母前添加一个span标签
})