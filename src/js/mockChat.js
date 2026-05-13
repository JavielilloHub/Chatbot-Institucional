const mockResponses = {

    horarios:
        "El horario del centro es de 8:25 a 14:25 (MAÑANA) - de 15:50 a 21:40 (TARDE)" ,

    becas:
        "Puedes solicitar las becas desde la página oficial del ministerio de educación.",

    secretaria:
        "La secretaría se encuentra en la entrada principal del instituto, a mano izquierda",

    contacto:
        "Puedes contactar mediante teléfono o correo electrónico oficial del centro ===> Tlf: 968301352 | Correo: 30009010@murciaeduca.es",
    };

function getMockResponse(message) {

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("horario")) {
        return mockResponses.horarios;
    }

    if (lowerMessage.includes("beca")) {
        return mockResponses.becas;
    }

    if (lowerMessage.includes("secret")) {
        return mockResponses.secretaria;
    }

    if (lowerMessage.includes("contact")) {
        return mockResponses.contacto;
    }

    return "Lo siento, no he encontrado información relacionada con tu consulta.";
}