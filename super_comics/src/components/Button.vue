<template>
	<div class="button-container">
		<span id="value">Start</span>
	</div>
</template>

<script>
export default {
	name: 'Button',
}
</script>

<style scoped>
	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1C153B;
		padding: 10px 20px;
		width: 130px;
		height: 40px;
		margin: auto;
		border-radius: 20px;
		margin-top: 20px
	}
	#value {
		font-family: 'Bangers', cursive;
		color: #F9F9F9;
		font-size: 2em
	}
</style>

