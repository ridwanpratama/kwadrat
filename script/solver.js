//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b,c){
	const roots = document.getElementById("roots");
	const D = b**2 - 4*a*c;

	if(a != 0){
		if(D > 0){
			//dua akar penyelesaian
			let x1 = (-b + Math.sqrt(D))/(2*a);
			let x2 = (-b - Math.sqrt(D))/(2*a);
			if(Math.sqrt(D) % 1 != 0){
				x1 = x1.toFixed(2);
				x2 = x2.toFixed(2);
			}
			let ans = "Karena D = " + D + ", maka akar - akarnya adalah " + x1 + " dan " + x2;
			roots.innerHTML = ans;

		}
		else if(D == 0){
			//akar penyelesaian sama
			let x = -b/2*a;
			let ans = "Karena D = " + D + ", maka akarnya adalah " + x;
			roots.innerHTML = ans;
		}
		else{
			//akar imajiner
			roots.innerHTML = "Karena D < 0, maka akar - akarnya merupakan akar - akar imajiner!";
		}
	}
	else{
		//bukan persamaan kuadrat
	}
}

//fungsi untuk mengubah bentuk persamaan kuadrat
function createQuadraticStr(a,b,c,str){
	//untuk a
	if(a == 1){
		//hilangkan angkanya
		str = str.replace("a","");
	}
	else if(a == -1){
		//diberi tanda negatif
		str = str.replace("a","-");
	}
	else{
		//biasa
		str = str.replace("a",a);
	}

	//untuk b
	if(b == 0){
		//dihilangkan tanda + dan x
		str = str.replace("+ bx","");
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
		str = str.replace("+ c","");
	}
	else if(c < 0){
		str = str.replace("+ c","- "+(c/-1));
	}
	else{
		str = str.replace("c",c);
	}

	return str;
}
//fungsi validasi input
function validateInput(a,b,c){
	return !isNaN(a) && !isNaN(b) && !isNaN(c);
}
//Cara Penyelesaian
function createX1(a,b,c){
	const hasil_1 = document.getElementById("hasil_1");
	const hasil_2 = document.getElementById("hasil_2");
	const hasil_3 = document.getElementById("hasil_3");
	const hasil_4 = document.getElementById("hasil_4");
	
	const hasil_1_a = document.getElementById("hasil_1_a");
	const hasil_2_a = document.getElementById("hasil_2_a");
	const hasil_3_a = document.getElementById("hasil_3_a");
	const hasil_4_a = document.getElementById("hasil_4_a");

	
	const hasil = document.getElementById("hasil_akhir");
	


	hasil_1.innerHTML = '-' + b.toString() + ' + &#8730;' + b.toString() + '<sup>2</sup> - &#8730;4x' + a.toString() + 'x' + c.toString();
	hasil_1_a.innerHTML = '2x' + a.toString();

	let b_2 = b * b;
	let a_c = 4*a*c;
	let z = 2*a;
	
	hasil_2.innerHTML = '-' + b.toString() + ' + &#8730;' + b_2.toString() + '-' + a_c.toString();
	hasil_2_a.innerHTML = z.toString();

	let h = b_2-a_c;	
	hasil_3.innerHTML = '-' + b.toString() + ' + &#8730;' + z.toString();
	hasil_3_a.innerHTML = z.toString();

	
	let hasil_akhir = Math.sqrt(h);
	console.log(hasil_akhir);
	hasil_4.innerHTML = '-' + b.toString() + '+' + hasil_akhir.toString();
	hasil_4_a.innerHTML = z.toString();


	let j = ((-b) + hasil_akhir)/z;
	hasil.innerHTML = j.toString();

	
}
function createX2(a,b,c){
	const hasil_6 = document.getElementById("hasil_6");
	const hasil_7 = document.getElementById("hasil_7");
	const hasil_8 = document.getElementById("hasil_8");
	const hasil_9 = document.getElementById("hasil_9");
	
	const hasil_6_a = document.getElementById("hasil_6_a");
	const hasil_7_a = document.getElementById("hasil_7_a");
	const hasil_8_a = document.getElementById("hasil_8_a");
	const hasil_9_a = document.getElementById("hasil_9_a");

	
	
	const hasil2 = document.getElementById("hasil_akhir2");


	hasil_6.innerHTML = '-' + b.toString() + ' + &#8730;' + b.toString() + '<sup>2</sup> - &#8730;4x' + a.toString() + 'x' + c.toString();
	hasil_6_a.innerHTML = '2x' + a.toString();

	let b_2 = b * b;
	let a_c = 4*a*c;
	let z = 2*a;
	
	hasil_7.innerHTML = '-' + b.toString() + ' + &#8730;' + b_2.toString() + '-' + a_c.toString();
	hasil_7_a.innerHTML = z.toString();

	let h = b_2-a_c;	
	hasil_8.innerHTML = '-' + b.toString() + ' + &#8730;' + z.toString();
	hasil_8_a.innerHTML = z.toString();

	
	let hasil_akhir = Math.sqrt(h);
	console.log(hasil_akhir);
	hasil_9.innerHTML = '-' + b.toString() + '+' + hasil_akhir.toString();
	hasil_9_a.innerHTML = z.toString();


	let j = ((-b) - hasil_akhir)/z;
	hasil2.innerHTML = j.toString();

	
}

function find(){

	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	let c = parseInt(document.getElementById("c").value);

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b,c)){
		//jika a bukan 0, maka merupakan pers. kuadrat
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "ax<sup>2</sup> + bx + c = 0";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;
			createX1(a, b, c);
			createX2(a, b, c);

			//mencari akar pers. kuadrat
			quadraticRoots(a,b,c);

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
	answer.style.display = "none";
	document.getElementById("quadratic_equation").innerHTML = "ax<sup>2</sup> + bx + c = 0";
}