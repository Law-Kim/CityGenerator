const xhr = new XMLHttpRequest();

function getRandomCity() {
  xhr.open('GET', 'http://localhost:8001', true)
  xhr.onload = () => {
    console.log(xhr.response)
  }
  xhr.send()
}