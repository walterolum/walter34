/* ===== CAVENDISH HOSTEL FINDER - Complete JavaScript ===== */

/* ===== Hostel Data (Nsambya, Kabalagala, Kibuli & Kansanga) ===== */
const hostels = [
  {
    id: 1,
    name: "Cavendish Courts",
    location: "Behind Sharing Youth Centre, Nsambya",
    price: 150,
    roomType: "Shared",
    rating: 4.8,
    reviews: 89,
    distance: "0.5 km",
    image: "images/3.jpg",
    images: ["images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"],
    description: "Cavendish Courts offers premium student accommodation right behind Sharing Youth Centre in Nsambya. Features modern rooms, high-speed WiFi, and a vibrant student community just minutes from Cavendish University.",
    facilities: ["Free WiFi", "Study Room", "Laundry", "Cafeteria", "24/7 Security", "Parking", "Common Room"],
    availability: "available",
    badge: "Available"
  },
  {
    id: 2,
    name: "Nsambya Comfort Hostel",
    location: "Nsambya Road, Kampala",
    price: 200,
    roomType: "Private",
    rating: 4.6,
    reviews: 72,
    distance: "0.8 km",
    image: "images/4.jpg",
    images: ["images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg"],
    description: "A comfortable private room hostel on Nsambya Road near Cavendish University with excellent amenities including AC rooms, gym access, and a peaceful study environment perfect for focused learning.",
    facilities: ["Free WiFi", "AC Rooms", "Gym", "Library", "Power Backup", "Housekeeping", "TV Room"],
    availability: "available",
    badge: "Available"
  },
  {
    id: 3,
    name: "Sharing View Lodge",
    location: "Kabalagala Town, Kampala",
    price: 120,
    roomType: "Dormitory",
    rating: 4.3,
    reviews: 115,
    distance: "1.2 km",
    image: "images/5.jpg",
    images: ["images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"],
    description: "Budget-friendly dormitory accommodation in the heart of Kabalagala. Perfect for students seeking affordable living near shops, restaurants, and with easy access to Cavendish University.",
    facilities: ["Free WiFi", "Common Room", "Laundry", "Kitchen Access", "Luggage Storage", "Water Tank"],
    availability: "limited",
    badge: "Limited Spots"
  },
  {
    id: 4,
    name: "Campus Haven Hostel",
    location: "Kansanga, Kampala",
    price: 180,
    roomType: "Shared",
    rating: 4.7,
    reviews: 63,
    distance: "2.0 km",
    image: "images/6.jpg",
    images: ["images/6.jpg", "images/7.jpg", "images/8.jpg", "images/3.jpg"],
    description: "A serene hostel in Kansanga with a beautiful garden environment and easy access to Cavendish University via boda boda. Features sustainable living practices and a calm atmosphere ideal for students who value peace and quiet.",
    facilities: ["Free WiFi", "Garden", "Study Area", "Bicycle Parking", "Solar Power", "CCTV"],
    availability: "available",
    badge: "Available"
  },
  {
    id: 5,
    name: "Royal Student Flats",
    location: "Kibuli Hill, Kampala",
    price: 250,
    roomType: "Private",
    rating: 4.9,
    reviews: 156,
    distance: "2.5 km",
    image: "images/7.jpg",
    images: ["images/7.jpg", "images/8.jpg", "images/3.jpg", "images/4.jpg"],
    description: "Premium private student flats on Kibuli Hill with top-notch facilities including a rooftop terrace with city views, modern gym, and concierge service. The ultimate student living experience near Cavendish University.",
    facilities: ["Free WiFi", "AC Rooms", "Rooftop Terrace", "Gym", "Laundry", "Study Room", "Parking"],
    availability: "available",
    badge: "Available"
  },
  {
    id: 6,
    name: "Safe Stay Hostel",
    location: "Kabalagala, Kampala",
    price: 130,
    roomType: "Shared",
    rating: 4.4,
    reviews: 48,
    distance: "1.5 km",
    image: "images/8.jpg",
    images: ["images/8.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"],
    description: "A secure and welcoming hostel in Kabalagala with 24/7 security, common kitchen facilities, and a supportive community atmosphere for both local and international students. Close to shops and restaurants.",
    facilities: ["Free WiFi", "Common Kitchen", "Study Room", "CCTV", "Laundry", "Security Guard"],
    availability: "full",
    badge: "Fully Booked"
  },
  {
    id: 7,
    name: "Unity Student Residence",
    location: "Kansanga, Kampala",
    price: 160,
    roomType: "Shared",
    rating: 4.5,
    reviews: 94,
    distance: "1.8 km",
    image: "images/3.jpg",
    images: ["images/3.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"],
    description: "Unity Student Residence in Kansanga offers a vibrant community living experience with easy access to Cavendish University. Features modern study lounges, group activities, and a supportive environment for students.",
    facilities: ["Free WiFi", "Study Lounge", "Events Area", "Laundry", "Cafeteria", "24/7 Security"],
    availability: "available",
    badge: "Available"
  },
  {
    id: 8,
    name: "Kampala Executive Hostel",
    location: "Kibuli, Kampala",
    price: 220,
    roomType: "Private",
    rating: 4.7,
    reviews: 81,
    distance: "2.2 km",
    image: "images/4.jpg",
    images: ["images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg"],
    description: "Executive private rooms in Kibuli with panoramic views of Kampala. Features premium furnishings, ensuite bathrooms, and a quiet upscale environment for serious students. Accessible via Kibuli Road.",
    facilities: ["Free WiFi", "Ensuite Bathroom", "Smart TV", "Study Desk", "Parking", "Housekeeping"],
    availability: "available",
    badge: "Available"
  }
];

