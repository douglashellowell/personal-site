<hr />
<footer>
  <p>Made with ♥ using</p>

  <ul>
    <li>
      <img src="icons/svelte-logo.png" alt="svelte logo" />
      <span>Svelte</span>
    </li>
    <li>
      <img src="icons/ts-logo.png" alt="typescript logo" />
      <span>Typescript</span>
    </li>
    <li>
      <img src="icons/scss-logo.png" alt="sass logo" />
      <span>SCSS</span>
    </li>
    <li>
      <img src="icons/gh-logo.png" alt="github logo" />
      <span>Github Pages</span>
    </li>
  </ul>

  <p>
    thanks to <a
      target="_blank"
      rel="noreferrer"
      href="https://pattern.monster/">pattern.monster</a
    > for the funky bg!
  </p>
</footer>

<style lang="scss">
  footer {
    padding-top: 1rem;
  }

  p {
    color: hsl(208deg, 17%, 50%);
  }

  ul {
    padding: 0;
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    color: hsl(208deg, 17%, 50%);
  }
  li {
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
  }

  img {
    height: 30px;
  }
</style>
