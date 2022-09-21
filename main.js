const players = [
  {
    id: 1,
    name: 'Neymar Junior',
    age: 32,
    height: '178',
    image: 'neymar.jpeg',
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    age: 28,
    height: '181',
    image: 'ronaldo.jpeg',
  },
  {
    id: 3,
    name: 'Lionel Messi',
    age: 39,
    height: '112',
    image: 'messi.jpg',
  },
];

const playersContainer = document.querySelector('#players-container');
const searchInput = document.querySelector('#search-input');

function setPlayers(players) {
  if (!players.length) {
    playersContainer.innerHTML = '<h1>Nenhum item encontrado</h1>';

    return;
  }

  const html = players
    .map(
      (player) => `
      <div class="player">
        <div class="player-image-container">
          <img src="/assets/images/players/${player.image}" alt="${player.name}" />
        </div>
  
        <div class="player-info">
          <h1>${player.name}</h2>
  
          <br />
  
          <p>
            Idade: <strong>${player.age} anos</strong>
  
            <br />
            <br />
  
            Altura: <strong>${player.height}cm</strong>
          </p>
        </div>
      </div>`
    )
    .join('');

  playersContainer.innerHTML = html;
}

function search(people, value) {
  const searched = people.filter((person) =>
    person.name.toLowerCase().includes(value.toLowerCase())
  );

  return searched;
}

searchInput.addEventListener('keyup', (e) => {
  e.preventDefault();

  const value = searchInput.value;

  if (!value) {
    setPlayers(players);

    return;
  }

  const searched = search(players, value);

  setPlayers(searched);
});

setPlayers(players);
