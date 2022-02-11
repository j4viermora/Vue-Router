<template>
	<h2>About</h2>
	<hr />
	<h2>{{ name }}</h2>
	<button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
	export default {
		data() {
			return {
				name: 'Javier',
			};
		},
		methods: {
			onChangeName() {
				this.name = 'Miguel';
				console.log('se cambia el nombre a miguel');
			},
		},
		beforeCreate() {
			console.log('beforeCreate');
		},
		created() {
			console.log('created');
			// recommend http request
		},
		beforeMount() {
			console.log('beforeMount');
		},
		mounted() {
			console.log('mounted');
		},
		beforeUpdate() {
			console.log('beforeUpdate');
		},
		updated() {
			console.log('updated');
		},
		activated() {
			console.log('activated');
		},
		deactivated() {
			console.log('deactivated');
		},
		beforeUnmount() {
			console.log('beforeUnmount');
		},
		unmounted() {
			console.log('unmounted');
		},
		errorCaptured() {
			console.log('errorCaptured');
		},
		renderTracked() {
			console.log('renderTracked');
		},
		renderTriggered() {
			console.log('renderTriggered');
		},
	};
</script>

<style></style>
