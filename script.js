/**
 * Click Khareed - Luxury Jewelry Catalog
 * Main Application Script
 */

'use strict';

// ============================================
// Configuration
// ============================================
const CONFIG = {
    DELIVERY_FEE: 250,
    WHATSAPP_NUMBER: '+923129653920',
    VIBRATION_DURATION: 10,
    SCROLL_OFFSET: 190
};

// ============================================
// Product Data (Ordered: نیکلس، بینگلز، کفلنگز، مردانہ بریسلٹس، رِنگز، گھڑیاں، ائرنگز، کورٹ پنز)
// ============================================
const categories = [
    {
        id: "necklaces",
        label: "نیکلس",
        icon: "fa-gem",
        products: [
            { id: "1-N", name: "Royal Crown Name Necklace (Zircon)", code: "1-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302202/Royal_Crown_Name_Necklace_Zircon_1-N_thehsi.png" },
            { id: "2-N", name: "Double Heart Name Necklace", code: "2-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302186/Double_Heart_Name_Necklace_2-N_kyebz6.png" },
            { id: "3-N", name: "Connected Love Hearts Necklace (Zircon)", code: "3-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302164/Connected_Love_Hearts_Necklace_Zircon_3-N_f2riid.png" },
            { id: "4-N", name: "Elegant Butterfly Double-Chain Necklace", code: "4-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302185/Elegant_Butterfly_Double-Chain_Necklace_4-N_qhbnsi.png" },
            { id: "5-N", name: "Urdu Calligraphy Name Necklace", code: "5-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302235/Urdu_Calligraphy_Name_Necklace_5-N_roztuh.png" },
            { id: "6-N", name: "Angel Silhouette Name Necklace", code: "6-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302132/Angel_Silhouette_Name_Necklace_6-N_ah1man.png" },
            { id: "7-N", name: "Half Heart Name Necklace", code: "7-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302205/Half_Heart_Name_Necklace_7-N_vqocx9.png" },
            { id: "8-N", name: "Small Heart & Big Heart Necklace", code: "8-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302218/Small_Heart_Big_Heart_Necklace_8-N_gvf8ka.png" },
            { id: "9-N", name: "Crown Script Name Necklace", code: "9-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302181/Crown_Script_Name_Necklace_9-N_dq8tjk.png" },
            { id: "10-N", name: "Twin Names Heart Necklace", code: "10-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302229/Twin_Names_Heart_Necklace_10-N_qkkwbk.png" },
            { id: "11-N", name: "Signature Couple Name Necklace", code: "11-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302220/Signature_Couple_Name_Necklace_11-N_jimacu.png" },
            { id: "12-N", name: "Angel Wings Heart Necklace", code: "12-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302152/Angel_Wings_Heart_Necklace_12-N_as2qem.png" },
            { id: "13-N", name: "Twin Hearts Gift Necklace", code: "13-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302230/Twin_Hearts_Gift_Necklace_13-N_o4pjvp.png" },
            { id: "15-N", name: "Love Base Name Pendant", code: "15-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302205/Love_Base_Name_Pendant_15-N_ez0lqm.png" },
            { id: "16-N", name: "Single Letter Heart Necklace", code: "16-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302225/Single_Letter_Heart_Necklace_16-N_tvet9t.png" },
            { id: "17-N", name: "Bold Signature Name Necklace", code: "17-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302159/Bold_Signature_Name_Necklace_17-N_bdzu9w.png" },
            { id: "18-N", name: "Couple Pair Name Necklace", code: "18-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302182/Couple_Pair_Name_Necklace_18-N_pymhjb.png" },
            { id: "19-N", name: "Engraved Couple Name Necklace", code: "19-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302190/Engraved_Couple_Name_Necklace_19-N_we4rbu.png" },
            { id: "20-N", name: "Plain Script Name Pendant", code: "20-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302212/Plain_Script_Name_Pendant_20-N_uirvpb.png" },
            { id: "21-N", name: "Blossom Style Name Pendant", code: "21-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302154/Blossom_Style_Name_Pendant_21-N_ntql3z.png" },
            { id: "22-N", name: "Bold Plain Name Pendant", code: "22-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302165/Bold_Plain_Name_Pendant_22-N_xuud4k.png" },
            { id: "23-N", name: "Crown Heart Name Necklace", code: "23-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302189/Crown_Heart_Name_Necklace_23-N_qst13q.png" },
            { id: "24-N", name: "Locked Heart Name Necklace", code: "24-N", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302210/Locked_Heart_Name_Necklace_24-N_gwimhd.png" }
        ]
    },
    {
        id: "bangles",
        label: "بینگلز",
        icon: "fa-ring",
        products: [
            { id: "1-B", name: "Drop Initial Name Bangle", code: "1-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302052/Drop_Initial_Name_Bangle_1-B_v86qrn.png" },
            { id: "2-B", name: "Engraved Name Bar Bracelet", code: "2-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302063/Engraved_Name_Bar_Bracelet_2-B_rzjwaq.png" },
            { id: "3-B", name: "Love Curve Name Bracelet", code: "3-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302096/Love_Curve_Name_Bracelet_3-B_kylg6t.png" },
            { id: "4-B", name: "Engraved Initial Bangle", code: "4-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302051/Engraved_Initial_Bangle_4-B_azz4pp.png" },
            { id: "5-B", name: "Floral Script Name Bangle", code: "5-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302082/Floral_Script_Name_Bangle_5-B_lkkvhr.png" },
            { id: "6-B", name: "Heart Script Bangle", code: "6-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302079/Heart_Script_Bangle_6-B_hiotar.png" },
            { id: "7-B", name: "Butterfly Bangle (Zircon)", code: "7-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302067/Butterfly_Bangle_Zircon_7-B_l9thd5.png" },
            { id: "8-B", name: "Crown Script Bangle", code: "8-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302070/Crown_Script_Bangle_8-B_amxggc.png" },
            { id: "9-B", name: "Baby Name Bracelet", code: "9-B", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302092/Baby_Name_Bracelet_9-B_rnzzud.png" }
        ]
    },
    {
        id: "cufflinks",
        label: "کفلنگز",
        icon: "fa-shirt",
        products: [
            { id: "1-C", name: "Signature Name Cufflinks – Style 1", code: "1-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302110/Signature_Name_Cufflinks_Style_1_1-C_dsd76c.png" },
            { id: "2-C", name: "Signature Name Cufflinks – Style 2", code: "2-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302110/Signature_Name_Cufflinks_Style_2_2-C_w1qcnz.png" },
            { id: "3-C", name: "Signature Name Cufflinks – Style 3", code: "3-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302113/Signature_Name_Cufflinks_Style_3_3-C_gvihni.png" },
            { id: "4-C", name: "Crown Name Cufflinks", code: "4-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302101/Crown_Name_Cufflinks_4-C_uyn3or.png" },
            { id: "5-C", name: "Premium Chain Name Cufflinks", code: "5-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302122/Premium_Chain_Name_Cufflinks_5-C_lgyfkx.png" },
            { id: "6-C", name: "Signature Name Cufflinks – Style 4", code: "6-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302122/Signature_Name_Cufflinks_Style_4_6-C_vdfmdz.png" },
            { id: "7-C", name: "Chain & Moustache Cufflinks", code: "7-C", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302106/Chain_Moustache_Cufflinks_7-C_dbtxds.png" }
        ]
    },
    {
        id: "mens_bracelets",
        label: "مردانہ بریسلٹس",
        icon: "fa-link",
        products: [
            { id: "MB-1", name: "Gold Rolex-Style Bracelet", code: "MB-1", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386384/Gold_Rolex-Style_Bracelet_sfnrid.png" },
            { id: "MB-2", name: "Blue Rolex-Style Bracelet", code: "MB-2", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386378/Blue_Rolex-Style_Bracelet_fhwcr7.png" },
            { id: "MB-3", name: "Black Rolex-Style Bracelet", code: "MB-3", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386375/Black_Rolex-Style_Bracelet_kmgk7y.png" },
            { id: "MB-4", name: "Black Rolex Bracelet with Silver Chain", code: "MB-4", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386384/Black_Rolex_Bracelet_with_Silver_Chain_utsre6.png" },
            { id: "MB-5", name: "Gold Rado Bracelet", code: "MB-5", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386382/Golden_Rado_Bracelet_ko1zco.png" },
            { id: "MB-6", name: "Silver Rado Bracelet", code: "MB-6", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386380/Silver_Rado_Bracelet_fuuuxj.png" },
            { id: "MB-7", name: "Black Rado Bracelet", code: "MB-7", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765386376/Black_Rado_Bracelet_tqa1ph.png" }
        ]
    },
    {
        id: "rings",
        label: "رِنگز",
        icon: "fa-circle",
        products: [
            { id: "1-R", name: "Butterfly Name Ring", code: "1-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302257/Butterfly_Name_Ring_1-R_tpn06n.png" },
            { id: "2-R", name: "Initials Name Ring", code: "2-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302278/Initials_Name_Ring_2-R_jxettb.png" },
            { id: "3-R", name: "Golden Engraved Couple Ring", code: "3-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302280/Golden_Engraved_Couple_Ring_3-R_qatrj4.png" },
            { id: "4-R", name: "Heart Ring (Zircon)", code: "4-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302272/Heart_Ring_Zircon_4-R_domzte.png" },
            { id: "5-R", name: "Double Name Ring (Zircon)", code: "5-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302275/Double_Name_Ring_Zircon_5-R_t6zimu.png" },
            { id: "6-R", name: "Classic Heart Name Ring", code: "6-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302268/Classic_Heart_Name_Ring_6-R_owy28u.png" },
            { id: "7-R", name: "Black Engraved Couple Ring", code: "7-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302248/Black_Engraved_Couple_Ring_7-R_rqdmzk.png" },
            { id: "8-R", name: "Double Name Ring", code: "8-R", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302255/Double_Name_Ring_8-R_iravkt.png" }
        ]
    },
    {
        id: "watches",
        label: "گھڑیاں",
        icon: "fa-clock",
        products: [
            { id: "W-1", name: "Brown Chain Couple Watch (Single Piece)", code: "W-1", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302293/Brown_Chain_Couple_Watch_Single_Piece_sofb1t.png" },
            { id: "W-2", name: "Black Chain Couple Watch (Single Piece)", code: "W-2", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302282/Black_Chain_Couple_Watch_Single_Piece_wxiemw.png" },
            { id: "W-3", name: "Brown / Black Leather Watch (Single Piece)", code: "W-3", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302304/Brown_Black_Leather_Watch_Single_Piece_xmgf72.png" },
            { id: "W-4", name: "Magnetic Buckle Watch", code: "W-4", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302295/Magnetic_Buckle_Watch_strt8j.png" }
        ]
    },
    {
        id: "earrings",
        label: "ائرنگز",
        icon: "fa-star",
        products: [
            { id: "1-E", name: "Double-Chain Name Earrings", code: "1-E", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302136/Double-Chain_Name_Earrings_1-E_ekb4lv.png" },
            { id: "2-E", name: "Heart Frame Name Earrings", code: "2-E", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302151/Heart_Frame_Name_Earrings_2-E_zlm2tk.png" },
            { id: "3-E", name: "Round Name Earrings", code: "3-E", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302121/Round_Name_Earrings_3-E_wzyq97.png" },
            { id: "4-E", name: "Vertical Script Earrings", code: "4-E", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302142/Vertical_Script_Earrings_4-E_jqbfz3.png" },
            { id: "5-E", name: "Horizontal Bar Earrings", code: "5-E", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302142/Horizontal_Bar_Earrings_5-E_wuffid.png" }
        ]
    },
    {
        id: "court_pins",
        label: "کورٹ پنز",
        icon: "fa-award",
        products: [
            { id: "1-P", name: "Crowned Chain Signature Coat Pin", code: "1-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302061/Crowned_Chain_Signature_Coat_Pin_1-P_e0vkxx.png" },
            { id: "2-P", name: "Signature Script Coat Pin", code: "2-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302090/Signature_Script_Coat_Pin_2-P_opre51.png" },
            { id: "3-P", name: "Triple-Chain Royal Brooch", code: "3-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302095/Triple-Chain_Royal_Brooch_3-P_adeq90.png" },
            { id: "4-P", name: "Double-Chain Name Pin", code: "4-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302059/Double-Chain_Name_Pin_4-P_gik0bk.png" },
            { id: "5-P", name: "Islamic Calligraphy Coat Pin", code: "5-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302062/Islamic_Calligraphy_Coat_Pin_5-P_r6mqaq.png" },
            { id: "6-P", name: "Signature Slim Coat Pin", code: "6-P", image: "https://res.cloudinary.com/ddhshf7gu/image/upload/v1765302079/Signature_Slim_Coat_Pin_6-P_fmesjs.png" }
        ]
    }
];

// ============================================
// Application State
// ============================================
let cart = {};

// ============================================
// DOM Elements (cached for performance)
// ============================================
let chipsContainer;
let productsContainer;
let parchiBar;

// ============================================
// Utility Functions
// ============================================

/**
 * Safely get element by ID with caching
 */
function getElement(id) {
    return document.getElementById(id);
}

/**
 * Create element with classes and attributes
 */
function createElement(tag, className = '', attributes = {}) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    Object.entries(attributes).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    return el;
}

/**
 * Trigger haptic feedback if available
 */
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(CONFIG.VIBRATION_DURATION);
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Rendering Functions
// ============================================

/**
 * Render category navigation chips
 */
function renderChips() {
    if (!chipsContainer) return;

    const fragment = document.createDocumentFragment();

    categories.forEach(cat => {
        const btn = createElement('a', 'category-chip inline-flex items-center px-4 py-2.5 rounded-full text-sm font-bold snap-center');
        btn.href = `#${cat.id}`;
        btn.innerHTML = `<i class="fas ${cat.icon} ml-2 text-gold"></i> ${escapeHtml(cat.label)}`;
        fragment.appendChild(btn);
    });

    chipsContainer.innerHTML = '';
    chipsContainer.appendChild(fragment);
}

/**
 * Render all product sections
 */
function renderProducts() {
    if (!productsContainer) return;

    const fragment = document.createDocumentFragment();

    categories.forEach(cat => {
        const section = createElement('div', 'scroll-mt-[190px]');
        section.id = cat.id;

        // Section title
        const title = createElement('div', 'section-title flex items-center mb-4 py-2');
        title.innerHTML = `
            <div class="section-icon w-9 h-9 rounded-full flex items-center justify-center shadow-sm ml-3">
                <i class="fas ${cat.icon} text-gold"></i>
            </div>
            <h2 class="text-xl font-black text-gold">${escapeHtml(cat.label)}</h2>
        `;
        section.appendChild(title);

        // Product grid
        const grid = createElement('div', 'product-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3');

        cat.products.forEach(prod => {
            const card = createProductCard(prod, cat.icon);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        fragment.appendChild(section);
    });

    // Add bottom spacer
    const spacer = createElement('div', 'h-28');
    fragment.appendChild(spacer);

    productsContainer.innerHTML = '';
    productsContainer.appendChild(fragment);
}

/**
 * Create a single product card
 */
function createProductCard(prod, categoryIcon) {
    const card = createElement('div', 'product-card p-2 flex flex-col cursor-pointer');
    card.id = `card-${prod.id}`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', prod.name);

    // Selection checkbox - hidden by default (text-transparent hides the checkmark)
    const check = createElement('div', 'selection-check absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center z-10 text-transparent');
    check.id = `check-${prod.id}`;
    check.innerHTML = '<i class="fas fa-check text-sm"></i>';

    // Image container
    const imgBox = createElement('div', 'product-image-container w-full aspect-square rounded-xl flex items-center justify-center mb-2 cursor-zoom-in');

    if (prod.image) {
        // Use Cloudinary transformations for optimization
        const optimizedImage = prod.image.replace('/upload/', '/upload/f_auto,q_auto,w_300/');
        imgBox.innerHTML = `
            <img src="${optimizedImage}"
                 alt="${escapeHtml(prod.name)}"
                 class="product-image"
                 loading="lazy"
                 decoding="async"
                 onerror="this.parentElement.innerHTML='<i class=\\'fas ${categoryIcon} text-gold text-4xl\\'></i>'">
        `;
    } else {
        imgBox.innerHTML = `<i class="fas ${categoryIcon} text-gold text-4xl opacity-80"></i>`;
    }

    imgBox.onclick = (e) => {
        e.stopPropagation();
        openImageModal(prod.name, prod.code, prod.image, categoryIcon);
    };

    // Product info
    const info = createElement('div', 'flex-1 min-w-0 text-right px-1');
    info.innerHTML = `
        <h3 class="font-bold text-gray-100 text-sm leading-tight mb-1 line-clamp-2">${escapeHtml(prod.name)}</h3>
        <p class="text-gold font-bold text-xs">${escapeHtml(prod.code || '')}</p>
    `;

    // Event listeners
    card.onclick = () => toggleProduct(prod.id, prod.name, prod.code);
    card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleProduct(prod.id, prod.name, prod.code);
        }
    };

    card.appendChild(check);
    card.appendChild(imgBox);
    card.appendChild(info);

    return card;
}

// ============================================
// Cart Functions
// ============================================

/**
 * Toggle product selection
 */
function toggleProduct(id, name, code) {
    const card = getElement(`card-${id}`);
    const check = getElement(`check-${id}`);

    if (cart[id]) {
        // Remove from cart
        delete cart[id];
        if (card) card.classList.remove('selected-card');
        if (check) {
            check.classList.remove('selected', 'bg-gold', 'text-gray-900', 'border-gold');
            check.classList.add('border-gray-600', 'text-transparent');
        }
    } else {
        // Add to cart
        cart[id] = { name, code };
        if (card) card.classList.add('selected-card');
        if (check) {
            check.classList.remove('border-gray-600', 'text-transparent');
            check.classList.add('selected', 'bg-gold', 'text-gray-900', 'border-gold');
        }
        vibrate();
    }

    updateParchi();
}

/**
 * Update the bottom cart bar
 */
function updateParchi() {
    const items = Object.values(cart);
    const itemCount = items.length;

    const totalPrice = getElement('total-price');
    const breakdown = getElement('total-items-breakdown');

    if (totalPrice) {
        totalPrice.textContent = `${itemCount} آئٹمز`;
    }

    if (breakdown) {
        breakdown.textContent = itemCount > 0 ? `${CONFIG.DELIVERY_FEE} روپے ڈیلیوری چارج` : '';
    }

    if (parchiBar) {
        if (itemCount > 0) {
            parchiBar.classList.remove('translate-y-full');
        } else {
            parchiBar.classList.add('translate-y-full');
        }
    }
}

// ============================================
// Modal Functions
// ============================================

/**
 * Open image zoom modal
 */
function openImageModal(name, code, image, icon) {
    const modal = getElement('image-modal');
    const content = getElement('modal-image-content');
    const titleEl = getElement('modal-image-title');
    const codeEl = getElement('modal-image-code');

    if (!modal || !content) return;

    if (image) {
        // Use higher quality for modal view
        const hdImage = image.replace('/upload/', '/upload/f_auto,q_auto,w_600/');
        content.innerHTML = `<img src="${hdImage}" alt="${escapeHtml(name)}" class="modal-product-image">`;
    } else {
        content.innerHTML = `<i class="fas ${icon} text-gold text-9xl opacity-80"></i>`;
    }

    if (titleEl) titleEl.textContent = name;
    if (codeEl) codeEl.textContent = code ? `کوڈ: ${code}` : '';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close image modal
 */
function closeImageModal() {
    const modal = getElement('image-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Open checkout modal
 */
function openCheckoutModal() {
    if (Object.keys(cart).length === 0) {
        alert("برائے مہربانی پہلے کوئی سامان منتخب کریں۔");
        return;
    }

    const itemCount = Object.keys(cart).length;
    const subtotal = getElement('checkout-subtotal');
    const grandTotal = getElement('checkout-grand-total');
    const modal = getElement('checkout-modal');

    if (subtotal) subtotal.textContent = `${itemCount} آئٹمز`;
    if (grandTotal) grandTotal.textContent = `${CONFIG.DELIVERY_FEE} روپے`;

    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close checkout modal
 */
function closeCheckoutModal() {
    const modal = getElement('checkout-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// WhatsApp Integration
// ============================================

/**
 * Build and send WhatsApp order message
 */
function finalizeAndSend() {
    const engravingName = getElement('cust-engraving-name')?.value.trim() || '';
    const receiverName = getElement('cust-receiver-name')?.value.trim() || '';
    const phone = getElement('cust-phone')?.value.trim() || '';
    const address = getElement('cust-address')?.value.trim() || '';

    const items = Object.values(cart);

    // Build message - using consistent formatting for WhatsApp
    let msg = `*✨ Click Khareed - نیا آرڈر ✨*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `*📦 منتخب جیولری:*\n\n`;

    items.forEach((item, index) => {
        msg += `${index + 1}. ${item.name}\n`;
        if (item.code) {
            msg += `   کوڈ: ${item.code}\n`;
        }
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `*کل آئٹمز:* ${items.length}\n`;
    msg += `*ڈیلیوری چارج:* ${CONFIG.DELIVERY_FEE} روپے\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `*📋 کسٹمر کی معلومات:*\n\n`;
    msg += `*ڈیزائن پر نام:* ${engravingName || 'بعد میں بتاؤں گا'}\n`;
    msg += `*وصول کنندہ:* ${receiverName || 'بعد میں بتاؤں گا'}\n`;
    msg += `*فون نمبر:* ${phone || 'بعد میں بتاؤں گا'}\n`;
    msg += `*ایڈریس:* ${address || 'بعد میں بتاؤں گا'}\n\n`;

    msg += `براہ کرم میرا آرڈر کنفرم کریں۔ شکریہ! 🙏`;

    // Open WhatsApp
    const url = CONFIG.WHATSAPP_NUMBER
        ? `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
        : `https://wa.me/?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
    closeCheckoutModal();
}

// ============================================
// Event Listeners
// ============================================

/**
 * Handle keyboard shortcuts
 */
function handleKeydown(e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeCheckoutModal();
    }
}

/**
 * Handle modal backdrop clicks
 */
function setupModalListeners() {
    const imageModal = getElement('image-modal');
    const checkoutModal = getElement('checkout-modal');

    if (imageModal) {
        imageModal.onclick = closeImageModal;
        const content = imageModal.querySelector('.relative');
        if (content) {
            content.onclick = (e) => e.stopPropagation();
        }
    }

    if (checkoutModal) {
        checkoutModal.onclick = closeCheckoutModal;
        const panel = checkoutModal.querySelector('.slide-up-panel');
        if (panel) {
            panel.onclick = (e) => e.stopPropagation();
        }
    }
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application
 */
function init() {
    // Cache DOM elements
    chipsContainer = getElement('category-chips');
    productsContainer = getElement('product-container');
    parchiBar = getElement('parchi-bar');

    // Inject delivery fee into static UI elements (keeps values consistent)
    const deliveryBadgeEl = getElement('delivery-charge');
    const checkoutGrandEl = getElement('checkout-grand-total');
    if (deliveryBadgeEl) deliveryBadgeEl.textContent = `${CONFIG.DELIVERY_FEE} روپے`;
    if (checkoutGrandEl) checkoutGrandEl.textContent = `${CONFIG.DELIVERY_FEE} روپے`;

    // Render content
    renderChips();
    renderProducts();
    updateParchi();

    // Setup event listeners
    document.addEventListener('keydown', handleKeydown);
    setupModalListeners();
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make functions globally available for onclick handlers
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.closeImageModal = closeImageModal;
window.finalizeAndSend = finalizeAndSend;
