export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["button_search.svg","favicon.png","Logo preta.svg","NavitIcons/Header/Perfil.png","NavitIcons/Header/Search.png","NavitIcons/Header/Search.svg","NavitIcons/SideBarMenu/1icone.svg","NavitIcons/SideBarMenu/2icone.svg","NavitIcons/SideBarMenu/3icone.svg","NavitIcons/SideBarMenu/4icone.svg","NavitIcons/SideBarMenu/5icone.svg","NavitIcons/SideBarMenu/6icone.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ec5f5ebd.js","app":"_app/immutable/entry/app.143ada16.js","imports":["_app/immutable/entry/start.ec5f5ebd.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.71e72b35.js","_app/immutable/entry/app.143ada16.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.03540c9f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Login",
				pattern: /^\/Login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Terapeuta/Configuracoes",
				pattern: /^\/Terapeuta\/Configuracoes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Terapeuta/TerapeutaHome",
				pattern: /^\/Terapeuta\/TerapeutaHome\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Terapeuta/TerapeutaProntuarioPaciente1",
				pattern: /^\/Terapeuta\/TerapeutaProntuarioPaciente1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Terapeuta/TerapeutaProntuarioPaciente2",
				pattern: /^\/Terapeuta\/TerapeutaProntuarioPaciente2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Terapeuta/TerapeutaProntuarioPaciente",
				pattern: /^\/Terapeuta\/TerapeutaProntuarioPaciente\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
