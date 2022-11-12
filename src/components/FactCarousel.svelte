<script lang="ts">
  import confetti from 'canvas-confetti';
  export let facts;

  let factIndex = 0;
  let factScrollBox: HTMLElement;
  function nextFact() {
    factIndex++;
    factScrollBox.scrollTo({ top: 0 });
  }
  $: chosenFact = facts[factIndex % facts.length];

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
</script>

<!-- <h3>{chosenFact.title}</h3> -->

<div class="fact" bind:this={factScrollBox}>
  <svelte:component this={chosenFact} />
</div>
<canvas bind:this={canvas} />
<div class="sticky-btns">
  <button on:click={shootConfetti} class="learnt-something">
    {shotsFired === 0
      ? `I learnt something!`
      : shotsFired < 5
      ? '🎉 Hooray! 😃'
      : shotsFired < 10
      ? "Fun isn't it? 😅"
      : "hire me and i'll put this on all your apps 👀"}
  </button>
  <button class="next-fact" on:click={nextFact}>Show me another!</button>
</div>

<style lang="scss">
  canvas {
    height: 0;
    width: 0;
    position: absolute;
  }

  // h3 {
  //   background: hsl(359, 58%, 39%);
  //   padding: 1rem;
  //   color: white;
  //   margin: 0;
  // }

  .fact {
    text-align: left;
    padding: 1rem 2rem;
    border: 1px solid rgba(128, 128, 128, 0.144);
    background: white;
    -webkit-box-shadow: inset 0px 5px 15px 0px hsla(0, 0%, 0%, 0.182);
    box-shadow: inset 0px -5px 15px 0px hsla(0, 0%, 0%, 0.182);
    height: 400px;
    overflow-y: scroll;
    border: 1px solid black;
    border-bottom: none;

    & :global(h2) {
      color: #9d2a2c;
      border-bottom: 4px solid #9d2a2c;
    }
  }

  .sticky-btns {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-top: none;

    border-radius: 0 0 8px 8px;
    overflow: hidden;

    & button {
      border-radius: 0;
      width: 50%;
      color: white;
    }
  }

  .learnt-something {
    background: hsl(79, 35%, 30%);
  }

  .next-fact {
    background: hsl(194, 35%, 30%);
  }
</style>
