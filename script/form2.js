//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b,c,d, equivalent){
    const roots = document.getElementById("roots");
    const hasil = (d-a)/(b-c);
 
    if((b-c) <0 && equivalent == "<"){
        equivalent = ">";
    }
    else if((b-c) <0 && equivalent == ">"){
        equivalent = "<";
    }
    else if((b-c) <0 && equivalent == "<="){
        equivalent = ">=";
    }
    else if((b-c) <0 && equivalent == ">="){
        equivalent = "<=";
    }
	// console.log(d)
    // console.log(hasil);
    console.log(equivalent);
 
    let ans = "x "+ equivalent + " " + hasil;
    roots.innerHTML = ans;
 
   
}

//fungsi untuk mengubah bentuk persamaan kuadrat
function createQuadraticStr(a,b,c,d,equivalent,str){
	//untuk a

	str = str.replace("a",a);

	//untuk b
	if(b == 0){
		//dihilangkan tanda + dan x
		str = str.replace("+ b","");
	}
	else if(b == 1){
		//dihilangkan angkanya
		str = str.replace("b","");
	}
	else if(b < 0){
		//dinegatifkan dan hilang angkanya
		if(b == -1){
			str = str.replace("+ b","- ");
		}
		//dinegatifkan
		else{
			str = str.replace("+ b","- "+(b/-1));
		}
	}
	else{
		//biasa
		str = str.replace("b",b);
	}

	//untuk c
	if(c == 0){
		str = str.replace("c", c);
	}
	else if(c < 0){
		str = str.replace("c","- "+(c/-1));
	}else if(c == 1){
		str = str.replace("c","");
	}
	else{
		// console.log(c);
		str = str.replace("c",c);
	}

	if(d == 0){
		str = str.replace("d", d);
	}
	else if(d < 0){
		str = str.replace("+ d","- "+(d/-1));
	}
	else{
		str = str.replace("d",d);
	}

	// replace equivalent
	if(equivalent == "<"){
		str = str.replace("<", ">");
	}
	else if(equivalent == ">"){
		str = str.replace("<", "<");
	}
	else if(equivalent == ">="){
		str = str.replace("<", "<=");
	}
	else if(equivalent == "<="){
		str = str.replace("<", ">=");
	}


	return str;
}
//Cara Penyelesaian
function pindahRuas(nilai){
	return nilai * -1;
   }

function createX1(a,b,c,d,equivalent){
	const hasil_1 = document.getElementById("hasil_1");
	const hasil_2 = document.getElementById("hasil_2");
	const hasil_3 = document.getElementById("hasil_3");

	let nyari=(a)
	if(b > 0){
		nyari = nyari + "+"
	}else{
		nyari = nyari ;
	}
	hasil_1.innerHTML = nyari.toString()+" "+ b.toString()+"x"+" "+equivalent.toString()+" "+ c.toString()+"x"+" "+ d.toString();
	let nyoba = pindahRuas(a)
	if(nyoba > 0){
		nyoba = " + " + nyoba;
	}else{
		nyoba = nyoba;
	};
	
	let coba = pindahRuas(c)
	if(coba == 1){
		coba = " + ";
	}else if(coba == -1){
		coba = " - ";
	}else if(coba > 0){
		coba = " + " + coba;
	}else{
		coba = coba;
	};

	let str_b = b;
	
	hasil_2.innerHTML =  str_b + 'x'+ " " + coba.toString() + 'x'+ " " + equivalent.toString()+ " " + d.toString()+ " " + nyoba.toString();
	let cari= b-c;
	let kuy= d-a;

	hasil_3.innerHTML = cari.toString() +'x'+ " "+ equivalent.toString() + kuy.toString();


}

//fungsi validasi input
function validateInput(a,b,c,d){
	return !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d);
}

function find(){
	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	let c = parseInt(document.getElementById("c").value);
	let d = parseInt(document.getElementById("d").value);
	let equivalent = document.getElementById("equivalent").value;

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b,c, d)){
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c, d,equivalent,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;
			//Maggil Cara Penyelesaian
			createX1(a, b, c, d, equivalent);

			//mencari akar pers. kuadrat
			quadraticRoots(a, b, c, d, equivalent);

			//menampilkan jawaban
			answer.style.display = "block";

		}
		else{
			notif.innerHTML = "Bukan persamaan kuadrat!";
			showModal();
			reset();
		}
	}
	else{
		notif.innerHTML = "Mohon masukan input yang benar, berupa angka!";
		showModal();
	}	
}

//fungsi untuk mereset halaman
function reset(){
	const answer = document.getElementById("answer");
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
	document.getElementById("d").value = "";
	answer.style.display = "none";
}