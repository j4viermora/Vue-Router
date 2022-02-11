import { createRouter, createWebHashHistory } from 'vue-router';

// import AboutPage from '@/modules/pokemon/pages/AboutPage.vue';
// import ListPage from '@/modules/pokemon/pages/ListPage.vue';
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue';
import NoPageFound from '@/modules/shared/NoPageFound.vue';

const routes = [
	// {
	// 	path: '/',
	// 	redirect: '/home',
	// },
	// {
	// 	name: 'home',
	// 	path: '/home',
	// 	component: () =>
	// 		import(
	// 			/* webpackChunkName: 'List page' */ '@/modules/pokemon/pages/ListPage'
	// 		),
	// },
	// {
	// 	path: '/about',
	// 	component: () =>
	// 		import(
	// 			/* webpackChunkName: 'aboutPage' */ '@/modules/pokemon/pages/AboutPage'
	// 		),
	// },
	// {
	// 	name: 'pokemon-id',
	// 	path: '/pokemonid/:id',
	// 	component: () =>
	// 		/* webpackChunkName: 'Pkemon page' */ import(
	// 			'@/modules/pokemon/pages/PokemonPage'
	// 		),
	// 	props: ({ params: { id } }) => {
	// 		const idParsed = Number(id);
	// 		return isNaN(idParsed) ? { id: 1 } : { id: idParsed };
	// 	},
	// },
	{
		path: '/:pathMatch(.*)*',
		// component: NoPageFound,
		redirect: '/home',
	},
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});

export default router;
