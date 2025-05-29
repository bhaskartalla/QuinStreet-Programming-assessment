const numbersOnlyRegex = /^[0-9]*$/g
document.getElementById('phone').addEventListener('input', function (e) {
  const x = e.target.value
    .replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)

  e.target.value = !x[2]
    ? x[1]
    : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
})

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault()
  document.getElementById('submit').textContent = 'Submitted'
})
