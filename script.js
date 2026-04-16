// ================= CONFIGURATION =================
const CONFIG = {
    // Ganti dengan nomor WhatsApp Anda (format: 62xxx tanpa + atau 0 di depan)
    waNumber: "6281234567890",
    
    // Ganti dengan link sosial media asli Anda
    socialMedia: {
        instagram: "https://instagram.com/username_anda",
        tiktok: "https://tiktok.com/@username_anda", 
        facebook: "https://facebook.com/username_anda"
    },
    
    // Gambar fallback jika foto villa gagal dimuat
    fallbackImage: "https://via.placeholder.com/400x300?text=Villa+Tawangmangu"
};

// ================= DATA VILLA =================
const villas = [
    {
        id: 1,
        name: "Villa Gunung View",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa1-main.jpg",
        images: [
            "https://raw.githubusercontent.com/villatawangmangu/villa/main/1-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa1-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa1-3.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa1-4.jpg"
        ],
        weekdayPrice: "Rp 900.000",
        weekendPrice: "Rp 1.500.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 3,
        bathrooms: 2,
        capacity: 8,
        shortDesc: "Villa dengan pemandangan gunung yang menakjubkan, cocok untuk keluarga",
        fullDesc: "Villa Gunung View menawarkan pengalaman menginap yang tak terlupakan dengan pemandangan langsung ke Gunung Lawu. Villa ini dilengkapi dengan fasilitas modern dan desain yang nyaman untuk keluarga besar.",
        facilities: ["WiFi", "Kolam Renang", "Dapur", "AC", "Parkir Luas", "BBQ Area", "TV Kabel", "Air Panas"]
    },
    {
        id: 2,
        name: "Villa Asri Tawangmangu",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa2-main.jpg",
        images: [
            "https://raw.githubusercontent.com/username/repo/main/images/villa2-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa2-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa2-3.jpg"
        ],
        weekdayPrice: "Rp 1.200.000",
        weekendPrice: "Rp 2.000.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 4,
        bathrooms: 3,
        capacity: 10,
        shortDesc: "Villa luas dengan taman asri dan udara sejuk pegunungan",
        fullDesc: "Villa Asri menawarkan ketenangan di tengah alam dengan taman yang luas dan asri. Perfect untuk gathering keluarga atau teman-teman dengan kapasitas yang besar.",
        facilities: ["WiFi", "Kolam Renang Pribadi", "Dapur Lengkap", "AC", "Karaoke", "Taman Luas", "Gazebo", "Air Panas"]
    },
    {
        id: 3,
        name: "Villa Minimalis Modern",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa3-main.jpg",
        images: [
            "https://raw.githubusercontent.com/username/repo/main/images/villa3-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa3-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa3-3.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa3-4.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa3-5.jpg"
        ],
        weekdayPrice: "Rp 750.000",
        weekendPrice: "Rp 1.200.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 2,
        bathrooms: 2,
        capacity: 6,
        shortDesc: "Desain minimalis modern dengan fasilitas lengkap dan nyaman",
        fullDesc: "Villa dengan desain minimalis modern yang instagramable. Cocok untuk couple atau keluarga kecil yang menginginkan kenyamanan dan privasi.",
        facilities: ["WiFi", "AC", "Dapur", "TV Smart", "Parkir", "Air Panas", "Rooftop", "Coffee Maker"]
    },
    {
        id: 4,
        name: "Villa Keluarga Bahagia",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa4-main.jpg",
        images: [
            "https://raw.githubusercontent.com/username/repo/main/images/villa4-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa4-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa4-3.jpg"
        ],
        weekdayPrice: "Rp 1.000.000",
        weekendPrice: "Rp 1.800.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 3,
        bathrooms: 2,
        capacity: 8,
        shortDesc: "Villa ramah keluarga dengan area bermain anak",
        fullDesc: "Villa Keluarga Bahagia didesain khusus untuk kenyamanan keluarga dengan anak-anak. Dilengkapi dengan area bermain dan kolam renang yang aman untuk anak.",
        facilities: ["WiFi", "Kolam Renang", "Playground", "Dapur", "AC", "TV", "BBQ Area", "Air Panas", "Baby Cot"]
    },
    {
        id: 5,
        name: "Villa Luxury View",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa5-main.jpg",
        images: [
            "https://raw.githubusercontent.com/username/repo/main/images/villa5-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa5-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa5-3.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa5-4.jpg"
        ],
        weekdayPrice: "Rp 2.000.000",
        weekendPrice: "Rp 3.000.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 5,
        bathrooms: 4,
        capacity: 12,
        shortDesc: "Villa luxury dengan fasilitas premium dan pemandangan spektakuler",
        fullDesc: "Villa Luxury View menawarkan pengalaman menginap premium dengan fasilitas terbaik dan pemandangan yang spektakuler. Perfect untuk acara khusus atau vacation mewah.",
        facilities: ["WiFi", "Infinity Pool", "Home Theater", "Dapur Gourmet", "AC Central", "Jacuzzi", "Gym", "Butler Service", "Air Panas"]
    },
    {
        id: 6,
        name: "Villa Cottage Asri",
        mainImage: "https://raw.githubusercontent.com/username/repo/main/images/villa6-main.jpg",
        images: [
            "https://raw.githubusercontent.com/username/repo/main/images/villa6-1.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa6-2.jpg",
            "https://raw.githubusercontent.com/username/repo/main/images/villa6-3.jpg"
        ],
        weekdayPrice: "Rp 600.000",
        weekendPrice: "Rp 1.000.000",
        priceNote: "*Weekend: Jumat, Sabtu, Minggu & Hari Libur Nasional",
        bedrooms: 2,
        bathrooms: 1,
        capacity: 4,
        shortDesc: "Cottage cozy dengan suasana pedesaan yang tenang",
        fullDesc: "Villa Cottage Asri menawarkan pengalaman menginap yang cozy dengan suasana pedesaan yang tenang dan damai. Cocok untuk honeymoon atau retreat.",
        facilities: ["WiFi", "AC", "Dapur Sederhana", "Taman", "Parkir", "Air Panas", "Pemandangan Sawah"]
    }
];

