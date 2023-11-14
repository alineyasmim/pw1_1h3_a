function calculaNumeros(){
    let n1 =parseInt(document.getElementById("usuario").value)
    let n2 = parseInt(document.getElementById("senha").value)
    let op =document.getElementById("operation").value
    let resultado 
    if(op === "+"){
        resultado=(n1+n2)
        alert("soma: "+n1+" "+op+" "+n2+" ="+resultado)
    }

    alert("soma: "+n1+" "+op+" "+n2+" ="+resultado)
}