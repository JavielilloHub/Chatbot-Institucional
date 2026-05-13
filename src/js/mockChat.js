const mockResponses = {

    horarios:
        "El horario del centro es de 8:00 a 14:30 (MAÑANA) - de 16:00 a 20:00 (TARDE)" ,

    becas:
        "Puedes solicitar las becas desde la página oficial del ministerio de educación.",

    secretaria:
        "La secretaría se encuentra en la entrada del instituto, a mano izquierda al entrar por la puerta principal.",

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