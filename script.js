document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        home: document.getElementById('home-section'),
        news: document.getElementById('news-section'),
        tutorial: document.getElementById('tutorial-section'),
        register: document.getElementById('register-section'),
        login: document.getElementById('login-section')
    };

    const navLinks = {
        home: document.getElementById('home-tab'),
        news: document.getElementById('news-tab'),
        tutorial: document.getElementById('tutorial-tab'),
        register: document.getElementById('register-btn'),
        login: document.getElementById('login-btn')
    };

    Object.keys(navLinks).forEach(key => {
        navLinks[key].addEventListener('click', (e) => {
            e.preventDefault();
            showSection(key);
        });
    });

    function showSection(sectionId) {
        Object.keys(sections).forEach(key => {
            if (sections[key]) {
                sections[key].style.display = 'none';
            }
        });
        sections[sectionId].style.display = 'block';
    }

    showSection('home'); // Initially display the home section

    // Register function
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful!');
        showSection('home');
    });

    // Login function
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
            alert('Login successful!');
            showSection('home');
        } else {
            alert('Invalid username or password');
        }
    });

    if (localStorage.getItem('username')) {
        navLinks.register.style.display = 'none';
        navLinks.login.textContent = 'Logout';
        navLinks.login.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            alert('You have logged out.');
            location.reload();
        });
    }
});
