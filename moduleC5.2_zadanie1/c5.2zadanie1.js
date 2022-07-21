const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  

</list>
`;
var rez = []; // для вывода
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector('list');
const student = listNode.querySelectorAll('student');

for(let i = 0; i < student.length; i++){
  const stud = student[i];
  const name = stud.querySelector("name");
  const f = stud.querySelector('first');
  const s = stud.querySelector("second");
  const lg = name.getAttribute("lang");
  const age = stud.querySelector('age');
  const prof = stud.querySelector('prof');

  rez[i] = {
    name: (f.textContent +" " + s.textContent),
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: lg.textContent
  };  
};
console.log('list:', rez);