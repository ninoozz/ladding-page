function toggleMode() {
  const button = document.getElementById('buttonSwitch')
  const html = document.getElementById('html')

  if(html.className == 'light'){
      html.removeAttribute('class')
    } else {
      html.setAttribute('class','light')
    }
}