// ================= RENDER VILLA GRID =================
function renderVillas() {
    const villaGrid = document.getElementById('villaGrid');
    villaGrid.innerHTML = villas.map(villa => `
        <div class="villa-card" onclick="openModal(${villa.id})">
            <img src="${villa.mainImage}" 
                 alt="${villa.name}" 
                 class="villa-image"
                 onerror="this.src='${CONFIG.fallbackImage}'">
            <div class="villa-info">
                <h3>${villa.name}</h3>
                <div class="villa-details">
                    <span><i class="fas fa-bed"></i> ${villa.bedrooms} Kamar</span>
                    <span><i class="fas fa-bath"></i> ${villa.bathrooms} KM</span>
                    <span><i class="fas fa-users"></i> ${villa.capacity} Orang</span>
                </div>
                
                <div class="villa-price">
                    <div class="price-container">
                        <span class="price-weekday">
                            <span class="price-label">Weekday:</span> ${villa.weekdayPrice}
                        </span>
                        <span class="price-weekend">
                            <span class="price-label">Weekend:</span> ${villa.weekendPrice}
                        </span>
                    </div>
                    <small class="price-note">${villa.priceNote}</small>
                </div>
                
                <p class="villa-description">${villa.shortDesc}</p>
            </div>
        </div>
    `).join('');
}

// ================= GENERATE WA MESSAGE =================
function generateWAMessage(villa, type = 'booking') {
    if (type === 'booking') {
        return encodeURIComponent(
            `Halo Admin Sewa Villa Tawangmangu 👋\n\n` +
            `Saya tertarik dengan: *${villa.name}*\n\n` +
            `💰 *Harga Sewa:*\n` +
            `• Weekday: ${villa.weekdayPrice}/malam\n` +
            `• Weekend: ${villa.weekendPrice}/malam\n` +
            `_${villa.priceNote}_\n\n` +
            `🛏️ Kamar: ${villa.bedrooms}\n` +
            `🚿 Kamar Mandi: ${villa.bathrooms}\n` +
            `👥 Kapasitas: ${villa.capacity} orang\n\n` +
            `Mohon info ketersediaan tanggal dan proses booking. Terima kasih! 🙏`
        );
    }
    return encodeURIComponent(`Halo, saya ingin bertanya tentang Sewa Villa Tawangmangu.`);
}

