<template>
	<MegaMenu :model="items" class="main_nav">
		<template #start>
			<NuxtLinkLocale to="/">
				<img src="@/img/broadsign/broadsign.svg" alt="" width="170" height="40" />
			</NuxtLinkLocale>
		</template>
		<template #item="{ item }">
			<a
				v-if="item.root"
				v-ripple
				class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
				style="border-radius: 2rem"
			>
				<span :class="item.icon" />
				<span class="ml-2">{{ item.label }}</span>
			</a>
			<div v-else class="bg-white flex flex-column align-items-start gap-3">
				<NuxtLinkLocale :to="item.to">{{ item.label }}</NuxtLinkLocale>
			</div>
		</template>
		<template #end>
			<LangSwitcher />
		</template>
	</MegaMenu>
</template>

<script setup lang="ts">
const { t } = useI18n();

const items = computed(() => [
	{
		label: "Media Owners",
		root: true,
		items: [
			[
				{
					featured: true,
					items: [{ label: "Broadsign Platform", to: "broadsign-platform" }],
				},
			],
			[
				{
					items: [
						{ label: t("campaign-planning-ad-serving.seo.title"), to: "campaign-planning-ad-serving" },
						{ label: t("local-signage-messaging.seo.title"), to: "local-signage-messaging" },
						{ label: t("content-network-management.seo.title"), to: "content-network-management" },
						{ label: t("global-programmatic-ssp.seo.title"), to: "global-programmatic-ssp" },
						{ label: t("static-campaigns.seo.title"), to: "static-campaigns" },
					],
				},
			],
			[
				{
					featured: true,
					items: [{ label: "Plans", to: "plans" }],
				},
			],
		],
	},
	{
		label: "Agencies & Brands",
		root: true,
	},
	{
		label: "Resources",
		root: true,
		items: [
			[
				{
					items: [{ label: "Blog", to: "blog" }],
				},
			],
			[
				{
					items: [],
				},
			],
		],
	},
]);
</script>

<style lang="scss">
.main_nav {
	.p-megamenu-panel {
		background: #fff;
	}

	.p-menuitem {
		.p-megamenu-panel,
		.p-submenu-list {
			max-height: 0vh;
			opacity: 0;
			transition: max-height 0.6s ease, opacity 0.3s ease 0.3s, box-shadow 0.3s;
			display: block !important;
			overflow: hidden;
			pointer-events: none;
		}
	}

	.p-menuitem-active {
		.p-megamenu-panel,
		.p-submenu-list {
			transition: max-height 0.6s ease, opacity 0.6s ease 0s, box-shadow 0.3s;
			pointer-events: all;
			max-height: 50vh;
			opacity: 1;
		}

		.p-megamenu-panel {
			box-shadow: 4px 4px 16px #eee;
		}
	}
}
</style>
