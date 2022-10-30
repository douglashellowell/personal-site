<script lang="ts">
  import confetti from 'canvas-confetti';
  // import Prism from 'prismjs';
  import type { Fact } from '../types';
  import Snippet from './Snippet.svelte';

  export let facts: Fact[];
  let factIndex = 0;
  $: chosenFact = facts[factIndex];

  let canvas;
  let cannon = confetti.create(canvas, {
    resize: true,
    useWorker: true,
    disableForReducedMotion: true,
  });

  let shotsFired = 0;
  function shootConfetti() {
    shotsFired++;
    cannon({
      particleCount: 100,
      spread: 100,
    });
  }
  // console.log(Prism.languages.javascript);
</script>

<div>
  <div>
    <h3>{chosenFact.title}</h3>
    <Snippet language="javascript" snippet={chosenFact.snippet} />
    <p>{@html chosenFact.description}</p>
  </div>
  <button on:click={shootConfetti}>
    {shotsFired === 0
      ? `I learnt something new!`
      : shotsFired < 5
      ? 'Hooray! 😃'
      : shotsFired < 10
      ? "Fun isn't it? 😅"
      : "hire me and i'll put this on all your apps 👀"}
  </button>
  <button>I knew this!</button>
</div>
<canvas bind:this={canvas} />
