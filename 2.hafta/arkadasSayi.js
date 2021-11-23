function friendlyNumbers(sayi1, sayi2) {
    let say1 = 0;
    let say2 = 0;
  
    for (let i = 0; i < sayi1; i++) {
      if (sayi1 % i == 0) {
        say1 +=i;
      }
    }
    for (let i = 0; i < sayi2; i++) {
      if (sayi2 % i == 0) {
        say2 +=i;
      }
    }
    if (sayi1 == say2 && sayi2 == say1) {
      console.log("Arkadar Sayıdır.");
    } else {
      console.log("Arkadaş Sayı Değildir.");
    }
  }

  friendlyNumbers(220,284);