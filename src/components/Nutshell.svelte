<script lang="ts">
  import { fly } from 'svelte/transition';
  type Feature = { title: string; description: string };

  let isShowing = true;
  let index = 0;
  let chosenDirection = 1;

  const features: Feature[] = [
    {
      title: 'I love to code',
      description:
        "I have always had a passion for technology <i>(I've installed linux on almost every device i've owned - Wii, DS)</i>. I love to talk about code - let's have a chat!",
    },
    {
      title: 'I think about the user',
      description: `I love making experiences that <i>feel</i> good, with a keen focus on design heuristics, uncluttered interfaces and understandable UX`,
    },
    {
      title: 'I have my finger on the pulse',
      description:
        'I love using new tech! I keep myself up to date with the latest',
    },
    {
      title: 'I am an A11Y',
      description:
        'I believe equal access to technology should be given to people of all backgrounds and abilities and it is our responsibilities as devs to champion this',
    },
    {
      title: 'I am a developing developer',
      description: 'I thrive in environments where I can learn and teach',
    },
  ];

  function incIndex(inc: number) {
    if (inc === -1 && index === 0) index = features.length;
    index += inc;

    isShowing = false;
    chosenDirection = inc;
    setTimeout(() => {
      isShowing = true;
    }, 500);
  }

  $: currentFeature = features[index % features.length];
</script>

<section>
  <h2 title="help i'm in a nutshell!">Doug in a nutshell</h2>
  <div id="flex-wrapper">
    <!-- <button id="feature-prev" on:click={() => incIndex(-1)} aria-label="next">
      &lt;
    </button> -->
    <button
      id="feature-next"
      on:click={() => incIndex(1)}
      aria-label="previous"
    >
      &gt;
    </button>
    <div class="features-container">
      {#if isShowing}
        <div
          id="feature"
          in:fly={{ x: 300 * chosenDirection, duration: 300 }}
          out:fly={{ x: -300 * chosenDirection, duration: 300 }}
        >
          <h3>{currentFeature.title}</h3>
          <p>{@html currentFeature.description}</p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  h2 {
    padding: 0;
    margin: 0;
  }

  #feature-prev {
    display: inline;

    float: left;
  }

  section {
    border-radius: 1rem;
    background: hsl(233, 50%, 90%);
    padding: 1rem;
    overflow: hidden;
  }

  #flex-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }
  .features-container {
    height: 200px;
    /* border: 1px solid grey; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }

  #feature {
    transition: transform 200ms ease-in-out;
  }

  #feature-prev:hover ~ .features-container #feature {
    transform: translateX(10px);
  }
  #feature-next:hover ~ .features-container #feature {
    transform: translateX(-10px);
  }
</style>
