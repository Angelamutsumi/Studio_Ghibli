const app = document.getElementById('root');

const logo = document.createElement(img);
logo.src = 'logo.png';

const container =  document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
    var data = JSON.parse(this.response);
  })
  .then((data) => {
    data.forEach((movie) => {
      console.log(movie.title);
    })
  })
  .catch((err) => {
    console.log('Erro no consumo da API');
  })
 