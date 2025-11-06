document.addEventListener('DOMContentLoaded', function() {
    // Get all detail links
    const detalleLinks = document.querySelectorAll('[data-page="taller-detalle"]');
    
    // Add click event to each link
    detalleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all taller details
            document.querySelectorAll('.taller-detalle').forEach(detalle => {
                detalle.classList.add('hidden');
            });
            
            // Get the taller ID from data attribute
            const tallerId = this.getAttribute('data-taller');
            
            // Show the selected taller detail
            if (tallerId) {
                const detalleElement = document.getElementById('detalle-' + tallerId);
                if (detalleElement) {
                    // Show the detail page section
                    document.getElementById('page-taller-detalle').style.display = 'block';
                    // Show the specific taller detail
                    detalleElement.classList.remove('hidden');
                    // Hide other pages
                    document.querySelectorAll('main > section:not(#page-taller-detalle)').forEach(section => {
                        section.style.display = 'none';
                    });
                    // Scroll to top
                    window.scrollTo(0, 0);
                }
            }
        });
    });
});