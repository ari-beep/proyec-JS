function suma(){
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadoSuma=parseFloat(valor1)+parseFloat(valor2);

    if(valor1==""||valor2==""){
        alert("El campo esta vacio");
    }
    else{
        resultadoTotal.innerHTML="El resultado es: "+ resultadoSuma;
    }
    }
    function resta(){
        let valor1=document.getElementById("dato1").value;
        let valor2=document.getElementById("dato2").value;
        let resultadoTotal=document.getElementById("resultado");
        let resultadoSuma=parseFloat(valor1)-parseFloat(valor2);
    
        if(valor1==""||valor2==""){
            alert("El campo esta vacio");
        }
        else{
            resultadoTotal.innerHTML="El resultado es: "+ resultadoSuma;
        }
        }
    function multiplicacion(){
        let valor1=document.getElementById("dato1").value;
        let valor2=document.getElementById("dato2").value;
        let resultadoTotal=document.getElementById("resultado");
        let resultadoSuma=parseFloat(valor1)*parseFloat(valor2);
    
        if(valor1==""||valor2==""){
            alert("El campo esta vacio");
        }
        else{
            resultadoTotal.innerHTML="El resultado es: "+ resultadoSuma;
        }
        }
    function division(){
        let valor1=document.getElementById("dato1").value;
        let valor2=document.getElementById("dato2").value;
        let resultadoTotal=document.getElementById("resultado");
        let resultadoSuma=parseFloat(valor1)/parseFloat(valor2);
    
        if(valor1==""||valor2==""){
            alert("El campo esta vacio");
        }
        else{
            resultadoTotal.innerHTML="El resultado es: "+ resultadoSuma;
        }
        
        
   