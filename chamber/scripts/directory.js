document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const membersContainer = document.getElementById('membersContainer');

    // Fetch member data from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data));

    function displayMembers(data) {
        // Clear existing member cards
        membersContainer.innerHTML = '';

        // Loop through each member and create HTML elements
        data.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            const image = document.createElement('img');
            image.src = `images/${member.image}`; 
            image.alt = member.name;
            memberCard.appendChild(image);

            const name = document.createElement('h3');
            name.textContent = member.name;
            memberCard.appendChild(name);

            const address = document.createElement('p');
            address.textContent = member.address;
            memberCard.appendChild(address);

            const phone = document.createElement('p');
            phone.textContent = member.phone;
            memberCard.appendChild(phone);

            const website = document.createElement('a');
            website.href = member.website;
            website.textContent = 'Visit Website';
            memberCard.appendChild(website);

            const membershipLevel = document.createElement('p');
            membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
            memberCard.appendChild(membershipLevel);

            const other = document.createElement('p');
            other.textContent = member.other;
            memberCard.appendChild(other);

            membersContainer.appendChild(memberCard);
        });
    }

    gridButton.addEventListener('click', function() {
        membersContainer.classList.add('directory-container');
        membersContainer.classList.remove('member-list');
    });

    listButton.addEventListener('click', function() {
        membersContainer.classList.add('member-list');
        membersContainer.classList.remove('directory-container');
    });
});



