//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b,c, equivalent){
    const roots = document.getElementById("roots");
    const root = Math.sqrt(b*b - 4*a*c);
    const answerPlus = (-(b)+root)/2*a;
    const answerMin = (-(b)-root)/2*a;
    let hasil = "";
	let penyelesaian = "";
	let soal = "";
	let charb = "-"+ -b;
	let charc = "-"+ -c;
    let test;
 
    if(answerPlus > answerMin){
        test = a*((answerMin-1)*(answerMin-1)) + b * (answerMin-1) + c;
            if(test > 0){
            if(equivalent == "<"){
                hasil = answerMin + " < x < " + answerPlus;
            }else if(equivalent == "<="){
                hasil = answerMin + " <= x <= " + answerPlus;
            }else if(equivalent == ">"){
                hasil = "x < " + answerMin + " atau x > "+ answerPlus;
            }else if(equivalent == ">="){
                hasil = "x <= " + answerMin + " atau x >= "+ answerPlus;
            }
        }else if(test < 0){
            if(equivalent == "<"){
                hasil = "x < " + answerPlus + " atau x > "+ answerMin;
            }else if(equivalent == "<="){
                hasil = "x <= " + answerPlus + " atau x >= "+ answerMin;
            }else if(equivalent == ">"){
                hasil = answerPlus + " < x < " + answerMin;
            }else if(equivalent == ">="){
                hasil = answerPlus + " <= x <= " + answerMin;
            }
        }
    }else if(answerPlus < answerMin){
        test = a*((answerPlus-1)*(answerPlus-1)) + b * (answerPlus-1) + c;
            if(test > 0){
            if(equivalent == "<"){
                hasil = answerPlus + " < x < " + answerMin;
            }else if(equivalent == "<="){
                hasil = answerPlus + " <= x <= " + answerMin;
            }else if(equivalent == ">"){
                hasil = "x < " + answerPlus + " atau x > "+ answerMin;
            }else if(equivalent == ">="){
                hasil = "x <= " + answerPlus + " atau x >= "+ answerMin;
            }
        }else if(test < 0){
            if(equivalent == "<"){
                hasil = "x < " + answerPlus + " atau x > "+ answerMin;
            }else if(equivalent == "<="){
                hasil = "x <= " + answerPlus + " atau x >= "+ answerMin;
            }else if(equivalent == ">"){
                hasil = answerPlus + " < x < " + answerMin;
            }else if(equivalent == ">="){
                hasil = answerPlus + " <= x <= " + answerMin;
            }
        }
    }

	if(answerPlus > 0 && answerMin > 0){
		penyelesaian = "(x -" + answerPlus +")(x -" + answerMin + ")";
	}
	else if(answerPlus < 0 && answerMin < 0){
		penyelesaian = "(x +" + -answerPlus +")(x +" + -answerMin + ")";
	}
	else if(answerPlus > 0 && answerMin < 0){
		penyelesaian = "(x -" + answerPlus +")(x +" + -answerMin + ")";
	}
	else if(answerPlus < 0 && answerMin > 0){
		penyelesaian = "(x +" + -answerPlus +")(x -" + answerMin + ")";
	}
	if(b > 0){
		charb = "+" + b;
	}
	else if (c > 0){
		charc = "+" + c;
	}

	soal = a+"x^2 " + charb + "x " + charc + " " + equivalent + " 0 ";

    // console.log(hasil);
 
    let ans = soal + "<br>" +  penyelesaian + "<br>" +"x1 = " + answerPlus + " x2 = " + answerMin + "<br>" +  hasil;
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
		str = str.replace("+ c","- "+(c/-1));
	}
	else{
		str = str.replace("c",c);
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
	if(validateInput(a,b,c)){
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c,equivalent,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;

			//mencari akar pers. kuadrat
			quadraticRoots(a,b,c, equivalent);

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
}