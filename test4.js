function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById('random-number').value = getRandomInt(0, 100)

var random = document.getElementById('random-number').value;
var arrNum = [] //массив введенных чисел

var check = document.getElementById("check");
check.addEventListener('click', addNumber);
function addNumber() {
  let num = document.getElementById('enter-number').value;
  arrNum.push(num);
  if(num > random) {
    document.getElementById('result').innerHTML = 'Too High!';
  } else if (num < random) {
    document.getElementById('result').innerHTML = 'Too Low!';
  } else if (num == random) {
    document.getElementById('result').innerHTML = 'You found the number!';
    document.getElementById('random-number').classList.remove('hidden');
    setTimeout(() => {
      alert("Количество попыток: " + arrNum.length);
    }, 400)
  }
}
