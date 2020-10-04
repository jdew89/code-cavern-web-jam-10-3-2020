<template lang="pug">
	div.corn
		section.hero.is-primary
			div.hero-body.hero-image
				div.container(style="padding: 1.5rem").has-text-centered
					h1.title.is-size-3() Corn Maze Info
		section.section(style="background-color:white")
			div.container(style="background-color:white")
				div.content
					p Welcome to our brand new corn maze!! This is the first year we have made a maze. We can neither confirm nor deny whether black cats will cross your path. Be sure to bring a rabbits foot to counter the bad luck! You can find the entrance to the maze behind the haunted house, next to the sketchy outhouse.
					p With this being our first maze, we have no idea how hard it is! We guarantee you will get lost! However, to make it easier, here is an online map for those who are directionally challenged.
					img.img(src="../assets/Maze-map.jpg" alt="Very Accurate Maze Map")
					p If you have kept reading this far, you can probably tell this map is completely innacurate!! Good luck to those who embark on the journey and be sure to laugh at those who have printed out the map!
</template>

<script>

</script>

<style lang="sass">
	.corn
		.hero-image
			background-image: url("../assets/pexels-peter-fazekas-1137332.jpg")
			background-position: center
			background-size: cover

	.img
		margin-top: 1rem
		margin-bottom: 1rem
		margin-left: auto
		margin-right: auto
		width: 70%
		display: block
</style>
