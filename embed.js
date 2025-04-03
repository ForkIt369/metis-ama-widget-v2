/**
 * Metis AMA Widget Embedder
 * This script allows easy embedding of the Metis AMA Widget on any webpage.
 * 
 * Usage:
 * 1. Include this script on your page
 * 2. Add a div with id="metis-ama-widget" where you want the widget to appear
 * 
 * Example:
 * <div id="metis-ama-widget"></div>
 * <script src="embed.js"></script>
 */

(function() {
    // Base URL for resources - will be replaced with the actual Vercel deployment URL
    const baseUrl = 'https://metis-ama-widget-v2.vercel.app';
    
    // CSS URL
    const cssUrl = `${baseUrl}/metis-ama-widget.css`;
    
    // JavaScript URL
    const jsUrl = `${baseUrl}/metis-ama-widget.js`;
    
    // Default container ID
    const defaultContainerId = 'metis-ama-widget';
    
    // Load CSS
    function loadCSS(url) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }
    
    // Load JavaScript
    function loadJS(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback;
        document.body.appendChild(script);
    }
    
    // Initialize the widget
    function initWidget() {
        if (typeof MetisAMAWidget !== 'undefined') {
            // Initialize with the default container ID
            MetisAMAWidget.init({
                container: defaultContainerId
            });
        } else {
            console.error('Metis AMA Widget: Widget script failed to load or initialize properly.');
        }
    }
    
    // Load files and initialize widget
    function init() {
        // Check if the container exists
        if (!document.getElementById(defaultContainerId)) {
            console.warn(`Metis AMA Widget: No container with id "${defaultContainerId}" found. Add <div id="${defaultContainerId}"></div> to your page.`);
            return;
        }
        
        // Load CSS
        loadCSS(cssUrl);
        
        // Load JavaScript and initialize widget
        loadJS(jsUrl, initWidget);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
