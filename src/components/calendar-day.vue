<template lang="pug">
	li.day(:class="{day: open, 'off-day': !open}") {{(open) ? 'OPEN':'CLOSED'}}
		b-tag.date(type="is-white") {{date}}
		.event(v-if="open")
			.event-desc Day Pass: ${{fee}}
</template>

<script>
export default {
	name: 'calendar-day',
	props: {
		open: Boolean,
		date: String,
		fee: String,
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "@/sass/variables.sass"
@import "~bulma"
@import "~buefy/src/scss/buefy"
li
	display: block
	float: left
	width: 14.342%
	padding: 5px
	box-sizing: border-box
	border: 1px solid #ccc
	margin-right: -1px
	margin-bottom: -1px

.event-desc
	color: #666
	margin: 3px 0 7px 0
	text-decoration: none

.off-day
	background: $grey
	color: $white

.event
	clear: both
	display: block
	font-size: 13px
	border-radius: 4px
	padding: 5px
	margin-top: 40px
	margin-bottom: 5px
	line-height: 14px
	background: #e4f2f2
	border: 1px solid #b5dbdc
	color: #009aaf
	text-decoration: none

.date
	float: right

</style>
