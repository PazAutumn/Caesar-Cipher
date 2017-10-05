 
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


 

