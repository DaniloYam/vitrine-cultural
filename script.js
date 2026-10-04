// Monta a página a partir do objeto DADOS (definido em dados.js).
// Quem usa o modelo não precisa editar este arquivo.

(function () {
  "use strict";

  const d = window.DADOS || DADOS;

  // Cria um elemento com classe e texto (sem usar innerHTML, para evitar
  // que textos digitados pelo usuário quebrem a página).
  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto) e.textContent = texto;
    return e;
  }

  // ---- Cor e título ----
  if (d.corPrincipal) {
    document.documentElement.style.setProperty("--cor", d.corPrincipal);
  }
  document.title = d.nome ? d.nome + " | " + (d.tipoDeArte || "Portfólio") : "Vitrine Cultural";

  // ---- Campos simples (nome, frase, cidade...) ----
  document.querySelectorAll("[data-campo]").forEach(function (e) {
    const valor = d[e.dataset.campo];
    if (valor) e.textContent = valor;
    else e.hidden = true;
  });

  // ---- Galeria com filtro por categoria ----
  const galeria = document.getElementById("galeria");
  const filtros = document.getElementById("filtros");
  const trabalhos = d.trabalhos || [];

  function linkWhatsapp(mensagem) {
    return "https://wa.me/" + d.whatsapp + "?text=" + encodeURIComponent(mensagem);
  }

  function desenharGaleria(categoria) {
    galeria.replaceChildren();
    trabalhos
      .filter(function (t) { return !categoria || t.categoria === categoria; })
      .forEach(function (t) {
        const card = el("article", "card");

        const botaoFoto = el("button", "card-foto");
        botaoFoto.setAttribute("aria-label", "Ampliar foto: " + t.titulo);
        const img = el("img");
        img.src = t.foto;
        img.alt = t.titulo;
        img.loading = "lazy";
        botaoFoto.appendChild(img);
        botaoFoto.addEventListener("click", function () { ampliar(t); });
        card.appendChild(botaoFoto);

        const corpo = el("div", "card-corpo");
        if (t.categoria) corpo.appendChild(el("span", "card-categoria", t.categoria));
        corpo.appendChild(el("h3", "", t.titulo));
        if (t.descricao) corpo.appendChild(el("p", "", t.descricao));
        if (t.preco) corpo.appendChild(el("p", "card-preco", t.preco));
        if (d.whatsapp) {
          const a = el("a", "botao botao-pequeno", "Tenho interesse");
          a.href = linkWhatsapp("Olá! Vi no site e tenho interesse em: " + t.titulo);
          a.target = "_blank";
          a.rel = "noopener";
          corpo.appendChild(a);
        }
        card.appendChild(corpo);
        galeria.appendChild(card);
      });
  }

  const categorias = [...new Set(trabalhos.map(function (t) { return t.categoria; }).filter(Boolean))];
  if (categorias.length > 1) {
    ["Todos"].concat(categorias).forEach(function (c, i) {
      const b = el("button", "filtro", c);
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        filtros.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        desenharGaleria(c === "Todos" ? null : c);
      });
      filtros.appendChild(b);
    });
  }
  desenharGaleria(null);

  // ---- Foto ampliada ----
  const dialogo = document.getElementById("ampliada");
  function ampliar(t) {
    document.getElementById("ampliada-img").src = t.foto;
    document.getElementById("ampliada-img").alt = t.titulo;
    document.getElementById("ampliada-legenda").textContent = t.titulo + (t.descricao ? " - " + t.descricao : "");
    dialogo.showModal();
  }
  document.getElementById("ampliada-fechar").addEventListener("click", function () { dialogo.close(); });
  dialogo.addEventListener("click", function (e) { if (e.target === dialogo) dialogo.close(); });

  // ---- Sobre ----
  const sobre = document.getElementById("sobre-texto");
  (d.sobre || []).forEach(function (p) { sobre.appendChild(el("p", "", p)); });
  if (!sobre.children.length) document.getElementById("sobre").hidden = true;

  // ---- Agenda (só eventos de hoje em diante) ----
  const lista = document.getElementById("lista-agenda");
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const eventos = (d.agenda || [])
    .map(function (ev) { return Object.assign({}, ev, { quando: new Date(ev.data + "T00:00:00") }); })
    .filter(function (ev) { return ev.quando >= hoje; })
    .sort(function (a, b) { return a.quando - b.quando; });

  eventos.forEach(function (ev) {
    const li = el("li", "evento");
    const data = el("div", "evento-data");
    data.appendChild(el("span", "evento-dia", String(ev.quando.getDate()).padStart(2, "0")));
    data.appendChild(el("span", "evento-mes", ev.quando.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "")));
    li.appendChild(data);
    const info = el("div");
    info.appendChild(el("h3", "", ev.titulo));
    info.appendChild(el("p", "", [ev.local, ev.horario].filter(Boolean).join(" · ")));
    li.appendChild(info);
    lista.appendChild(li);
  });
  if (!eventos.length) {
    document.getElementById("agenda").hidden = true;
    document.getElementById("link-agenda").hidden = true;
  }

  // ---- Contatos ----
  const contatos = document.getElementById("contatos");
  function contato(rotulo, texto, href) {
    const a = el("a", "contato");
    a.appendChild(el("span", "contato-rotulo", rotulo));
    a.appendChild(el("span", "contato-valor", texto));
    if (href) {
      a.href = href;
      if (href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    }
    contatos.appendChild(a);
  }
  if (d.whatsapp) contato("WhatsApp", "Enviar mensagem", linkWhatsapp("Olá! Vim pelo seu site."));
  if (d.instagram) contato("Instagram", "@" + d.instagram, "https://instagram.com/" + d.instagram);
  if (d.email) contato("E-mail", d.email, "mailto:" + d.email);
  if (d.endereco) contato("Onde", d.endereco, null);
})();
