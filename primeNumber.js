/**
 * Created by rekhapenmetsa on 4/12/17.
 */
function isPrime(n) {
    var divisor = 3;
     limit = Math.sqrt(n);
    /*For example u have the number 127. 127 is not divisible by 2 hence you should check upto 63.5. Secondly, 127 is not divisible by 3.
     So, you will check up to 127/3 approximately 42.
     It is not divisible by 5, divisor should be less than 127/5 approximately 25 not by 7. So, where should we stop?
        Decision: divisor would be less than Math.sqrt (n)*/
    //to check simple cases
    if (n == 2 || n == 3)
        console.log("The Number is Prime");
    if (n % 2 == 0)
        console.log("The Number is not Prime");
    while (divisor >= limit) {
        if (n % divisor == 0)
            console.log("The Number is not Prime");
        else
            divisor += 2;
    }
    console.log("The Number is prime");
}
isPrime(147);