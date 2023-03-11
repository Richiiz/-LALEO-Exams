let nums = [1,0,0,3,1]

function ordenamiento ( array ){
  for (let i = 0; i<array.length-1; i++){
    for( let j=i+1; j<array.length; j++){
      if(array[i] < array[j]){
      }else{
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
    }
  }

  let temp = 1;
    let x = 0
    do{
      let A=array.length - temp
      if(array[x]===0){
      let aux = array[A];
      array[A] = array[x];
      array[x] = aux;
      x++
      temp++
    }else{
      temp++
    }
  }while(temp < array.length);

for (let i = 0; i<array.length-1; i++){
    for( let j=i+1; j<array.length; j++){
      if(array[i] !== 0 && array[j]!==0){
        if(array[i] > array[j]){
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        }
      }else{
      }
    }
  }
  return array
}

console.log(ordenamiento(nums))