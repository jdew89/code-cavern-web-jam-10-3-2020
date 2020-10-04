<template lang="pug">
	div.wrapper
		section.hero.is-primary
			div.hero-body.hero-image
				div.container(style="padding: 1.5rem").has-text-centered
					h1.title.is-size-1() Black Cat Crossing
					h2.subtitle.is-size-4() Haunted House and Corn Maze!
		div.container
			div.card
				header.card-header.has-text-centered.calendar-header-background
					h1.card-header-title.is-block.is-size-4 October 2020
			b-table(:data="data" :bordered="true" :mobile-cards="true")
				b-table-column(label="Sunday" v-slot="props" width="150" :centered="true" cell-class="" header-class="header-color")
					mixin cell_data(day)
						div
						b-taglist(attached)
							b-tag(:type="(props.row.open["+day+"]) ? 'is-success' : 'is-black'") {{(props.row.open[#{day}]) ? "OPEN":"CLOSED"}}
							b-tag(type="is-primary")  {{props.row.date[#{day}]}}
						p(v-if="props.row.open["+day+"]").cell-text
							strong Fee: ${{props.row.fee[#{day}]}}
					+cell_data("0")
				b-table-column(label="Monday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("1")
				b-table-column(label="Tuesday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("2")
				b-table-column(label="Wednesday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("3")
				b-table-column(label="Thursday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("4")
				b-table-column(label="Friday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("5")
				b-table-column(label="Saturday" v-slot="props" width="150" :centered="true" cell-class="cell" header-class="header-color")
					+cell_data("6")
</template>

<script>
import CalendarDay from '@/components/calendar-day.vue'

export default {
	name: 'haunted-house',
	components: {
		CalendarDay
	},
	data(){
		return{
			data: [
				{week: 1, open: [false,false,false,false,false,true,true], date: [27,28,29,30,1,2,3], fee: ["","","","","","10","15"]},
				{week: 2, open: [true,false,false,false,false,true,true], date: [4,5,6,7,8,9,10], fee: ["15","","","","","10","15"]},
				{week: 2, open: [true,false,false,false,false,true,true], date: [11,12,13,14,15,16,17], fee: ["15","","","","","10","15"]},
				{week: 2, open: [true,false,false,false,false,true,true], date: [18,19,20,21,22,23,24], fee: ["15","","","","","10","15"]},
				{week: 2, open: [true,false,false,false,false,true,true], date: [25,26,27,28,29,30,31], fee: ["15","","","","","10","15"]}
			],
		}
	}
}

</script>

<style lang="sass">
	@import "@/sass/variables.sass"
	@import "~bulma"
	@import "~buefy/src/scss/buefy"

	.hero-image
		background-image: url("../assets/hannah-troupe-0FQneB1VjaM-unsplash.jpg")
		background-position: center
		background-size: cover
		h1.title
			text-shadow: 2px 2px #000000
		h2.subtitle
			text-shadow: 2px 2px #000000

	.calendar-header-background
		background-color: $primary
		h1
			color: $white

	.cell-text
		padding-top: 0rem
		padding-bottom: 1.5rem

	.cell-closed
		background-color: #33333340

	.header-color
		background-color: $grey-lightest

</style>
