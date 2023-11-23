import { c as create_ssr_component } from "./ssr.js";
const HeaderProntuario_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Titulocentral.svelte-1j27tvs{color:#151515;font-family:Inter;font-size:24px;font-style:normal;font-weight:700;line-height:64px}.container.svelte-1j27tvs{display:inline-flex;justify-content:space-around;align-items:flex-start;margin-top:20px;gap:8px}.box.svelte-1j27tvs{display:flex;flex-direction:column;justify-content:center;align-items:center;width:160px;height:80px;background-color:#ffffff;border-radius:8px;padding:10px;margin:0 10px;box-sizing:border-box;border:none}.subtitulo1.svelte-1j27tvs,.subtitulo2.svelte-1j27tvs,.subtitulo3.svelte-1j27tvs,.subtitulo4.svelte-1j27tvs{color:var(--Black, #151515);font-family:Inter;font-size:18px;font-style:normal;font-weight:700;line-height:normal}.Texto.svelte-1j27tvs,.Texto1.svelte-1j27tvs,.Texto2.svelte-1j27tvs,.Texto3.svelte-1j27tvs{color:#666;font-family:Inter;font-size:12px;font-style:normal;font-weight:400;line-height:normal}",
  map: null
};
const HeaderProntuario = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<componente1 data-svelte-h="svelte-in68my"><div class="Titulocentral svelte-1j27tvs"><div><h1 class="Titulo">Bem Vindo, Lucas</h1></div></div> <div class="container svelte-1j27tvs"><div class="box svelte-1j27tvs"><h3 class="subtitulo1 svelte-1j27tvs">4</h3> <p class="Texto svelte-1j27tvs">Novos pacientes</p></div> <div class="box svelte-1j27tvs"><h3 class="subtitulo2 svelte-1j27tvs">30</h3> <p class="Texto1 svelte-1j27tvs">Em andamento</p></div> <div class="box svelte-1j27tvs"><h3 class="subtitulo3 svelte-1j27tvs">92</h3> <p class="Texto2 svelte-1j27tvs">Concluídos</p></div> <div class="box svelte-1j27tvs"><h3 class="subtitulo4 svelte-1j27tvs">122</h3> <p class="Texto3 svelte-1j27tvs">Total de pacientes</p></div></div> </componente1>`;
});
export {
  HeaderProntuario as H
};
