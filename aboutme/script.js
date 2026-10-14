const body = document.body;
const flashlight = document.getElementById("flashlight");
const flashlightToggle = document.getElementById("flashlightToggle");
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("acceptCookies");
const denyCookies = document.getElementById("denyCookies");
const sidePanel = document.getElementById("side-panel");

function setMode(mode) {
    body.classList.remove("light-mode", "darker-mode");

    if (mode === "light") {
        body.classList.add("light-mode");
    } else if (mode === "darker") {
        body.classList.add("darker-mode");
    }

    if (mode === "light") {
        flashlight.classList.remove("active");
        flashlight.classList.add("off");
        flashlightToggle.dataset.enabled = "false";
        flashlightToggle.textContent = "Flashlight: Off";
    } else if (flashlightToggle.dataset.enabled === "true") {
        flashlight.classList.remove("off");
        flashlight.classList.add("active");
        flashlightToggle.textContent = "Flashlight: On";
    }
}

document.getElementById("lightMode").addEventListener("click", () => setMode("light"));
document.getElementById("darkMode").addEventListener("click", () => setMode("dark"));
document.getElementById("darkerMode").addEventListener("click", () => setMode("darker"));

flashlightToggle.addEventListener("click", () => {
    const turningOn = flashlightToggle.dataset.enabled !== "true";
    flashlightToggle.dataset.enabled = String(turningOn);
    const lightMode = body.classList.contains("light-mode");

    if (turningOn && !lightMode) {
        flashlight.classList.remove("off");
        flashlight.classList.add("active");
        flashlightToggle.textContent = "Flashlight: On";
    } else {
        flashlight.classList.remove("active");
        flashlight.classList.add("off");
        flashlightToggle.textContent = "Flashlight: Off";
    }
});

function moveFlashlight(x, y) {
    flashlight.style.setProperty("--light-x", x + "px");
    flashlight.style.setProperty("--light-y", y + "px");
}

// Cookie consent: Accept opens the telemetry panel
acceptCookies.addEventListener("click", () => {
    cookieBanner.classList.add("hidden");
    sidePanel.style.display = "block";
    gatherDiagnostics();
});

// Cookie consent: Deny just hides the banner without opening diagnostics
denyCookies.addEventListener("click", () => {
    cookieBanner.classList.add("hidden");
});

// Gather browser and GPU specs
function gatherDiagnostics() {
    // Browser Detection
    const ua = navigator.userAgent;
    let browser = "Unknown";
    if (ua.includes("Firefox")) browser = "Mozilla Firefox";
    else if (ua.includes("SamsungBrowser")) browser = "Samsung Internet";
    else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
    else if (ua.includes("Trident")) browser = "Internet Explorer";
    else if (ua.includes("Edge")) browser = "Microsoft Edge";
    else if (ua.includes("Chrome")) browser = "Google Chrome";
    else if (ua.includes("Safari")) browser = "Apple Safari";
    document.getElementById("browserInfo").textContent = browser;

    // GPU Detection via WebGL
    try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (debugInfo) {
                const gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                document.getElementById("gpuInfo").textContent = gpu;
            } else {
                document.getElementById("gpuInfo").textContent = "Standard WebGL";
            }
        } else {
            document.getElementById("gpuInfo").textContent = "Not Available";
        }
    } catch (e) {
        document.getElementById("gpuInfo").textContent = "Restricted";
    }
}

// Live Tracker updates
function updateMetrics(x, y) {
    moveFlashlight(x, y);
    if (sidePanel.style.display === "block") {
        document.getElementById("mouseX").textContent = x;
        document.getElementById("mouseY").textContent = y;
        document.getElementById("pageHeight").textContent = window.innerHeight;
        document.getElementById("pageWidth").textContent = window.innerWidth;
    }
}

document.addEventListener("mousemove", (event) => {
    updateMetrics(event.clientX, event.clientY);
});

document.addEventListener("touchmove", (event) => {
    if (event.touches.length > 0) {
        updateMetrics(event.touches[0].clientX, event.touches[0].clientY);
    }
}, { passive: true });