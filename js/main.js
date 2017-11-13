//First task

// var str = 'Привет! Как дела?'
// var letterArr = str.split('')
// var volwes = ['и', 'е', 'а']

// var result = ''

// for (var i = 0; i < letterArr.length; i++) {
//   var currentLetter = letterArr[i]  

//   if (volwes.indexOf(currentLetter) !== -1) {  
//     result = result + currentLetter
//   }
// }

// console.log(result)
//---------------------------------------

//Second task

// var employees = [ 
//   {  
//     name: 'Alex',
//     salary: 150
//   },
//   {
//     name: 'Max',
//     salary: 3000
//   },
//   {
//     name: 'Victor',
//     salary: 1500
//   },
//   {
//     name: 'Ivan',
//     salary: 800
//   }
// ]

// function filterBySalary() {
//   var resultArr = []

//   for (i=0; i<employees.length; i++) {
//     var employee = employees[i]
//      if (employee.salary>1000) {
//       resultArr.push(employee.name)
//      }
//   }
//   return resultArr
// }

// var resulOfTask = filterBySalary();

// console.log(resulOfTask)
//---------------------------
// function isHtml(path) {
//   var isHtmlOrNot = path.slice(-4) === 'html'

//   return isHtmlOrNot 
// }

// var result = isHtml('/users/download/index.html')

// console.log(result)


////////////////////////////////////////////////


// let str = 'Привет! Как дела?'
// let letterArr = str.split('')

// let vowels = ['и', 'а', 'е']

// let  result = ''
 
// for (var i=0; i < letterArr.length; i++) {
//   let currentLetter = letterArr[i]

//   if (vowels.indexOf(currentLetter) !== -1) {
//     result = result + currentLetter
//   }
// }

// console.log(result)
//----------------------------------------
// let users = [
//   {
//   name: 'Алексей',
//   salary: 500
//   },
//   {
//   name: 'Виктор',
//   salary: 1300
//   },
//   {
//   name: 'Иван',
//   salary: 1500
//   }
//   ];

//   function filterBySalary () {
//     let result = []

//     for (i=0; i < users.length; i++) {
//       if (users[i].salary > 1000) {
//         result.push(users[i].name)
//       }
//     }
//     return result
//   }

//   let leaveThem = filterBySalary()

//   console.log(leaveThem)
//-----------------------------------------


// function isHtml (path) {
//     let isHtmlOrNot = path.slice(-4) === 'html'

//     return isHtmlOrNot
//   }
//   let result = isHtml('/users/download/index.html')
// console.log(result)

// let numbersArr = [3, 13, 74, 14, 66, 15, 22, 4]

// let evenNumbers = []

// function isEven () {
 
//   for (i=0; i<numbersArr.length; i++) {
//     let numbers = numbersArr[i]
//      if (numbers % 2 === 0 ) {
//       evenNumbers.push(numbers)
//     } 
//   }
//   return evenNumbers
// }

// let resultEven = isEven()

// console.log(resultEven)


// let numberInput = document.querySelector('.number');
// let colorInput = document.querySelector('.color');
// let container = document.querySelector('.block');

// numberInput.addEventListener('input', function (e) {
//   let value = e.target.value
//   let blocksHtml = ''

//   for (let i=0; i < value; i++) {
//     let block = document.createElement('div') 

//     block.className = 'block__item'
//     block.innerText = i

//     blocksHtml += block.outerHTML

//   }

//   container.innerHTML = blocksHtml

// })

let menu = (function() {
  
    let button = document.querySelector('.hamburger-menu');
    let menu = document.querySelector('.hero-overlay');
    let body = document.querySelector('body');
  
    let _toggleClass = function(e) {
      button.classList.toggle('hamburger-menu--active');
      menu.classList.toggle('hero-overlay--active');
      body.classList.toggle('body-active-menu');
      event.preventDefault()
    }
  
    let addListeners = function() {
      button.addEventListener('click', _toggleClass);
    }
  
    return {
      init: addListeners
    }
  })()
 
  menu.init();