// ================= GENERATE SOCIAL ICONS =================
function generateSocialIcons() {
    return `
        <div class="social-container">
            <p>Ikuti kami di sosial media:</p>
            <div class="social-icons">
                <a href="https://wa.me/${CONFIG.waNumber}" 
                   class="social-icon wa" 
                   target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="${CONFIG.socialMedia.instagram}" 
                   class="social-icon ig" 
                   target="_blank" rel="noopener noreferrer" title="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="${CONFIG.socialMedia.tiktok}" 
                   class="social-icon tt" 
                   target="_blank" rel="noopener noreferrer" title="TikTok">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="${CONFIG.socialMedia.facebook}" 
                   class="social-icon fb" 
                   target="_blank" rel="noopener noreferrer" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div>
        </div>
    `;
}

// ================= OPEN MODAL =================
function openModal(villaId) {
    const villa = villas.find(v => v.id === villaId);
    if (!villa) return;
    
    const modal = document.getElementById('villaModal');
    const modalBody = document.getElementById('modalBody');
    const waMessage = generateWAMessage(villa, 'booking');

    modalBody.innerHTML = `
        <div class="modal-images">
            ${villa.images.map(img => `
                <img src="${img}" 
                     alt="${villa.name}" 
                     onclick="viewImage('${img}')"
                     onerror="this.src='${CONFIG.fallbackImage}'">
            `).join('')}
        </div>
        <div class="modal-info">
            <h2>${villa.name}</h2>
            <div class="villa-details" style="margin-bottom: 20px; font-size: 1.1rem;">
                <span><i class="fas fa-bed"></i> ${villa.bedrooms} Kamar Tidur</span>
                <span><i class="fas fa-bath"></i> ${villa.bathrooms} Kamar Mandi</span>
                <span><i class="fas fa-users"></i> Kapasitas ${villa.capacity} Orang</span>
            </div>
            
            <div class="price-container" style="margin: 15px 0;">
                <span class="price-weekday">
                    <span class="price-label">📅 Weekday:</span> ${villa.weekdayPrice}<small>/malam</small>
                </span>
                <span class="price-weekend">
                    <span class="price-label">🎉 Weekend:</span> ${villa.weekendPrice}<small>/malam</small>
                </span>
            </div>
            <small class="price-note" style="display: block; margin-bottom: 20px;">${villa.priceNote}</small>
            
            <p>${villa.fullDesc}</p>
            
            <div class="facilities">
                <h3><i class="fas fa-star"></i> Fasilitas</h3>
                <div class="facility-list">
                    ${villa.facilities.map(fac => `<span class="facility-item">${fac}</span>`).join('')}
                </div>
            </div>
            
            <div class="booking-section">
                <a href="https://wa.me/${CONFIG.waNumber}?text=${waMessage}" 
                   class="book-btn" 
                   target="_blank"
                   rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i> Booking via WhatsApp
                </a>
                ${generateSocialIcons()}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ================= CLOSE MODAL =================
function closeModal() {
    const modal = document.getElementById('villaModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ================= VIEW IMAGE =================
function viewImage(src) {
    window.open(src, '_blank', 'noopener,noreferrer');
}

// ================= EVENT LISTENERS =================
window.onclick = function(event) {
    const modal = document.getElementById('villaModal');
    if (event.target == modal) closeModal();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ================= INITIALIZE =================
document.addEventListener('DOMContentLoaded', () => {
    renderVillas();
    console.log('✅ Website Sewa Villa Tawangmangu siap! 🏡');
});
