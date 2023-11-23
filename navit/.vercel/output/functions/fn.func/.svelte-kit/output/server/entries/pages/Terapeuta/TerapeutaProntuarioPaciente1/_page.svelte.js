import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { H as HeaderProntuario } from "../../../../chunks/HeaderProntuario.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HeaderProntuario, "HeaderProntuario").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
