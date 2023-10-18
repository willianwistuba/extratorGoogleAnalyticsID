// 1 - Abra a página em que deseja fazer a extração das URLS e aperte F12 no seu teclado ou clique com o botão direito do mouse e selecione Inspecionar Código Fonte
// 2 - Copie a função abaixo no Console do Navegador e Aperte ENTER

function findGoogleAnalyticsID() {
  const html = document.documentElement.outerHTML;
  const match = html.match(/UA-\d+-\d+/); // Expressão regular para capturar o Google Analytics ID (UA-xxxxx-xx).

  if (match) {
    return match[0];
  } else {
    return "Google Analytics ID não encontrado na página.";
  }
}

const googleAnalyticsID = findGoogleAnalyticsID();
console.log(googleAnalyticsID);
