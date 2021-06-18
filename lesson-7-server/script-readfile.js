const fs = require('fs')


fs.readFile('./data.json', 'utf-8', (err, data) => {
if (!err) {
  const obj = JSON.parse(data)
  // console.log(obj)

  // obj.THREE = 'ТРИ'

   // obj.FOUR = '4'

  obj.five = '5'

  fs.writeFile('./data.json', JSON.stringify(obj), (err) => {});


 }

 });