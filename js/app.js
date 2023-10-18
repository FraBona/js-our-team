const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & Ceo',
    foto: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
]

for(let i = 0; i < team.length; i++){
  let currentUser = team[i];
  console.log(currentUser);
}

const userDomElement = document.querySelector('.user');

for(let i = 0; i < team.length; i++){
  let nome = team[i].nome;
  let ruolo = team[i].ruolo;
  let foto = team[i].foto;
  console.log(nome);

  userDomElement.innerHTML += nome + ' ' + ruolo + ' ' + foto + '<br>';
}