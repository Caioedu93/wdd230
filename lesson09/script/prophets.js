const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let deathDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let numOfChildren = document.createElement('p');

        
        if (prophet.name && prophet.lastname && prophet.imageurl) {
        
            fullName.textContent = `${prophet.name} ${prophet.lastname}`;

            
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            
            birthDate.textContent = `Birthdate: ${prophet.birthdate}`;
            deathDate.textContent = `Death: ${prophet.death || 'Still Alive'}`;
            birthPlace.textContent = `Birthplace: ${prophet.birthplace}`;
            numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

            
            card.appendChild(fullName);
            card.appendChild(portrait);
            card.appendChild(birthDate);
            card.appendChild(deathDate);
            card.appendChild(birthPlace);
            card.appendChild(numOfChildren);

            cards.appendChild(card);
        } else {
            console.error('Missing required properties for prophet:', prophet);
        }
    }); 
};

