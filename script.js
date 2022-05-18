function multi(){
	let tn  = document.getElementById('num')
	res = document.getElementById('tabuada')
	if (tn.value.length == 0){
		alert('ERROR! confira os dados e tente novamente.')
	}else{
		let n = Number(tn.value)
		let c = 0
		res.innerHTML = ''
		while (c <= 10){
			let item = document.createElement('option')
			item.text = ` ${n} X ${c} = ${n * c}`
			item.value = `res${c}`
			res.appendChild(item)
			c++
		}
	}
}
