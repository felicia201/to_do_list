function calculate(){
    const num1= parseFloat(document.getElementById("num1").value);
    const num2= parseFloat(document.getElementById("num2").value);
    const operation= document.getElementById("operation").value;
    let resultat
    
    switch(operation){
        case '+':
        resultat = num1 + num2;
        break;
        case'-':
        resultat=num1-num2;
        break;
        case' /':
        resultat= num1 / num2;
        break;
        case'*':
        resultat = num1 * num2;
        break;
        default:
            resultat= 'operation non validé';
            break;
    }
     document .getElementById('resultat').innerText='resultat:' + resultat;
    }
    

    


