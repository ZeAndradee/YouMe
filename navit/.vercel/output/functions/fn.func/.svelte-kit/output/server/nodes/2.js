

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4a1d8137.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.03540c9f.js"];
export const stylesheets = [];
export const fonts = [];
