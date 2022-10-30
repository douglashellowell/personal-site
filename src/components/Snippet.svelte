<script lang="ts">
  import Prism from 'prismjs';
  export let language: string;
  export let snippet: string;
  const snippetLanguage = `language-${language}`;
  $: trimmedSnippet = snippet.trim();
</script>

<pre class={snippetLanguage}><code class={snippetLanguage}
    >{@html Prism.highlight(
      trimmedSnippet,
      Prism.languages.javascript,
      'javascript'
    )}</code
  >
</pre>

<style>
  code {
    border: none;
  }
</style>
