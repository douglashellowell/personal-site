<script lang="ts">
  import SectionTitle from './SectionTitle.svelte';

  const confident = [
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'Express',
    'PSQL',
    'React',
    'NextJS',
    'Svelte',
    'HTML5',
    'CSS',
    'Jest',
    'Mocha/Chai',
    'RESTful APIs',
    'CSS-in-JS',
    'Unix OS',
  ];

  const someExperience = [
    'C#',
    'ASP.NET',
    'MongoDB',
    'Terraform',
    'AWS',
    'Firebase',
    'JSON Web Tokens',
    'Vite',
    'Webpack',
    'MDX',
    'Web Sockets',
  ];
</script>

<section>
  <SectionTitle>Tech Stack</SectionTitle>

  <div>
    <h3>I am confident with:</h3>
    <ul>
      {#each confident as technology}
        <li>{technology}</li>
      {/each}
    </ul>
    <h3>I have some experience with:</h3>
    <ul>
      {#each someExperience as technology}
        <li>{technology}</li>
      {/each}
    </ul>
  </div>
</section>

<style lang="scss">
  //   section {
  //     border-radius: 8px;
  //     background: #fff;
  //   }
  div {
    width: 80%;
    margin: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    flex-grow: 1;
    padding: 10px 30px;
    margin: 5px;
    border: 1px solid hsl(359, 57%, 59%);
    background: hsl(0, 0%, 100%);
    border-radius: 8px;
  }
</style>
