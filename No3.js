let BB = 90;
let TB = 170;

BMI = BB / TB ** 2;

if (BMI >= 30.0 ) {
    console.log("Obesitas")
} else if (BMI <= 29.9 && BMI >= 25.0 ) {
    console.log("Kelebihan Berat Badan")
} else if (BMI <=24.9 && BMI >= 18.5) {
    console.log("Normal Ideal ")
} else {
    console.log("Kekurangan Berat Badan")
} 