const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener('click',()=>{
  search.classList.toggle('active')
  //toggle方法在有和无之间改变
  input.focus()//input聚焦
})