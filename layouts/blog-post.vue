<template>
	<header>
		<Nav />
	</header>
	<NuxtPage />
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/css/global.scss";

header {
	z-index: 10;
	display: flex;
	margin-bottom: 30px;
}
ul {
	margin-right: 30px;
}
</style>
