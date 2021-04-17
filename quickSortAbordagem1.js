  function partition(Arranjo,p,r){
    const pivo=Arranjo[r]
    let iterador=p;

    for(let j = p;j < r; j++){
        if(Arranjo[j] < pivo){
          let aux=Arranjo[j]
          Arranjo[j]=Arranjo[iterador]
          Arranjo[iterador]=aux;
          iterador++;
        }
    }
    let auxiliar=Arranjo[r]
    Arranjo[r]=Arranjo[iterador]
    Arranjo[iterador]=auxiliar;

    return iterador;
  }

  function quickSort(Arranjo,p,r){
    if(p < r){
      let q =partition(Arranjo,p,r)
      quickSort(Arranjo,p,q-1)
      quickSort(Arranjo,q+1,r)
    }
    return Arranjo;
  }

let arranjo=[3,2,5,30,54,12,1,7,18,22,1]
//let arranjo=[1,2,3,7,12,123,42,2,5,123,800]
let tamanho=arranjo.length-1
let piorCaso=[1,2,3,4,5,6,7,8,9]
let tamanhoPiorcaso=piorCaso.length-1;

console.log(quickSort(piorCaso,0,tamanhoPiorcaso));
//console.log(quickSort(arranjo,0,tamanho));
