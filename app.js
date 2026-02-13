// ============================================
// APP.JS - LNC CENTRO AUTOMOTIVO
// ============================================
// Carrega automaticamente as configurações do config.js
// e aplica na interface do sistema

document.addEventListener('DOMContentLoaded', function () {
    // Garante que config.js foi carregado
    if (!window.OFICINA_CONFIG) {
        console.warn('⚠️ OFICINA_CONFIG não encontrado. Usando textos padrão do HTML.');
        // Mostra app mesmo sem config (fallback)
        document.getElementById('appWrap').style.display = 'block';
        return;
    }

    const cfg = window.OFICINA_CONFIG;

    // ============================================
    // APLICA INFORMAÇÕES DA OFICINA NO CABEÇALHO
    // ============================================
    const elTituloPagina   = document.getElementById('titulo-pagina');
    const elLogo           = document.getElementById('logo-oficina');
    const elNomeOficina    = document.getElementById('nome-oficina');
    const elSubtitulo      = document.getElementById('subtitulo-oficina');
    const elCnpj           = document.getElementById('cnpj-oficina');
    const elTelefone       = document.getElementById('telefone-oficina');
    const elEndereco       = document.getElementById('endereco-oficina');

    if (elTituloPagina && cfg.nome)     elTituloPagina.textContent = `Checklist de Entrada – ${cfg.nome}`;
    if (elLogo && cfg.logo)             elLogo.src = cfg.logo;
    if (elNomeOficina && cfg.nome)      elNomeOficina.textContent = cfg.nome;
    if (elSubtitulo && cfg.subtitulo)   elSubtitulo.textContent = cfg.subtitulo;
    if (elCnpj && cfg.cnpj)             elCnpj.textContent = `CNPJ: ${cfg.cnpj}`;
    if (elTelefone && cfg.telefone)     elTelefone.textContent = cfg.telefone;
    if (elEndereco && cfg.endereco)     elEndereco.textContent = cfg.endereco;

    // ============================================
    // APLICA COR PRIMÁRIA DA OFICINA
    // ============================================
    if (cfg.corPrimaria) {
        document.documentElement.style.setProperty('--color-primary', cfg.corPrimaria);
        console.log(`✅ Cor primária aplicada: ${cfg.corPrimaria}`);
    }

    // ============================================
    // MOSTRA O APP (estava escondido no HTML)
    // ============================================
    const appWrap = document.getElementById('appWrap');
    if (appWrap) {
        appWrap.style.display = 'block';
        console.log('✅ Sistema LNC carregado com sucesso!');
    }

    // ============================================
    // INICIALIZA DATA E HORA ATUAIS NOS CAMPOS
    // ============================================
    const hoje = new Date();
    const dataHoje = hoje.toISOString().split('T')[0]; // YYYY-MM-DD
    const horaAgora = hoje.toTimeString().slice(0, 5); // HH:MM

    const campoData = document.getElementById('data');
    const campoHora = document.getElementById('hora');

    if (campoData && !campoData.value) campoData.value = dataHoje;
    if (campoHora && !campoHora.value) campoHora.value = horaAgora;

    // ============================================
    // LOG DE INICIALIZAÇÃO (para debug)
    // ============================================
    console.log('%c🚗 LNC CENTRO AUTOMOTIVO', 'color: #1e5ba8; font-size: 20px; font-weight: bold;');
    console.log('%cSistema de Checklist Veicular v3.1', 'color: #666; font-size: 12px;');
    console.log('Oficina:', cfg.nome);
    console.log('CNPJ:', cfg.cnpj);
    console.log('Telefone:', cfg.telefone);
    console.log('ID Firebase:', cfg.firebase?.oficinaId || cfg.oficinaId);
});
