// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import "trix"
import "@rails/actiontext"

document.addEventListener('turbo:load', function() {
    // Query the burger button and sidebar elements
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector('.sidebar');

    // Add click event to the burger button
    burger.addEventListener('click', function() {
        // Check if the sidebar is currently hidden
        if (sidebar.classList.contains('hidden')) {
            // If it's hidden, we want to slide it in and make it visible
            sidebar.classList.remove('hidden');
            setTimeout(function() { // Timeout for the hidden class to be removed before sliding in
                sidebar.classList.remove('-translate-x-full');
            }, 20); // 20ms is generally enough for the browser to register the class change
        } else {
            // If it's not hidden, we slide it out and then hide it
            sidebar.classList.add('-translate-x-full');
            setTimeout(function() { // Timeout for the slide transition to finish before hiding
                sidebar.classList.add('hidden');
            }, 200); // This should match the duration of the transition
        }
    });
});
