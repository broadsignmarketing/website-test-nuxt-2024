<template>
	<section class="hero">
		<div class="container z-2">
			<div class="grid">
				<div class="col-12 md:col-6">
					<div class="flex flex-column align-items-center justify-content-center md:align-items-start">
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
				<div class="col-12 py-0 md:col-6">
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
	/* user-select: none; */

	span {
		align-items: center;
		animation: 1s ease-out 0s 1 normal forwards running fadeIn;
		background-position: 0em 0;
		display: flex;
		flex: 0 0 100%;
		font-size: 1em;
		height: 0.8em;
		letter-spacing: 0.01em;
		opacity: 0;
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
</style>
