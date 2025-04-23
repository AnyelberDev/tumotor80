document.addEventListener('DOMContentLoaded', function() {
    // Efecto hover mejorado para las tarjetas de marca
    const brandCards = document.querySelectorAll('.brand-card');
    
    brandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            this.style.background = 'rgba(44, 62, 80, 0.95)';
            const logo = this.querySelector('.brand-logo');
            logo.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            this.style.background = 'rgba(44, 62, 80, 0.9)';
            const logo = this.querySelector('.brand-logo');
            logo.style.transform = '';
        });
        
        // Agrega esto dentro del DOMContentLoaded, después de las otras animaciones

        // Animación para las tarjetas de servicio
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });

        // Click en marca para mostrar más información
        card.addEventListener('click', function() {
            const brand = this.getAttribute('data-brand');
            alert(`Has seleccionado ${brand.toUpperCase()}. Contáctanos para información sobre motores ${brand}.`);
        });
    });
    
    // Efecto hover para los enlaces de redes sociales
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Animación de carga suave
    setTimeout(() => {
        document.querySelector('.header').style.opacity = '1';
    }, 100);
    
    // Cambiar el número de WhatsApp por el real
    const whatsappLink = document.querySelector('.whatsapp');
    // Reemplaza con tu número de WhatsApp (elimina el + y cualquier espacio)
    const whatsappNumber = '584120107276'; 
    whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    
    // Cambiar los enlaces de redes sociales por los reales
    const socialLinks = {
        facebook: 'https://www.facebook.com/people/RPV-TuMotorcom-CA/100088448436808/',
        instagram: 'https://www.instagram.com/rpvtumotor.com_?igsh=MTV0aTAwMm1xaXMzOQ==',
    };
    
    for (const [platform, url] of Object.entries(socialLinks)) {
        const link = document.querySelector(`.${platform}`);
        if (link) link.href = url;
    }
});