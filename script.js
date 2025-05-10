document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.03)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.03)';
        });
    });
    
    // Add subtle highlight effect to the error code
    const errorCode = document.querySelector('.error-code');
    setInterval(() => {
        errorCode.style.opacity = 0.8 + Math.random() * 0.2;
    }, 1000);
});