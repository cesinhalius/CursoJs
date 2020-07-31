function Bhaskara(a,b,c){
  let delta = b ** 2 - 4 * a * c
  if(delta > 0){
        let results = []
        let x1 = (-b + Math.sqrt(delta))/2*a
        let x2 = (-b - Math.sqrt(delta))/2*a
        results.push(x1)
        results.push(x2)
        return results
  }
  return "Delta é negativo"
}
console.log(Bhaskara(1,3,2))
console.log(Bhaskara(3,1,2))