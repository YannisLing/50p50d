const jokeEl=document.getElementById('joke');
const jokeBtn=document.getElementById('jokeBtn');

jokeBtn.addEventListener('click',getjoke);
getjoke()
async function getjoke(){//异步函数
  const config={
    headers:{
      Accept:'application/json',

    }
  }



  const res = await fetch('https://icanhazdadjoke.com',config)//fetch请求，基于ES6promise

  const data = await res.json();
  console.log('data:',data);
  jokeEl.innerHTML=data.joke
}
