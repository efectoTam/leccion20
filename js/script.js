function callbackPromedio(a, b, c, callback){
	var suma=a+b+c;
	var promedio=suma/3;
	return callback(promedio);
}

function segundero(){
    var t=1;
    setInterval(function(){
        document.getElementById("titulo").innerHTML=t++;
    },1000,"JavaScript");
}
segundero();