document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('roomModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');

    const roomDetails = {
        'standard-double': {
            title: 'Standard Double Room',
            details: 'Approx 200 sqft | 1 Double Bed<br>Enjoy a cozy stay with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, hair dryer, and iron/ironing board. Non-smoking.'
        },
        'standard-twin': {
            title: 'Standard Twin Room',
            details: 'Approx 200 sqft | 2 Single Beds<br>Perfect for sharing, with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, hair dryer, and iron/ironing board. Non-smoking.'
        },
        'superior-double': {
            title: 'Superior Double (Privilege)',
            details: 'Approx 250 sqft | 1 Double Bed<br>Luxurious stay with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, hair dryer, iron/ironing board, bathrobes & slippers, mini fridge, and espresso machine. Non-smoking.'
        },
        'superior-family': {
            title: 'Superior Family Room',
            details: 'Approx 300 sqft | 1 Double Bed + 2 Single Beds<br>Spacious for families with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, hair dryer, iron/ironing board, bathrobes & slippers, mini fridge, and espresso machine. Non-smoking.'
        },
        'suite': {
            title: 'Suite',
            details: 'Approx 400 sqft | 1 King Bed<br>Ultimate luxury with free WiFi, private bathroom, flat-screen TV, tea/coffee maker, hair dryer, iron/ironing board, Jacuzzi bath, bathrobes & slippers, mini fridge, and espresso machine. Non-smoking.'
        }
    };

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const room = button.getAttribute('data-room');
            modalTitle.textContent = roomDetails[room].title;
            modalDetails.innerHTML = roomDetails[room].details;
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

    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            roomCards.forEach(card => {
                const type = card.getAttribute('data-type');
                if (filter === 'all' || type === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
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

    // Initialize existing scripts
    if (typeof initMagazineCarousels === 'function') {
        initMagazineCarousels();
    }
});