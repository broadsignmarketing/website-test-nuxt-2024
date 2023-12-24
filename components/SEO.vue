<template>
	<div>
		<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<Head>
				<Title>{{ title }}</Title>
				<template v-for="link in head.link" :key="link.id">
					<Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
				</template>
				<template v-for="meta in head.meta" :key="meta.id">
					<Meta :id="meta.id" :property="meta.property" :content="meta.content" />
				</template>
			</Head>
		</Html>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const routeName = ref(route.name.replace(/___\w+/, ""));
const title = computed(() => t(`${routeName.value}.seo.title`));
const description = computed(() => t(`${routeName.value}.seo.description`));

console.log(title.value, "-----", description.value);

const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: "id",
	addSeoAttributes: true,
});

router.afterEach((to) => {
	routeName.value = to.name.replace(/___\w+/, "");
});

console.log(routeName.value);

useHead({
	titleTemplate: (titleChunk) => {
		return routeName.value === "index" ? titleChunk : `${titleChunk} | Broadsign`;
	},
	meta: [{ property: "description", content: description.value }],
});
</script>
