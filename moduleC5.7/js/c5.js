var url = '';
var ddd = []; 
var status = '';
var ok = false; // Запрос сформирован
var date = '';  //Время и дата
//var dateM = '';

// чтение из форм и проверка введенных данных
function f1() {
   let er1 = false; // флаг ошибки набора страницы
   let er2 = false; // флаг ошибки набора лимита
   ok = false; //
   url = '';

  // очистка полей сообщений
  document.getElementById('r1').innerHTML='';
  document.getElementById('r2').innerHTML='';
  // чтение значений input и преобразование в числа 
   var st1 =document.getElementById('t1').value;
   var st2 =document.getElementById('t2').value;
   const n1 = Number(st1);
   const n2 = Number(st2);
   //проверка ошибок ввода
  if((n1>=1)&&(n1<=10)){}
  else{er1= true;};
  if((n2>=1)&&(n2<=10)){}
    else{er2= true;}
  if((er1)&&(!er2)){
    document.getElementById('r1').innerHTML='Номер страницы вне диапазона от 1 до 10';}
  if((!er1)&&(er2)){
    document.getElementById('r1').innerHTML=' Лимит вне диапазона от 1 до 10';}
  if((er1)&&(er2)){
    document.getElementById('r1').innerHTML='Номер страницы и лимит вне диапазона от 1 до 10';}
  if((!er1)&&(!er2)){
    url = `https://picsum.photos/v2/list?page=${n1}&limit=${n2}`;
     //console.log('URL=', url);
    ok = true; // Запрос сформирован
  }
};

// Функция, которая возвращает fetch
const useRequest = () => {
  return fetch(url) 
    .then((response) => {
      //console.log('response=', response.json);

  // Запись в хранилище времени и даты
   date = new Date().toLocaleDateString()+' в '+new Date().toLocaleTimeString().slice(0,-3);
   localStorage.setItem("date", date);

    status = response.status;
     console.log('rstatus=', status, url, 'OK= ', ok);
    
     return response.json();
  })
    .then((data) => { //console.log('data', data);
                     ddd = data; 
                    })

    .catch(() => { console.log('Ошибка HTTP: ' + response.status) });
status = response.status;
}

const resultNode = document.querySelector('.j-result');

// Загрузка изображений на страницу и запись в хранилище
function f2(r) {
  document.getElementById('r4').innerHTML='Получены изображения:';
  document.getElementById('r5').innerHTML= date;
    let cards = '';

  r.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  localStorage.setItem("im", cards);
    resultNode.innerHTML = cards;  
}


// Начальная загрузка страницы, вывод старых фото
if(localStorage.getItem("im")&&localStorage.getItem("date")){
  let dat = localStorage.getItem("date");
  let ccc = localStorage.getItem("im");
  document.getElementById('r4').innerHTML='Последние изображения, загруженные в предыдущей сессии';
  document.getElementById('r5').innerHTML= dat;
  resultNode.innerHTML = ccc;
}


// Обработчик кнопки
  const btn = document.querySelector("button");
btn.addEventListener("click", async () => {
f1();
  if(ok){//console.log('start');        
  const requestResult = await useRequest();
    f2(ddd);    }
  else{
    document.getElementById('r4').innerHTML='Последние  изображения:';
    document.getElementById('r5').innerHTML= dat;
    resultNode.innerHTML = '';
    let ccc = localStorage.getItem("im");
    resultNode.innerHTML = ccc;
    console.log('ccc=', ccc);
  };
  //document.getElementById('r3').innerHTML= 'Статус: '+ status;  
  //console.log('end');
});