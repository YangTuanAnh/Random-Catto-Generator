async function getCattoPic()
{
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    const data = await res.json()
    var image = document.querySelector('img')
    image.src = data[0]['url']
}
var btn = document.querySelector('button')
btn.addEventListener('click', () => getCattoPic())