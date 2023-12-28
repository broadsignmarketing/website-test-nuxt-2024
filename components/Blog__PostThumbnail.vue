<template>
	<NuxtLink :to="blogPostSlug(slug, locale)" class="blog_thumb">
		<h2>
			<b>{{ title }}</b>
		</h2>
		<p>{{ slug }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
const { post } = defineProps(["post"]);

const { locale } = useI18n();
const { slug } = post;
const title = post.title.rendered;
const translations = post.detailed_translations;
</script>

<style lang="scss" scoped>
.blog_thumb {
	flex: 0 0 25%;
	box-sizing: border-box;
	display: block;
	padding: 10px;
	width: 20%;
	float: left;
}
</style>
