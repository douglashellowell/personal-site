<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
  import FactCarousel from './FactCarousel.svelte';
  import facts from './facts';
  import SectionTitle from './SectionTitle.svelte';

  export let techRef;

  const tech = [
    {
      lang: 'JavaScript',
      facts: [...facts.javascript],
    },
    {
      lang: 'TypeScript',
      facts: [...facts.typescript],
    },
    {
      lang: 'ReactJS',
      facts: [...facts.react],
    },
    { lang: 'CSS', facts: [...facts.css] },
  ];

  let openIndex: number | null = null;
  function setOpenIndex(clickedIndex: number) {
    if (clickedIndex === openIndex) {
      openIndex = null;
    } else {
      openIndex = clickedIndex;
    }
  }
</script>

<section id="tech" bind:this={techRef}>
  <SectionTitle>Learn something new</SectionTitle>
  <p>
    A small collection of fun-facts, tips-and-tricks or random knowledge from me
    to you!
  </p>
  <ul class="tech-list">
    {#each tech as technology, index}
      {#if technology.facts.length > 0}
        <li>
          <button
            on:click={() => setOpenIndex(index)}
            class={`has-facts ${openIndex === index && 'open-fact'}`}
            >{technology.lang}</button
          >
          {#if openIndex === index}
            <div transition:slide={{ duration: 300, easing: quintOut }}>
              <FactCarousel facts={technology.facts} />
            </div>
          {/if}
        </li>
      {/if}
    {/each}
  </ul>
</section>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  button {
    width: 100%;
  }

  .has-facts {
    border: 1px solid hsl(359, 58%, 39%);
    transition: background 200ms ease-in-out;

    &:hover,
    &:focus {
      background: hsl(359, 58%, 95%);
    }
  }

  .open-fact {
    background: #560b0e;
    color: white;
    border-radius: 8px 8px 0 0;
    &:hover,
    &:focus {
      background: hsl(359, 58%, 45%);
    }
  }
</style>
