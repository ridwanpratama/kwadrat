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


