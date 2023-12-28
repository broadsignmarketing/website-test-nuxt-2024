<template>
	<ul>
		<li><NuxtLinkLocale to="/">Home</NuxtLinkLocale></li>
		<li>
			<NuxtLinkLocale to="campaign-planning-ad-serving">{{ $t("campaign-planning-ad-serving.seo.title") }}</NuxtLinkLocale>
		</li>
		<li>
			<NuxtLinkLocale to="local-signage-messaging">{{ $t("local-signage-messaging.seo.title") }}</NuxtLinkLocale>
		</li>
		<li>
			<NuxtLinkLocale to="content-network-management">{{ $t("content-network-management.seo.title") }}</NuxtLinkLocale>
		</li>
		<li>
			<NuxtLinkLocale to="global-programmatic-ssp">{{ $t("global-programmatic-ssp.seo.title") }}</NuxtLinkLocale>
		</li>
		<li>
			<NuxtLinkLocale to="static-campaigns">{{ $t("static-campaigns.seo.title") }}</NuxtLinkLocale>
		</li>
		<li>
			<NuxtLinkLocale to="blog">{{ $t("blog.seo.title") }}</NuxtLinkLocale>
		</li>
	</ul>
</template>

<script setup lang="ts"></script>
