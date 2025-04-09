$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#intro-text').on('click', function () {
        $('body').toggleClass('colorblind-mode');
        applyAccessibilityMode();
    });

    $('a[data-target]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');
        showSection(target);
    });

    function showSection(sectionId) {
        $('#dynamic-sections .section').hide();

        if ($('#' + sectionId).length) {
            $('#' + sectionId).show();
            scrollToSection('#' + sectionId);
        } else {
            var sectionContent = getSectionContent(sectionId);
            $('#dynamic-sections').append(sectionContent);
            applyAccessibilityMode();
            scrollToSection('#' + sectionId);
        }
    }

    function getSectionContent(sectionId) {
        var content = '';
        switch (sectionId) {
            case 'work':
                content = `
                    <section class="section work-section" id="work">
                        <div class="container">
                            <h2 class="section-title">Accesibilidad y Ajustes</h2>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Modo de Accesibilidad Visual</h5>
                                            <p class="card-text">Un modo que permite a los usuarios cambiar entre diferentes configuraciones visuales para mejorar la accesibilidad.</p>
                                            <button id="btnDescansoVisual" class="btn btn-primary">
                                                <i class="fas fa-eye"></i> Descanso Visual
                                            </button>
                                            <button id="btnDaltonismo" class="btn btn-primary">
                                                <i class="fas fa-palette"></i> Daltonismo
                                            </button>
                                            <button id="btnNormal" class="btn btn-primary">
                                                <i class="fas fa-sync"></i> Normal
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Ajustes de Tamaño de Fuente y Espaciado</h5>
                                            <p class="card-text">Permite a los usuarios ajustar el tamaño de la fuente y el espaciado entre líneas y párrafos para mejorar la legibilidad.</p>
                                            <button id="btnAumentarFuente" class="btn btn-primary">
                                                <i class="fas fa-plus"></i> Aumentar Fuente
                                            </button>
                                            <button id="btnDisminuirFuente" class="btn btn-primary">
                                                <i class="fas fa-minus"></i> Disminuir Fuente
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Modo de Lectura Nocturna</h5>
                                            <p class="card-text">Un modo nocturno para reducir la fatiga ocular durante la lectura en condiciones de poca luz.</p>
                                            <button id="btnModoNocturno" class="btn btn-primary">
                                                <i class="fas fa-moon"></i> Modo Nocturno
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h1>La Danza de las Mentes</h1>
                                <h2>Explorando la Diversidad Cognitiva</h2>
                                <p>"Imagina que nuestras mentes son como un coro de bailarines. Algunos se deslizan con gracia, 
                                otros danzan al ritmo de su propia melodía. La diversidad cognitiva es la coreografía que une a 
                                todos. Algunos pasos son rápidos y precisos, mientras que otros son más lentos y sinceros. 
                                Pero juntos, crean una danza única e inolvidable. Así que, en este gran escenario de la vida, 
                                celebremos cada mente como una estrella brillante en nuestro ballet mental."</p>
                            </div>
                        </div>
                    </section>`;
                break;
            case 'playground':
                content = `
                    <section class="section playground-section" id="playground">
                        <div class="container">
                            <h2 class="section-title">Patio de Juegos</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>De los Juguetes a los Videojuegos: Un Viaje de Transformación</h3>
                                    <p>“Desde mi infancia, los juguetes y la naturaleza fueron mis compañeros de juego, 
                                    alimentando mi imaginación y curiosidad. Sin embargo, fue el descubrimiento del mundo 
                                    de los videojuegos y la informática lo que verdaderamente transformó mi vida. 
                                    Los videojuegos no solo se convirtieron en una fuente de entretenimiento, sino en un 
                                    motor de inspiración y desarrollo personal. Con la ayuda de mi imaginación, 
                                    he logrado convertir esta pasión en un camino de creación y aprendizaje constante.”</p>
                                    
                                    <h4 class="text-center">Descubre cómo los sueños de la infancia pueden convertirse en realidades sorprendentes  </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <img src="./assets/img/poke.png" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Consumo de la PokeApi</h5>
                                            <p class="card-text">¿Quién no ha deseado tener una de esas maravillas del anime japonés Pokémon? Aunque existen muchos 
                                            artefactos similares, desarrollarlo utilizando mis habilidades e imaginación ha hecho de esto algo más que diversión.
                                                Este juego se inspira en un juguete de mi infancia, deseando que pudiera hacer todo lo que este juego ofrece. 
                                                Te invito a probar un prototipo que he creado, diseñado para ser lo más parecido a la realidad, usando tu celular 
                                                o computadora.
                                             </p>
                                            
                                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#pokedexModal">Jugar con la Dex</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section class="section playground-section" id="playground">
                        <div class="container">
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card">
                                        <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 2">
                                        <div class="card-body">
                                            <h5 class="card-title">GoshtPetz: Juego de simulación de vida</h5>
                                            <p class="card-text">Un prototipo de juego basado en una historia original, 
                                            diseñado para ofrecerte momentos de imaginación y diversión sin límites.</p>
                                            <a href="assets/src/mascotaV3.5/index.html" class="btn btn-primary" id="btnGoshtPetz" target="_blank">Prueba y diviertete</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3>Mi inspiración viene del mundo de los videojuegos</h3>
                                    <p>“En los diversos capítulos de la vida, enfrentamos un torbellino de emociones. 
                                    En esos momentos cruciales, los videojuegos se convierten en mi refugio: 
                                    una fuente de entretenimiento, relajación, motivación e inspiración.”</p>
                                    
                                    <h4 class="text-center">Te invito a explorar, crear, pero sobretodo a reflexionar</h4>
                                </div>
                            </div>
                            
                            <div class="mt-5 text-center">
                                <h1>Hagamos volar la imaginación</h1>
                                <h2>Modelemos nuestros sueños</h2>
                                <p>"En el vasto lienzo de la existencia, un gran proyecto emerge como un destello 
                                de luz en la penumbra. Es la semilla de una idea, un susurro del alma que se eleva 
                                desde las profundidades de nuestras frustraciones. Cada tropiezo, cada desafío, 
                                es un pincel que da forma a nuestra visión. Y cuando volvemos a intentarlo, 
                                cuando tejemos la esperanza con hilos de perseverancia, nuestros sueños se 
                                materializan en colores vibrantes. Así, en el telar de la vida, tejemos la 
                                epopeya de nuestras aspiraciones, y cada hilo entrelazado es un paso hacia la grandeza."</p>
                            </div>
                        </div>
                    </section>

                    <!-- Compatibility Modal -->
                    <div class="modal fade" id="compatibilityModal" tabindex="-1" role="dialog" aria-labelledby="compatibilityModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="compatibilityModalLabel">Dispositivo no compatible</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Lo sentimos, GoshtPetz solo está disponible para tablets y computadoras debido a requisitos técnicos y de interfaz.</p>
                                    <p>Por favor, intenta acceder desde un dispositivo con una pantalla más grande para disfrutar de la experiencia completa.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Entendido</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;
            case 'educacion':
                content = `
                    <section class="section education-section" id="educacion">
                        <div class="container">
                            <h2 class="section-title">Proyectos de Educación</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Una de mis más grandes pasiones se asocian con la educación</h3>
                                    <p>“Durante mi infancia, crecí rodeado de docentes, lo que me llevó a elegir la enseñanza como mi primera carrera. 
                                    Estar en un ambiente educativo desde pequeño influyó profundamente en mis decisiones y aspiraciones profesionales.<br><br>

                                        Sin embargo, una vez inmerso en el campo, me di cuenta de que muchos métodos eran obsoletos y necesitaban una 
                                        renovación urgente. La enseñanza tradicional no estaba cumpliendo con las demandas y necesidades de los 
                                        estudiantes modernos, lo que me llevó a buscar soluciones innovadoras.<br><br>

                                        Actualmente, me dedico a automatizar y actualizar esos enfoques, buscando mejorar la educación a través de la 
                                        innovación tecnológica. Mi objetivo es transformar la manera en que enseñamos y aprendemos, adaptándola a las 
                                        necesidades del siglo XXI.”</p>
                                    
                                    <h4 class="text-center">Te invito a explorar, crear, pero sobretodo a reflexionar</h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <img src="./assets/img/mistralymaturana.webp" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">La educación en linea es el nuevo paradigma</h5>
                                            <p class="card-text">Chilenos de renombre como Gabriela Mistral, quien defendía la educación con amor, 
                                            y Humberto Maturana, cuyas teorías se basan en las neurociencias, han tenido razón en sus planteamientos. 
                                            Sin embargo, estos visionarios no podían prever cómo la enseñanza se transformaría en nuestros tiempos, 
                                            adaptándose a nuevas metodologías y tecnologías.</p>
                                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#educationModal" data-reflection="reflexion1">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/aprenderjugar.webp" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Aprender jugando</h5>
                                            <p class="card-text">Convertir el aprendizaje en una experiencia divertida y relevante promueve una asimilación más efectiva de los conocimientos, 
                                            mejorando la comprensión y el interés de los estudiantes en el proceso educativo.</p>
                                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#educationModal" data-reflection="reflexion2">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/aprendercrear.webp" class="card-img-top" alt="Proyecto 2">
                                        <div class="card-body">
                                            <h5 class="card-title">Aprender Creando</h5>
                                            <p class="card-text">Aprender mediante la práctica y la experiencia facilita una asimilación más efectiva y duradera de los conocimientos, 
                                            asegurando que los estudiantes retengan y comprendan mejor lo que han aprendido.</p>
                                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#educationModal" data-reflection="reflexion3">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/aprenderaprender.webp" class="card-img-top" alt="Proyecto 3">
                                        <div class="card-body">
                                            <h5 class="card-title">Aprendiendo a aprender</h5>
                                            <p class="card-text">Desarrollar la habilidad de aprender a aprender en un entorno tecnológico capacita a las personas para adaptarse y evolucionar continuamente, 
                                            asimilando nuevos conocimientos y habilidades de manera efectiva y autónoma.</p>
                                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#educationModal" data-reflection="reflexion4">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h1>Adaptar las metodologías educativas tanto a los tiempos como a la tecnología es la llave al futuro.</h1>
                                <h2>Tomando lo mas importante, como lo que dice Gabriela Mistral o Humberto Maturana.</h2>
                                <p>"Amar educa", afirmaba Humberto Maturana. Cuando creamos un espacio que acoge, 
                                escucha y permite la presencia del otro, los niños se transforman en personas reflexivas, 
                                autónomas y responsables. El amor y la ternura son esenciales para que la educación florezca.</p>
                            </div>
                        </div>
                    </section>`;
                break;
            case 'about':
                content = `
                    <section class="section about-section" id="about">
                        <div class="container">
                            <h2 class="section-title">Acerca de</h2>
                            <div class="row">
                                <div class="col-lg-8">
                                    <h3>Hola, mi nombre es Marcos, pero también me conocen como MaKuaZ.</h3>
                                    <p>Me gradué como profesor de historia y geografía en 2011 y posteriormente como ingeniero informático multimedia. 
                                    Siempre he trabajado de forma independiente en áreas medioambientales, desarrollo 
                                    y análisis web. He participado en diversos cursos que abarcan temas como ventas, 
                                    evaluación educativa, liderazgo de unidad técnico-pedagógica y neurociencias aplicadas a la educación.</p>
                                    <p>Actualmente estoy diseñando nuevas formas de ver la tecnología.</p>
                                    <p>¡Me encantaría saber de ti! <a href="mailto:marcos@makuaz.com">marcos@makuaz.com</a></p>
                                </div>
                                <div class="col-lg-4">
                                    <img src="assets/img/logo.png" alt="Marcos Makuaz" class="img-fluid">
                                </div>
                            </div>
                            <div class="row mt-5">
                                
                                <div class="col-md-3">
                                    <h3>Habilidades</h3>
                                    <p>Diseño centrado en el usuario<br>Comunicación efectiva<br>Investigación de usuarios<br>Desarrollo Full Stack<br>Marketing digital<br>Desarrollo Multimedia<br>Desarrollo de Videojuegos<br>Automatizaciones IA</p>
                                </div>
                                <div class="col-md-3">
                                    <h3>Tecnologías</h3>
                                    <p>Oracle Data Modeler</p>
                                    <p>Firebase</p>
                                    <p>Scrum by Trello</p>
                                    <p>VSCode</p>
                                </div>
                                <div class="col-md-3">
                                    <h3>Lenguajes</h3>
                                    <p>Javascript</p>
                                    <p>Java</p>
                                    <p>Python</p>
                                    <p>PHP</p>
                                    
                                </div>
                                <div class="col-md-3">
                                    <h3>Frameworks</h3>
                                    <p>Node.js</p>
                                    <p>Vue</p>
                                    <p>Ionic by Angular</p>
                                    <p>Bootstrap</p>
                                    <p>Design Thinking</p>
                                    <p>SASS</p>
                                </div>
                            </div>
                        </div>
                    </section>`;
                break;
            case 'home':
                $('#dynamic-sections').empty();
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                return;
        }
        return content;
    }

    function applyAccessibilityMode() {
        if ($('body').hasClass('colorblind-mode')) {
            $('.section').addClass('colorblind-mode');
        } else {
            $('.section').removeClass('colorblind-mode');
        }
        if ($('body').hasClass('descanso-visual')) {
            $('.section').addClass('descanso-visual');
        } else {
            $('.section').removeClass('descanso-visual');
        }
        if ($('body').hasClass('modo-nocturno')) {
            $('.section').addClass('modo-nocturno');
        } else {
            $('.section').removeClass('modo-nocturno');
        }
    }

    // Modo de Accesibilidad Visual
    $(document).on('click', '#btnDescansoVisual', function () {
        $('body').removeClass('daltonismo modo-nocturno normal').addClass('descanso-visual');
        toggleSectionsClass('descanso-visual');
    });

    $(document).on('click', '#btnDaltonismo', function () {
        $('body').removeClass('descanso-visual modo-nocturno normal').addClass('daltonismo');
        toggleSectionsClass('daltonismo');
    });

    $(document).on('click', '#btnNormal', function () {
        $('body').removeClass('descanso-visual daltonismo modo-nocturno').addClass('normal');
        toggleSectionsClass('normal');
    });

    $(document).on('click', '#btnModoNocturno', function () {
        $('body').toggleClass('modo-nocturno');
        toggleSectionsClass('modo-nocturno');
    });

    // Ajustes de Tamaño de Fuente y Espaciado
    $(document).on('click', '#btnAumentarFuente', function () {
        $('body').css('font-size', function (i, value) {
            return parseFloat(value) + 1 + 'px';
        });
    });

    $(document).on('click', '#btnDisminuirFuente', function () {
        $('body').css('font-size', function (i, value) {
            return parseFloat(value) - 1 + 'px';
        });
    });

    function toggleSectionsClass(mode) {
        const sections = document.querySelectorAll('.header, .presentation, .about-section, .playground-section, .work-section, .education-section');
        sections.forEach((section) => {
            section.classList.remove('descanso-visual', 'daltonismo', 'modo-nocturno', 'normal');
            if (mode !== 'normal') {
                section.classList.add(mode);
            }
        });
    }

    // Modal reflections
    const reflections = {
        reflexion1: '¿Cómo crees que Gabriela Mistral y Humberto Maturana habrían adaptado sus enfoques educativos a las metodologías y tecnologías modernas para seguir mejorando la enseñanza?',
        reflexion2: '¿Cómo podemos diseñar experiencias educativas que sean tanto divertidas como relevantes para maximizar la efectividad del aprendizaje y mantener el interés de los estudiantes?',
        reflexion3: '¿Cómo podemos integrar más oportunidades de práctica y experiencias reales en el aprendizaje para garantizar una asimilación más efectiva y duradera de los conocimientos?',
        reflexion4: '¿Cómo podemos diseñar entornos tecnológicos que fomenten y faciliten el desarrollo de la habilidad de aprender a aprender, asegurando que las personas puedan adaptarse y evolucionar de manera autónoma?',
        reflexion5: 'Estoy trabajando para que pronto interactues con esta sección.'
    };

    $('#educationModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var reflectionKey = button.data('reflection');
        var modal = $(this);
        modal.find('.modal-body').text(reflections[reflectionKey]);
    });

    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 800);
    }

    // Check if device is large enough for GoshtPetz
    function isLargeDevice() {
        return $(window).width() >= 768; // Tablets and desktops (Bootstrap md breakpoint)
    }

    // Handler for GoshtPetz button
    $(document).on('click', '#btnGoshtPetz', function(e) {
        e.preventDefault(); // Always prevent default
        
        if (!isLargeDevice()) {
            $('#compatibilityModal').modal('show');
        } else {
            $('#ghostpetzModal').modal('show');
        }
    });

    // Check if device is large enough for GoshtPetz
    function isLargeDevice() {
        return $(window).width() >= 768; // Tablets and desktops (Bootstrap md breakpoint)
    }

    // Handler for GoshtPetz button
    $(document).on('click', '#btnGoshtPetz', function(e) {
        if (!isLargeDevice()) {
            e.preventDefault();
            $('#compatibilityModal').modal('show');
        }
        // On large devices, default link behavior works normally
    });
});
