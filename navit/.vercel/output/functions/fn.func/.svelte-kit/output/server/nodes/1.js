

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4bb3b549.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.03540c9f.js","_app/immutable/chunks/singletons.71e72b35.js"];
export const stylesheets = [];
export const fonts = [];
