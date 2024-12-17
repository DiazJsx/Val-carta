        // Mensajes
        const messages = {
            1: "Valeria, quiero decirte cuánto te aprecio. Estos días han sido difíciles para mí, y me he dado cuenta de cuánto extraño la confianza que teníamos antes. Me encantaría poder contarte lo que me ha pasado, como lo hacía antes. Eras una persona muy importante para nosotros. Juntos vivimos tantas cosas, incluso las locuras más grandes durante años, ¿te acuerdas? Pero cometí el error de seguir a Hans porque le tengo mucha lealtad, al igual que a ti. En el pasado fuimos tus mejores amigos, y ahora me gustaría que pudiéramos volver a serlo, no solo en este momento, sino también en el futuro. De verdad, eres una gran amiga y me duele habernos distanciado. No quiero ser simplemente alguien más en tu vida; quiero recuperar esa amistad tan especial que teníamos. Los tres te extrañamos mucho, y espero que puedas perdonarme por haberme alejado. Ojalá nos des la oportunidad de volver a ser amigos.",
            2: "Hola Valeria quiero empezar pidiéndote perdón. Sé que en algún momento nos alejamos, y sé que mis decisiones contribuyeron a que eso pasara. Cuando Hans se alejó, no me di cuenta de cuánto estaba afectando nuestra amistad. Nuestra amistad siempre ha sido muy importante para mí. Hemos compartido tantos momentos que aún guardo con cariño, y realmente extraño cómo era todo antes. que incomodo que ahora estemos más como conocidos que como los amigos que solíamos ser ya no nos saludamos ni nada cuando nos vemos en la calle, No te quiero presionar ni hacerte sentir incómoda; solo quiero que sepas que Pedro, Hans y yo estamos aquí con esperanzas de volver a ser amigos. Aunque Hans quiere otra cosa creo jajaj."
        };

        // Función para mostrar mensajes
        function showMessage(cardNumber) {
            const messageElement = document.getElementById('message');
            const message = messages[cardNumber];
            
            messageElement.innerHTML = message;
            messageElement.classList.remove('show');
            
            // Force reflow
            void messageElement.offsetWidth;
            
            messageElement.classList.add('show');
        }

        // Función para cambiar el tema
        function toggleTheme() {
            const body = document.documentElement;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-sun';
            }
        }