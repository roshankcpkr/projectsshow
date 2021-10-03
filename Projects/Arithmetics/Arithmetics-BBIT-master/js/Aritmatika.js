var luas = document.getElementById('luas');
var keliling = document.getElementById("keliling");
var panjang = document.getElementById("panjang");
var panjang = document.getElementById("panjang");
var lebar = document.getElementById("lebar");
var bil1 = document.getElementById("bil1");
var bil2 = document.getElementById("bil2");
var hasil = document.getElementById("hasil");

function reset() {
  if ((luas != null && keliling != null) || panjang != null || lebar != null ) 
  {
    document.getElementById("luas").value = "";
    document.getElementById("keliling").value = "";
    document.getElementById('panjang').value = "";
    document.getElementById('lebar').value = "";
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
  }
  else if (bil1 != null || bil2 != null || hasil != null) 
  {
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
    document.getElementById("hasil").value = "";
  }
 }

function tambah() {
  //input
	bil1 = parseFloat(document.getElementById("bil1").value);
  bil2 = parseFloat(document.getElementById("bil2").value);
  //rumus
	hasil = bil1+bil2;
  //output
	document.getElementById('hasil').value = hasil;
}

function kurang() {
  //input
	bil1 = parseFloat(document.getElementById("bil1").value);
  bil2 = parseFloat(document.getElementById("bil2").value);
  //rumus
	hasil = bil1-bil2;
  //output
	document.getElementById('hasil').value = hasil;
}

function kali() {
  //input
	bil1 = parseFloat(document.getElementById("bil1").value);
  bil2 = parseFloat(document.getElementById("bil2").value);
  //rumus
	hasil = bil1*bil2;
  //output
	document.getElementById('hasil').value = hasil;
}

function bagi() {
  //input
	bil1 = parseFloat(document.getElementById("bil1").value);
  bil2 = parseFloat(document.getElementById("bil2").value);
  //rumus
	hasil = bil1/bil2;
  //output
	document.getElementById('hasil').value = hasil;
}

function persegi() {
  //input
	panjang = parseFloat(document.getElementById("panjang").value);
  //rumus
	luas = panjang * panjang;
	keliling = panjang * 4;
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function persegi_panjang() {
  //input
  panjang = parseFloat(document.getElementById("panjang").value);
  lebar = parseFloat(document.getElementById("lebar").value);
  //rumus
	luas = panjang * lebar;
	keliling = 2 * (panjang + lebar);
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function segitiga() {
  //input
  panjang = parseFloat(document.getElementById("panjang").value);
  lebar = parseFloat(document.getElementById("lebar").value);
  //rumus
	luas = 1/2*panjang*lebar;
	keliling = panjang+panjang+panjang;
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function lingkaran() {
  //input
	r = parseFloat(document.getElementById("panjang").value);
  //rumus
	luas = 22/7 * r * r;
	keliling = 2 * 22/7 * r;
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function jajar_genjang() {
  //input
  panjang = parseFloat(document.getElementById("panjang").value);
  bil1 = parseFloat(document.getElementById("bil1").value);
  lebar = parseFloat(document.getElementById("lebar").value);
  //rumus
  	keliling = 2 * (panjang + bil1);
	luas = panjang * lebar;
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function layang() {
  //input
  s1= parseFloat(document.getElementById("panjang").value);
  s2 = parseFloat(document.getElementById("lebar").value);
  d1 = parseFloat(document.getElementById("bil1").value);
  d2 = parseFloat(document.getElementById("bil2").value);
  //rumus
	luas = 1/2 * d1 * d2;
  keliling = 2 * (s1+s2);
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}

function trapesium() {
  //input
  alas1 = parseFloat(document.getElementById("panjang").value);
  alas2 = parseFloat(document.getElementById("lebar").value);
  tinggi = parseFloat(document.getElementById("bil1").value);
  gadipake = parseFloat(document.getElementById("bil2").value);
  //rumus
  alas3 = alas1 - alas2;
  py = Math.sqrt(alas3 * alas3 + tinggi * tinggi);
  luas = 1/2 * (alas1 + alas2) * tinggi;
  keliling = alas1 + alas2 + tinggi + py;
  //output
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}