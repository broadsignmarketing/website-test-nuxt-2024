<template>
	<SEO />
	<header>
		<ul>
			<li><NuxtLink :to="switchLocalePath('en')">English</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('es')">Espanol</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('de')">Deutsch</NuxtLink></li>
			<li><NuxtLink :to="switchLocalePath('jp')">Japanese</NuxtLink></li>
		</ul>
		<ul>
			<li><NuxtLinkLocale to="/">Home</NuxtLinkLocale></li>
			<li><NuxtLinkLocale to="campaign-planning-ad-serving">Campaign Planning & Ad Serving</NuxtLinkLocale></li>
			<li><NuxtLinkLocale to="local-signage-messaging">Local Signage Mesaging</NuxtLinkLocale></li>
			<li><NuxtLinkLocale to="content-network-management">Content Network Management</NuxtLinkLocale></li>
			<li><NuxtLinkLocale to="global-programmatic-ssp">Global Programmatic SSP</NuxtLinkLocale></li>
			<li><NuxtLinkLocale to="static-campaigns">Static Campaigns</NuxtLinkLocale></li>
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
