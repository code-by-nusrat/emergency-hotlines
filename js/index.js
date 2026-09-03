
//love count
const loveBtns = document.querySelectorAll('.love-btn')

loveBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const heartCount = document.getElementById('heart-count');
    let heartCountNumber = parseInt(heartCount.innerText)
    heartCountNumber = heartCountNumber + 1;
    heartCount.innerText = heartCountNumber;
  })
})

//copy count
const copyBtns = document.querySelectorAll('.copy')
copyBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    const copyCount = document.getElementById('copy-count')
    let copyCountNumber = parseInt(copyCount.innerText)
    copyCountNumber = copyCountNumber + 1;
    copyCount.innerText = copyCountNumber;
  })
})

//call-btn
const callBtns = document.querySelectorAll('.call-btn')

callBtns.forEach(function (callbtn) {
  callbtn.addEventListener('click', function () {
    const card = callbtn.closest('.card');

    const serviceName = card.querySelector('.service-name').innerText;
    const serviceNum = card.querySelector('.service-num').innerText
    const date = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    const newAlert = document.createElement('div')
    newAlert.innerHTML = ` <div class=" w-[430px] h-[200px] text-center pt-11 rounded-lg bg-white border-2 border-gray-100">
        <h2 class="text-[1.5rem] font-semibold">${serviceName} </h2>
        <p class="mt-2 text-[1.3rem] font-semibold">${serviceNum}</p>
        <button id='close'class= 'text-[1.3rem] w-[90px]  bg-gray-100 mt-3 rounded-lg'>Close</button>
    </div>`
    newAlert.classList = ` fixed inset-0 bg-black/30   flex items-center justify-center z-50`
    document.body.appendChild(newAlert);
    const closeBtn = newAlert.querySelector('#close')
    closeBtn.addEventListener('click', function () {
      newAlert.remove()
    })
    const coinCount = document.getElementById('coin-count')
    let coinCountNumber = parseInt(coinCount.innerText)
    coinCountNumber = coinCountNumber - 20;
    if (coinCountNumber <= 0) {
      alert('Insufficint coin')
      return;
    }
    coinCount.innerText = coinCountNumber;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
            <div id="national-num" class="card w-[370px] h-[100px] mx-auto p-3 bg-[#fafafa] rounded-2xl mb-3">
              <h3 class="font-semibold text-[1.2rem]">${serviceName}</h3>
               <div class="flex justify-between">
                    <p class="text-[#5c5c5c]">${serviceNum}</p>
                    <p class="text-[#5c5c5c]">${date}</p>
                </div>`
    const cardContainer = document.getElementById('card-container')
    cardContainer.appendChild(newDiv)
    document.getElementById('clear-btn').addEventListener('click', function () {
      const cardContainer = document.getElementById('card-container')
      cardContainer.innerHTML = ''
    })
  })
})