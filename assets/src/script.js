$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#intro-text').on('click', function () {
        $('body').toggleClass('night-mode');
    });

    $('a[data-target]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        showSection(target);
    });

    function showSection(sectionId) {
        // Ocultar todas las secciones dinámicas
        $('#dynamic-sections .section').hide();

        // Mostrar o crear la sección seleccionada
        if ($('#' + sectionId).length) {
            $('#' + sectionId).show();
        } else {
            var sectionContent = getSectionContent(sectionId);
            $('#dynamic-sections').append(sectionContent);
        }
    }

    function getSectionContent(sectionId) {
        var content = '';
        switch (sectionId) {
            case 'work':
                content = `
                    <section class="section" id="work">
                        <div class="container">
                            <h2>Mis Trabajos</h2>
                            <p>Aquí va el contenido de la sección Trabajos.</p>
                        </div>
                    </section>`;
                break;
            case 'playground':
                content = `
                    <section class="section" id="playground">
                        <div class="container">
                            <h2>Zona de Diversión</h2>
                            <p>Aquí va el contenido de la sección Diversión.</p>
                        </div>
                    </section>`;
                break;
            case 'educacion':
                content = `
                    <section class="section" id="educacion">
                        <div class="container">
                            <h2>Contribución en Educación</h2>
                            <p>Aquí va el contenido de la sección Educación.</p>
                        </div>
                    </section>`;
                break;
            case 'about':
                content = `
                    <section class="section" id="about">
                        <div class="container">
                            <h2>Acerca de</h2>
                            <p>Aquí va el contenido de la sección Acerca de.</p>
                        </div>
                    </section>`;
                break;
            case 'home':
                $('#dynamic-sections .section').hide();
                return;
        }
        return content;
    }

    function scrollToTop() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
});
