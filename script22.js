// Attend que la page soit chargée
$(document).ready(function() {

    // Ajoute un gestionnaire d'événement pour le clic sur un bouton de catégorie
    $('#categories button').click(function() {
      // Récupère la valeur du bouton cliqué
      var category = $(this).attr('data-category');
  
      // Masque tous les produits
      $('.product').hide();
      $('.product').slideUp();
      
  
      // Affiche seulement les produits correspondant à la catégorie sélectionnée
      $('.' + category).slideDown();
      $('.' + category).show(3000);
      
    });
});

