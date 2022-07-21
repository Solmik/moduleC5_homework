const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const result = [];
const l = list.length;
for(let i = 0; i < list.length; i++){
   result[i] = {
      name: list[i].name,
      age: Number(list[i].age),
      prof: list[i].prof,     
  };
};

console.log('list:', result);