// DOM Elements
const stateSelect = document.getElementById('stateSelect');
const destinationsContainer = document.getElementById('destinationsContainer');
const cardsContainer = document.getElementById('cardsContainer');
const loadingSpinner = document.getElementById('loadingSpinner');
const noResults = document.getElementById('noResults');
const filterButtons = document.querySelectorAll('.filter-btn');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navigation = document.querySelector('.navigation');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// State Data
let currentFilter = 'all';
let destinations = {};

// Sample destination data (replace with your actual data)
const destinationData = {
    // States
    'Andhra Pradesh': [
        {
            name: 'Tirupati',
            description: 'Famous temple city and spiritual destination',
            image: 'images/tirupati.png',
            price: 399,
            type: ['heritage', 'popular']
        },
        {
            name: 'Visakhapatnam',
            description: 'Beautiful coastal city with beaches and hills',
            image: 'images/visakhapatnam.jpg',
            price: 599,
            type: ['nature']
        }
    ],
    'Arunachal Pradesh': [
        {
            name: 'Tawang',
            description: 'Scenic monastery and mountain landscapes',
            image: 'images/tawang.jpg',
            price: 899,
            type: ['heritage', 'nature']
        }
    ],
    'Assam': [
        {
            name: 'Kaziranga',
            description: 'National park famous for one-horned rhinoceros',
            image: 'images/kaziranga.jpg',
            price: 699,
            type: ['nature']
        },
        {
            name: 'Guwahati',
            description: 'Gateway to Northeast India with temples',
            image: 'images/guwahati.jpg',
            price: 499,
            type: ['heritage']
        }
    ],
    'Bihar': [
        {
            name: 'Bodh Gaya',
            description: 'Sacred Buddhist pilgrimage site',
            image: 'images/bodh gaya.jpg',
            price: 399,
            type: ['heritage']
        },
        {
            name: 'Patna',
            description: 'Historic capital with ancient ruins',
            image: 'images/patna.jpg',
            price: 299,
            type: ['heritage']
        }
    ],
    'Chhattisgarh': [
        {
            name: 'Raipur',
            description: 'Cultural hub with tribal heritage',
            image: 'images/raipur.jpg',
            price: 399,
            type: ['heritage']
        }
    ],
    'Goa': [
        {
            name: 'Panaji',
            description: 'Portuguese heritage and beach paradise',
            image: 'images/goa.jpg',
            price: 899,
            type: ['nature', 'popular']
        }
    ],
    'Gujarat': [
        {
            name: 'Ahmedabad',
            description: 'Heritage city with rich cultural history',
            image: 'images/ahmedabad.jpg',
            price: 599,
            type: ['heritage']
        },
        {
            name: 'Rann of Kutch',
            description: 'White salt desert with cultural festivals',
            image: 'images/kutch.jpg',
            price: 799,
            type: ['nature']
        }
    ],
    'Haryana': [
        {
            name: 'Gurgaon',
            description: 'Modern city with shopping and entertainment',
            image: 'images/gurgaon.jpg',
            price: 499,
            type: ['popular']
        }
    ],
    'Himachal Pradesh': [
        {
            name: 'Manali',
            description: 'Adventure sports and mountain beauty',
            image: 'images/manali.jpg',
            price: 799,
            type: ['nature', 'popular']
        },
        {
            name: 'Shimla',
            description: 'Queen of Hills with colonial charm',
            image: 'images/shimla.jpg',
            price: 699,
            type: ['nature']
        }
    ],
    'Jharkhand': [
        {
            name: 'Ranchi',
            description: 'Hill station with waterfalls',
            image: 'images/ranchi.jpg',
            price: 399,
            type: ['nature']
        }
    ],
    'Karnataka': [
        {
            name: 'Bangalore',
            description: 'Tech hub with gardens and nightlife',
            image: 'images/bangalore.avif',
            price: 599,
            type: ['popular']
        },
        {
            name: 'Mysore',
            description: 'Royal heritage and cultural richness',
            image: 'images/mysore.jpg',
            price: 499,
            type: ['heritage']
        }
    ],
    'Kerala': [
        {
            name: 'Munnar',
            description: 'Beautiful hill station with tea plantations',
            image: 'images/munnar.jpg',
            price: 499,
            type: ['nature', 'popular']
        },
        {
            name: 'Alleppey',
            description: 'Famous for its backwaters and houseboats',
            image: 'images/alleppey.jpg',
            price: 799,
            type: ['nature']
        }
    ],
    'Madhya Pradesh': [
        {
            name: 'Khajuraho',
            description: 'Famous for ancient temples with intricate carvings',
            image: 'images/khajuraho.jpg',
            price: 599,
            type: ['heritage']
        },
        {
            name: 'Bhopal',
            description: 'City of lakes with rich history',
            image: 'images/bhopal.jpg',
            price: 399,
            type: ['heritage']
        }
    ],
    'Maharashtra': [
        {
            name: 'Mumbai',
            description: 'Financial capital with diverse culture',
            image: 'images/mumbai.jpg',
            price: 699,
            type: ['popular']
        },
        {
            name: 'Lonavala',
            description: 'Hill station with caves and forts',
            image: 'images/lonavala.jpg',
            price: 499,
            type: ['nature']
        }
    ],
    'Manipur': [
        {
            name: 'Imphal',
            description: 'Cultural hub with scenic beauty',
            image: 'images/imphal.jpg',
            price: 599,
            type: ['heritage']
        }
    ],
    'Meghalaya': [
        {
            name: 'Shillong',
            description: 'Scotland of the East with waterfalls',
            image: 'images/shillong.jpg',
            price: 699,
            type: ['nature']
        }
    ],
    'Mizoram': [
        {
            name: 'Aizawl',
            description: 'Hill city with scenic views',
            image: 'images/aizawl.jpg',
            price: 599,
            type: ['nature']
        }
    ],
    'Nagaland': [
        {
            name: 'Kohima',
            description: 'Cultural heritage with tribal traditions',
            image: 'images/kohima.jpg',
            price: 499,
            type: ['heritage']
        }
    ],
    'Odisha': [
        {
            name: 'Puri',
            description: 'Famous for Jagannath Temple and beaches',
            image: 'images/puri.jpg',
            price: 499,
            type: ['heritage', 'nature']
        },
        {
            name: 'Bhubaneswar',
            description: 'Temple city with ancient architecture',
            image: 'images/bhubaneswar.jpg',
            price: 399,
            type: ['heritage']
        }
    ],
    'Punjab': [
        {
            name: 'Amritsar',
            description: 'Home to the Golden Temple',
            image: 'images/amritsar.jpg',
            price: 499,
            type: ['heritage', 'popular']
        }
    ],
    'Rajasthan': [
        {
            name: 'Jaipur',
            description: 'The Pink City - Known for its stunning palaces and rich culture',
            image: 'images/jaipur.jpg',
            price: 599,
            type: ['popular', 'heritage']
        },
        {
            name: 'Udaipur',
            description: 'The City of Lakes - Famous for its romantic setting and palaces',
            image: 'images/udaipur.jpg',
            price: 699,
            type: ['heritage']
        }
    ],
    'Sikkim': [
        {
            name: 'Gangtok',
            description: 'Capital with Buddhist monasteries and mountain views',
            image: 'images/gangtok.jpg',
            price: 799,
            type: ['heritage', 'nature']
        }
    ],
    'Tamil Nadu': [
        {
            name: 'Chennai',
            description: 'Cultural hub with temples and beaches',
            image: 'images/chennai.jpg',
            price: 499,
            type: ['heritage']
        },
        {
            name: 'Ooty',
            description: 'Queen of Nilgiris with tea gardens',
            image: 'images/ooty.jpg',
            price: 599,
            type: ['nature']
        }
    ],
    'Telangana': [
        {
            name: 'Hyderabad',
            description: 'City of pearls with rich history',
            image: 'images/hyderabad.jpg',
            price: 599,
            type: ['heritage', 'popular']
        }
    ],
    'Tripura': [
        {
            name: 'Agartala',
            description: 'Cultural heritage with temples',
            image: 'images/agartala.jpg',
            price: 399,
            type: ['heritage']
        }
    ],
    'Uttar Pradesh': [
        {
            name: 'Agra',
            description: 'Home to the iconic Taj Mahal',
            image: 'images/agra.jpg',
            price: 499,
            type: ['heritage', 'popular']
        },
        {
            name: 'Varanasi',
            description: 'Spiritual capital on the Ganges',
            image: 'images/varanasi.jpg',
            price: 399,
            type: ['heritage']
        }
    ],
    'Uttarakhand': [
        {
            name: 'Rishikesh',
            description: 'Yoga capital with spiritual significance',
            image: 'images/rishikesh.jpg',
            price: 499,
            type: ['heritage', 'nature']
        },
        {
            name: 'Nainital',
            description: 'Lake district with scenic beauty',
            image: 'images/nainital.jpg',
            price: 599,
            type: ['nature']
        }
    ],
    'West Bengal': [
        {
            name: 'Kolkata',
            description: 'Cultural capital with colonial heritage',
            image: 'images/kolkata.jpg',
            price: 499,
            type: ['heritage']
        },
        {
            name: 'Darjeeling',
            description: 'Queen of Hills with tea gardens',
            image: 'images/darjeeling.jpg',
            price: 699,
            type: ['nature', 'popular']
        }
    ],
    
    // Union Territories
    'Andaman and Nicobar Islands': [
        {
            name: 'Port Blair',
            description: 'Island paradise with beaches and water sports',
            image: 'images/portblair.jpg',
            price: 1299,
            type: ['nature', 'popular']
        }
    ],
    'Chandigarh': [
        {
            name: 'Chandigarh',
            description: 'Planned city with modern architecture',
            image: 'images/chandigarh.jpg',
            price: 499,
            type: ['popular']
        }
    ],
    'Dadra and Nagar Haveli and Daman and Diu': [
        {
            name: 'Daman',
            description: 'Coastal town with Portuguese heritage',
            image: 'images/daman.jpg',
            price: 599,
            type: ['heritage', 'nature']
        }
    ],
    'Delhi': [
        {
            name: 'New Delhi',
            description: 'Historic capital with Mughal and British architecture',
            image: 'images/delhi.jpg',
            price: 499,
            type: ['heritage', 'popular']
        }
    ],
    'Jammu and Kashmir': [
        {
            name: 'Srinagar',
            description: 'Paradise on Earth with Dal Lake',
            image: 'images/srinagar.jpg',
            price: 999,
            type: ['nature', 'popular']
        },
        {
            name: 'Gulmarg',
            description: 'Skiing destination with scenic beauty',
            image: 'images/gulmarg.jpg',
            price: 1199,
            type: ['nature']
        }
    ],
    'Ladakh': [
        {
            name: 'Leh',
            description: 'High-altitude desert with stunning landscapes',
            image: 'images/leh.jpg',
            price: 999,
            type: ['nature', 'popular']
        }
    ],
    'Lakshadweep': [
        {
            name: 'Kavaratti',
            description: 'Coral islands with pristine beaches',
            image: 'images/kavaratti.jpg',
            price: 1499,
            type: ['nature']
        }
    ],
    'Puducherry': [
        {
            name: 'Pondicherry',
            description: 'French colonial heritage by the sea',
            image: 'images/pondicherry.jpg',
            price: 599,
            type: ['heritage']
        }
    ]
};

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    let currentTheme = localStorage.getItem('theme') || 'light';
    
    function applyTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        themeToggle.style.color = currentTheme === 'light' ? 'var(--secondary-color)' : 'var(--accent-text)';
    }
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme();
    });
    
    // Initialize theme
    applyTheme();
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeThemeToggle);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    checkLoginStatus();
    initializeTheme();
    
    // Show no destinations message on initial page load
    loadingSpinner.style.display = 'none';
    cardsContainer.style.display = 'none';
    noResults.innerHTML = `
        <div class="no-results-content">
            <i class="fas fa-search"></i>
            <h3>Select a state or Union Territory</h3>
        </div>
    `;
    noResults.style.display = 'flex';
    noResults.style.justifyContent = 'center';
    noResults.style.alignItems = 'center';
    noResults.style.minHeight = '200px';
    noResults.style.textAlign = 'center';
    noResults.style.color = 'var(--text-color)';
    noResults.style.gap = '15px';
    noResults.style.flexDirection = 'column';
});