/* ===== Testimonial Data ===== */
const testimonials = [
  {
    name: "Sarah N.",
    role: "Bachelor of Software Engineering",
    text: "Cavendish Hostel Finder made it easy for me to get affordable accommodation near campus within a single day. The platform is simple and very reliable.",
    rating: 5,
    avatar: "images/student.jpg"
  },
  {
    name: "David O.",
    role: "Information Technology Student",
    text: "I loved how easy it was to compare hostel prices and facilities. The booking process was smooth and professional. Highly recommended!",
    rating: 5,
    avatar: "images/student2.jpg"
  },
  {
    name: "Grace M.",
    role: "Bachelor of Business Administration",
    text: "Finding safe and affordable accommodation around Nsambya was a challenge until I found this platform. Now I stay comfortably behind Sharing Youth Centre at a great price.",
    rating: 4,
    avatar: "images/student3.jpg"
  },
  {
    name: "Peter K.",
    role: "Computer Science Student",
    text: "The distance filter helped me find a hostel just 5 minutes from Cavendish University. The detailed facilities list and real photos made my decision easy.",
    rating: 5,
    avatar: "images/student4.jpg"
  },
  {
    name: "Esther A.",
    role: "Public Health Student",
    text: "I was worried about safety as a new student in Kampala, but the verified hostels on this platform gave me peace of mind. Excellent service!",
    rating: 5,
    avatar: "images/ude.jpg"
  },
  {
    name: "John W.",
    role: "Engineering Student",
    text: "Affordable private rooms near campus with all utilities included. The booking confirmation was instant and the support team was very helpful with my inquiries.",
    rating: 4,
    avatar: "images/student.jpg"
  }
];

/* ===== Team Data ===== */
const team = [
  { name: "Olum Walter", role: "Founder & Developer", image: "images/ude.jpg" },
  { name: "Dr. James Ssemakula", role: "Campus Relations", image: "images/student.jpg" },
  { name: "Sarah Nakato", role: "Student Support Lead", image: "images/student2.jpg" },
  { name: "Daniel Okello", role: "Operations Manager", image: "images/student3.jpg" }
];

