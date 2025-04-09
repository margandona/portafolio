$(document).ready(function() {
    // Minimize GoshtPetz
    $('#minimizeGhostpetzBtn').on('click', function() {
        $('#ghostpetzModal').modal('hide');
        $('#minimizedGhostpetz').show();
    });

    // Maximize GoshtPetz
    $('#maximizeGhostpetzBtn').on('click', function() {
        $('#minimizedGhostpetz').hide();
        $('#ghostpetzModal').modal('show');
    });
    
    // Reset on modal close
    $('#ghostpetzModal').on('hidden.bs.modal', function () {
        $('#minimizedGhostpetz').hide();
    });
});
