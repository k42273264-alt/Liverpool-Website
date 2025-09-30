document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('attractionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');

    const attractionDetails = {
        'royal-liver': {
            title: 'Royal Liver Building',
            details: 'One of Liverpool\'s Three Graces, this iconic building features stunning architecture and clock towers larger than Big Ben, located at the Pier Head. Steps away from the hotel.'
        },
        'albert-dock': {
            title: 'Albert Dock',
            details: 'A historic dock complex with museums, galleries, and shops, just a 10-minute walk from the hotel. Ideal for cultural experiences and waterfront strolls.'
        },
        'cavern-club': {
            title: 'The Cavern Club',
            details: 'Famous for the Beatles, this thriving live music venue is a must-see, about 6 minutes walk (0.4 miles) away. Perfect for music lovers and history buffs.'
        }
    };

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const attraction = button.getAttribute('data-attraction');
            modalTitle.textContent = attractionDetails[attraction].title;
            modalDetails.textContent = attractionDetails[attraction].details;
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));
});