function findPrime(...numbers) 
    {
        for (let i = 0; i < numbers.length; i++) 
        {
        let sayi = 0
        for (let j = 1; j <= numbers[i]; j++)
        {
    
            if (numbers[i] % j == 0) 
            {
            sayi++
            }
        }
        if (sayi == 2) 
        {
            console.log("Asal Sayıdır: "+"  "+numbers[i])
        } else 
        {
            console.log("Asal Sayı Değildir: "+"  "+numbers[i])
        }
    
        }
    
    }
  
  findPrime(2,3,5,11,18,55)