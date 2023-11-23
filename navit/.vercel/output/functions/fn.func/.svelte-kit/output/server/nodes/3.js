

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e1c31af8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.03540c9f.js"];
export const stylesheets = ["_app/immutable/assets/3.c113a4be.css"];
export const fonts = [];
