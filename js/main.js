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
//==========================================
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

// var hr = [
//   {  
//     name: 'Peter',
//     salary: 3000
//   },
//   {
//     name: 'Nik',
//     salary: 2000
//   },
//   {
//     name: 'Ann',
//     salary: 1500
//   },
//   {
//     name: 'Jane',
//     salary: 6000
//   }
// ]

// function filterBySalary (array, salary) {
//   var resultArr = []
//   for (var i=0; i<array.length; i++) {
//     var employee = array[i]
//     if (employee.salary > salary) {
//       resultArr.push(employee.name)
//     }
//   }
//   return resultArr
// }

// console.log(filterBySalary(employees, 1000))
// console.log(filterBySalary(hr, 1500))


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


// HERO OVERLAY-----------------------------------------------------------
let menu = (function() {
  
    let button = document.querySelector('.hamburger-menu');
    let menu = document.querySelector('.hero-overlay');
    let body = document.querySelector('body');
  
    let _toggleClass = function(e) {
      button.classList.toggle('hamburger-menu--active');
      menu.classList.toggle('hero-overlay--active');
      body.classList.toggle('body-active-menu');
      e.preventDefault()
    }
  
    let addListeners = function() {
      button.addEventListener('click', _toggleClass);
    }
  
    return {
      init: addListeners
    }
  })()
 
  menu.init();

  // MODAL WINDOW IN ORDER SECTION------------------------------------------

function modalWindow() {
  let submitBtn = document.querySelector('.form-buttons_submit')
  let modalWindow = document.querySelector('.modal-window');
  let closeBtn = document.querySelector('.close-btn')

  submitBtn.addEventListener('click', e => {
       modalWindow.classList.add('modal-window--active')
      e.preventDefault()
});

  closeBtn.addEventListener('click', e => {
      modalWindow.classList.remove('modal-window--active')
      e.preventDefault()
});
}
modalWindow();


// dropdown menu----------------------------------------------------------

function dropDown() {
  let ingredientsBtn = document.querySelector('.burger-content__ingredients')
  let dropdowm = document.querySelector('.ingredients-dropdown')
  let crossBtn = document.querySelector('.close-ingrediets')
  
  ingredientsBtn.addEventListener('mouseover', e => {
    dropdowm.classList.add('ingredients-dropdown--active')
  });
  
  crossBtn.addEventListener('click', e => {
    dropdowm.classList.remove('ingredients-dropdown--active')
  })
  
  ingredientsBtn.addEventListener('mouseout', e => {
    dropdowm.classList.remove('ingredients-dropdown--active')
  });  
}
dropDown();

//feedbacks learn more btn----------------------------------------------------------

function FeedBtn() {
  let learnmoreBtn = document.querySelectorAll('.btn_learn-more')
  let feedOverlay = document.querySelector('.feedbacks-overlay')
  let closeFeed = document.querySelector('.close-feed')
  
  for (let i = 0; i<learnmoreBtn.length; i++) {
    learnmoreBtn[i].addEventListener('click', e => {
      feedOverlay.classList.add('feedbacks-overlay--active')
    })
  }
  
  closeFeed.addEventListener('click', e => {
    feedOverlay.classList.remove('feedbacks-overlay--active')
    console.log(feedOverlay)
  })
}
FeedBtn();




//team accordion------------------------------------------------------------------
function teamAcco() {
  let teamAcco = document.querySelector('.team-accordion');
  teamAcco.addEventListener('click', e => {
    e.preventDefault();
    let currentTrigger = e.target;
    let item = currentTrigger.closest('.team-accordion__item');
    let items = document.querySelectorAll('.team-accordion__item');
    if (!item.classList.contains('team-accordion__item--active')) {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('team-accordion__item--active');
      }
      item.classList.add('team-accordion__item--active');
    }
    else {
      item.classList.remove('team-accordion__item--active');
    }
  });
}
teamAcco();

//menu accordion---------------------------------------------------------------------
function menuAcco() {
  let menuAcco = document.querySelector('.menu-accordion')

  menuAcco.addEventListener('click', e => {
    e.preventDefault()

    let currentTrigger = e.target
    let item = currentTrigger.closest('.menu-accordion__item')
    let items = document.querySelectorAll('.menu-accordion__item')

    if (!item.classList.contains('menu-accordion__item--active')) {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('menu-accordion__item--active');
      }
      item.classList.add('menu-accordion__item--active');
    }
    else {
      item.classList.remove('menu-accordion__item--active');
    }
  })
}
menuAcco();

//OnePageScroll---------------------------------------------------------------------
onePageScroll(".maincontant", {
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 500,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                    // the browser's width is less than 600, the fallback will kick in.
});


// Courusel ---------------------------------------------------------
$(document).ready(function(){
  owl = $(".slider__list").owlCarousel({
    items: 1,
    nav: true,
    navContainer: $(".burger__scrolls"),
    navText: ["", ""],
    loop: true
  });
  // Go to the next item
  $('.burger__scroll-right').click( e => {
    e.preventDefault()
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.burger__scroll-left').click(e => {
    e.preventDefault()
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })
})