/* ===== DOM Ready ===== */
document.addEventListener('DOMContentLoaded', function() {
  initPreloader();
  initNavbar();
  initThemeToggle();
  initScrollAnimations();
  initSmoothScroll();
  initTypingAnimation();
  initFeaturedHostels();
  initTestimonials();
  initHostelSearch();
  initFilters();
  initGallery();
  initBookingForm();
  initContactForm();
  populateBookingHostels();
  updateDistanceBadges();

  if (document.querySelector('.page-header')) {
    initPageAnimations();
  }
});

/* ===== Preloader ===== */
function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.classList.add('hidden');
    }, 800);
  }
}

/* ===== Typing Animation ===== */
function initTypingAnimation() {
  const typingEl = document.getElementById('typingText');
  if (!typingEl) return;

  const texts = [
    "Find Affordable Student Hostels Around Cavendish University",
    "Safe Accommodation Near Nsambya Campus",
    "Your Home Away From Home in Kampala"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function type() {
    const fullText = texts[textIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
    }

    typingEl.textContent = currentText;

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(function() { isDeleting = true; type(); }, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
      return;
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(type, speed);
  }

  setTimeout(type, 1000);
}

/* ===== Navigation ===== */
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

/* ===== Theme Toggle ===== */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const savedTheme = localStorage.getItem('chf-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggle.addEventListener('click', function() {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('chf-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('chf-theme', 'dark');
    }
  });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(function(el) {
    observer.observe(el);
  });
}

/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = anchor.getAttribute('href');
      if (href !== '#') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ===== Page Animations ===== */
function initPageAnimations() {
  const cards = document.querySelectorAll('.team-card, .objective-card, .mission-card, .vision-card, .contact-info-card, .developer-card');
  cards.forEach(function(card, index) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(function() {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 + index * 100);
  });
}

/* ===== Update Distance Badges ===== */
function updateDistanceBadges() {
  document.querySelectorAll('.distance-badge').forEach(function(badge) {
    const dist = parseFloat(badge.textContent);
    if (dist <= 0.8) {
      badge.classList.add('near');
    } else {
      badge.classList.add('far');
    }
  });
}

/* ===== Featured Hostels ===== */
function initFeaturedHostels() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featuredHostels = hostels.slice(0, 6);
  featuredHostels.forEach(function(hostel, index) {
    const card = createHostelCard(hostel, index);
    grid.appendChild(card);
  });

  setTimeout(function() {
    const cards = grid.querySelectorAll('.hostel-card');
    cards.forEach(function(card, i) {
      setTimeout(function() {
        card.classList.add('visible');
      }, i * 150);
    });
  }, 300);
}

function createHostelCard(hostel, index) {
  const animClass = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
  const card = document.createElement('div');
  card.className = 'hostel-card ' + animClass + (index === 0 ? ' featured-highlight' : '');
  card.innerHTML =
    '<div class="hostel-card-image">' +
      '<img src="' + hostel.image + '" alt="' + hostel.name + '" loading="lazy">' +
      '<span class="hostel-card-badge">' + hostel.badge + '</span>' +
      '<span class="hostel-card-rating">' +
        '<i class="fas fa-star"></i> ' + hostel.rating +
      '</span>' +
      '<div class="image-overlay">' +
        '<span><i class="fas fa-walking"></i> ' + hostel.distance + ' from Cavendish</span>' +
      '</div>' +
    '</div>' +
    '<div class="hostel-card-body">' +
      '<h3>' + hostel.name + '</h3>' +
      '<p class="location"><i class="fas fa-map-marker-alt"></i> ' + hostel.location.split(',')[0] + '</p>' +
      '<p class="price">UGX ' + (hostel.price * 3800).toLocaleString() + ' <span>/ month</span></p>' +
      '<div class="facility-icons">' +
        hostel.facilities.slice(0, 3).map(function(f) {
          return '<span><i class="fas fa-check"></i> ' + f + '</span>';
        }).join('') +
      '</div>' +
      '<div style="display:flex;gap:0.5rem;align-items:center;margin-bottom:0.8rem;flex-wrap:wrap;">' +
        '<span class="room-type">' + hostel.roomType + '</span>' +
        '<span class="distance-badge">' + hostel.distance + '</span>' +
      '</div>' +
      '<a href="details.html?id=' + hostel.id + '" class="btn btn-dark">View Details <i class="fas fa-arrow-right"></i></a>' +
    '</div>';
  return card;
}

