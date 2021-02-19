function quadraticRoots(a,b,c, equivalent){
	const roots = document.getElementById("roots");
	const hasil = (c-b)/a;

     if(a <0 && equivalent == "<"){
            equivalent = ">";
        }
        else if(a <0 && equivalent == ">"){
            equivalent = "<";
        }
        else if(a <0 && equivalent == "<="){
            equivalent = ">=";
        }
        else if(a <0 && equivalent == ">="){
            equivalent = "<=";
        }

    // console.log(hasil);
    console.log(equivalent);

    let ans = "x "+ equivalent + " " + hasil;
    roots.innerHTML = ans;

   
}

//fungsi untuk mengubah bentuk persamaan kuadrat
function createQuadraticStr(a,b,c,equivalent,str){
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
		str = str.replace("+ b","");
	}
	else if(b == 1){
		//dihilangkan angkanya
		str = str.replace("b",b);
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
		str = str.replace("+ c","- "+(c/-1));
	}
	else{
		str = str.replace("c",c);
	}

	// replace equivalent
	if(equivalent == "<"){
		str = str.replace("<", "<");
	}
	else if(equivalent == ">"){
		str = str.replace("<", ">");
	}
	else if(equivalent == ">="){
		str = str.replace("<", ">=");
	}
	else if(equivalent == "<="){
		str = str.replace("<", "<=");
	}

	return str;
}
function pindahRuas(nilai){
	return nilai * -1;
   }
function createX1(a,b,c,equivalent,quadratic){
const hasil_1 = document.getElementById("hasil_1");
const hasil_2 = document.getElementById("hasil_2");
const hasil_3 = document.getElementById("hasil_3");

let nyari=(a)
	if(b > 0){
		nyari = nyari + "x" + "+"
	}else{
		nyari = nyari + "x" ;
	}
hasil_1.innerHTML = nyari.toString()+" "+ b.toString()+" "+equivalent.toString()+" "+ c.toString();
//a.toString() + 'x'+ " " + b.toString() + " " + equivalent.toString() + " "  + c.toString();
let nyoba = pindahRuas(b.toString());
hasil_2.innerHTML =  a.toString() + 'x'+ " "+ equivalent.toString()+ " " + nyoba.toString();
hasil_3.innerHTML = 'x'+ " "+ equivalent.toString() + " "+ nyoba.toString() + " "+ '/'+ " " + a.toString();
}

//fungsi validasi input
function validateInput(a,b,c){
	return !isNaN(a) && !isNaN(b) && !isNaN(c);
}

function find(){
	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	let c = parseInt(document.getElementById("c").value);
	let equivalent = document.getElementById("equivalent").value;

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b,c, equivalent)){
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c, equivalent,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;
			createX1(a, b, c, equivalent, quadratic_str);

			//mencari akar pers. kuadrat
			quadraticRoots(a,b,c, equivalent);

			//menampilkan jawaban
			answer.style.display = "block";

		}
		else{
			notif.innerHTML = "Bukan pertidaksamaan linier!";
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
}


