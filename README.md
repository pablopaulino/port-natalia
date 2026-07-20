# Nath na Festa — site profissional

Site institucional de Natália Quatrina, jornalista, influenciadora, comunicadora e apresentadora de eventos. O projeto foi pensado para apresentar o trabalho do **Nath na Festa**, fortalecer a presença profissional da marca e facilitar pedidos de orçamento por organizadores de eventos, marcas e patrocinadores.

## Objetivo do site

O site funciona como uma landing page comercial para quem está procurando:

- influenciadora para eventos;
- comunicadora para rodeios, festas e shows;
- apresentadora de eventos;
- cobertura de festas, exposições e eventos culturais;
- criação de conteúdo para marcas e patrocinadores;
- entrevistas, bastidores, vídeos verticais e divulgação no Instagram.

A comunicação foi construída para unir credibilidade jornalística, presença digital e conversão via WhatsApp.

## Estrutura do projeto

```text
.
├── index.html
├── robots.txt
└── src
    ├── css
    │   ├── reset.css
    │   ├── responsive.css
    │   └── styles.css
    ├── images
    │   ├── favicon.png
    │   ├── foto.png
    │   ├── fotoinicio.png
    │   └── logo.png
    └── js
        └── menu.js
```

## Principais seções

### Início

Apresenta Natália Quatrina como influenciadora, comunicadora e apresentadora de eventos, com chamada direta para contratação via WhatsApp.

### Sobre

Conta a trajetória profissional: jornalismo, rádio, assessoria de imprensa, televisão, jornal impresso e criação do Nath na Festa em 2021.

### Serviços

Mostra as frentes principais de atuação:

- cobertura e apresentação;
- influência para marcas;
- produção audiovisual.

### Trabalhos

Exibe vídeos incorporados do YouTube para demonstrar coberturas, entrevistas e bastidores.

### Organizadores

Seção criada para conversão e SEO, com linguagem voltada para quem contrata atrações, comunicadores ou influenciadores para eventos. Inclui:

- benefícios por fase do evento: pré-evento, durante e pós-evento;
- checklist de necessidades do organizador;
- palavras-chave comerciais;
- perguntas frequentes;
- chamada para pedir proposta no WhatsApp.

### Contato

Formulário que direciona o visitante para o WhatsApp com informações básicas sobre o evento.

## SEO aplicado

O projeto já inclui práticas importantes de SEO on-page:

- `<title>` com intenção comercial;
- meta description focada em contratação;
- tags Open Graph e Twitter Card;
- texto visível com palavras-chave naturais;
- FAQ visível na página;
- dados estruturados JSON-LD com `Person`, `ProfessionalService`, `ProfilePage` e `FAQPage`;
- `robots.txt` permitindo indexação;
- imagens com textos alternativos descritivos;
- estrutura semântica em HTML.

## Palavras-chave trabalhadas

Alguns termos usados estrategicamente no conteúdo:

- Natália Quatrina;
- Nath na Festa;
- influenciadora para eventos;
- comunicadora para eventos;
- apresentadora de eventos;
- cobertura de eventos;
- divulgação de eventos;
- festas do peão;
- rodeios;
- shows;
- conteúdo para marcas;
- conteúdo para patrocinadores;
- noroeste paulista;
- Urânia, São Paulo.

## Próximos passos recomendados para SEO

Quando o domínio público definitivo estiver configurado, completar:

1. Adicionar URL canônica no `index.html`:

   ```html
   <link rel="canonical" href="https://dominio-do-site.com/">
   ```

2. Usar URLs absolutas nas imagens de compartilhamento:

   ```html
   <meta property="og:image" content="https://dominio-do-site.com/src/images/fotoinicio.png">
   ```

3. Criar `sitemap.xml` com a URL real do site.

4. Adicionar o sitemap ao `robots.txt`:

   ```text
   Sitemap: https://dominio-do-site.com/sitemap.xml
   ```

5. Cadastrar o domínio no Google Search Console.

6. Solicitar indexação da página inicial.

7. Criar ou atualizar o Perfil da Empresa no Google, se fizer sentido para a estratégia local.

## Como atualizar conteúdo

### Alterar textos

Edite o arquivo `index.html`. As principais áreas são identificadas pelos IDs:

- `#inicio`
- `#sobre`
- `#servicos`
- `#trabalhos`
- `#organizadores`
- `#contato`

### Alterar estilos

- `src/css/styles.css`: estilos principais do desktop e componentes gerais.
- `src/css/responsive.css`: ajustes para tablet e smartphone.
- `src/css/reset.css`: base visual e variáveis globais.

### Alterar vídeos

No bloco `#trabalhos`, substitua o ID do vídeo dentro do `iframe` do YouTube:

```html
<iframe src="https://www.youtube.com/embed/ID_DO_VIDEO?rel=0"></iframe>
```

### Alterar WhatsApp

Os links usam o formato:

```text
https://wa.me/5517997639292?text=Mensagem%20codificada
```

Se o número ou a mensagem mudar, atualize todos os CTAs no `index.html`.

## Boas práticas antes de publicar novas mudanças

Antes de publicar alterações, conferir:

- se os links do WhatsApp abrem corretamente;
- se os vídeos carregam;
- se o menu mobile abre e fecha;
- se os botões estão fáceis de tocar no celular;
- se o texto continua verdadeiro e sem promessas exageradas;
- se novas imagens têm `alt` descritivo;
- se a página continua leve e rápida.

## Publicação

O repositório está preparado como site estático. Ele pode ser publicado em serviços como GitHub Pages, Netlify, Vercel ou outro hosting estático.

Para GitHub Pages, a configuração comum é:

- Source: `Deploy from a branch`;
- Branch: `main`;
- Folder: `/root`.

Depois da publicação, use a URL final para completar canonical, sitemap e Search Console.

## Contatos usados no site

- WhatsApp: `+55 17 99763-9292`
- E-mail: `nathnafesta@hotmail.com`
- Instagram: <https://www.instagram.com/nathnafesta>
- YouTube: <https://www.youtube.com/@nathnafesta>
- Linktree: <https://linktr.ee/nathnafesta>

## Observações importantes

- Não inserir endereço residencial ou dados sensíveis no site.
- Evitar números de seguidores, alcance ou eventos atendidos sem confirmação atualizada.
- Usar depoimentos e cases reais quando estiverem disponíveis.
- Manter a linguagem profissional, direta e acolhedora, sempre voltada para organizadores de eventos e marcas.
