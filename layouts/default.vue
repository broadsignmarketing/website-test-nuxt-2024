<template>
	<header>
		<ul>
			<li><NuxtLink :to="switchLocalePath('en')">English</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('es')">Espanol</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('de')">Deutsch</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('jp')">Japanese</NuxtLink></li>
		</ul>
		<ul>
			<li><NuxtLink :to="localePath('/')">Home</NuxtLink></li>
			<li><NuxtLink :to="localePath('campaign-planning-ad-serving')">Campaign Planning & Ad Serving</NuxtLink></li>
			<li><NuxtLink :to="localePath('local-signage-messaging')">Local Signage Mesaging</NuxtLink></li>
			<li><NuxtLink :to="localePath('content-network-management')">Content Network Management</NuxtLink></li>
			<li><NuxtLink :to="localePath('global-programmatic-ssp')">Global Programmatic SSP</NuxtLink></li>
			<li><NuxtLink :to="localePath('static-campaigns')">Static Campaigns</NuxtLink></li>
		</ul>
	</header>
	<NuxtPage />
</template>

<script setup></script>

<style lang="scss" scoped>
header {
	z-index: 10;
	display: flex;
	margin-bottom: 30px;
}
ul {
	margin-right: 30px;
}
</style>
