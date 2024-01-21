<template>
	<NuxtLinkLocale v-if="to" :class="['CTA', idleClass, hoverClass, size]" :to="to">
		<slot name="default" />
	</NuxtLinkLocale>
	<button v-else :class="['CTA', idleClass, hoverClass, size]">
		<slot name="default" />
	</button>
</template>

<script setup>
const { idle, hover } = defineProps({
	idle: {
		validator(value) {
			return ["primary", "primary-outline", "outline-transparent", "secondary", "secondary-outline", "white-outline-transparent"].includes(value);
		},
		default: "primary",
	},
	hover: {
		validator(value) {
			return ["reflex", "cerulean", "white", "outline-reflex"].includes(value);
		},
		default: "cerulean",
	},
	size: {
		validator(value) {
			return ["sm", "md", "lg"].includes(value);
		},
		default: "md",
	},
	to: String,
});

const idleClass = computed(() => {
	switch (idle) {
		case "primary":
			return "bg-reflex text-white border-reflex";
		case "primary-outline":
			return "bg-white text-reflex border-reflex";
		case "outline-transparent":
			return "bg-transparent text-reflex border-reflex";
		case "secondary":
			return "bg-cerulean text-white border-cerulean";
		case "secondary-outline":
			return "bg-white text-cerulean border-cerulean";
		case "white-outline-transparent":
			return "bg-transparent text-white border-white";
	}
});

const hoverClass = computed(() => {
	switch (hover) {
		case "reflex":
			return "hover:bg-reflex hover:text-white hover:border-reflex";
		case "white":
			return "hover:bg-white hover:text-reflex hover:border-white";
		case "outline-reflex":
			return "hover:bg-white hover:text-reflex hover:border-reflex";
		case "cerulean":
			return "hover:bg-cerulean hover:text-white hover:border-cerulean";
	}
});
</script>

<style lang="scss">
@import "@/assets/css/dependencies";

.CTA {
	@include fontMed;
	align-items: center;
	background-image: none;
	border: 1px solid transparent;
	border-radius: 100em;
	box-shadow: none;
	box-sizing: border-box;
	cursor: pointer;
	display: inline-flex;
	font-size: 14px;
	justify-content: center;
	letter-spacing: 0.1em;
	line-height: 120%;
	min-height: 3.2em;
	overflow: hidden;
	padding: 0.65em 1.8em 0.6em;
	position: relative;
	text-align: center;
	text-decoration: none !important;
	text-shadow: none;
	text-transform: uppercase;
	transition-duration: 0.3s;
	transition-property: background-color, border-color, color, opacity;
	white-space: nowrap;
	z-index: 10;

	&.sm {
		min-height: 2.4em;
		padding: 0.55em 1.4em 0.55em;
	}

	&.lg {
		min-height: 3.6em;
		padding: 0.84em 2.2em 0.8em;
	}
}
</style>
