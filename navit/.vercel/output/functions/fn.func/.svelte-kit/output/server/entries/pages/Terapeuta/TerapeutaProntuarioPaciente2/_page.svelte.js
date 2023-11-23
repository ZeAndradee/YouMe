import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as SideBarMenuInicio } from "../../../../chunks/SideBarMenuInicio.js";
import { H as HeaderProntuario } from "../../../../chunks/HeaderProntuario.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="header_pesquisa">${validate_component(HeaderProntuario, "HeaderProntuario").$$render($$result, {}, {}, {})}</div> <div class="sidebar">${validate_component(SideBarMenuInicio, "SideBarMenuInicio").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
