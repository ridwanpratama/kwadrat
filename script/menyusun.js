//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b){
	const roots = document.getElementById("roots");

	const hasilx1 = -a+-b;
    const hasilx2 = -a*-b;
    let hasil = "";

    if(hasilx1 >= 0){
        hasil = "x^2 +" + hasilx1 +"x " + hasilx2 + " = 0"; 
        }
        else if(hasilx2 >= 0){
        hasil = "x^2 " + hasilx1 +"x +" + hasilx2 + " = 0"; 
        }
        else if(hasilx1 >=0 && hasilx2 >=0 ){
        hasil = "x^2 +" + hasilx1 +"x +" + hasilx2 + " = 0"; 
    }else{
        hasil = "x^2 " + hasilx1 +"x " + hasilx2 + " = 0"; 
    }

    let ans = hasil;
	roots.innerHTML = ans;

}
//Cara Penyelesaian
//function tanda(nilai){
//	return nilai * -1;
 //  }
function createX1(a,b){
	const hasil_1 = document.getElementById("hasil_1");
	const hasil_2 = document.getElementById("hasil_2");
	const hasil_3 = document.getElementById("hasil_3");
	
	let nyari=(a)
		if(b > 0){
			nyari = nyari + "x" + "+"
		}else{
			nyari = nyari + "x" ;
		}
	hasil_1.innerHTML = "("+"x"+"-"+"x1"+")"+ " "+"("+"x"+"-"+"x2"+")"+" "+"="+" "+"0";
	//a.toString() + 'x'+ " " + b.toString() + " " + equivalent.toString() + " "  + c.toString();
	//let nyoba = pindahRuas(b.toString());
	let tandakurung =(a)
		if(a > 0){
			tandakurung =  tandakurung 
		}else{
			tandakurung = "(" + tandakurung + ")"
		}
	let tandakurungb =(b)
		if(b > 0){
			tandakurungb = tandakurungb
		}else{
			tandakurungb = "(" + tandakurungb + ")"
		}
		
	hasil_2.innerHTML =  "("+"x"+"-"+tandakurung.toString()+")"+ " "+"("+"x"+"-"+tandakurungb.toString()+")"+" "+"="+" "+"0";
	let hasilminusa=(a)
	if(a > 0){
		hasilminusa = "-" + hasilminusa 
	}else{
		hasilminusa = "+" + hasilminusa * -1  
	}
	let hasilminus=(b)
		if(b > 0){
			hasilminus =  "-" + hasilminus 
		}else{
			hasilminus = "+" + hasilminus * -1 
		}

	hasil_3.innerHTML ="("+"x"+hasilminusa.toString()+")"+ " "+"("+"x"+hasilminus.toString()+")"+" "+"="+" "+"0" ;
	}
	
//fungsi validasi input
function validateInput(a,b){
	return !isNaN(a) && !isNaN(b);
}

function find(){
	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b)){
		//jika a bukan 0, maka merupakan pers. kuadrat
		if(a != 0){
		
			//mencari akar pers. kuadrat
			createX1(a,b);
			quadraticRoots(a,b);

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
	answer.style.display = "none";
}


