# Formulário Personalizado para Clínica de Estética

Este projeto consiste em um **formulário web personalizado** desenvolvido para uma clínica de estética, com o objetivo de ser enviado para as clientes via WhatsApp. Ele permite que as clientes preencham informações, leiam e autorizem os termos de consentimento relacionados ao serviço agendado. O formulário está conectado ao **Google Sheets**, para armazenar todas as respostas de maneira organizada.

---

## Funcionalidades

- **Formulário único para 4 serviços**  
  Um único código HTML, CSS e JavaScript serve para todos os serviços. O link enviado para a cliente contém um **parâmetro indicando o serviço**, que ajusta automaticamente o conteúdo do formulário.

- **Termos de consentimento interativos**  
  Dependendo do serviço selecionado, a cliente lê os termos correspondentes e marca um checkbox confirmando sua autorização.

- **Campos condicionais**  
  Algumas perguntas possuem campos adicionais que aparecem apenas se a cliente selecionar certas respostas (ex: "Sim" abre um input para detalhes).

- **Suporte a múltiplos idiomas**  
  O formulário pode ser exibido em português, inglês ou espanhol, ajustando textos e placeholders dinamicamente.

- **Integração com Google Sheets**  
  Todas as respostas são enviadas automaticamente para uma planilha do Google Sheets, permitindo controle e organização dos dados sem necessidade de backend adicional.

- **Compatível com dispositivos móveis**  
  O formulário foi desenvolvido para ser responsivo, garantindo boa experiência em smartphones e tablets — ideal para envio via WhatsApp.

---

## Tecnologias Utilizadas

- **HTML5** – estrutura do formulário  
- **CSS3** – estilização e responsividade  
- **JavaScript** – manipulação de DOM, campos condicionais e suporte a múltiplos idiomas  
- **Google Sheets + Google Apps Script** – armazenamento das respostas e envio automático

---

## Como funciona

1. **Envio do link via WhatsApp**  
   A clínica envia o link do formulário para a cliente, incluindo um parâmetro indicando o serviço agendado.

2. **Exibição dinâmica do formulário**  
   O formulário ajusta automaticamente os termos e perguntas de acordo com o serviço selecionado e o idioma escolhido.

3. **Preenchimento e autorização**  
   A cliente preenche os dados, aceita os termos de consentimento e envia o formulário.

4. **Armazenamento no Google Sheets**  
   Todas as respostas são registradas em tempo real em uma planilha do Google Sheets, permitindo controle rápido e seguro.

---

## Estrutura do Projeto

/formulario-clinica
│
├── .vercel/ # Configurações da Vercel
├── api/
│ └── sendForm.js # Endpoint para envio do formulário
├── .gitignore # Arquivos ignorados pelo Git
├── favicon.ico # Ícone do site
├── index.html # Estrutura do formulário
├── logo.webp # Logo da clínica
└── README.md # Documentação do projeto


---

## Personalização

- Para adicionar ou alterar serviços, basta ajustar os parâmetros no código JavaScript e atualizar os textos dos termos.
- Para tradução para outros idiomas, é possível adicionar novos valores no objeto de placeholders e opções de idioma.
- Os campos condicionais podem ser facilmente adicionados duplicando a lógica existente no script.

---

## Observações

- Este formulário **não requer backend próprio**, utilizando apenas HTML, CSS, JavaScript e integração com Google Sheets via Apps Script.
- Ideal para envio rápido via WhatsApp ou e-mail.
- Pode ser reutilizado para múltiplas clientes ou serviços sem alterar a estrutura principal do código.

---

## Autor

**André Luiz Gomes Pêgas**  
Desenvolvedor Full Stack / Web Designer
Criador do formulário personalizado para a clínica de estética GahCo.Beauty

