// * Deret Prima

// * Diberikan function prime yang menerima satu parameter yang bertipe number.
// * Output dari function ini adalah mengembalikan deret angka prima dari 0 sampai dengan bilangan itu sendiri ke dalam sebuah array

// ! Contoh Case

// * Input : 10
// * Output : [2, 3, 5, 7];
/* Proses :
angka 1 bukan prima;
angka 2 adalah prima -> masukan ke dalam deret;
angka 3 adalah prima -> masukan ke dalam deret;
angka 4 bukan prima;
angka 5 bukan prima;
angka 6 bukan prima;
angka 7 adalah prima -> masukan ke dalam deret;
angka 8 bukan prima;
angka 9 bukan prima;
angka 10 bukan prima;
*/
// * Maka outputnya : [2, 3, 5, 7]

function prime(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    let isPrima = true;
    for (let j = 2; j <= i; j++) {
      if (j !== i && i % j === 0) {
        isPrima = false;
        break;
      }
    }
    if (isPrima) {
      result.push(i);
    }
  }
  return result;
}

console.log(prime(10));
