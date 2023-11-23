import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/Header.js";
import { S as SideBarMenuInicio } from "../../../../chunks/SideBarMenuInicio.js";
import "chart.js/auto";
const card1_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".card1.svelte-1ggsz3m{display:flex;width:288px;height:190px;margin-left:8%;padding:24px 24px 20px 22px;flex-direction:column;align-items:flex-start;gap:6px;border-radius:10px;background:#FDFDFD}.min-porcentagem.svelte-1ggsz3m{width:100%;display:flex;flex-direction:row;gap:10px}.tempo-semana.svelte-1ggsz3m{width:100%;display:flex;flex-direction:row}.box-hoje.svelte-1ggsz3m{width:52px;height:24px;border-radius:2px;padding:4px 8px;background:#F4F5F7;display:flex;flex-direction:column;justify-content:center;align-items:center}.txt-header-card.svelte-1ggsz3m{display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(163, 163, 163, 0.20)}",
  map: null
};
var TempoTotalSessao = "135";
var PorcentagemTTS = "1.5";
var MinComparado = "135.5";
var horasTTS = "8.25";
const Card1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="card1 svelte-1ggsz3m"><div class="txt-header-card svelte-1ggsz3m" data-svelte-h="svelte-1sivets"><span style="font-size: 18px; font-weight:500;">Tempo Total Sessão</span> <div class="box-hoje svelte-1ggsz3m"><span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span></div></div> <div class="min-porcentagem svelte-1ggsz3m"><span style="color: black;font-size: 28px; font-weight: 700;">${escape(TempoTotalSessao)} min</span> <span style="color: #FF2727; font-weight:500; margin-left:auto; margin-top:auto; padding-bottom: 3%;">↓ ${escape(PorcentagemTTS)}%</span></div> <div class="comparado-ao"><div style="display: flex; flex-direction: row; font-size: 14px"><span style="">Comparado aos <b style="color: #656575;">${escape(MinComparado)} min</b> de ontem</span></div></div> <div class="tempo-semana svelte-1ggsz3m"><span style="font-size: 14px; font-weight: 500" data-svelte-h="svelte-exejtd">Tempo última semana</span> <span style="margin-left: auto"><b style="font-size: 14px; font-weight: 600;">${escape(horasTTS)}h</b></span></div> </div>`;
});
const card2_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".card1.svelte-1r2rhca{display:flex;width:288px;height:190px;margin-left:8%;padding:24px 24px 20px 22px;flex-direction:column;align-items:flex-start;gap:6px;border-radius:10px;background:#FDFDFD}.Skill-Progresso.svelte-1r2rhca{width:100%;display:flex;flex-direction:row;gap:10px}.tempo-semana.svelte-1r2rhca{width:100%;display:flex;flex-direction:row}.box-hoje.svelte-1r2rhca{width:52px;height:24px;border-radius:2px;padding:4px 8px;background:#F4F5F7;display:flex;flex-direction:column;justify-content:center;align-items:center}.txt-header-card.svelte-1r2rhca{display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(163, 163, 163, 0.20)}",
  map: null
};
var SkillAprimorada = "Comunicação";
var PorcentagemPP = "2.5";
var SkillPassada = "Motora";
var SkillSemanaPassada = "Cognitivo";
const Card2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="card1 svelte-1r2rhca"><div class="txt-header-card svelte-1r2rhca" data-svelte-h="svelte-1yokjpb"><span style="font-size: 18px; font-weight:500;">Progresso Pacientes</span> <div class="box-hoje svelte-1r2rhca"><span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span></div></div> <div class="Skill-Progresso svelte-1r2rhca"><span style="color: black;font-size: 25px; font-weight: 700;">${escape(SkillAprimorada)}</span> <span style="color: #52C93F; font-weight:500; margin-left:auto; margin-top:auto; padding-bottom: 3%;">↑ ${escape(PorcentagemPP)}%</span></div> <div class="comparado-ao"><div style="display: flex; flex-direction: row; font-size: 14px"><span style="">Comparado a <b style="color: #656575;">${escape(SkillPassada)}</b> de ontem</span></div></div> <div class="tempo-semana svelte-1r2rhca"><span style="font-size: 14px; font-weight: 500" data-svelte-h="svelte-jq82go">Última semana</span> <span style="margin-left: auto"><b style="font-size: 14px; font-weight: 600;">${escape(SkillSemanaPassada)}</b></span></div> </div>`;
});
const card3_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".card3.svelte-12f3spw{display:flex;width:288px;height:360px;margin-left:8%;padding:24px 24px 20px 22px;flex-direction:column;align-items:flex-start;gap:6px;border-radius:10px;background:#FDFDFD}.grafico-status-pacientes.svelte-12f3spw{width:100%;display:flex;position:relative;justify-content:center}.legenda.svelte-12f3spw{margin-top:24px;width:100%;display:flex;flex-direction:column;justify-content:space-between;gap:8px}.leg1.svelte-12f3spw{width:100%;display:flex;flex-direction:row;align-items:center}.bola.svelte-12f3spw{height:16px;width:16px;background-color:#52C93F;border-radius:50%}.txt-header-card.svelte-12f3spw{display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;padding-bottom:12px}.box-hoje.svelte-12f3spw{width:52px;height:24px;border-radius:2px;padding:4px 8px;background:#F4F5F7;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
var NovoSP = 20;
var AndamentoSP = 54;
var FinalizadoSP = 26;
const Card3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css$5);
  return ` <div class="card3 svelte-12f3spw"><div class="txt-header-card svelte-12f3spw" data-svelte-h="svelte-sav547"><span style="font-size: 18px; font-weight:500;">Status Pacientes</span> <div class="box-hoje svelte-12f3spw"><span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span></div></div>  <div class="grafico-status-pacientes svelte-12f3spw"><canvas width="155px" height="155px"${add_attribute("this", canvas, 0)}></canvas></div> <div class="legenda svelte-12f3spw"><div class="leg1 svelte-12f3spw"><div class="bola svelte-12f3spw"></div> <span style="margin-left: 12px; color: black" data-svelte-h="svelte-1vpgdco">Novo</span> <span style="margin-left: auto; color: black">${escape(NovoSP)}% <span style="color: #52C93F; font-weight:700" data-svelte-h="svelte-1ve9vp5">↑</span></span></div> <div class="leg1 svelte-12f3spw"><div class="bola svelte-12f3spw" style="background-color: #006AFF;"></div> <span style="margin-left: 12px; color: black" data-svelte-h="svelte-3qy6nb">Andamento</span> <span style="margin-left: auto; color: black">${escape(AndamentoSP)}% <span style="color: #52C93F; font-weight:700" data-svelte-h="svelte-1ve9vp5">↑</span></span></div> <div class="leg1 svelte-12f3spw"><div class="bola svelte-12f3spw" style="background-color: #FF2727;"></div> <span style="margin-left: 12px; color: black" data-svelte-h="svelte-3w6857">Finalizado</span> <span style="margin-left: auto; color: black">${escape(FinalizadoSP)}% <span style="color: #FF2727; font-weight:700" data-svelte-h="svelte-v5ikh">↓</span></span></div></div> </div>`;
});
const estatisticasdiarias_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".background-div.svelte-vnkdqh{display:flex;flex-direction:column;height:100vh;width:344px;background:#F8F7F1}.div-txt.svelte-vnkdqh{display:flex;flex-direction:column;margin-top:32px;margin-bottom:18px}.txt.svelte-vnkdqh{margin-left:8%;font-size:20px;font-weight:500;color:#525256}.cards.svelte-vnkdqh{display:flex;flex-direction:column;gap:16px}",
  map: null
};
function primeiraLetraMaiuscula(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const Estatisticasdiarias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dataAtual = /* @__PURE__ */ new Date();
  let opcoesData = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  let opcoesHora = { hour: "2-digit", minute: "2-digit" };
  let dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesData);
  let horaFormatada = dataAtual.toLocaleTimeString("pt-BR", opcoesHora);
  let diaDaSemana = primeiraLetraMaiuscula(dataFormatada.split(",")[0]);
  diaDaSemana = diaDaSemana.replace(".", "");
  let restoDaData = dataFormatada.split(",")[1];
  dataFormatada = `${diaDaSemana},${restoDaData} ${horaFormatada}`;
  $$result.css.add(css$4);
  return `<div class="background-div svelte-vnkdqh"><div class="estatisticasDiarias"><div class="div-txt svelte-vnkdqh"><span class="txt svelte-vnkdqh" data-svelte-h="svelte-uzlfl5">Estatísticas Diárias</span> <span class="txt svelte-vnkdqh" style="font-size: 15px; color: #A3A3A3; font-weight: 400">${escape(dataFormatada)}</span></div> <div class="cards svelte-vnkdqh">${validate_component(Card1, "Card1").$$render($$result, {}, {}, {})} ${validate_component(Card2, "Card2").$$render($$result, {}, {}, {})} ${validate_component(Card3, "Card3").$$render($$result, {}, {}, {})}</div></div> </div>`;
});
const GraficoCliques_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".header-grafico.svelte-1pkd049{display:flex;flex-direction:row;align-items:center;margin-bottom:24px}.intervalo.svelte-1pkd049{margin-left:32px}.intervalo2.svelte-1pkd049{display:flex;align-items:center}.card-grafico.svelte-1pkd049{display:flex;flex-direction:column;width:100%;height:283px;background-color:white;border-radius:10px;padding:32px 28px 24px 28px;margin-left:28px;margin-top:28px;margin-right:48px}.valores-grafico.svelte-1pkd049{display:flex;flex-direction:row;align-items:center}.y-valores.svelte-1pkd049{display:flex;flex-direction:column;justify-content:space-between;margin-left:10px;margin-top:10px;gap:30px}.grafico.svelte-1pkd049{width:100%;height:100%;margin-right:58px}.canvas-grafico.svelte-1pkd049{margin-left:32px;display:flex;width:100%}@media(max-width: 1514px){.intervalo2.svelte-1pkd049{display:none}}",
  map: null
};
const GraficoCliques = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css$3);
  return `<div class="card-grafico svelte-1pkd049"><div class="header-grafico svelte-1pkd049" data-svelte-h="svelte-anm9dt"><div><div><span style="font-weight:600">Cliques Registrados</span></div></div> <div class="intervalo svelte-1pkd049"><span>2023 - Set 2023</span></div> <div style="margin-left: 8px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6L8 10L12 6" stroke="#656575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <div style="display:flex; flex-direction:row; align-items: center; margin-left:auto; margin-right: 28px; gap:32px"><div class="intervalo2 svelte-1pkd049"><div style="width: 10px; height: 10px; background-color: #006AFF; border-radius: 50%; margin-right:8px"></div> <span>Últimos 6 Meses</span></div> <div class="intervalo2 svelte-1pkd049"><div style="width: 10px; height: 10px; background-color: #656575; border-radius: 50%; margin-right:8px"></div> <span>Mesmo Periodo Ano Passado</span></div></div></div> <div><div class="valores-grafico svelte-1pkd049"><div class="y-valores svelte-1pkd049" data-svelte-h="svelte-1n678yx"><span>5000</span> <span>2500</span> <span>1000</span> <span>500</span></div> <div class="grafico svelte-1pkd049"><canvas class="canvas-grafico svelte-1pkd049" style="width: 100%; height: 100%;"${add_attribute("this", canvas, 0)}></canvas></div></div></div> </div>`;
});
const ListaPacientes_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".right-num.svelte-1ughz1e{margin-right:32px;font-size:12px}.card-pacientes.svelte-1ughz1e{display:flex;flex-direction:column;width:384px;background-color:white;padding:20px;margin-left:28px;margin-top:28px;border-radius:10px;margin-bottom:18px}.paciente.svelte-1ughz1e{height:56px;display:flex;flex-direction:row;align-items:center;border-bottom:2px solid #A3A3A340}.btn-paciente.svelte-1ughz1e{display:flex;padding:4px 16px;background-color:#2F85FE;border-radius:4px}",
  map: null
};
const ListaPacientes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pacientes = [
    "Adenair Ribeiro",
    "Cleber Pinheiro",
    "Vilma Nair",
    "Edivaldo Pereira",
    "Everton Sorriso",
    "Cláudia Machado",
    "Pedro Silveira"
  ];
  $$result.css.add(css$2);
  return `<div class="card-pacientes svelte-1ughz1e"><span style="font-weight:600" data-svelte-h="svelte-tkoixy">Pacientes</span> <ul>${each(pacientes, (paciente, i) => {
    return `<li><div class="paciente svelte-1ughz1e"><div class="right-num svelte-1ughz1e">${escape((i + 1).toString().padStart(2, "0"))}</div> <div style="display: flex; flex-direction:row; gap:12px"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="13" cy="13" r="12.5" fill="#F8F7F1"></circle><circle cx="13" cy="13" r="12.5" fill="url(#pattern0)"></circle><circle cx="13" cy="13" r="12.5" stroke="#F8F7F1"></circle><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_10_393" transform="translate(-0.00104384) scale(0.00208768)"></use></pattern></defs></svg> <div>${escape(paciente)}</div></div> <div style="margin-left: auto;" data-svelte-h="svelte-16l1hgq"><button class="btn-paciente svelte-1ughz1e"><label for="button" style="color: white; font-weight:400">Detalhes</label></button> </div></div> </li>`;
  })}</ul> </div>`;
});
const GraficoComportamento_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-grafico-comportamento.svelte-o549rg{display:flex;flex-direction:column;width:425px;background-color:white;padding:20px;margin-left:28px;margin-top:28px;border-radius:10px;margin-bottom:18px}.grafico.svelte-o549rg{width:100%;height:100%;margin-right:58px}",
  map: null
};
const GraficoComportamento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  $$result.css.add(css$1);
  return `<div class="card-grafico-comportamento svelte-o549rg"><span style="font-weight: 600; color: #1A1919" data-svelte-h="svelte-1o39g3n">Média Pacientes</span> <div class="grafico svelte-o549rg"><canvas${add_attribute("this", canvas, 0)}></canvas></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-l8awpc{display:flex;flex-direction:row;height:100%}.column.svelte-l8awpc{height:100vh;width:100%;display:flex;flex-direction:column}.row-inferior.svelte-l8awpc{height:100%;width:100%;display:flex;flex-direction:row}.sidebar.svelte-l8awpc{position:relative;display:flex;height:100vh}.estatisticas.svelte-l8awpc{height:100vh;position:relative;display:flex}.lista-pacientes.svelte-l8awpc{position:relative;display:flex}.grafico-comportamento.svelte-l8awpc{margin-left:auto;position:relative;display:flex;margin-right:43px}.header.svelte-l8awpc{position:relative;display:flex;margin-left:28px;margin-top:28px;flex-direction:row;margin-top:28px}.search-case.svelte-l8awpc{position:relative;width:100%}.grafico-cliques.svelte-l8awpc{position:relative;display:flex}@media(max-width: 1493px){.row-inferior.svelte-l8awpc{flex-direction:column}.grafico-comportamento.svelte-l8awpc{margin-left:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="row svelte-l8awpc"><div class="sidebar svelte-l8awpc">${validate_component(SideBarMenuInicio, "SideBarMenuInicio").$$render($$result, {}, {}, {})}</div> <div class="estatisticas svelte-l8awpc">${validate_component(Estatisticasdiarias, "EstatisticasDiarias").$$render($$result, {}, {}, {})}</div> <div class="column svelte-l8awpc"><div class="header svelte-l8awpc"><div class="search-case svelte-l8awpc">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div></div> <div class="grafico-cliques svelte-l8awpc">${validate_component(GraficoCliques, "GraficoCliques").$$render($$result, {}, {}, {})}</div> <div class="row-inferior svelte-l8awpc"><div class="lista-pacientes svelte-l8awpc">${validate_component(ListaPacientes, "ListaPacientes").$$render($$result, {}, {}, {})}</div> <div class="grafico-comportamento svelte-l8awpc">${validate_component(GraficoComportamento, "GraficoComportamento").$$render($$result, {}, {}, {})}</div></div></div> </div>`;
});
export {
  Page as default
};
