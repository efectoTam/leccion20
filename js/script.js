function callbackPromedio(a, b, c, callback){
	var suma=a+b+c;
	var promedio=suma/3;
	return callback(promedio);
}