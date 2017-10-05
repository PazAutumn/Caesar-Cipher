EJERCICIO CIFRADO CÉSAR
=======================

Enunciado: 
----------
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Consideraciones Específicas
---------------------------
1. Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26

2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher

3. El usuario no debe poder ingresar un campo vacío o que contenga números

-----------------------------------------------------------------------------------------------------------------------------------------

Proceso
-------

```
	var cipherPhrase = ""; //en esta variable vacía se guardará la frase cifrada

 function cipher(){

 	do{ 
 		var phrase = prompt("Ingrese una frase que no contenga numeros");  //se le pide al usuario que ingrese una frase que no contenga numeros, solo letras

 	}while(phrase === "" || parseInt(phrase)); //si la frase es un campo vacio o contiene numeros se vuelve a mostrar el prompt
 	
 	for(var i = 0; i < phrase.length; i++){//se itera en el largo de la frase 

 		var codeAt = (phrase.charCodeAt(i)-65+33)%26+65;//el numero que va iterando se va transformando en el número que ocuparia en el codigo ASCII, al terminar la frase completa se guarda en la variable codeAt

 		var charCode = String.fromCharCode(codeAt);//transforma los numeros guardados en la variable codeAt a letras del codigo ASCII y se guarda la frase codificada en la variable charCode

 		cipherPhrase+= charCode; //el resultado en charCode se guarda en la variable vacía cipherPhrase
 	}
 	return alert(cipherPhrase); //se le envía una alerta al usuario que contiene su frase codificada

}

	//var decipherPhrase = cipherPhrase //La frase cifrada se guarda en una nueva variable para luego poder utilizarla

function decipher(){
  
    for(var i = 0; i < cipherPhrase.length; i++){
    
        var codeAt2 = (cipherPhrase.charCodeAt(i)-33)%26;

 	    var charCode2 = String.fromCharCode(codeAt2);  

 	    cipherPhrase+= charCode2;
  
}
  return alert("La frase original es "+ cipherPhrase)
}


```
Puedes ver el diagrama de flujo aquí: ![Diagrama de flujo](/CifradoCesar.jpeg)

*Diclaimer: este ejercicio no pude completarlo :(*
