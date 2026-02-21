const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Masukkan tanggal lahir kamu (1-31): ", function(tanggal) {
rl.question("Masukkan bulan lahir kamu (1-12): ", function(bulan) {

    tanggal = parseInt(tanggal);  
    bulan = parseInt(bulan);

    let zodiak = "";

    // Validasi input
    if (tanggal < 1 || tanggal > 31 || bulan < 1 || bulan > 12) {
      zodiak = "Input tidak valid";
    } 
    else if ((tanggal >= 21 && bulan === 3) || (tanggal <= 19 && bulan === 4)) {
      zodiak = "Aries";
    } 
    else if ((tanggal >= 20 && bulan === 4) || (tanggal <= 20 && bulan === 5)) {
      zodiak = "Taurus";
    } 
    else if ((tanggal >= 21 && bulan === 5) || (tanggal <= 20 && bulan === 6)) {
      zodiak = "Gemini";
    } 
    else if ((tanggal >= 21 && bulan === 6) || (tanggal <= 22 && bulan === 7)) {
      zodiak = "Cancer";
    } 
    else if ((tanggal >= 23 && bulan === 7) || (tanggal <= 22 && bulan === 8)) {
      zodiak = "Leo";
    } 
    else if ((tanggal >= 23 && bulan === 8) || (tanggal <= 22 && bulan === 9)) {
      zodiak = "Virgo";
    } 
    else if ((tanggal >= 23 && bulan === 9) || (tanggal <= 22 && bulan === 10)) {
      zodiak = "Libra";
    } 
    else if ((tanggal >= 23 && bulan === 10) || (tanggal <= 21 && bulan === 11)) {
      zodiak = "Scorpio";
    } 
    else if ((tanggal >= 22 && bulan === 11) || (tanggal <= 21 && bulan === 12)) {
      zodiak = "Sagittarius";
    } 
    else if ((tanggal >= 22 && bulan === 12) || (tanggal <= 19 && bulan === 1)) {
      zodiak = "Capricorn";
    } 
    else if ((tanggal >= 20 && bulan === 1) || (tanggal <= 18 && bulan === 2)) {
      zodiak = "Aquarius";
    } 
    else if ((tanggal >= 19 && bulan === 2) || (tanggal <= 20 && bulan === 3)) {
      zodiak = "Pisces";
    }

console.log(`Tanggal lahir kamu adalah ${tanggal},bulan ${bulan} dan zodiak kamu adalah ${zodiak}.`);


    rl.close();
  });
});