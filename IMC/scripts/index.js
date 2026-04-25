const form = document.getElementById("imc-form");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const feedback = document.getElementById("feedback");
const resultCard = document.getElementById("result-card");
const classificationEl = document.getElementById("classification");
const imcValueEl = document.getElementById("imc-value");
const idealRangeEl = document.getElementById("ideal-range");
const recommendationEl = document.getElementById("recommendation");

const categories = [
  {
    max: 18.49,
    label: "Baixo peso",
    recommendation: "Aumentar massa magra com orientacao profissional pode melhorar saude e energia no dia a dia."
  },
  {
    max: 24.9,
    label: "Peso normal",
    recommendation: "Seu indice esta equilibrado. Mantenha boa alimentacao, hidratacao e rotina ativa."
  },
  {
    max: 29.9,
    label: "Sobrepeso",
    recommendation: "Pequenos ajustes em alimentacao e atividade fisica regular ajudam a reduzir riscos futuros."
  },
  {
    max: 34.9,
    label: "Obesidade grau I",
    recommendation: "Vale buscar acompanhamento profissional para plano de saude gradual e sustentavel."
  },
  {
    max: 39.9,
    label: "Obesidade grau II",
    recommendation: "Recomendado acompanhamento medico e nutricional para reduzir riscos cardiometabolicos."
  },
  {
    max: Number.POSITIVE_INFINITY,
    label: "Obesidade grau III",
    recommendation: "Busque suporte medico especializado para estrategia de saude e seguranca no tratamento."
  }
];

const normalizeDecimal = (value) => value.replace(",", ".").trim();

const parseNumber = (value) => {
  const parsed = Number.parseFloat(normalizeDecimal(value));
  return Number.isFinite(parsed) ? parsed : null;
};

const getValidationError = (altura, peso) => {
  if (!altura || !peso) return "Preencha altura e peso para calcular.";
  if (altura < 0.5 || altura > 2.6) return "Informe uma altura valida entre 0,50m e 2,60m.";
  if (peso < 15 || peso > 350) return "Informe um peso valido entre 15kg e 350kg.";
  return null;
};

const classifyImc = (imc) => categories.find((item) => imc <= item.max);

const formatNumber = (value) => value.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const calculateHealthyRange = (altura) => {
  const min = 18.5 * altura * altura;
  const max = 24.9 * altura * altura;
  return `${formatNumber(min)} kg - ${formatNumber(max)} kg`;
};

const clearFeedback = () => {
  feedback.textContent = "";
};

const showError = (message) => {
  feedback.textContent = message;
  resultCard.classList.add("hidden");
};

const showResult = ({ imc, classification, healthyRange }) => {
  classificationEl.textContent = classification.label;
  imcValueEl.textContent = formatNumber(imc);
  idealRangeEl.textContent = healthyRange;
  recommendationEl.textContent = classification.recommendation;
  clearFeedback();
  resultCard.classList.remove("hidden");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const altura = parseNumber(alturaInput.value);
  const peso = parseNumber(pesoInput.value);
  const validationError = getValidationError(altura, peso);

  if (validationError) {
    showError(validationError);
    return;
  }

  const imc = peso / (altura * altura);
  const classification = classifyImc(imc);

  showResult({
    imc,
    classification,
    healthyRange: calculateHealthyRange(altura)
  });
});

form.addEventListener("reset", () => {
  setTimeout(() => {
    clearFeedback();
    resultCard.classList.add("hidden");
  }, 0);
});