window.addEventListener('load', ()=>{
  const from768 = 'Бренд Askona и digital-агентство Nectarin предложили пользователям<br> раз и навсегда выяснить, кто просыпается в женщине, пока она спит!<br>В зависимости от результата, основанного на авторской иллюстрации и жизненных инсайтах,<br> пользователю предлагается  идеальный подарок от бренда, который он может подарить своей леди.'
  const to768 = 'Бренд Askona и digital-агентство Nectarin предложили пользователям раз и навсегда выяснить, кто просыпается в женщине, пока она спит!<br>В зависимости от результата, основанного на авторской иллюстрации и жизненных инсайтах, пользователю предлагается  идеальный подарок от бренда, который он может подарить своей леди.'
  const decision_subtitle = document.querySelector('.decision .container .mainSubtitle')

  function buildText(){
    if(window.innerWidth > 768){
      decision_subtitle.innerHTML = from768
    }else{
      decision_subtitle.innerHTML = to768
    }
  }

  buildText()

  window.addEventListener('resize', ()=>{
    buildText()
  })
})