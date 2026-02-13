// ============================================
// CONFIG.JS - LNC CENTRO AUTOMOTIVO
// ============================================
// Configurações centralizadas da oficina
// Atualizado: 13/02/2026

window.OFICINA_CONFIG = {
    // === INFORMAÇÕES DA OFICINA ===
    nome: "LNC CENTRO AUTOMOTIVO",
    subtitulo: "LANTERNAGEM E PINTURA - CHECKLIST DE ENTRADA E INSPEÇÃO",
    cnpj: "23.074.788/0001-86",
    oficinaId: "lnc_centro_automotivo",

    // === CONTATOS ===
    telefone: "(31) 3423-8844",
    whatsapp: "(31) 3423-8844",
    telefone2: "(31) 8784-2528",

    // === ENDEREÇO ===
    endereco: "AV. JOÃO XXIII, 320 - ALIPIO DE MELO - BELO HORIZONTE/MG",
    cep: "30.820-632",

    // === IDENTIDADE VISUAL ===
    logo: "logo.png",
    corPrimaria: "#c49b4d",  // Dourado da logo LNC
    corSecundaria: "#6b6b5d", // Cinza/Verde da logo

    // === FIREBASE (Opcional - Configure depois) ===
    firebase: {
        enabled: true,
        oficinaId: "lnc_centro_automotivo"
    }
};

// ============================================
// APLICAR COR PRIMÁRIA AUTOMATICAMENTE
// ============================================
if (window.OFICINA_CONFIG.corPrimaria) {
    document.documentElement.style.setProperty('--color-primary', window.OFICINA_CONFIG.corPrimaria);
}