function createListingCard(hostel) {
  const card = document.createElement('div');
  card.className = 'listing-card fade-in';
  card.innerHTML =
    '<div class="listing-card-image">' +
      '<img src="' + hostel.image + '" alt="' + hostel.name + '" loading="lazy">' +
      '<span class="listing-card-badge ' + hostel.availability + '">' + hostel.badge + '</span>' +
    '</div>' +
    '<div class="listing-card-body">' +
      '<div>' +
        '<h3>' + hostel.name + '</h3>' +
        '<div class="listing-card-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + hostel.location.split(',')[0] + '</span>' +
          '<span><i class="fas fa-bed"></i> ' + hostel.roomType + '</span>' +
          '<span><i class="fas fa-star" style="color:#f97316;"></i> ' + hostel.rating + ' (' + hostel.reviews + ' reviews)</span>' +
          '<span><i class="fas fa-walking"></i> ' + hostel.distance + ' from campus</span>' +
        '</div>' +
        '<p class="listing-card-price">UGX ' + (hostel.price * 3800).toLocaleString() + ' <span>/ month</span></p>' +
        '<p class="listing-card-desc">' + hostel.description.substring(0, 120) + '...</p>' +
      '</div>' +
      '<div class="listing-card-footer">' +
        '<div class="listing-card-facilities">' +
          hostel.facilities.slice(0, 4).map(function(f) {
            return '<span><i class="fas fa-check"></i> ' + f + '</span>';
          }).join('') +
        '</div>' +
        '<a href="details.html?id=' + hostel.id + '" class="btn btn-dark">Book Now <i class="fas fa-arrow-right"></i></a>' +
      '</div>' +
    '</div>';
  return card;
}

