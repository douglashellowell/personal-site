<script lang="ts">
  export let projectName: string;
  export let techStack: string[] = [];
</script>

<h4>Project: {projectName}</h4>

<blockquote>
  <!-- <b>summary:</b>
        <br /> -->
  <slot name="summary">
    <p>missing summary...</p>
  </slot>
</blockquote>

<ul>
  {#each techStack as tech}
    <li>{tech}</li>
  {/each}
</ul>

<slot name="description">
  <p>missing description...</p>
</slot>
<!-- 
<style>
  blockquote {
    padding-top: 15px;
  }
</style> -->
