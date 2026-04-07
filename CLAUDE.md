# RIBS Prime - Cardápio Digital

## Sobre o Projeto
Site estático de cardápio digital para o restaurante **RIBS Prime**, uma casa de carnes defumadas localizada em Curitiba/PR. O site é usado pelos clientes no salão para visualizar o menu.

## Stack
- **HTML5** + **CSS3** + **JavaScript vanilla** (sem frameworks, sem build tools)
- QRCode.js via CDN para geração de QR codes
- Sem backend, sem banco de dados, sem gerenciador de pacotes

## Estrutura
```
RibsPrime/
├── index.html        # Página principal com todo o cardápio
├── styles.css        # Estilos (tema escuro, responsivo)
├── script.js         # Interatividade (QR code, etc.)
└── imagensRibs/      # Imagens dos pratos e logo
```

## Convenções e Regras

### Idioma
- Todo o conteúdo visível ao usuário deve ser em **português brasileiro (pt-BR)**.
- Comentários no código podem ser em português ou inglês.

### Estilo Visual
- Tema escuro com acentos em laranja/fogo (#f48432, #E87722).
- Layout responsivo com breakpoint principal em 768px.
- Cards de menu com imagem + texto + descrição.
- Manter a identidade visual de churrascaria premium/sofisticada.

### Ao editar o cardápio
- Preços sempre no formato brasileiro: `R$ XX,00`.
- Pesos entre parênteses quando aplicável: `(300g)`.
- Cada item do menu segue a estrutura: `<div class="menu-item">` com imagem e `<div class="menu-text">`.
- Manter as seções existentes: Seleção Premium, Seleção do Chef, Acompanhamentos, Bebidas.

### Imagens
- Salvar na pasta `imagensRibs/`.
- Usar formatos .jpg, .jpeg ou .png.
- Otimizar peso dos arquivos (evitar imagens acima de 2MB quando possível).

### Performance
- Não adicionar dependências externas desnecessárias.
- Manter o site leve e funcional - é acessado por celulares no restaurante.
- Sem frameworks CSS/JS pesados.

### Git
- Remote: `https://github.com/diegonms/RibsPrime.git`
- Branch principal: `main`
- Mensagens de commit em português.

## Como rodar
Abrir `index.html` diretamente no navegador ou servir com qualquer servidor HTTP estático.
