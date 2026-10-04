/*
 * ============================================================
 *  VITRINE CULTURAL - ARQUIVO DE DADOS
 * ============================================================
 *  Este é o ÚNICO arquivo que você precisa editar.
 *  Troque os textos entre aspas pelos seus dados.
 *
 *  Regras simples:
 *   - Mantenha as aspas "assim" em volta dos textos.
 *   - Mantenha a vírgula no final de cada linha.
 *   - Se não quiser usar algum campo, deixe as aspas vazias: ""
 *
 *  Os dados abaixo são um EXEMPLO FICTÍCIO.
 * ============================================================
 */

const DADOS = {
  // --- Identificação ---------------------------------------
  nome: "Ateliê Barro Vivo",
  tipoDeArte: "Cerâmica artesanal feita à mão",
  cidade: "Assis - SP",
  frase: "Peças únicas de cerâmica, modeladas e queimadas no nosso ateliê.",

  // Cor principal do site (código de cor em formato #RRGGBB).
  // Sugestões: "#c2410c" (terracota), "#1d4ed8" (azul), "#15803d" (verde),
  //            "#7e22ce" (roxo), "#be123c" (vinho), "#0f766e" (turquesa)
  corPrincipal: "#c2410c",

  // --- Sobre -----------------------------------------------
  sobre: [
    "O Ateliê Barro Vivo nasceu do gosto pela argila e pelas técnicas tradicionais de cerâmica do interior paulista.",
    "Cada peça é modelada à mão, seca naturalmente e queimada em forno próprio. Por isso, nenhuma peça é igual à outra.",
    "Também oferecemos oficinas para quem quer aprender a modelar o barro pela primeira vez.",
  ],

  // --- Contatos --------------------------------------------
  // WhatsApp: só números, com 55 + DDD + número. Ex.: "5518999990000"
  whatsapp: "5518999990000",
  instagram: "ateliebarrovivo_exemplo", // sem o @
  email: "contato@exemplo.com",
  endereco: "Atendimento com hora marcada",

  // --- Trabalhos (galeria) ---------------------------------
  // Para adicionar um trabalho, copie um bloco { ... }, cole abaixo
  // e troque os dados. A foto deve estar dentro da pasta "imagens".
  trabalhos: [
    {
      titulo: "Vaso Terracota",
      categoria: "Decoração",
      descricao: "Vaso modelado à mão, 30 cm de altura, acabamento fosco.",
      preco: "R$ 120,00",
      foto: "imagens/vaso.svg",
    },
    {
      titulo: "Panela de Barro",
      categoria: "Cozinha",
      descricao: "Panela tradicional para cozimento lento, capacidade de 2 litros.",
      preco: "R$ 95,00",
      foto: "imagens/panela.svg",
    },
    {
      titulo: "Caneca Rústica",
      categoria: "Cozinha",
      descricao: "Caneca esmaltada de 300 ml, pode ir ao micro-ondas.",
      preco: "R$ 45,00",
      foto: "imagens/caneca.svg",
    },
    {
      titulo: "Prato Decorativo",
      categoria: "Decoração",
      descricao: "Prato de parede com pintura em círculos concêntricos.",
      preco: "R$ 70,00",
      foto: "imagens/prato.svg",
    },
    {
      titulo: "Luminária Furada",
      categoria: "Decoração",
      descricao: "Luminária de mesa que projeta pontos de luz na parede.",
      preco: "Sob encomenda",
      foto: "imagens/luminaria.svg",
    },
    {
      titulo: "Oficina de Torno",
      categoria: "Oficinas",
      descricao: "Aula introdutória de 3 horas, material incluso.",
      preco: "R$ 150,00 por pessoa",
      foto: "imagens/oficina.svg",
    },
  ],

  // --- Agenda (feiras, exposições, apresentações) ----------
  // Data no formato "AAAA-MM-DD". Eventos que já passaram somem sozinhos.
  agenda: [
    {
      data: "2026-11-14",
      titulo: "Feira de Artesanato da Praça",
      local: "Praça central - Assis/SP",
      horario: "9h às 15h",
    },
    {
      data: "2026-12-05",
      titulo: "Oficina aberta de modelagem",
      local: "Ateliê (vagas limitadas)",
      horario: "14h às 17h",
    },
  ],
};
