
        function insert(num)
        {
        var numero = document.getElementById('resultado').innerHTML ;
        document.getElementById('resultado').innerHTML = numero + num;      
       }
       
       function limpar() 
       {
           var apagar = document.getElementById('resultado').innerHTML = "";
           
       }
       function apagar()
       {
           var resultado = document.getElementById('resultado').innerHTML;
           document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
       }
       function calcular() 
       {
           var tudo = document.getElementById('resultado').innerHTML;
           if(tudo)//se tiver coisas dentro do tudo !!//
           {
               document.getElementById('resultado').innerHTML = eval(tudo);
           }
           else
           {
               document.getElementById('resultado').innerHTML = "nada... "
           }
       }