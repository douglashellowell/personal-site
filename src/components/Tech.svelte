<script lang="ts">
  import type { TechFact } from 'src/types';
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
  import FactCarousel from './FactCarousel.svelte';

  export let techRef;

  import SectionTitle from './SectionTitle.svelte';

  const tech: TechFact[] = [
    {
      tech: 'JavaScript',
      facts: [
        {
          title: 'Iterable/Iterator protocol',
          snippet: `const tutor = 'doug';

const tutorIterator = tutor[Symbol.iterator](); // invoke it!

console.log(tutorIterator); // Object [String Iterator] {}

console.log(tutorIterator.next()); // { value: 'd', done: false }
console.log(tutorIterator.next()); // { value: 'o', done: false }
console.log(tutorIterator.next()); // { value: 'u', done: false }
console.log(tutorIterator.next()); // { value: 'g', done: false }
console.log(tutorIterator.next()); // { value: undefined, done: true }`,
          description: `Some data types in JavaScript are iterable by nature - e.g strings and arrays. In order to be iterable an object must adhere to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol" target="_blank" rel="noreferrer">
        iterator protocol
      </a> <i>(meaning they must implement the <code>@@iterator</code> method)</i>. `,
        },
        {
          title: 'Generators',
          snippet: ``,
          description:
            'there are special types of functions called generators!',
        },
      ],
    },
    {
      tech: 'TypeScript',
      facts: [{ title: 'Generics', description: '', snippet: '' }],
    },
    { tech: 'React', facts: [] },
    { tech: 'NextJS', facts: [] },
    { tech: 'NodeJs', facts: [] },
    { tech: 'Express', facts: [] },
    { tech: 'PSQL', facts: [] },
    { tech: 'HTML5', facts: [] },
    { tech: 'CSS', facts: [] },
    { tech: 'SASS', facts: [] },
    { tech: 'Svelte', facts: [] },
    { tech: 'Jest', facts: [] },
    { tech: 'Testing Library', facts: [] },
    { tech: 'Mocha / Chai', facts: [] },
  ];

  const someExperience = ['C#', 'ASP.NET', 'MongoDB', 'Terraform'];

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
  <SectionTitle>Tech</SectionTitle>
  <p>I have great fun working with</p>
  <ul class="tech-list">
    {#each tech as technology, index}
      <li>
        <button on:click={() => setOpenIndex(index)}>{technology.tech}</button>
        {#if openIndex === index}
          <div
            class="fact"
            transition:slide={{ duration: 300, easing: quintOut }}
          >
            <FactCarousel facts={technology.facts} />
          </div>
        {/if}
      </li>
    {/each}
  </ul>
  <p>
    I have also dabbled in
    {#each someExperience as technology}
      <p>{technology}</p>
    {/each}
  </p>
</section>

<style lang="scss">
  ul {
    list-style: none;
    padding: 0;
  }

  .fact {
    // height: 200px;
    border: 1px solid red;
  }
</style>
