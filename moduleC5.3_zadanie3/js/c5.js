//
var n = 0;
var url;

const resultNode = document.querySelector('.j-result');
function f2(r) {
  document.getElementById('r4').innerHTML='Получены изображения:';
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
    resultNode.innerHTML = cards;
}

// Вывод изображений на страницу
function displayResult(apiData) {
  let cards = '';    
  resultNode.innerHTML = cards;
}
  
//ВводБ проверка данных, запрос
function f1() { 
              var st =document.getElementById('t1').value;
               n = Number(st);
              document.getElementById('r1').innerHTML='Введено: '+st;
              if (n)
              {
               if((n<=10) & (n>=1))
                 {document.getElementById('r2').innerHTML='Введеное число  в диапазоне от 1 до 10';
                  url = 'https://picsum.photos/v2/list?limit='+n;
                  var xhr = new XMLHttpRequest();
                  xhr.open('GET', url);
                  xhr.send();
                  xhr.onload = function() {
                    if (xhr.status != 200) {
                      console.log('Статус ответа: ', xhr.status);}
                    else {
                       const result = JSON.parse(xhr.response);
                       f2(result);}                        
                    }
                 }
               else
                 {document.getElementById('r2').innerHTML='Введеное число вне диапазона, запроса не будет';
                 resultNode.innerHTML = '';
                 document.getElementById('r4').innerHTML='';}
              }
              else
              {
                if(n==0)
                  {document.getElementById('r2').innerHTML='Введено число вне диапазона, запроса не будет';
                  resultNode.innerHTML = '';
                  document.getElementById('r4').innerHTML='';}
                 else
                  {document.getElementById('r2').innerHTML='Введено не число, запроса не будет ';
                  resultNode.innerHTML = '';
                  document.getElementById('r4').innerHTML='';}                
                }
              
              };

const btn1 = document.querySelector("button");
btn1.addEventListener("click", f1);
