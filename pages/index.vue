<template>
	<section class="hero w-full">
		<div class="container z-2">
			<div class="flex gap-x-8">
				<div class="w-full md:w-1/2">
					<div class="flex flex-col items-center justify-center md:align-items-start">
						<h1 class="text-white font-superbold">
							<span v-for="span in $tm('index.hero.title')">{{ $rt(span) }}</span>
						</h1>
						<p class="text-reflex line-height-180 text-center mx-auto mt-4 mb-8 w-full md:mt-0 md:mb-12 md:mx-0 md:text-left">
							{{ $t("index.hero.par") }}
						</p>
						<div class="ctas flex flex-wrap justify-content-center gap-4 mb-16 md:justify-content-start md:mb-0">
							<CTA class="w-full wrap sm:w-auto sm:nowrap" @click="showContactModal()">{{ $t("index.hero.ctaContact") }}</CTA>
							<CTA class="w-full wrap sm:w-auto sm:nowrap" preset="primary-outline" hoverPreset="full-cerulean" to="plans">
								{{ $t("index.hero.ctaPlans") }}
							</CTA>
						</div>
					</div>
				</div>
				<div class="w-full py-0 md:w-1/2">
					<div class="desktop_resize md:pl-6 lg:pl-0">
						<div class="blue_gradient"></div>
						<div class="slides flex align-items-end">
							<div class="slide slide_1">
								<div class="inner">
									<!-- <Img class="person" image={data.hero_slide1_person.childImageSharp.gatsbyImageData} alt="" />
											<Img
												class="buildings"
												image={data.hero_slide1_buildings.childImageSharp.gatsbyImageData}
												objectPosition="left bottom"
												alt=""
											/> -->
									<div class="ooh_wrapper bg">
										<!-- {slideStates[0].map((states, billboardNum) => (
													<RotatingBillboard
														states={states}
														billboard={billboardNum}
														speed={billboardsSwitchSpeeds[billboardNum]}
														sprites={{
															1: data.hero_slide1_billboards_state1.childImageSharp.gatsbyImageData,
															2: data.hero_slide1_billboards_state2.childImageSharp.gatsbyImageData,
															3: data.hero_slide1_billboards_state3.childImageSharp.gatsbyImageData,
														}}
														key={`billboard_${billboardNum}`}
													/>
												))} -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
