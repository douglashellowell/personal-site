<script lang="ts">
</script>

<section>
  <div>
    <h3>Resumé</h3>
  </div>

  <div class="resume-btn-container">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://docs.google.com/document/d/1vwO8z-mHtrvf66rdTbcJx4e-5CQ-44acxxl5_1GQbI8/edit?usp=sharing"
      >View on Google Docs
      <i class="fa-solid fa-eye" />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      download
      href="documents/DouglasHellowell.pdf"
      >Download
      <i class="fa-solid fa-download" />
    </a>
  </div>
</section>

<style lang="scss">
  section {
    padding: 1rem;
    color: hsl(359, 57%, 25%);
    display: flex;
    background: hsl(359, 57%, 89%);
    margin: 1rem 0;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border: 1px solid hsl(359, 57%, 79%);
  }

  a {
    border: 2px solid hsl(359, 57%, 59%);
    background: hsl(359, 57%, 69%);
    padding: 1rem;
    color: hsl(359, 57%, 97%);
    border-radius: 0.5rem;
    margin-left: 1rem;
    text-decoration: none;

    &:hover {
      background: hsl(359, 57%, 59%);
    }
  }

  h3 {
    display: inline;
  }

  @media only screen and (max-width: 590px) {
    section {
      flex-direction: column;
    }

    .resume-btn-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    a {
      margin: 10px 0;
    }
  }
</style>
