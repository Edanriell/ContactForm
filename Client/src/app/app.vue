<script lang="ts" setup>
	import { RouterView } from "vue-router";

	import { ToastManager } from "@shared/ui/toast/ui";
</script>

<template>
	<RouterView />
	<ToastManager />
</template>
