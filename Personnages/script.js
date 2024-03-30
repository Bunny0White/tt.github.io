document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'process_contact_form.php', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                alert(xhr.responseText); // Affiche la réponse du serveur
                form.reset(); // Efface le formulaire après l'envoi
            }
        };
        xhr.send(formData);
    });
});
