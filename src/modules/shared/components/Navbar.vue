<template>
	<div>
		<!-- <router-link to="/">Pokemon list </router-link>
		<router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
			>Pokemon id
		</router-link>
		<router-link to="/about">About </router-link> -->
		<custom-link
			v-for="link in links"
			:key="link.to"
			:link="link"
		></custom-link>
	</div>
</template>

<script>
	import { defineAsyncComponent } from '@vue/runtime-core';

	export default {
		data() {
			return {
				links: [
					{ to: '/', name: 'Pokemons' },
					{ to: '/pokemonid/50', name: 'Por id' },
					{ to: '/about', name: 'About' },
					{ to: 'https://google.com', name: 'Google' },
				],
			};
		},
		components: {
			CustomLink: defineAsyncComponent(() => import('./CustomLink.vue')),
		},
	};
</script>

<style scoped>
	div {
		padding: 0 30px;
	}

	div a {
		font-weight: bold;
		color: #2c3e50;
		margin: 0 10px;
		text-decoration: none;
	}
</style>
