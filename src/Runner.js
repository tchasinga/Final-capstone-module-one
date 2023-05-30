const speackers = [
  {
    name: 'Mustapha jack',
    photo: 'img/speakerOne.svg',
    role: 'Health manager',
    description: 'the Chinese community for centuries and used extensively...',
  },

  {
    name: 'Marcus perezz',
    photo: 'img/speakerTwo.svg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Jean de Dieu',
    photo: 'img/speakerThree.svg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Grisia luiws',
    photo: 'img/speakerFour.svg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Sham Gomez',
    photo: 'img/speakerFive.svg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
  {
    name: 'Michal Rio',
    photo: 'img/speakerSix.svg',
    role: 'Project manager',
    description: 'Before the 1980s, it was unclear whether warming by increased',
  },
];

const mainProjectsContainer = document.querySelector('.speaker');
mainProjectsContainer.innerHTML += speackers.map((project) => {
  const card = `<div class="speaker-data">
    <div class="box-img">
    <img src="${project.photo}" class="image" alt="" />
    </div>   
    <div class="describ">
       <h4 class="name">${project.name}</h4>
       <a class="discription">${project.role}</a>
       <p class="comment">
         ${project.description}
       </p>
    </div>
  </div>`;

  return card;
});