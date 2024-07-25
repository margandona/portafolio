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
        } else {
            var sectionContent = getSectionContent(sectionId);
            $('#dynamic-sections').append(sectionContent);
        }

        applyAccessibilityMode();
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
                                    <h3>Mi inspiración viene del mundo de los videojuegos</h3>
                                    <p>“En los diversos capítulos de la vida, enfrentamos un torbellino de emociones. 
                                    En esos momentos cruciales, los videojuegos se convierten en mi refugio: 
                                    una fuente de entretenimiento, relajación, motivación e inspiración.”</p>
                                    
                                    <h4 class="text-center">Te invito a explorar, crear, pero sobretodo a reflexionar</h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <img src="./assets/img/pokedex2.png" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Tarjeta del Playground</h5>
                                            <p class="card-text">Descripción de la tarjeta de la sección de diversión.</p>
                                            <a href="#" class="btn btn-primary">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 1">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 1</h5>
                                                        <p class="card-text">Descripción del proyecto 1.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 2">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 2</h5>
                                                        <p class="card-text">Descripción del proyecto 2.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 3">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 3</h5>
                                                        <p class="card-text">Descripción del proyecto 3.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 4">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 4</h5>
                                                        <p class="card-text">Descripción del proyecto 4.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 5">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 5</h5>
                                                        <p class="card-text">Descripción del proyecto 5.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 6">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 6</h5>
                                                        <p class="card-text">Descripción del proyecto 6.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 7">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 7</h5>
                                                        <p class="card-text">Descripción del proyecto 7.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="card">
                                                    <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Proyecto 8</h5>
                                                        <p class="card-text">Descripción del proyecto 8.</p>
                                                        <a href="#" class="btn btn-primary">Leer más</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
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
                    </section>`;
                break;
            case 'educacion':
                content = `
                    <section class="section education-section" id="educacion">
                        <div class="container">
                            <h2 class="section-title">Proyectos de Educación</h2>
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Una de mis más grandes pasiones se asocian con la educación</h3>
                                    <p>“En mi infancia, crecí rodeado de docentes, lo que me llevó a elegir la enseñanza como mi primera carrera. 
                                    Sin embargo, una vez dentro, me di cuenta de que muchos métodos estaban obsoletos. 
                                    Hoy en día, trabajo para automatizar y actualizar esos enfoques.”</p>
                                    
                                    <h4 class="text-center">Te invito a explorar, crear, pero sobretodo a reflexionar</h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="card">
                                        <img src="./assets/img/pokedex2.png" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Tarjeta del Playground</h5>
                                            <p class="card-text">Descripción de la tarjeta de la sección de diversión.</p>
                                            <a href="#" class="btn btn-primary">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/cardGame.png" class="card-img-top" alt="Proyecto 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Proyecto de Educación 1</h5>
                                            <p class="card-text">Descripción breve del proyecto de educación 1.</p>
                                            <a href="#" class="btn btn-primary">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/pet.png" class="card-img-top" alt="Proyecto 2">
                                        <div class="card-body">
                                            <h5 class="card-title">Proyecto de Educación 2</h5>
                                            <p class="card-text">Descripción breve del proyecto de educación 2.</p>
                                            <a href="#" class="btn btn-primary">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./assets/img/pokedex.png" class="card-img-top" alt="Proyecto 3">
                                        <div class="card-body">
                                            <h5 class="card-title">Proyecto de Educación 3</h5>
                                            <p class="card-text">Descripción breve del proyecto de educación 3.</p>
                                            <a href="#" class="btn btn-primary">Leer más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <h1>El Amor en la Educación</h1>
                                <h2>La Emoción Fundamental</h2>
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
                                    <p>Licenciatura en ingeniería en informática y multimedia - 2024</p>
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
    }

    // Modo de Accesibilidad Visual
    $(document).on('click', '#btnDescansoVisual', function() {
        $('body').removeClass('descanso-visual daltonismo modo-nocturno normal').addClass('descanso-visual');
        toggleSectionsClass('descanso-visual');
    });

    $(document).on('click', '#btnDaltonismo', function() {
        $('body').removeClass('descanso-visual daltonismo modo-nocturno normal').addClass('daltonismo');
        toggleSectionsClass('daltonismo');
    });

    $(document).on('click', '#btnNormal', function() {
        $('body').removeClass('descanso-visual daltonismo modo-nocturno normal').addClass('normal');
        toggleSectionsClass('normal');
    });

    $(document).on('click', '#btnModoNocturno', function() {
        $('body').toggleClass('modo-nocturno');
        toggleSectionsClass('modo-nocturno');
    });

    function toggleSectionsClass(mode) {
        const sections = document.querySelectorAll('.header, .presentation, .about-section, .playground-section');
        sections.forEach((section) => {
            section.classList.remove('descanso-visual', 'daltonismo', 'modo-nocturno', 'normal');
            if (mode !== 'normal') {
                section.classList.add(mode);
            }
        });
    }
});
