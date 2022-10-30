<script lang="ts">
  import type { TechFact } from '../types';

  export let skillName: TechFact;

  let isShowingFacts = true;
</script>

<button on:click={() => (isShowingFacts = !isShowingFacts)}>
  {skillName.tech}
</button>
{#if isShowingFacts}
  <div />
{/if}

<style>
  button {
    color: firebrick;
    font-size: 1.1rem;
  }
</style>
