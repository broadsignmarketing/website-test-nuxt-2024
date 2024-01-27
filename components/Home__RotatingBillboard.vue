<template>
	<NuxtImg
		provider="cloudflare"
		v-for="state in states"
		:src="`img/pages/index/hero_slide1_billboards_state${state}.png`"
		:class="['state w-full', `state_${state}`, { active: state === current }]"
		alt=""
	/>
</template>

<script setup>
const { states, speed } = defineProps(["states", "speed"]);
const current = ref(1);

let interval;

onMounted(() => {
	interval = setInterval(() => {
		console.log(current.value);
		if (current.value + 1 > states.length) {
			current.value = 1;
			return;
		}
		current.value += 1;
	}, speed);
});

onBeforeUnmount(() => {
	clearInterval(interval);
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/dependencies";

.state {
	@include bg;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s;

	&.active {
		opacity: 1;
	}
}
</style>
