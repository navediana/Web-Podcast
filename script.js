// menu mobile
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//forgot pass
function cekEmail(form) {
      if (form.elements[0].value == "") 
      {
        alert("Email harus dimasukkan");
        form.email.focus();
        form.email.select();
        return(false);
      }
      alert("Link send on your email successfully!!, ");    
      return(true);
    }