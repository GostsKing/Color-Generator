const colum = document.querySelectorAll('.colm');

function renderColor(){
	const valueHEX = '0123456789ABCDEF';
	let color = '#';

	for(let i = 0; i < 6; i++){

		let num = Math.floor(Math.random() * valueHEX.length);
		color += valueHEX[num];

	}

	return color;
}


function setColumsColors(){
	colum.forEach(col => {
		let color = renderColor()
		// col.innerHTML = color;
		col.style.backgroundColor = color;
	})
}

setColumsColors();