<script lang="ts">
  import About from './components/About.svelte';
  import GroovyText from './components/GroovyText.svelte';
  import Header from './components/Header.svelte';
  import Nutshell from './components/Nutshell.svelte';
  import LearnSomethingNew from './components/LearnSomethingNew.svelte';
  import WorkHistory from './components/WorkHistory.svelte';
  import BuiltWith from './components/BuiltWith.svelte';
  import TechStack from './components/TechStack.svelte';
  import PersonalProjects from './components/PersonalProjects.svelte';
  import Resume from './components/Resume.svelte';

  let techRef;
</script>

<main>
  <Header />
  <About />
  <Resume />
  <Nutshell />
  <!-- <GroovyText {techRef} /> -->
  <!-- <TechStack /> -->
  <WorkHistory />
  <!-- <PersonalProjects /> -->
  <LearnSomethingNew bind:techRef />
  <BuiltWith />
</main>

<style>
</style>
