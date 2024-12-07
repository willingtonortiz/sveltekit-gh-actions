<script lang="ts">
  import Header from '$lib/presentation/components/header.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<Header />

{@render children()}
