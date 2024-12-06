document.addEventListener('DOMContentLoaded', () => {
   

  

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

    

   
    
        });
    }
});