/* ===== Testimonials Carousel ===== */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!track) return;

  let currentSlide = 0;
  let slideInterval;

  testimonials.forEach(function(t) {
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < t.rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    slide.innerHTML =
      '<div class="testimonial-card">' +
        '<div class="testimonial-stars">' + stars + '</div>' +
        '<p class="testimonial-text">"' + t.text + '"</p>' +
        '<div class="testimonial-author">' +
          '<img src="' + t.avatar + '" alt="' + t.name + '" class="testimonial-avatar" loading="lazy">' +
          '<div>' +
            '<h4>' + t.name + '</h4>' +
            '<p>' + t.role + '</p>' +
          '</div>' +
        '</div>' +
      '</div>';
    track.appendChild(slide);
  });

  if (dotsContainer) {
    testimonials.forEach(function(_, i) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', function() { goToSlide(i); });
      dotsContainer.appendChild(dot);
    });
  }

  const allSlides = track.querySelectorAll('.testimonial-slide');
  if (allSlides.length > 0) {
    allSlides[0].classList.add('active');
  }

  function goToSlide(index) {
    allSlides.forEach(function(s) { s.classList.remove('active'); });
    allSlides[index].classList.add('active');
    currentSlide = index;
    document.querySelectorAll('.carousel-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    const next = (currentSlide + 1) % testimonials.length;
    goToSlide(next);
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(prev);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (prevBtn) prevBtn.addEventListener('click', function() { stopAutoSlide(); prevSlide(); startAutoSlide(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { stopAutoSlide(); nextSlide(); startAutoSlide(); });

  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

/* ===== Hostel Search ===== */
function initHostelSearch() {
  const searchInputs = document.querySelectorAll('.hostel-search');
  searchInputs.forEach(function(input) {
    input.addEventListener('input', filterHostels);
  });

  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      filterHostels();
    });
  }
}

function filterHostels() {
  const searchInput = document.getElementById('hostelSearch');
  const locationFilter = document.getElementById('locationFilter');
  const roomFilter = document.querySelector('input[name="roomType"]:checked');
  const availabilityFilter = document.querySelector('input[name="availability"]:checked');
  const resultsContainer = document.getElementById('resultsGrid');
  const resultCount = document.getElementById('resultCount');

  if (!resultsContainer) return;

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const location = locationFilter ? locationFilter.value : '';
  const roomType = roomFilter ? roomFilter.value : '';
  const availability = availabilityFilter ? availabilityFilter.value : '';

  const filtered = hostels.filter(function(h) {
    if (searchTerm && !h.name.toLowerCase().includes(searchTerm) && !h.location.toLowerCase().includes(searchTerm)) {
      return false;
    }
    if (location && !h.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    if (roomType && h.roomType.toLowerCase() !== roomType.toLowerCase()) {
      return false;
    }
    if (availability && h.availability !== availability) {
      return false;
    }
    return true;
  });

  if (resultCount) {
    resultCount.textContent = filtered.length;
  }

  renderResults(resultsContainer, filtered);
}

function renderResults(container, data) {
  if (data.length === 0) {
    container.innerHTML =
      '<div class="no-results">' +
        '<i class="fas fa-search"></i>' +
        '<h3>No Hostels Found</h3>' +
        '<p>Try adjusting your filters or search terms.</p>' +
      '</div>';
    return;
  }

  container.innerHTML = '';
  data.forEach(function(hostel) {
    const card = createListingCard(hostel);
    container.appendChild(card);
  });

  setTimeout(function() {
    const cards = container.querySelectorAll('.fade-in');
    cards.forEach(function(card) {
      card.classList.add('visible');
    });
  }, 100);
}

/* ===== Filters ===== */
function initFilters() {
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');

  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', function() {
      priceDisplay.textContent = 'UGX ' + (parseInt(this.value) * 3800).toLocaleString();
    });
  }

  document.querySelectorAll('.filter-checkboxes input').forEach(function(input) {
    input.addEventListener('change', filterHostels);
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      const container = document.getElementById('resultsGrid');
      if (!container) return;
      const cards = Array.from(container.querySelectorAll('.listing-card'));
      const order = this.value;

      cards.sort(function(a, b) {
        const priceA = parseInt(a.querySelector('.listing-card-price').textContent.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.querySelector('.listing-card-price').textContent.replace(/[^0-9]/g, ''));
        const nameA = a.querySelector('h3').textContent;
        const nameB = b.querySelector('h3').textContent;

        if (order === 'price-low') return priceA - priceB;
        if (order === 'price-high') return priceB - priceA;
        return nameA.localeCompare(nameB);
      });

      container.innerHTML = '';
      cards.forEach(function(card) { container.appendChild(card); });
    });
  }

  const filterToggle = document.getElementById('filterToggle');
  const filtersSidebar = document.querySelector('.filters-sidebar');
  if (filterToggle && filtersSidebar) {
    filterToggle.addEventListener('click', function() {
      filtersSidebar.classList.toggle('active');
    });
  }

  const applyFiltersBtn = document.getElementById('applyFilters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', filterHostels);
  }

  const priceRangeFilter = document.getElementById('priceRangeFilter');
  if (priceRangeFilter) {
    priceRangeFilter.addEventListener('input', function() {
      const display = document.getElementById('priceDisplayFilter');
      if (display) display.textContent = 'UGX ' + (parseInt(this.value) * 3800).toLocaleString();
    });
  }
}

