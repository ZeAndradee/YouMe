import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
const photo = "/_app/immutable/assets/imgpaciente.99234501.svg";
const trespontinhos = "/_app/immutable/assets/trespontinhos.9c1f8daa.svg";
const headerpaciente_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@import url('https://rsms.me/inter/inter.css');.headerpaciente{width:618px;height:79px}.caixa-paciente.svelte-1cl9wq7.svelte-1cl9wq7{display:flex;width:618px;height:79px;border-radius:10px;background-color:#FFFFFF}.foto-paciente.svelte-1cl9wq7 img.svelte-1cl9wq7{display:absolute;width:60px;height:60px;top:-10.732px;border-radius:50%;margin-top:8px;margin-bottom:11px;margin-left:20px}.nome-paciente.svelte-1cl9wq7.svelte-1cl9wq7{display:absolute;width:153px;height:24px;margin-bottom:36px;margin-top:19px;margin-left:10px;top:0.268px;color:#2C2929;font-family:Inter;font-size:20px;font-style:normal;font-weight:700;line-height:normal}.paciente-ref.svelte-1cl9wq7.svelte-1cl9wq7{display:absolute;width:144px;height:11.402px;margin-top:-30px;margin-bottom:5px;margin-left:10px;flex-direction:column;flex-shrink:0;color:#555;font-family:Inter;font-size:14px;font-style:normal;font-weight:500;line-height:normal}.imagem.svelte-1cl9wq7.svelte-1cl9wq7{display:absolute;margin-left:309px;margin-top:19px;margin-bottom:auto}",
  map: null
};
const Headerpaciente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<body data-svelte-h="svelte-zlx97f"><div class="caixa-paciente svelte-1cl9wq7"><div class="foto-paciente svelte-1cl9wq7"><img${add_attribute("src", photo, 0)} alt="foto do paciente do prontuário correspondente" class="svelte-1cl9wq7"></div> <div><p class="nome-paciente svelte-1cl9wq7">João Monero</p> <p class="paciente-ref svelte-1cl9wq7">Paciente</p></div> <img${add_attribute("src", trespontinhos, 0)} alt="" class="imagem svelte-1cl9wq7"></div> </body>`;
});
const infoPaciente_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@import url('https://rsms.me/inter/inter.css');.container.svelte-bt7ut1{position:flex;width:618px;height:162px;flex-shrink:0;background-color:#FFFFFF;border-radius:10px;align-items:center;padding:20px}.id.svelte-bt7ut1{position:absolute;width:147px;height:12px;justify-content:center;flex-shrink:0;color:#4B4B4B;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:18px}.num-id.svelte-bt7ut1{position:absolute;width:193px;height:17px;color:#000;font-family:'Inter';font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-top:40px;margin-left:18px}.nascimento.svelte-bt7ut1{position:absolute;width:146.203px;height:12px;justify-content:start;color:#4B4B4B;font-family:'Inter';font-size:14px;font-style:normal;font-weight:600;line-height:normal;flex-shrink:0;margin-left:18px;margin-top:75px}.data-nasci.svelte-bt7ut1{position:absolute;width:79px;height:17px;color:#000;font-family:'Inter';font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-top:100px;margin-left:18px}.gen.svelte-bt7ut1{position:absolute;width:147px;height:12px;flex-direction:column;flex-shrink:0;color:#4B4B4B;font-family:'Inter';font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:268px}.fem.svelte-bt7ut1{position:absolute;width:70px;height:17px;color:#000;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-top:40px;margin-left:268px}.random.svelte-bt7ut1{position:absolute;width:147px;height:12px;flex-shrink:0;color:#4B4B4B;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-top:75px;margin-left:268px}.randomdata.svelte-bt7ut1{position:absolute;color:#000;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-top:100px;margin-left:268px}.primsessao.svelte-bt7ut1{position:absolute;width:147px;height:12px;flex-direction:column;justify-content:center;flex-shrink:0;color:#4B4B4B;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:450px}.primsessao-data.svelte-bt7ut1{position:absolute;color:#000;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:450px;margin-top:40px}.ultsessao.svelte-bt7ut1{position:absolute;width:147px;height:12px;flex-direction:column;justify-content:center;flex-shrink:0;color:#4B4B4B;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:450px;margin-top:75px}.ultsessao-data.svelte-bt7ut1{position:absolute;color:#000;font-family:Inter;font-size:14px;font-style:normal;font-weight:600;line-height:normal;margin-left:450px;margin-top:100px}",
  map: null
};
const InfoPaciente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<body data-svelte-h="svelte-1hppr4b"><div class="container svelte-bt7ut1"><p class="id svelte-bt7ut1">ID</p> <p class="num-id svelte-bt7ut1">q7h3dauolwft7qyi3kb5bbhn</p> <p class="nascimento svelte-bt7ut1">Data de nascimento</p> <p class="data-nasci svelte-bt7ut1">12/05/2004</p> <p class="gen svelte-bt7ut1">Gênero</p> <p class="fem svelte-bt7ut1">Feminino</p> <p class="random svelte-bt7ut1">Data Qualquer</p> <p class="randomdata svelte-bt7ut1">07/03/2023</p> <p class="primsessao svelte-bt7ut1">Primeira Sessão</p> <p class="primsessao-data svelte-bt7ut1">15/05/2023</p> <p class="ultsessao svelte-bt7ut1">Ultima Sessão</p> <p class="ultsessao-data svelte-bt7ut1">20/10/2023</p></div> </body>`;
});
const cardtemptela_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card1.svelte-173iis0{display:flex;width:288px;height:190px;margin-left:8%;padding:24px 24px 20px 22px;flex-direction:column;align-items:flex-start;gap:6px;border-radius:10px;background:#fdfdfd}.min-porcentagem.svelte-173iis0{width:100%;display:flex;flex-direction:row;gap:10px}.tempo-semana.svelte-173iis0{width:100%;display:flex;flex-direction:row}.box-hoje.svelte-173iis0{width:52px;height:24px;border-radius:2px;padding:4px 8px;background:#f4f5f7;display:flex;flex-direction:column;justify-content:center;align-items:center}.txt-header-card.svelte-173iis0{display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(163, 163, 163, 0.2)}",
  map: null
};
var TempodeTela = "35";
var PorcentagemTTS = "1.5";
var MinComparado = "135.5";
var horasTTS = "8.25";
const Cardtemptela = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="card1 svelte-173iis0"><div class="txt-header-card svelte-173iis0" data-svelte-h="svelte-1bra48b"><span style="font-size: 18px; font-weight:500;">Tempo de Tela</span> <div class="box-hoje svelte-173iis0"><span style="font-size: 14px; font-weight: 400; color: #656575">Hoje</span></div></div> <div class="min-porcentagem svelte-173iis0"><span style="color: black;font-size: 28px; font-weight: 700;">${escape(TempodeTela)} min</span> <span style="color: #FF2727; font-weight:500; margin-left:auto; margin-top:auto; padding-bottom: 3%;">↓ ${escape(PorcentagemTTS)}%</span></div> <div class="comparado-ao"><div style="display: flex; flex-direction: row; font-size: 14px"><span style="">Comparado aos <b style="color: #656575;">${escape(MinComparado)} min</b> de ontem</span></div></div> <div class="tempo-semana svelte-173iis0"><span style="font-size: 14px; font-weight: 500" data-svelte-h="svelte-exejtd">Tempo última semana</span> <span style="margin-left: auto"><b style="font-size: 14px; font-weight: 600;">${escape(horasTTS)}h</b></span></div> </div>`;
});
const cardbotaoutilizado_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".caixa_centro.svelte-1yeq25c{align-items:center}.hp.svelte-1yeq25c{margin-left:295px;margin-top:126px}.infop.svelte-1yeq25c{margin-left:295px;margin-top:17px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="caixa_centro svelte-1yeq25c"><div class="hp svelte-1yeq25c">${validate_component(Headerpaciente, "Headerpaciente").$$render($$result, {}, {}, {})}</div> <div class="infop svelte-1yeq25c">${validate_component(InfoPaciente, "InfoPaciente").$$render($$result, {}, {}, {})}</div> <div class="cardtempo svelte-1yeq25c">${validate_component(Cardtemptela, "Cardtemptela").$$render($$result, {}, {}, {})}</div></div> `;
});
export {
  Page as default
};
