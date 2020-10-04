<template lang="pug">
	div#app
		b-navbar(:centered="false" type="is-primary")
			template(slot="brand")
				b-navbar-item(href="/")
					//-|Black Cat Crossing
					img(alt="Black Cat Crossing" src="./assets/black cat clip art.png")
			template(slot="start")
				b-navbar-item(tag="router-link" :to="{path: '/haunted-house'}") Haunted House
				b-navbar-item(tag="router-link" :to="{path: '/corn-maze'}") Corn Maze
				//-b-navbar-item(href="https://thecodecavern.com") Code Cavern
		router-view
		footer.footer
			div.container.content
				p This website was made by Jeff DeWitt for the&nbsp;
					a(href="https://thecodecavern.com" target="_blank") Code Cavern
					| &nbsp;Web Jam on 10/3/2020.
</template>

<style lang="sass">
@import "@/sass/variables.sass"

footer
	color: white

html, body
	//height: 100%
	margin: 0
	background-color: $black

#app
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	//text-align: center

	// Import Bulma and Buefy styles
@import "~bulma"
@import "~buefy/src/scss/buefy"

</style>
