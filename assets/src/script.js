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
                        <section class="section about-section" id="about">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <h2>Hola, soy Marcos. También me llamo Makuaz.</h2>
                                        <p>Me gradué como profesor de historia y geografía en 2011. Desde entonces, he trabajado de forma independiente en áreas medioambientales, desarrollo y análisis web. He participado en diversos cursos que abarcan temas como ventas, evaluación educativa, liderazgo de unidad técnico-pedagógica y neurociencias aplicadas a la educación. En la actualidad soy candidato al título de Ingeniería en Informática Multimedia de la universidad UNIACC y profesor ayudante en la misma institución.</p>
                                        <p>Actualmente estoy diseñando en el equipo Next Energy UX de Google.</p>
                                        <p>Antes de unirme a Google, hice prácticas en YouTube y Jet.com.</p>
                                        <p>La Escuela de Diseño CMU escribió un <a href="#">breve artículo</a> sobre el premio al mérito IDSA.</p>
                                        <p>¡Me encantaría saber de ti! <a href="mailto:marcos@makuaz.com">marcos@makuaz.com</a></p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="assets/img/profile.jpg" alt="Marcos Makuaz" class="img-fluid">
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-3">
                                        <h3>Educación</h3>
                                        <p>Carnegie Mellon University<br>2014 - 2018</p>
                                        <p>Licenciatura en Diseño Especializada en Diseño de Producto e Interacción Humano-Computadora.</p>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Experiencia</h3>
                                        <p>Diseñador de interacción de Google<br>Agosto de 2018 - presente<br>Mountain View, CA</p>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Habilidades</h3>
                                        <p>Diseño centrado en el usuario<br>Bocetos<br>Guión gráfico<br>Investigación de usuarios<br>Pruebas de usuarios<br>Diseño en el dispositivo (entradas, LED, hápticos, sonido, botones, carga)</p>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Premios</h3>
                                        <p>Premio al Mérito IDSA<br>Primavera 2018</p>
                                        <p>Premio al Mérito de la Escuela de Diseño<br>Otoño 2015 - Primavera 2016</p>
                                        <p>Lista de Decanos<br>Otoño 2014 - Primavera 2018</p>
                                    </div>
                                </div>
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
});
