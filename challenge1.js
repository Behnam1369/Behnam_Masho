//https://www.hackerrank.com/challenges/find-digits

function findDigits(n) {
  var count = 0;
  var digits = n.toString().split("");
  digits.map(function (el) {
    if (n % parseInt(el) == 0) {
      count++;
    }
  });
  console.log(count);
}

findDigits(1024);
