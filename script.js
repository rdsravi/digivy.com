/*============================ Toggle Icon Navbar ============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*============================ scroll sections active link ============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============================ sticky navbar ============================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================ Toggle Icon Navbar ============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============================ scroll reveal ============================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*============================ Typed JS ============================*/
const typed = new Typed('.multi-text', {
    strings: ['Websites', 'Android Apps', 'ios Apps', 'Digital Marketing', 'Ads', 'Social Media Handling'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/*============================ Firebase JQuery ============================*/
const firebaseConfig = {
    apiKey: "AIzaSyB6Dmd9h1ps1lymDOq4qy9WubiyAf6cFQs",
    authDomain: "digivy-f4f1f.firebaseapp.com",
    databaseURL: "https://digivy-f4f1f-default-rtdb.firebaseio.com/",
    projectId: "digivy-f4f1f",
    storageBucket: "digivy-f4f1f.appspot.com",
    messagingSenderId: "3827067294",
    appId: "1:3827067294:web:a6320212eddb1d45508e8f",
    measurementId: "G-GX6QT2LRVP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference database
var contactDB = firebase.database().ref('contact');

$('#contact').submit(function (e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    saveMessages(name, email, number, subject, message);

    $('.alert').show();

    setTimeout(function () {
        $('.alert').hide();
    }, 3000);

    $('#contact')[0].reset();
});

const saveMessages = (name, email, number, subject, message) => {
    var newContactForm = contactDB.push();

    newContactForm.set({
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
    });
};

const getElementVal = (id) => {
    return $('#' + id).val();
};
