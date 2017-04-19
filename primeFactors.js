/**
 * Created by rekhapenmetsa on 4/12/17.
 */
function primeFactors(n)
{
   var factors=[];
     var divisor=2;
    while(n>2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}
//primeFactors(69);
console.log(primeFactors(56));