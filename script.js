const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user-result img'),
cpuResult = document.querySelector('.cpu-result img'),
result = document.querySelector('.result'),
optionsImages = document.querySelectorAll('.option_image')

optionsImages.forEach((img,index) => {
  img.addEventListener('click',(e) => {
    img.classList.add('active')

    optionsImages.forEach((img2,index2) => {
      index !== index2 && img2.classList.remove('active')
    })
      let imgSrc = e.target.querySelector('img').src
      userResult.src = imgSrc

      let randomNumber = Math.floor(Math.random() * 3)
      

      let cpuImages = ['rock.png','paper.png','scissor.png']
      cpuResult.src = cpuImages[randomNumber]

      let cpuValue = ['R','P','S'][randomNumber]
      let userValue = ['R','P','S'][index]
      console.log(cpuValue,userValue)

      let outcomes = {
        RR:'Draw',
        RP:'User',
        RS:'Cpu',
        PP:'Draw',
        PR:'Cpu',
        PS:'User',
        SS:'Draw',
        SP:'Cpu',
        SR:'User'
      }

      let outcomeValue = outcomes[cpuValue + userValue]

      result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`
  })
})