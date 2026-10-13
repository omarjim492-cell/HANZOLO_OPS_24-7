// HANZOLO OPS 24-7 - Lógica JavaScript Principal

function switchTab(tabId) {
    const tabs = [
        'visao-geral', 'folha-obras', 'dgp', 'se', 'rh', 'frotas',
        'gcq', 'hsst', 'servicos-gerais', 'organigrama', 'compras',
        'logistica', 'tecnicos', 'projectos', 'manutencoes', 'relatorios'
    ];

    tabs.forEach(id => {
        const el = document.getElementById(`tab-${id}`);
        const btn = document.getElementById(`btn-${id}`);
        if (el) el.classList.add('hidden');
        if (btn) {
            btn.classList.remove('bg-cyan-600', 'text-white', 'shadow-lg', 'shadow-cyan-600/20');
            btn.classList.add('text-gray-400', 'hover:text-gray-200', 'hover:bg-white/5');
        }
    });

    const activeEl = document.getElementById(`tab-${tabId}`);
    const activeBtn = document.getElementById(`btn-${tabId}`);
    if (activeEl) activeEl.classList.remove('hidden');
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-400', 'hover:text-gray-200', 'hover:bg-white/5');
        activeBtn.classList.add('bg-cyan-600', 'text-white', 'shadow-lg', 'shadow-cyan-600/20');
    }
}

function showAlert(message) {
    alert(message);
}

function toggleNotifications() {
    alert("Notificações Hanzolo: 3 alertas operacionais recentes em Luanda.");
}

// Função robusta para extrair/descarregar relatório em PC e Telemóvel
function extrairRelatorioExecutivo() {
    const dataAtual = new Date().toISOString().split('T')[0];
    const conteudoRelatorio = `========================================
HANZOLO OPS 24-7 - RELATÓRIO EXECUTIVO
Data: ${dataAtual}
Localização: Talatona & Luanda, Angola

1. RESUMO OPERACIONAL:
- Frota Ativa: 3 Viaturas operacionais
- Auditorias GCQ: 100% de conformidade
- Colaboradores em Serviço: 42
- Conformidade HSST: 98.5%

2. MÉTRICAS DIÁRIAS (SETORES):
- Setor A: 85% Eficiência
- Setor B: 92% Eficiência
- Setor C: 78% Eficiência
- Setor D: 96% Eficiência

3. DISTRIBUIÇÃO DE SISTEMAS (CCTV / REDES):
- CCTV: 45%
- Redes: 25%
- Alarmes: 20%
- Outros: 10%

Status do Sistema: Operacional e Sincronizado.
Documento gerado automaticamente pelo Hanzolo Ops 24-7.
`;

    const blob = new Blob([conteudoRelatorio], { type: 'text/plain;charset=utf-8' });
    const nomeFicheiro = `Hanzolo_Relatorio_Executivo_${dataAtual}.txt`;

    // Verifica se suporta partilha nativa (ideal para telemóveis)
    if (navigator.canShare && navigator.canShare({ files: [new File([blob], nomeFicheiro, { type: 'text/plain' })] })) {
        const file = new File([blob], nomeFicheiro, { type: 'text/plain' });
        navigator.share({
            title: 'Relatório Executivo Hanzolo',
            text: 'Segue em anexo o relatório executivo operacional da Hanzolo Ops 24-7.',
            files: [file]
        }).catch(error => console.log('Erro ao partilhar:', error));
    } else {
        // Download direto para Computadores / PC
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nomeFicheiro;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
}

// Inicialização dos Gráficos e Eventos ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Atribuir a função de relatório a qualquer botão que tenha "Relatório" ou "Extrair" no texto
    document.querySelectorAll('button').forEach(btn => {
        if (btn.innerText.includes('Relatório') || btn.innerText.includes('Extrair')) {
            btn.onclick = extrairRelatorioExecutivo;
        }
    });

    const ctxLinhas = document.getElementById('graficoLinhas');
    if (ctxLinhas) {
        new Chart(ctxLinhas, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Leituras Operacionais',
                    data: [12, 19, 15, 25, 22, 30, 28],
                    borderColor: '#00b4d8',
                    backgroundColor: 'rgba(0, 180, 216, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    const ctxVelas = document.getElementById('graficoVelasFinas');
    if (ctxVelas) {
        new Chart(ctxVelas, {
            type: 'bar',
            data: {
                labels: ['Setor A', 'Setor B', 'Setor C', 'Setor D'],
                datasets: [{
                    label: 'Eficiência Diária',
                    data: [85, 92, 78, 96],
                    backgroundColor: '#10b981',
                    borderRadius: 6
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    const ctxCircular = document.getElementById('graficoCircular');
    if (ctxCircular) {
        new Chart(ctxCircular, {
            type: 'doughnut',
            data: {
                labels: ['CCTV', 'Redes', 'Alarmes', 'Outros'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#00b4d8', '#10b981', '#f59e0b', '#6b7280']
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
       });
});

// Funções operacionais para os módulos restantes

function abrirFolhaObras() {
    showAlert("Módulo Folha de Obras & Evidências: A carregar registos ativos da base de Luanda...");
}

function registarOcorrenciaDGP() {
    const descricao = prompt("Registar ocorrência DGP (Direção Geral de Proteção):");
    if (descricao) {
        showAlert("Ocorrência registada com sucesso e enviada para o centro de controlo.");
    }
}

function gerirFrota() {
    showAlert("Gestão de Frotas & GPS: 3 viaturas monitorizadas em tempo real em Talatona.");
}

function consultarHSST() {
    showAlert("Conformidade HSST: 98.5%. Todos os EPIs e normas de segurança validados.");
}

function abrirComprasLogistica() {
    showAlert("Módulo de Compras & Logística sincronizado com o inventário central.");
}
}