/* ===== Gallery ===== */
function initGallery() {
  const gallery = document.querySelector('.details-gallery');
  if (!gallery) return;

  const mainImg = document.getElementById('galleryMain');
  const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');

  if (!mainImg || thumbnails.length === 0) return;

  let currentIndex = 0;
  const images = Array.from(thumbnails).map(function(t) { return t.getAttribute('src'); });

  function showImage(index) {
    mainImg.style.opacity = '0';
    setTimeout(function() {
      mainImg.setAttribute('src', images[index]);
      mainImg.style.opacity = '1';
    }, 200);
    thumbnails.forEach(function(t) { t.classList.remove('active'); });
    thumbnails[index].classList.add('active');
    currentIndex = index;
  }

  thumbnails.forEach(function(thumb, index) {
    thumb.addEventListener('click', function() { showImage(index); });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      showImage(prev);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      showImage(next);
    });
  }

  let slideInterval = setInterval(function() {
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(next);
  }, 5000);

  mainImg.addEventListener('mouseenter', function() { clearInterval(slideInterval); });
  mainImg.addEventListener('mouseleave', function() {
    slideInterval = setInterval(function() {
      const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      showImage(next);
    }, 5000);
  });
}

/* ===== Booking Form ===== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  populateBookingHostels();

  if (document.getElementById('bookingHostel')) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateBookingForm()) {
        showSuccessModal();
        form.reset();
        updateBookingSummary();
      }
    });

    form.querySelectorAll('input, select').forEach(function(el) {
      el.addEventListener('change', updateBookingSummary);
    });
  }
}

function populateBookingHostels() {
  const select = document.getElementById('bookingHostel');
  if (!select) return;

  hostels.forEach(function(h) {
    const opt = document.createElement('option');
    opt.value = h.name;
    opt.textContent = h.name + ' (UGX ' + (h.price * 3800).toLocaleString() + '/month)';
    select.appendChild(opt);
  });

  const params = new URLSearchParams(window.location.search);
  const selectedHostel = params.get('hostel');
  if (selectedHostel) {
    select.value = selectedHostel;
  }

  updateBookingSummary();
}

function updateBookingSummary() {
  const hostelSelect = document.getElementById('bookingHostel');
  const roomTypeSelect = document.getElementById('bookingRoomType');
  const durationInput = document.getElementById('bookingDuration');
  const summaryHostel = document.getElementById('summaryHostel');
  const summaryRoom = document.getElementById('summaryRoom');
  const summaryDuration = document.getElementById('summaryDuration');
  const summaryPrice = document.getElementById('summaryPrice');
  const totalDisplay = document.getElementById('bookingTotal');

  if (!summaryHostel) return;

  const selectedHostel = hostels.find(function(h) { return h.name === (hostelSelect ? hostelSelect.value : ''); });
  const roomType = roomTypeSelect ? roomTypeSelect.value : 'Shared';
  const duration = parseInt(durationInput ? durationInput.value : 1) || 1;
  const price = selectedHostel ? selectedHostel.price : 0;

  summaryHostel.textContent = selectedHostel ? selectedHostel.name : 'Not selected';
  summaryRoom.textContent = roomType || 'Not selected';
  summaryDuration.textContent = duration + ' month' + (duration > 1 ? 's' : '');
  if (summaryPrice) summaryPrice.textContent = 'UGX ' + (price * 3800).toLocaleString();
  totalDisplay.textContent = 'UGX ' + (price * duration * 3800).toLocaleString();
}

function validateBookingForm() {
  let isValid = true;
  const fields = [
    { id: 'bookingName', error: 'nameError', message: 'Please enter your full name' },
    { id: 'bookingEmail', error: 'emailError', message: 'Please enter a valid email address', validate: validateEmail },
    { id: 'bookingPhone', error: 'phoneError', message: 'Please enter a valid phone number', validate: validatePhone },
    { id: 'bookingHostel', error: 'hostelError', message: 'Please select a hostel' },
    { id: 'bookingRoomType', error: 'roomError', message: 'Please select a room type' },
    { id: 'bookingDuration', error: 'durationError', message: 'Please enter the duration' },
    { id: 'bookingDate', error: 'dateError', message: 'Please select a check-in date' }
  ];

  fields.forEach(function(field) {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.error);
    if (!input || !errorEl) return;

    const value = input.value.trim();
    let hasError = false;

    if (!value) {
      hasError = true;
    } else if (field.validate) {
      hasError = !field.validate(value);
    }

    if (hasError) {
      input.classList.add('error');
      errorEl.textContent = field.message;
      errorEl.classList.add('show');
      isValid = false;
    } else {
      input.classList.remove('error');
      errorEl.classList.remove('show');
    }
  });

  return isValid;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[\d\s\-\+\(\)]{7,15}$/.test(phone);
}

function showSuccessModal() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.classList.add('active');
  }
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateContactForm()) {
      showNotification('Message Sent!', 'We will get back to you within 24 hours.');
      form.reset();
    }
  });

  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
  }

  const modalBtn = document.querySelector('.modal .btn');
  if (modalBtn) {
    modalBtn.addEventListener('click', function() {
      document.querySelector('.modal-overlay').classList.remove('active');
    });
  }
}

function validateContactForm() {
  let isValid = true;
  const fields = [
    { id: 'contactName', error: 'contactNameError', message: 'Please enter your name' },
    { id: 'contactEmail', error: 'contactEmailError', message: 'Please enter a valid email', validate: validateEmail },
    { id: 'contactSubject', error: 'contactSubjectError', message: 'Please enter a subject' },
    { id: 'contactMessage', error: 'contactMessageError', message: 'Please enter your message' }
  ];

  fields.forEach(function(field) {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.error);
    if (!input || !errorEl) return;

    const value = input.value.trim();
    let hasError = false;

    if (!value) {
      hasError = true;
    } else if (field.validate) {
      hasError = !field.validate(value);
    }

    if (hasError) {
      input.classList.add('error');
      errorEl.textContent = field.message;
      errorEl.classList.add('show');
      isValid = false;
    } else {
      input.classList.remove('error');
      errorEl.classList.remove('show');
    }
  });

  return isValid;
}

/* ===== Notification Toast ===== */
function showNotification(title, message) {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML =
    '<div class="notification-icon"><i class="fas fa-check-circle"></i></div>' +
    '<div class="notification-text">' +
      '<h4>' + title + '</h4>' +
      '<p>' + message + '</p>' +
    '</div>';

  document.body.appendChild(notification);

  setTimeout(function() {
    notification.classList.add('active');
  }, 100);

  setTimeout(function() {
    notification.classList.remove('active');
    setTimeout(function() { notification.remove(); }, 400);
  }, 4000);
}

