<script lang="ts">
  import About from './components/About.svelte';
  import GroovyText from './components/GroovyText.svelte';
  import Header from './components/Header.svelte';
  import Nutshell from './components/Nutshell.svelte';
  import Tech from './components/Tech.svelte';
  import WorkHistory from './components/WorkHistory.svelte';

  let techRef;
</script>

<main>
  <Header />
  <About />
  <Nutshell />
  <GroovyText {techRef} />
  <WorkHistory />
  <Tech bind:techRef />
</main>

<style>
</style>
