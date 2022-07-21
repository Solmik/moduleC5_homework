var r = true;
var url = '';
const resultNode = document.querySelector('.j-result');
// проверка на число и диапазон
function test(st){
  if(st){
    if((st<=300) & (st>=100)){ r = true; }
    else{ r = false;}
  }
  else{  r = false;};
};

//Вывод изображения
function f2(rez) {
  document.getElementById('r4').innerHTML='Получено изображение:';
  img.src = URL.createObjectURL(rez);
};

// Функция, которая возвращает fetch
const useRequest = () => {
  return fetch(url) 
    .then((response) => {
    r1.innerHTML=('Стaтус: ' + response.status);
    return response.blob();
    })

    .catch(() => { console.log('Ошибка HTTP: ' + response.status) });
}

// чтение из форм и проверка введенных данных
function f1() { 
   var st1 =document.getElementById('t1').value;
   var st2 =document.getElementById('t2').value;
   const n1 = Number(st1);
   const n2 = Number(st2);
  test(n1);
  if(r){test(n2);}
  else{document.getElementById('r1').innerHTML='одно из чисел вне диапазона от 100 до 300';};
  if(r){
    document.getElementById('r1').innerHTML='  ';
    url ='https://picsum.photos/'+ n1 + '/' +n2; }
  else{document.getElementById('r1').innerHTML='одно из чисел вне диапазона от 100 до 300';};
  document.getElementById('r2').innerHTML= url;
a = st1 + '  ' + st2;
};

const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  f1();
  const requestResult = await useRequest();

  f2(requestResult);
});