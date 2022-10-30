<script lang="ts">
  import Prism from 'prismjs';
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
          description: `
Some data types in JavaScript are iterable by nature - e.g <code class='inline-code'>Array</code>, <code class='inline-code'>TypedArray</code>, <code class='inline-code'>Map</code>, <code class='inline-code'>Set</code>, <code class='inline-code'>NodeList</code> among some others . In order to be iterable an object must adhere to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol" target="_blank" rel="noreferrer">
iterator protocol
</a> <i>(meaning they must implement the <code class='inline-code'>@@iterator</code> method)</i>. 
<br/>
In the above example we're creating a "String Iterator" which has <code class='inline-code'>.next()</code>, <code class='inline-code'>.return()</code> and <code class='inline-code'>.throw()</code> methods. These methods are used under the hood by language features like the <code class='inline-code'>for...of</code> loop and the spread operator! 
`,
        },
        {
          title: 'Generators',
          snippet: `function* createNumGenerator(start, end) {
	while (start <= end) {
		yield start;
		start++;
	}
}

console.log(createNumGenerator); // [GeneratorFunction: createNumGenerator]

const oneToFiveGenerator = createNumGenerator(1, 5);

console.log(oneToFiveGenerator); // Object [Generator] {}`,
          description: `Notice how i'm using function* right at the start there? This is a <code class='inline-code'>GeneratorFunction</code>. Calling this function returns a Generator Object!

This object can be iterated over and will call the function on each iteration.

We can call the next value in the iteration manually by using the <code class='inline-code'>.next()</code> method

<pre class='language-javascript'><code class='language-javascript'
    >${Prism.highlight(
      `const firstResult = oneToFiveGenerator.next();

console.log(firstResult); // { value: 1, done: false }`,
      Prism.languages.javascript,
      'javascript'
    )}</code
  >
</pre>

The strange difference between the way this generator executes and the way normal functions run is that it will execute line-by-line until it reaches a <code class='inline-code'>yield</code> keyword. At this point it will pause the execution and yield (give back) a results object to wherever it was called. When we iterate again the code will resume from the yield keyword and execute until it reaches the next one.`,
        },
        {
          title: 'Optional properties',
          snippet: `const dougsObj = {
  ...(true && { addMe: 'hello!' }),
  ...(false && { ignoreMe: 'shh!' }),
};`,
          description: `While it's arguably not the <i>most</i> readable syntax you can optionally add properties to an object using the above syntax!`,
        },
      ],
    },
    {
      tech: 'TypeScript',
      facts: [
        {
          title: 'Template literal types',
          snippet: `type Colour = 'red' | 'blue' | 'green' | 'neutral';
type Character = 'fox' | 'falco' | 'ness' | 'peach' | 'cpt.falcon';

type SelectableCharacter = \`\${Character}_\${Colour}\`;
`,
          description: `You can create an exponential amount of types by
using a syntax identical to string template literals! <br/><br/>
The above code generates <b>twenty types</b>!
<pre class='language-javascript'> <code class='language-javascript'>${Prism.highlight(
            `type SelectableCharacter = "fox_red" | "fox_blue" | "fox_green" | "fox_neutral" | "falco_red" | "falco_blue" | "falco_green" | "falco_neutral" | "ness_red" | "ness_blue" | "ness_green" | "ness_neutral" | ... 7 more ... | "cpt.falcon_neutral"`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>`,
        },
      ],
    },
    {
      tech: 'React',
      facts: [
        {
          title: 'Cancelling fetch requests',
          snippet: `
const Example = () => {
  useEffect(() => {
    const cancellationToken = new AbortController();
    const signal = cancellationToken.signal;
    fetch('api.hellowell.example', { signal: signal })
      .then((res) => res.json())
      .then((apiData) => {
        // do stuff with data here...
      });

    return () => cancellationToken.abort();
  }, []);

  return <div>{/* markup here... */}</div>;
};
`,
          description: `When we make api calls in a <code class="inline-code">useEffect</code> the promise might resolve after the component has unmounted / we've left the page (more likely with slow connections).<br/>
Or perhaps we're fetching with a parameter and making lots of different requests rapid fire - this would trigger multiple setStates and the content rendered might look like it's desperately trying to catch up 😩.<br/><br/>
We can use an <code class="inline-code">AbortController</code> to pass a <code class="inline-code">signal</code> to our <code class="inline-code">fetch</code> and cancel the request on unmount!
A returned function from a useEffect is triggered when the component is unmounted (removed from the page). This is useful for running “cleanup operations like we have here!`,
        },
        {
          title: 'Custom Hooks',
          snippet: `const { facts } = useFacts()`,
          description: `I first learnt React using classes and the this.<code class="inline-code">setState()</code> pattern that was in use up until React 16.

For me Hooks made it far easier to handle multiple states in a single component and simplified the <code class="inline-code">componentDidUpdate</code> lifecycle with useEffect.

Creating custom hooks felt like something that would be difficult to grasp but it’s more straight forwards than you might think!

Lets start with a straight forward component that is making an API request on mount using a user_id that has been passed in as a prop.

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `import { useState, useEffect } from 'React';
import * as api from '../api.js';

const UserCard = ({ user_id }) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return (
    // UI...
    )
};`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>


Cool! So this:

    <ul>
      <li>
        Fetches user data on mount and whenever the <code class="inline-code">user_id</code> changes
        </li>
        <li>Uses <code class="inline-code">userInfo</code> to store that data</li>
        <li>Uses <code class="inline-code">setUserInfo</code> to handle state updates and trigger a re-render </li>
        <li>when new user data is put into state.</li>
    </ul>

Now imagine we are wanting to repeat this behaviour elsewhere in our code

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `import { useState, useEffect } from 'React';
import * as api from '../api.js';

const ProfileDropdown = ({ user_id }) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return (
    // different UI...
    )
};`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>

Yes I did just copy-paste that in. Yes it’s not DRY!

If any changes are made to our backend that impacts how we’d fetch the data from the frontend we’d have to change our code in two places 😩

Lets extract this logic into a custom hook.
<ol>
      <li>Make a function</li>
      <li>Put all state and lifecycle logic you want to use</li>
      <li>return only what you need!</li>
      <li>export the function so it can be reused wherever!</li>
</ol>

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `// src/hooks/useUserInfo.js
import { useState, useEffect } from 'React';
import * as api from '../api.js';

const useUserInfo = (user_id) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return userInfo;
};

