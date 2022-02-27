---
title: Quando utilizar Geração Estática vs Renderização pelo Servidor
date: '2020-01-02'
visible: 'true'
---


Recomendamos usar a **Geração Estática** (com ou sem dados) sempre que possível, já que sua página pode ser construída uma única vez e então entregue pelo CDN, o que é mais rápido que deixar um Servidor para renderizar a página a cada requisição.


Você pode usar Geração estática para diversos tipos de páginas, incluindo:

- Páginas de Marketing

- Posts de Blogs

- Listagem de produtos de E-commerce

- Documentação e ajuda

Você deve se perguntar: "Eu posso gerar essa página **previamente**, antes do usuário fazer qualquer requisição?" Se a resposta for sim, você deve optar pela Geração Estática.

Por outro lado, a Geração Estática **não é** uma boa ideia se não se pode gerar a página antes de uma requisição do usuário. Talvez sua página exiba dados frequentemente atualizados e o conteúdo da página seja alterado a cada requisição.

Nesse caso, a melhor opção é a **Renderização pelo Servidor**. Será mais lento, mas a página pre-gerada vai sempre estar corretamente atualizada. Ou você ainda pode pular a pre-geração e usar JavaScript pelo Usuário para preencher as informações desejadas.

Tradução cortesia de **Tyo_Drak**