// Event Listeners Setup
function setupEventListeners() {
    stateSelect.addEventListener('change', handleStateChange);
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => handleFilterChange(btn));
    });
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    document.addEventListener('click', handleOutsideClick);
    themeToggle.addEventListener('click', toggleTheme);
}

// Handle State Change
async function handleStateChange(event) {
    const selectedState = event.target.value;
    if (!selectedState || selectedState === "") {
        loadingSpinner.style.display = 'none';
        cardsContainer.style.display = 'none';
        noResults.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>No destinations found</h3>
                <p>Try selecting a different state or filter</p>
            </div>
        `;
        noResults.style.display = 'flex';
        noResults.style.justifyContent = 'center';
        noResults.style.alignItems = 'center';
        noResults.style.minHeight = '200px';
        noResults.style.textAlign = 'center';
        noResults.style.color = 'var(--text-color)';
        noResults.style.gap = '15px';
        noResults.style.flexDirection = 'column';
        return;
    }

    showLoading();
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        destinations = destinationData[selectedState] || [];
        updateDestinations();
    } catch (error) {
        console.error('Error fetching destinations:', error);
        showError();
    }
}

// Handle Filter Change
function handleFilterChange(button) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.dataset.filter;
    updateDestinations();
}

// Update Destinations Display
function updateDestinations() {
    if (!destinations.length) {
        showNoResults();
        return;
    }

    const filteredDestinations = currentFilter === 'all'
        ? destinations
        : destinations.filter(dest => dest.type.includes(currentFilter));

    if (!filteredDestinations.length) {
        showNoResults();
        return;
    }

    renderDestinations(filteredDestinations);
}

// Render Destinations
function renderDestinations(destinations) {
    cardsContainer.innerHTML = destinations.map(dest => `
        <div class="card" data-aos="fade-up">
            <img src="${dest.image}" alt="${dest.name}" loading="lazy">
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p>${dest.description}</p>
                <div class="price">From $${dest.price}</div>
                <button onclick="bookDestination('${dest.name}')">
                    <i class="fas fa-bookmark"></i> Book Now
                </button>
            </div>
        </div>
    `).join('');

    loadingSpinner.style.display = 'none';
    noResults.style.display = 'none';
    cardsContainer.style.display = 'grid';
}

// UI State Functions
function showLoading() {
    const selectedState = stateSelect.value;
    if (!selectedState || selectedState === "") {
        loadingSpinner.style.display = 'none';
        noResults.style.display = 'none';
        cardsContainer.style.display = 'none';
        return;
    }

    loadingSpinner.style.display = 'block';
    noResults.style.display = 'none';
    cardsContainer.style.display = 'none';
}

function showNoResults() {
    loadingSpinner.style.display = 'none';
    noResults.style.display = 'block';
    cardsContainer.style.display = 'none';
}

function showError() {
    // Implement error handling UI
    console.error('Failed to load destinations');
}

// Mobile Menu Functions
function toggleMobileMenu() {
    navigation.classList.toggle('active');
}

function handleOutsideClick(event) {
    if (navigation.classList.contains('active') &&
        !event.target.closest('.navigation') &&
        !event.target.closest('.mobile-menu-toggle')) {
        navigation.classList.remove('active');
    }
}

// Booking Function
function bookDestination(destinationName) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    // Implement booking logic
    alert(`Booking process started for ${destinationName}`);
}

// Check Login Status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.style.display = isLoggedIn ? 'none' : 'block';
    }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
  