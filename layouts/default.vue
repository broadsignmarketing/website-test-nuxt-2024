<template>
	<SEO />
	<div id="global">
		<header>
			<Nav />
		</header>
		<NuxtPage />
	</div>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/css/global.scss";

header {
	z-index: 10;
	display: flex;
	margin-bottom: 30px;
}
</style>