function showContactModal() {
	console.log("showContactModal");
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/dependencies";

@keyframes textSlideInFromLeft {
	0% {
		opacity: 0;
		transform: translateX(-20%);
	}

	100% {
		opacity: 1;
		transform: translateX(0%);
	}
}

@keyframes textSlideInFromRight {
	0% {
		opacity: 0;
		transform: translateX(20%);
	}

	100% {
		opacity: 1;
		transform: translateX(0%);
	}
}

@keyframes gradientBlueEnter {
	0% {
		opacity: 0;
		transform: translateX(20%);
	}

	100% {
		opacity: 1;
		transform: translateX(0%);
	}
}

@keyframes buildingsEnter {
	0% {
		opacity: 0;
		transform: translateY(-20%);
	}

	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}

@keyframes personEnter {
	0% {
		opacity: 0;
		transform: translate(-50%, 20%);
	}

	100% {
		opacity: 1;
		transform: translate(-50%, 0%);
	}
}

h1 {
	cursor: default;
	display: flex;
	flex-flow: row wrap;
	font-size: min(13vw, 88px);
	left: clamp(-50px, calc(-5vw + 50px), 0px);
	margin: min(8vw, 60px) auto min(4vw, 30px);
	max-width: 6.6em;
	position: relative;
	transform-origin: left top;
	user-select: none;

	span {
		align-items: center;
		animation: 1s ease-out 0s 1 normal forwards running fadeIn;
		background-position: 0em 0;
		display: flex;
		flex: 0 0 100%;
		font-size: 1em;
		height: 0.8em;
		letter-spacing: 0.01em;
		opacity: 1;
		position: relative;
		-webkit-text-stroke: 1px $reflex;
		text-stroke: 1px $reflex;
		white-space: nowrap;
	}

	.anim_appear {
		&:nth-child(2) {
			padding-left: 1em;
		}

		&:nth-child(3) {
			padding-left: 0.5em;
		}

		&:nth-child(4) {
			padding-left: 2em;
		}

		&:nth-child(5) {
			padding-left: 0.5em;
		}
	}
}

.hero {
	p {
		max-width: 44ch;
	}

	.hero_graphic_wrapper {
	}

	.blue_gradient {
		background: linear-gradient(272.11deg, #7399ef 1.93%, #ceddfe 48.3%);
		height: 100%;
		left: -16px;
		max-width: 100vw;
		position: absolute;
		top: 0;
		width: 100vw;
		z-index: 1;
	}

	.slides {
		height: 100%;
		left: -16px;
		max-width: 100vw;
		overflow: hidden;
		width: 100vw;
		z-index: 10;
	}

	.slide {
	}

	.slide_1 {
		$backgroundWidth: 130vw;
		$backgroundMaxHeight: 520px;
		$backgroundMaxWidth: 900px;

		.inner {
			z-index: 1;

			&:after {
				background: #fff;
				content: "";
				height: 50px;
				left: 0;
				position: absolute;
				top: 100%;
				width: 100%;
				z-index: 100;
			}
		}

		.buildings {
			height: auto;
			max-height: $backgroundMaxHeight;
			max-width: $backgroundMaxWidth;
			position: relative;
			width: $backgroundWidth;
			z-index: 1;
		}

		.person {
			bottom: 0;
			left: 50%;
			max-height: 270px;
			max-width: 380px;
			pointer-events: none;
			position: absolute;
			transform: translateX(-50%);
			width: 62%;
			z-index: 10;
		}

		.ooh_wrapper {
			max-height: $backgroundMaxHeight;
			max-width: $backgroundMaxWidth;
			width: $backgroundWidth;
			z-index: 5;
		}

		.ooh {
			@include bg;

			.state {
				@include bg;
				opacity: 0;
				pointer-events: none;
				transition: opacity 0.3s;

				&.active {
					opacity: 1;
				}
			}
		}

		.ooh_1 {
			clip-path: polygon(0% 10%, 12% 10%, 12% 40%, 0% 40%);
		}

		.ooh_2 {
			clip-path: polygon(18% 15%, 37% 15%, 37% 40%, 18% 40%);
		}

		.ooh_3 {
			clip-path: polygon(49% 0%, 59% 0%, 59% 29%, 49% 29%);
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
	}

	.ctas {
		gap: 16px;
	}

	.CTA {
		max-width: 420px;
	}
}

html[lang="fr"] {
	h1 {
		transform: scale(0.9);

		span:nth-child(4) {
			padding-left: 1.6em;
		}
	}
}

html[lang="es"] {
	h1 {
		transform: scale(0.9);

		span:nth-child(3) {
			padding-left: 0;
		}
	}
}

html[lang="de"] {
	h1 {
		transform: scale(0.9);

		span:nth-child(4) {
			padding-left: 0;
		}
	}
}

html[lang="ja"] {
	h1 {
		span {
			background-size: 10em 2.1em;
			font-weight: 900;
			height: min(1.2em, 100px);

			&:nth-child(2) {
				letter-spacing: -0.1em;
			}

			&:nth-child(3) {
				letter-spacing: -0.25em;
				padding-left: 0;
			}
		}
	}
}

html[lang="zh"] {
	h1 {
		span {
			font-weight: 900;
			height: min(1.2em, 100px);
		}
	}
}

@media (min-width: 600px) {
	.hero {
	}
}

@media (min-width: 600px) and (max-width: 899px) {
	.hero {
		.ooh_wrapper {
			bottom: 0;
			top: auto;

			img,
			picture {
				object-position: center bottom;
			}
		}
	}
}

@media (min-width: 900px) {
	h1 {
		font-size: min(7vw, 88px);
		left: 0;
		margin: 40px 0;
		max-width: 100%;
	}

	.hero {
		.blue_gradient {
			border-radius: 15px 0px 0px 15px;
			left: min(8vw, 50px);
			max-width: 760px;
			width: 50vw;
		}

		.slides {
			left: 0;
			max-width: 820px;
			overflow: visible;
			width: 54vw;
		}

		.slide {
			width: 100%;
		}

		.slide_1 {
			$backgroundHeight: 552px;

			.buildings {
				height: #{$backgroundHeight + 16};
				margin-bottom: 50px;
				max-height: #{$backgroundHeight + 16};
			}

			.ooh_wrapper {
				height: $backgroundHeight;
				max-height: $backgroundHeight;
			}

			.ooh_10 {
				transform: translateY(16px);
			}
		}
	}
}

@media (min-width: 900px) {
	.hero .desktop_resize {
		transform: scale(0.65);
		transform-origin: left top;

		.blue_gradient {
			max-width: 800px;
			width: 80vw;
		}

		.person {
			left: 37vw;
		}
	}
}

@media (min-width: 1100px) {
	.hero .desktop_resize {
		transform: scale(0.8);

		.blue_gradient {
			max-width: 840px;
		}

		.person {
			left: 31vw;
		}
	}
}

@media (min-width: 1088px) {
	h1 {
		font-size: min(6vw, 78px);
		transform: translateX(-0.2em);

		span {
			opacity: 0;
		}

		.anim_appear {
			&:nth-child(1) {
				animation: 1s ease-out 0s 1 normal forwards running textSlideInFromLeft;
			}

			&:nth-child(2) {
				animation: 1s ease-out 0.3s 1 normal forwards running textSlideInFromRight;
			}

			&:nth-child(3) {
				animation: 1s ease-out 0.6s 1 normal forwards running textSlideInFromLeft;
			}

			&:nth-child(4) {
				animation: 1s ease-out 0.9s 1 normal forwards running textSlideInFromRight;
			}

			&:nth-child(5) {
				animation: 1s ease-out 1.2s 1 normal forwards running textSlideInFromRight;
			}
		}
	}

	.hero {
		.blue_gradient {
			animation: 0.6s ease-out 0.4s 1 normal forwards running gradientBlueEnter;
			opacity: 0;
		}

		.slide_1 {
			.buildings {
				animation: 0.5s ease-out 1s 1 normal forwards running buildingsEnter;
				opacity: 0;
			}

			.person {
				animation: 0.6s ease-out 1.2s 1 normal forwards running personEnter;
				opacity: 0;
			}

			.ooh_wrapper {
				animation: 0.5s ease-out 1s 1 normal forwards running buildingsEnter;
				opacity: 0;
			}
		}
	}

	html[lang="fr"] h1 {
		transform: scale(0.9) translateX(-0.5em);
	}

	html[lang="es"] h1 {
		transform: scale(0.9) translateX(-0.5em);
	}

	html[lang="de"] h1 {
	}

	html[lang="ja"] h1 {
		transform: translateX(-0.4em);
	}
}

@media (min-width: 1440px) {
	h1 {
		font-size: min(5.4vw, 88px);
		transform: translateX(-0.7em);
	}

	.hero {
		.desktop_resize {
			transform: scale(0.9);
			transform-origin: left top;

			.person {
				left: 50%;
			}
		}
	}
}

@media (prefers-reduced-motion) {
	h1 {
		.anim_appear {
			animation: none !important;
			opacity: 1;
		}
	}

	.hero {
		.blue_gradient,
		.slide_1 .person,
		.slide_1 .buildings,
		.slide_1 .ooh {
			animation: none;
			opacity: 1;
		}
	}
}
</style>
