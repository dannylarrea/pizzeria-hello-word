function pizza(){
	var dinero = document.getElementById('dinero')
	var msg = ''
	if(dinero.value<0){
		msg = 'Vuelve cuando tengas dinero'
	} else if(dinero.value>=0 && dinero.value<5){
		msg = 'Vuelve cuando tengas más dinero'
	} else if(dinero.value>=5 && dinero.value<10){
		msg = 'Podrás comprar una pizza buena pero insuficiente'
	} else {
		msg = 'Podrás comprar una pizza buenísima'
	}
	alert(msg)
	return false
}
