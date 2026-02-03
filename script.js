/**
 * Thumbnail Comparison Slider
 * Handles dynamic content loading and interactive before/after slider
 */

// Configuration
const CONFIG = {
    defaultClientId: 'default',
    errorMessage: 'Unable to load client data. Please check the URL.',
    contactEmail: 'contact@hassandesigns.com'
};

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeApp();
    } catch (error) {
        console.error('Application initialization failed:', error);
        showErrorState();
    }
});

/**
 * Main application initialization
 */
function initializeApp() {
    const clientId = getClientIdFromURL() || CONFIG.defaultClientId;
    const clientData = database[clientId];

    if (!clientData) {
        showErrorState();
        return;
    }

    populateContent(clientData);
    buildSlider(clientData);
    updateContactEmail();
}

/**
 * Extract client ID from URL query parameters
 * @returns {string|null} Client ID or null if not found
 */
function getClientIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Populate page content with client data
 * @param {Object} data - Client data object
 */
function populateContent(data) {
    const titleElement = document.getElementById('main-title');
    const subtextElement = document.getElementById('sub-text');
    const explanationElement = document.getElementById('pitch-explanation');

    if (titleElement) titleElement.textContent = data.greeting;
    if (subtextElement) subtextElement.textContent = data.subtext;
    if (explanationElement) explanationElement.textContent = data.explanation;
}

/**
 * Build and render the thumbnail comparison slider
 * @param {Object} data - Client data containing thumbnail information
 */
function buildSlider(data) {
    if (!data.thumbnails || data.thumbnails.length === 0) {
        console.warn('No thumbnails found for client');
        return;
    }

    const thumbnail = data.thumbnails[0];
    const sliderWrapper = document.getElementById('slider-wrapper');

    if (!sliderWrapper) return;

    sliderWrapper.innerHTML = `
        <div class="relative w-full aspect-video select-none" id="slider-container">
            <!-- After/Pro Image -->
            <div class="absolute inset-0 bg-cover bg-center" 
                 style="background-image: url('${escapeHtml(thumbnail.after)}')"
                 role="img" 
                 aria-label="After - Professional thumbnail design">
                <span class="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ✓ AFTER (PRO)
                </span>
            </div>

            <!-- Before Image (with clip mask for slider effect) -->
            <div class="absolute inset-0 bg-cover bg-center border-r-2 border-white/50" 
                 id="before-image" 
                 style="background-image: url('${escapeHtml(thumbnail.before)}'); width: 50%;"
                 role="img" 
                 aria-label="Before - Original thumbnail">
                <span class="absolute top-4 left-4 bg-zinc-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    BEFORE
                </span>
            </div>

            <!-- Slider Handle -->
            <div id="slider-handle" 
                 class="slider-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 pointer-events-none" 
                 style="left: 50%;"
                 aria-hidden="true">
                <span class="text-black font-bold">↔</span>
            </div>

            <!-- Interactive Layer -->
            <div class="absolute inset-0 z-30 cursor-ew-resize" 
                 id="touch-layer"
                 role="slider"
                 aria-label="Drag to compare before and after thumbnails"
                 aria-valuemin="0"
                 aria-valuemax="100"
                 aria-valuenow="50"
                 tabindex="0"></div>
        </div>
    `;

    initSlider();
}

/**
 * Initialize slider interactivity
 */
function initSlider() {
    const touchLayer = document.getElementById('touch-layer');
    const beforeImage = document.getElementById('before-image');
    const handle = document.getElementById('slider-handle');
    const container = document.getElementById('slider-container');

    if (!touchLayer || !beforeImage || !handle || !container) return;

    /**
     * Update slider position
     * @param {number} clientX - X coordinate from mouse/touch event
     */
    const updateSlider = (clientX) => {
        const rect = container.getBoundingClientRect();
        let x = clientX - rect.left;

        // Clamp value between 0 and container width
        x = Math.max(0, Math.min(x, rect.width));

        const percent = (x / rect.width) * 100;
        beforeImage.style.width = `${percent}%`;
        handle.style.left = `${percent}%`;

        // Update aria value for accessibility
        touchLayer.setAttribute('aria-valuenow', Math.round(percent));
    };

    // Mouse events
    touchLayer.addEventListener('mousemove', (e) => updateSlider(e.clientX));
    touchLayer.addEventListener('touchmove', (e) => {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
    }, { passive: false });

    // Keyboard support for accessibility
    touchLayer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            updateSlider(container.getBoundingClientRect().left + container.offsetWidth * 0.45);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            updateSlider(container.getBoundingClientRect().left + container.offsetWidth * 0.55);
        }
    });
}

/**
 * Update contact email link
 */
function updateContactEmail() {
    const contactLink = document.querySelector('a[href^="mailto:"]');
    if (contactLink) {
        contactLink.href = `mailto:${CONFIG.contactEmail}`;
    }
}

/**
 * Display error state
 */
function showErrorState() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="text-center py-20">
                <h1 class="text-3xl font-bold text-red-500 mb-4">⚠️ Data Not Found</h1>
                <p class="text-zinc-400 mb-6">We couldn't load the client data. Make sure you're using a valid ID.</p>
                <a href="/" class="inline-block bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-colors">
                    Return Home
                </a>
            </div>
        `;
    }
}

/**
 * Safely escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}