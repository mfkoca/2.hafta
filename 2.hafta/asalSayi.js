    function asalSayi() 
    {
        for (let i = 2; i < 1000; i++)
        {
        let x = 0;
        for (let j = 2; j < i; j++) 
        {
            if (i % j == 0)
            {
            x++;
            }
        }
        if (x == 0)
        {
            console.log(`${i} sayısı asal bir sayıdır.`);
        }
        }
    }

    asalSayi();