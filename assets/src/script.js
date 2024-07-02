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
                                        <h2>Hola, soy mi nombre es Marcos, pero tambien me conocen como MaKuaZ.</h2>
                                        <p>Me gradué como profesor de historia y geografía en 2011 y posteriormente como ingeniero informatico multimedia. 
                                        Siempre he trabajado de forma independiente en áreas medioambientales, desarrollo 
                                        y análisis web. He participado en diversos cursos que abarcan temas como ventas, 
                                        evaluación educativa, liderazgo de unidad técnico-pedagógica y neurociencias aplicadas a la educación.</p>
                                        <p>Actualmente estoy diseñando con mi equipo de NeekWorld.</p>
                                        
                                        <p>¡Me encantaría saber de ti! <a href="mailto:marcos@makuaz.com">marcos@makuaz.com</a></p>
                                    </div>
                                    <div class="col-lg-4">
                                        <img src="assets/img/logo.png" alt="Marcos Makuaz" class="img-fluid">
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col-md-3">
                                        <h3>Educación</h3>
                                        <p>Certificación desarrollo de aplicaciones frontend con framework vue</p>
                                        <p>Licenciatura en ingenieria en informatica y multimedia - 2024</p>
                                        <p>Licenciatura en Educación - 2011</p>
                                    </div>
                                    
                                    <div class="col-md-3">
                                        <h3>Habilidades</h3>
                                        <p>Diseño centrado en el usuario<br>Comunicación efectiva<br>Investigación de usuarios<br>Desarrollo FrontEnd<br>Marketing digital<br>Desarrollo Multimedia<br>Desarrollo de Videojuegos<br>IA</p>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Lenguajes</h3>
                                        <p>Javascript</p>
                                        <p>Java</p>
                                        <p>Python</p>
                                        <p>PHP</p>
                                        <p>CSS BEM</p>
                                    </div>
                                    <div class="col-md-3">
                                        <h3>Frameworks</h3>
                                        <p>Design Thinking</p>
                                        <p>Vue</p>
                                        <p>Bootstrap</p>
                                        <p>Jquery</p>
                                        <p>SASS</p>
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