export default useUserInfo;`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>
  
Notice how we are only exposing the userInfo out of this custom hook? Put in user_id, get out userInfo - that’s simple!

We can now use it anywhere we want and don’t have to double check how we’ve implemented it elsewhere.

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `import useUserInfo from '../hooks/useUserInfo';

const UserCard = ({ user_id }) => {
  const userInfo = useUserInfo(user_id);
  
  return (
    // UI...
    )
  };
  
  // elsewhere...
import useUserInfo from '../hooks/useUserInfo';

const ProfileDropdown = ({ user_id }) => {
  const userInfo = useUserInfo(user_id);
  
  return (
    // different UI...
    )
};`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>
      
I’m a big fan though there are some potential downsides to be considered before you start extracting and abstracting your hooks.

Pros:

    Less code in components
    Can reuse common patterns across an application

Cons

    Abstractions obstruct the implementation and ”useUserInfo” doesn’t give a good indication on how it works behind the scenes
    Could be difficult to allow variations on the behaviour

Here’s one slightly more complex example

We’re building a marketplace and want to create a custom hook to handle fetching of items, filtering by category as well as provide loading and error patterns

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `import { useEffect, useState } from 'react';
import * as api from '../utils/api';

const useMarketplaceItems = (selectedCategory) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    api
    .getItems(selectedCategory)
    .then((items) => {
      setItems(items);
      setIsLoading(false);
      setIsErrored(null);
    })
    .catch((err) => {
      setIsLoading(false);
      setIsErrored(err);
    });
  }, [selectedCategory]);
  
  return { items, isLoading, isErrored };
};
  
export default useMarketplaceItems;`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>

Here we’re returning an object with the items as well as isLoading and isErrored

Everything is handled in our custom hook and all we need to do is consume it wherever we want!

<pre class='language-javascript'><code class='language-javascript'>${Prism.highlight(
            `import useMarketplaceItems from '../hooks/useMarketplaceItems';

const ItemsList = () => {
const [selectedCategory, setSelectedCategory] = useState('seasonal');
const { items, isLoading, isErrored } = useMarketplaceItems(selectedCategory);

return (
  // UI here...
  )
};`,
            Prism.languages.javascript,
            'javascript'
          )}</code></pre>
`,
        },
      ],
    },
    { tech: 'NextJS', facts: [] },
    { tech: 'NodeJs', facts: [] },
    { tech: 'Express', facts: [] },
    { tech: 'PSQL', facts: [] },
    { tech: 'HTML5', facts: [] },
    {
      tech: 'CSS',
      facts: [
        {
          title: 'HSL',
          description: `Here is why you should be using hsl() for all your css colour needs :point_right: :sunglasses: :point_right:
When styling a page it's very likely that you want to use colours that complement each other
with hsl() it's super easy to create nice gradients and colours that match your “theme”
Just pick a hue (using the 360º colour wheel) and just change the lightness% and saturation%!
nice colours for freeeeeee`,
          snippet: '',
        },
      ],
    },
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
  <p>Click to learn something new!</p>
  <ul class="tech-list">
    {#each tech as technology, index}
      {#if technology.facts.length > 0}
        <li>
          <button
            on:click={() => setOpenIndex(index)}
            class={`has-facts ${openIndex === index && 'open-fact'}`}
            >{technology.tech}</button
          >
          {#if openIndex === index}
            <div transition:slide={{ duration: 300, easing: quintOut }}>
              <FactCarousel facts={technology.facts} />
            </div>
          {/if}
        </li>
      {:else}
        <li>
          <p>{technology.tech}</p>
        </li>
      {/if}
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

  li {
    margin: 10px 0;
  }

  button {
    width: 100%;
  }

  .has-facts {
    border: 1px solid #9d2a2c;
  }

  .open-fact {
    background: #560b0e;
    color: white;
    border-radius: 1rem 1rem 0 0;
  }
</style>
