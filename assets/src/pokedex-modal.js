$(document).ready(function() {
    // Minimizar la Pokedex
    $('#minimizePokedexBtn').click(function() {
        $('#pokedexModal').modal('hide');
        $('#minimizedPokedex').show();
    });
    
    // Maximizar la Pokedex
    $('#maximizePokedexBtn').click(function() {
        $('#minimizedPokedex').hide();
        $('#pokedexModal').modal('show');
    });

    // Cuando se cierre el modal completamente, ocultar también la versión minimizada
    $('#pokedexModal').on('hidden.bs.modal', function() {
        // Solo ocultar la versión minimizada si fue cerrado con el botón cerrar
        if (!$('#minimizedPokedex').is(':visible')) {
            $('#minimizedPokedex').hide();
        }
    });

    // Ajustar el tamaño del iframe cuando se muestre el modal
    $('#pokedexModal').on('shown.bs.modal', function() {
        resizePokedexIframe();
    });
    
    // Ajustar el tamaño del iframe cuando se cambie el tamaño de la ventana
    $(window).resize(function() {
        if ($('#pokedexModal').is(':visible')) {
            resizePokedexIframe();
        }
    });
    
    // Función para ajustar el tamaño del iframe
    function resizePokedexIframe() {
        const modalBody = $('#pokedexModal .modal-body');
        const iframe = $('#pokedexIframe');
        const availableWidth = modalBody.width();
        
        // Ajustar el ancho del iframe al contenido
        const pokedexWidth = Math.min(availableWidth, 500); // 500px es el ancho preferido de la Pokedex
        iframe.css('width', pokedexWidth + 'px');
    }
});
