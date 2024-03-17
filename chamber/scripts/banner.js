document.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.getElementById('banner-container');
    if (bannerContainer) {
        const bannerContent = document.createElement('div');
        bannerContent.innerHTML = '<h3>Join us for the chamber of commerce meet and greet on Wednesday at 7:00 p.m.</h3><button id="close-banner">Close</button>';
        bannerContainer.appendChild(bannerContent);
        
        const closeButton = document.getElementById('close-banner');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                bannerContainer.style.display = 'none';
            });
        }
    } else {
        console.error('Banner container not found.');
        


    }
});
document.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.getElementById('banner-container');
    const today = new Date();
    const dayOfWeek = today.getDay(); 

    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        bannerContainer.style.display = 'block'; 
    } else {
        bannerContainer.style.display = 'none'; 
    }
});
