const emailText = document.getElementById("emailText");
const copyButton = document.getElementById("copyEmail");
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");


// COPIAR EMAIL
copyButton.addEventListener("click", async () => {

    const email = emailText.textContent.trim();

    try {

        await navigator.clipboard.writeText(email);

        copyButton.textContent = "COPIADO ✓";

        setTimeout(() => {
            copyButton.textContent = "COPIAR ⧉";
        }, 1600);

    } catch {

        // Si el navegador no permite copiar,
        // abre el programa de correo
        window.location.href = `mailto:${email}`;
    }

});


// FORMULARIO
form.addEventListener("submit", (event) => {

    /*
     * Mientras no hayamos configurado Formspree,
     * evitamos que el formulario intente enviarse.
     */

    if (form.action.includes("TU_ENDPOINT_FORMSPREE")) {

        event.preventDefault();

        note.textContent =
            "Añade primero tu endpoint de Formspree para activar el envío.";

    }

});