<template>
	<ul>
		<li><NuxtLink :to="switchLocalePath('en')">English</NuxtLink></li>
		<li><NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink></li>
		<li><NuxtLink :to="switchLocalePath('es')">Espanol</NuxtLink></li>
		<li><NuxtLink :to="switchLocalePath('de')">Deutsch</NuxtLink></li>
		<li><NuxtLink :to="switchLocalePath('jp')">Japanese</NuxtLink></li>
	</ul>
</template>

<script setup lang="ts"></script>
