<template>
	<div id="LangSwitcher">
		<Button type="button" @click="toggleLangSwitcher" aria-haspopup="true" aria-controls="lang_options">{{ langsList[locale] }}</Button>
		<Menu :model="items" ref="langOptions" id="lang_options" :popup="true">
			<template #item="{ item, props }">
				<NuxtLink :to="item.to" v-if="item.code !== locale">{{ item.label }}</NuxtLink>
			</template>
		</Menu>
	</div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();

const langOptions = ref(null);

const langsList = ref({
	en: "English",
	fr: "Français",
	es: "Espanol",
	de: "Deutsch",
	jp: "Japanese",
});

const items = computed(() => Object.keys(langsList.value).map((l) => ({ label: langsList.value[l], code: l, to: switchLocalePath(l) })));

const toggleLangSwitcher = (event) => {
	langOptions.value.toggle(event);
};
</script>
