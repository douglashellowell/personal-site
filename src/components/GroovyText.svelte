<script lang="ts">
  export let techRef: HTMLElement;

  function scrollToTech() {
    console.log(techRef);
    window.scrollTo({ top: techRef.offsetTop - 20, behavior: 'smooth' });
  }
</script>

<button on:click={scrollToTech} on:keydown={scrollToTech}>
  <p>Click here to learn something new!</p>
</button>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mansalva&display=swap');
  /* --bg-a: #1cb5e0; */
  button {
    background: none;
  }
  :root {
    --bg-one: #1cb5e0;
    --bg-two: #000046;
  }

  p {
    font-family: 'Mansalva', cursive;
    font-size: 1.6rem;
    text-transform: uppercase;
    background: hsl(144, 100%, 89%);
    background-repeat: no-repeat;
    background-size: contain;
    background: #8a2387;
    background: -webkit-linear-gradient(80deg, #f27121, #e94057, #8a2387);
    background: linear-gradient(80deg, #f27121, #e94057, #8a2387);

    background-size: cover;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
