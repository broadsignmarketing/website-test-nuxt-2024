<template>
	<div class="ooh_wrapper bg">
		<div v-for="(states, k) in slideStates[0]" :class="['ooh', 'bg', `ooh_${k + 1}`, `speed_${billboardsSwitchSpeeds[k]}`, k >= 5 ? 'z-2' : 'z-1']">
			<HomeRotatingBillboard :states="states" :speed="billboardsSwitchSpeeds[k]" />
		</div>
	</div>
</template>

<script setup>
const statesArr = [[3, 2, 3, 1, 3, 1, 1, 3, 2, 1]];

const slideStates = statesArr.map((slide) => {
	const _out = slide.map((states) => {
		return Array.from({ length: states }, (_, index) => index + 1);
	});

	return _out;
});

const billboardsSwitchSpeeds = [3100, 4000, 3200, 3900, 3300, 3800, 3400, 3700, 3600, 3500];
</script>

<style lang="scss" scoped>
@import "@/assets/css/dependencies";

$backgroundWidth: 130vw;
$backgroundMaxHeight: 520px;
$backgroundMaxWidth: 870px;

.ooh_wrapper {
	max-height: $backgroundMaxHeight;
	max-width: $backgroundMaxWidth;
	width: $backgroundWidth;
	z-index: 5;
}

.ooh {
	height: 100%;
	left: 0;
	-o-object-fit: cover;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 0;
	will-change: opacity;
}

.ooh_1 {
	clip-path: polygon(0% 10%, 12% 10%, 12% 41%, 0% 41%);
}

.ooh_2 {
	clip-path: polygon(18% 15%, 37% 15%, 37% 40%, 18% 40%);
}

.ooh_3 {
	clip-path: polygon(49% 0%, 59% 0%, 59% 31%, 49% 31%);
}

.ooh_4 {
	clip-path: polygon(60% 5%, 72.5% 5%, 72.5% 37%, 60% 37%);
}

.ooh_5 {
	clip-path: polygon(72.5% 19%, 84% 19%, 84% 60%, 72.5% 60%);
}

.ooh_6 {
	clip-path: polygon(1% 43%, 10% 43%, 10% 82%, 1% 82%);
}

.ooh_7 {
	clip-path: polygon(10% 34%, 18% 34%, 18% 63%, 10% 63%);
}

.ooh_8 {
	clip-path: polygon(22% 39%, 37% 39%, 37% 79%, 22% 79%);
}

.ooh_9 {
	clip-path: polygon(54% 62%, 79% 62%, 79% 90%, 54% 90%);
}

.ooh_10 {
	clip-path: polygon(79% 58%, 91% 58%, 91% 100%, 79% 100%);

	img,
	picture {
		object-position: center bottom;
	}
}

@media (min-width: 600px) and (max-width: 899px) {
	.ooh_wrapper {
		bottom: 0;
		top: auto;
	}
}

@media (min-width: 900px) {
	$backgroundHeight: 552px;

	.ooh_wrapper {
		height: $backgroundHeight;
		max-height: $backgroundHeight;
	}

	.ooh_10 {
		transform: translateY(16px);
	}
}
</style>
