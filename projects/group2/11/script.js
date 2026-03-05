const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{/* 这个项目主要就是keydown知识点 */
  console.log(e)
  insert.innerHTML = `
  <div class="key">
  ${e.key===" "?"space":e.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${e.keyCode===" "?"space":e.keyCode}
  <small>event.keyCode</small>
  </div>
  <div class="key">
  ${e.code===" "?"space":e.code}
  <small>event.code</small>
  </div>
  `
})