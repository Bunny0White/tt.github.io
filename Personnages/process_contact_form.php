<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Traitement du formulaire (non implémenté dans cet exemple)
    // Vous pouvez ajouter la logique de traitement ici, comme envoyer un e-mail ou enregistrer les données dans une base de données

    echo 'Votre message a été envoyé avec succès !'; // Réponse du serveur
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    echo 'Méthode non autorisée';
}
?>
