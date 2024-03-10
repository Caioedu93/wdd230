document.addEventListener('DOMContentLoaded', function () {
    const directoryContainer = document.querySelector('.directory-container');
    const memberUrl = 'data/members.json';

    async function getMemberData() {
        try {
            const response = await fetch(memberUrl);
            const data = await response.json();

            displayMembers(data);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    getMemberData();

    const displayMembers = (members) => {
        members.forEach((member) => {
            let memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            let nameElement = document.createElement('h3');
            nameElement.textContent = member.name;

            let addressElement = document.createElement('p');
            addressElement.textContent = `Address: ${member.address}`;

            let phoneElement = document.createElement('p');
            phoneElement.textContent = `Phone: ${member.phone}`;

            let websiteElement = document.createElement('a');
            websiteElement.textContent = 'Website';
            websiteElement.href = member.website;
            websiteElement.target = '_blank'; // Open link in new tab

            // Check if the member has an image
            if (member.image) {
                let imageElement = document.createElement('img');
                imageElement.src = `images/${member.image}`; // Assuming the images are in the 'images' folder
                imageElement.alt = `Image of ${member.name}`;
                memberCard.appendChild(imageElement);
            }

            memberCard.appendChild(nameElement);
            memberCard.appendChild(addressElement);
            memberCard.appendChild(phoneElement);
            memberCard.appendChild(websiteElement);

            directoryContainer.appendChild(memberCard);
        });
    };
});
