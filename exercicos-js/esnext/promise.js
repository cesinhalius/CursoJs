function falaDepoisDe(segundos, frases){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      resolve(frases)
    }, segundos * 1000)
  })
}

falaDepoisDe(3, 'Que legal')
.then(frases => frases.concat('?!?'))
.then(outrafrase => console.log(outrafrase))
.catch(e=>console.log(e))