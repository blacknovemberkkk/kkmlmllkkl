
(function() {
    // Mapeamento central de redirecionamentos
    const redirectMap = {
        '/index.html': '/app/back0.html',
        '/': '/app/back0.html', // Para acesso à raiz do site
        '/app/up1.html': '/app/back1.html',
        '/app/up2.html': '/app/back2.html',
        '/app/up3.html': '/app/back3.html',
        '/app/back0.html': '/app/up1.html',
        '/app/back1.html': '/app/up2.html',
        '/app/back2.html': '/app/up3.html'
        // A página /app/back3.html é omitida para não fazer nada ao voltar.
    };

    // Normaliza o caminho da página para garantir que funcione corretamente.
    const pathname = ('/' + window.location.pathname).replace(/\/+/g, '/');
    const redirectPath = redirectMap[pathname];

    // Se uma regra de redirecionamento existir para esta página...
    if (redirectPath) {
        const finalRedirectUrl = redirectPath + window.location.search;
        
        // Empurra um estado "isca" para o histórico.
        history.pushState(null, null, location.href);
        
        // Quando o usuário clica em "voltar", este estado é ativado.
        window.addEventListener('popstate', function () {
            // Substitui a URL atual pela de destino, evitando loops.
            location.replace(finalRedirectUrl);
        });
    }
})();
