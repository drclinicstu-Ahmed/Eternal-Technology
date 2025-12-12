document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar nav');

    // تفعيل فتح وإغلاق قائمة التنقل على الموبايل
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});