/* ===== Detail Page ===== */
document.addEventListener('DOMContentLoaded', function() {
  initDetailPage();
});

function initDetailPage() {
  const detailContainer = document.getElementById('detailContainer');
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const hostel = hostels.find(function(h) { return h.id === id; });

  if (!hostel) {
    detailContainer.innerHTML = '<div class="no-results"><i class="fas fa-exclamation-circle"></i><h3>Hostel Not Found</h3><p>The hostel you are looking for does not exist.</p><a href="listings.html" class="btn btn-dark" style="display:inline-flex;margin-top:1rem;">Browse Hostels</a></div>';
    return;
  }

  document.title = hostel.name + ' - Cavendish Hostel Finder';

  const breadcrumb = document.getElementById('detailBreadcrumb');
  if (breadcrumb) breadcrumb.textContent = hostel.name;

  const galleryMain = document.getElementById('galleryMain');
  if (galleryMain) {
    galleryMain.setAttribute('src', hostel.images[0]);
    galleryMain.setAttribute('alt', hostel.name);
  }

  const thumbnailsContainer = document.getElementById('galleryThumbnails');
  if (thumbnailsContainer) {
    hostel.images.forEach(function(img, idx) {
      const thumb = document.createElement('img');
      thumb.setAttribute('src', img);
      thumb.setAttribute('alt', hostel.name + ' ' + (idx + 1));
      if (idx === 0) thumb.classList.add('active');
      thumbnailsContainer.appendChild(thumb);
    });
  }

  document.getElementById('detailName').textContent = hostel.name;
  document.getElementById('detailLocation').innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + hostel.location;
  document.getElementById('detailRating').innerHTML = '<i class="fas fa-star" style="color:#f97316;"></i> ' + hostel.rating + ' (' + hostel.reviews + ' reviews)';
  document.getElementById('detailType').innerHTML = '<i class="fas fa-bed"></i> ' + hostel.roomType + '  <i class="fas fa-walking" style="margin-left:0.5rem;"></i> ' + hostel.distance + ' from campus';
  document.getElementById('detailDescription').textContent = hostel.description;

  const facilitiesList = document.getElementById('detailFacilities');
  if (facilitiesList) {
    hostel.facilities.forEach(function(f) {
      const li = document.createElement('li');
      li.innerHTML = '<i class="fas fa-check-circle"></i> ' + f;
      facilitiesList.appendChild(li);
    });
  }

  document.getElementById('detailPrice').innerHTML = 'UGX ' + (hostel.price * 3800).toLocaleString() + ' <span>/ month</span>';
  document.getElementById('detailPriceSub').textContent = hostel.roomType + ' room \u2022 ' + hostel.distance + ' from campus';

  const reserveBtn = document.getElementById('reserveBtn');
  if (reserveBtn) {
    reserveBtn.setAttribute('href', 'booking.html?hostel=' + encodeURIComponent(hostel.name));
  }

  const reviewsList = document.getElementById('reviewsList');
  if (reviewsList) {
    const reviewAuthors = [
      { name: 'Grace M.', role: 'Business Student', avatar: 'images/student3.jpg' },
      { name: 'Peter K.', role: 'Computer Science Student', avatar: 'images/student4.jpg' },
      { name: 'Esther A.', role: 'Public Health Student', avatar: 'images/ude.jpg' }
    ];

    reviewAuthors.forEach(function(author, idx) {
      const stars = Math.floor(4 + Math.random());
      let starsHtml = '';
      for (let i = 0; i < 5; i++) {
        starsHtml += i < stars ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
      }

      const reviewTexts = [
        'Great place to stay near Cavendish University! The facilities are well-maintained and the staff is very friendly. Highly recommend to any student looking for quality accommodation around Nsambya.',
        'I had a wonderful experience living here. The location is perfect for university students and the community is amazing. Walking distance to campus.',
        'Excellent hostel with modern amenities just behind Sharing Youth Centre. The study rooms are a huge plus. Very safe and secure environment for students.'
      ];

      const item = document.createElement('div');
      item.className = 'review-item fade-in';
      item.innerHTML =
        '<div class="review-header">' +
          '<div class="review-author">' +
            '<img src="' + author.avatar + '" alt="' + author.name + '">' +
            '<div>' +
              '<h4>' + author.name + '</h4>' +
              '<span>' + author.role + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="review-stars">' + starsHtml + '</div>' +
        '</div>' +
        '<p class="review-text">' + reviewTexts[idx] + '</p>';
      reviewsList.appendChild(item);
    });
  }

  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid) {
    team.forEach(function(member) {
      const card = document.createElement('div');
      card.className = 'team-card fade-in';
      card.innerHTML =
        '<img src="' + member.image + '" alt="' + member.name + '" loading="lazy">' +
        '<div class="team-card-body">' +
          '<h4>' + member.name + '</h4>' +
          '<p>' + member.role + '</p>' +
        '</div>';
      teamGrid.appendChild(card);
    });
  }

  initGallery();
  initScrollAnimations();
}
