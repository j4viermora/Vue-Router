<template>
	<h2>
		Pokemon page <span v-if="pokemon">{{ id }}</span>
	</h2>
	<div v-if="pokemon">
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
	</div>
</template>
<script>
	export default {
		props: {
			id: {
				type: Number,
				required: true,
			},
		},

		data() {
			return {
				pokemon: null,
			};
		},
		created() {
			this.getPokemon();
		},
		methods: {
			async getPokemon() {
				try {
					const url = 'https://pokeapi.co/api/v2';
					const resp = await fetch(`${url}/pokemon/${this.id}`);
					const pokemon = await resp.json();
					this.pokemon = pokemon;
					console.log(pokemon);
				} catch (error) {
					this.$router.push('/');
				}
			},
		},

		watch: {
			id() {
				this.getPokemon();
			},
		},
	};
</script>
