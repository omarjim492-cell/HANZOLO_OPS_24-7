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

// Inicialização dos Gráficos com Chart.js
document.addEventListener('DOMContentLoaded', function() {
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
    }
});
