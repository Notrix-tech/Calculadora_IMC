# IMC Pro | Calculadora Inteligente

Aplicacao web para calculo de IMC (Indice de Massa Corporal) com interface moderna, validacao de dados e exibicao de classificacao com recomendacoes.

## Visao geral

Este projeto foi refatorado para ter uma estrutura mais profissional e pronta para evolucao comercial:

- Interface responsiva e moderna
- Validacao robusta de campos (altura e peso)
- Suporte a entrada com virgula ou ponto decimal
- Exibicao de classificacao IMC por categoria
- Calculo da faixa de peso saudavel
- Feedback amigavel para erros de preenchimento

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fonte Google Fonts (`Inter`)

## Estrutura do projeto

```text
Calculadora_IMC/
├── IMC/
│   ├── index.html
│   ├── css/
│   │   └── index.css
│   ├── scripts/
│   │   └── index.js
│   └── img/
└── README.md
```

## Como executar localmente

Como e um projeto estatico, voce pode executar de duas formas:

1. Abrir o arquivo `IMC/index.html` diretamente no navegador
2. Servir com um servidor local (recomendado), por exemplo:

```bash
cd IMC
python3 -m http.server 8080
```

Depois acesse: [http://localhost:8080](http://localhost:8080)

## Como usar

1. Informe a altura em metros (ex.: `1,70` ou `1.70`)
2. Informe o peso em kg (ex.: `72,5` ou `72.5`)
3. Clique em **Calcular IMC**
4. Veja:
   - valor do IMC
   - classificacao
   - faixa de peso saudavel
   - recomendacao geral

## Regras de validacao atuais

- Altura obrigatoria e entre `0.50` e `2.60` metros
- Peso obrigatorio e entre `15` e `350` kg
- Entradas invalidas exibem mensagem clara ao usuario

## Logica de classificacao IMC

- Menor que 18.5: Baixo peso
- 18.5 a 24.9: Peso normal
- 25.0 a 29.9: Sobrepeso
- 30.0 a 34.9: Obesidade grau I
- 35.0 a 39.9: Obesidade grau II
- 40.0 ou mais: Obesidade grau III

## Customizacao rapida

- Textos e estrutura: `IMC/index.html`
- Tema visual e responsividade: `IMC/css/index.css`
- Regras de negocio e validacao: `IMC/scripts/index.js`

## Roadmap sugerido (produto vendavel)

- [ ] Adicionar identidade visual da marca (logo, cores e copy)
- [ ] Publicar como PWA (instalavel no celular)
- [ ] Salvar historico local de resultados
- [ ] Exportar relatorio em PDF
- [ ] Integrar analytics e funil de conversao
- [ ] Criar landing page comercial e CTA

## Licenca

Voce pode definir a licenca conforme seu modelo de negocio.
Se quiser liberar como open source, uma opcao comum e a licenca MIT.
