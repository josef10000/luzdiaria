🚀 Guia Mestre: Do Canvas para o Vercel

Como transformar conversas com a IA em aplicativos reais e publicados.

Este documento descreve o fluxo de trabalho exato para criar qualquer aplicação web aqui no Canvas e colocá-la no ar usando a Vercel.

1. A Estratégia "Static First" (Primeiro Estático)

Para que o deploy (publicação) seja fácil e gratuito, seguimos a regra de ouro: O Frontend é Rei.

Ao pedir um projeto aqui, sempre solicite que ele seja "100% estático, sem dependências de build (npm/node)". Isso significa que o navegador (Chrome/Safari) fará todo o trabalho.

O "Kit de Sobrevivência" de Arquivos

Todo projeto robusto que você pedir aqui deve conter, no mínimo, estes 3 arquivos:

index.html:

Contém toda a estrutura, visual (CSS) e lógica (JS).

Por que? Facilita a edição e garante que não haja erros de importação.

manifest.webmanifest:

Transforma o site em um "App instalável".

Define nome, cores e ícones.

sw.js (Service Worker):

Permite que o app funcione Offline.

Faz o cache dos arquivos no celular do usuário.

2. Preparando o Terreno (No seu Computador)

Antes de abrir o Vercel, você precisa organizar o que eu gerei para você.

Crie uma Pasta: Dê o nome do projeto (ex: meu-app-incrivel).

Salve os Arquivos:

Crie o arquivo index.html e cole o código principal.

Crie o arquivo manifest.webmanifest e cole o JSON.

Crie o arquivo sw.js e cole o JavaScript do Service Worker.

A Pasta icons (Crucial para PWA):

Dentro da pasta do projeto, crie uma subpasta chamada icons.

Você precisa de duas imagens PNG quadradas (pode criar no Canva, Figma ou pedir para uma IA de imagem):

icon-192.png (192x192 pixels)

icon-512.png (512x512 pixels)

Estrutura Final da Pasta:

meu-app-incrivel/
├── index.html
├── manifest.webmanifest
├── sw.js
└── icons/
    ├── icon-192.png
    └── icon-512.png


3. Publicando no Vercel (O Método Profissional)

A melhor maneira de usar o Vercel é conectando-o ao GitHub. Isso cria um "túnel": sempre que você mudar um código no seu computador e subir para o GitHub, o Vercel atualiza o site sozinho.

Passo A: GitHub

Crie uma conta no GitHub.com.

Crie um Novo Repositório (botão "New").

Dê um nome e clique em "Create repository".

Clique em "Uploading an existing file".

Arraste todos os arquivos da sua pasta para lá e confirme ("Commit changes").

Passo B: Vercel

Crie uma conta no Vercel.com.

No painel, clique em "Add New..." -> "Project".

Selecione "Continue with GitHub".

Você verá a lista dos seus repositórios. Encontre o meu-app-incrivel e clique em Import.

A Mágica:

Em "Framework Preset", selecione Other (pois é HTML puro).

Clique em Deploy.

🎉 Pronto! Em 30 segundos, o Vercel te dará um link (ex: meu-app-incrivel.vercel.app).

4. O "Prompt Mestre" (Como pedir para a IA)

Para garantir que eu sempre gere o código pronto para essa estratégia, use este modelo de prompt na sua próxima ideia:

"Quero criar um app de [SUA IDEIA].
Requisitos Técnicos para Deploy no Vercel:

Projeto 100% estático (HTML/CSS/JS puros em um único index.html).

Design moderno e responsivo (Mobile First).

Persistência de dados usando LocalStorage.

Compatível com PWA (Gere também o manifest.webmanifest e o sw.js).

Separe os arquivos em blocos de código distintos."

5. Resumo da Estratégia de Atualização

Quando você quiser mudar algo no futuro:

Pede a alteração para mim aqui no Canvas.

Eu gero o código atualizado.

Você substitui o código no arquivo do seu computador.

Você sobe a atualização para o GitHub.

O Vercel detecta a mudança e atualiza o site sozinho.