<script>
  import ProjectSummary from './ProjectSummary.svelte';
  import SectionTitle from './SectionTitle.svelte';
</script>

<section>
  <!-- <h2>Previous Employment</h2> -->
  <SectionTitle>Previous Employment</SectionTitle>

  <h3>Northcoders <span>:: Software Engineer and Seminar Lead</span></h3>
  <a
    id="northcoders-link"
    href="https://northcoders.com/"
    target="_blank"
    rel="noreferrer"
  >
    northcoders.com
  </a>

  <details>
    <summary>Main duties</summary>
    <div class="details-content">
      <h4>Classroom</h4>
      <ul>
        <li>Delivering lectures and seminars</li>
        <li>Mentoring students</li>
        <li>Maintaining the curriculum</li>
        <li>Student and staff administration/management</li>
        <li>Research industry trends</li>
        <li>Spiking & evaluating new technologies</li>
      </ul>
      <h4>Internal Dev Team</h4>
      <ul>
        <li>Agile methodologies</li>
        <li>Working to a timeframe</li>
        <li>Developing to a brief</li>
        <li>Maintaining a live codebase</li>
        <li>Adhering to enforced style guidelines</li>
        <li>Onboarding junior devs</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>Tech Stack</summary>
    <div class="details-content">
      <h4>Curriculum</h4>
      <ul>
        <li>Git</li>
        <li>JavaScript</li>
        <li>PostgresQL</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Jest</li>
        <li>Mocha/Chai</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Heroku / Netlify</li>
        <li>HTML / CSS</li>
      </ul>
      <h4>Internal Projects</h4>
      <ul>
        <li>Git</li>
        <li>TypeScript</li>
        <li>NextJS</li>
        <li>React Testing Library</li>
        <li>AWS</li>
        <li>Tailwind</li>
        <li>Sass</li>
        <li>Prisma</li>
        <li>Jira</li>
      </ul>
    </div>
  </details>

  <p>
    Northcoders is a tech training organisation that offers a 13-week Developer
    Pathway course designed to take students from knowing basic programming
    concepts to being ready for their first job as a junior developer. Other
    products include focused 'language tracks' that introduce graduates to
    in-demand technologies like DevOps/Cloud, Go, C#, TypeScript
  </p>

  <p>
    I joined the Northcoders classroom team as a Junior Software Engineer and
    Tutor after completing the Developer Pathway course in February 2020, and
    was promoted to Software Engineer and Seminar Lead in early 2022
    <span role="img" aria-hidden="true">🚀</span>
  </p>
  <p>
    I helped keep the curriculum up to date and relevant alongside the current
    tech trends
    <i>
      (the release of the
      <a href="https://stateofjs.com/en-us/" target="_blank" rel="noreferrer">
        StateOfJS
      </a>
      /
      <a href="https://stateofcss.com/en-us/" target="_blank" rel="noreferrer">
        StateOfCSS
      </a>
      survey results is always a very exciting time for me).
    </i>
    <br />
    In the classroom team I planned and delivered lectures and seminars to groups
    of students introducing and exploring concepts before assigning the days 'Sprint'
    (daily task) for which we would provide on-demand support
    <br />
    Outside of my regular duties I took great pride in facilitating internal upskilling
    and development through lunch-and-learns, show-and-tells, open knowledge-sharing
    channels and providing mentoring and support to junior members of staff in my
    department.
  </p>

  <ProjectSummary
    projectName="Code Challenge App"
    techStack={[
      'React (create-react-app)',
      'ExpressJS',
      'PSQL (knex)',
      'CSS-in-JS (styled-components)',
      'Docker',
      'AWS',
    ]}
  >
    <p slot="summary">
      A platform to allow prospective students to take their Entry Challenge
      exam and for staff to monitor applicant progress and edit challenge
      content.
    </p>
    <p slot="description">
      When I first joined this project the platform was still in it's early
      stages and we needed to be ready to pivot as needs changed. Alongside a
      senior dev I assisted in writing a complex database migration in our
      relational database when the type of relationship between two tables had
      to be changed to many-to-many. I also helped build the component library
      and theming that used the React Context API and the CSS-in-JS library
      styled-components
    </p>
  </ProjectSummary>

  <ProjectSummary
    projectName="Learn to code platform"
    techStack={[
      'React (NextJS)',
      'Typescript',
      'PSQL (Prisma ORM)',
      'State Machines (XState)',
      'Tailwind CSS',
      'Storybook',
      'AWS',
      'Docker',
      'IAC (Terraform)',
      'Web workers',
    ]}
  >
    <p slot="summary">
      A platform designed to bring the previously outsourced onboarding of
      prospective students in-house to grant greater control over content, allow
      closer monitoring of applicant progress (including drop-off rate and other
      data) and allow integrations with services (e.g Hubspot) to automate
      processes handled by different departments at Northcoders
    </p>
    <p slot="description">
      My time on this project was spent split between maintaining and fixing
      bugs on the older platform as well as working towards the launch of the
      new platform. We developed our component library using an Atomic Design
      approach and composed a Storybook to display all of our beautiful
      components (if i do say so myself). We also worked on a backend
      authentication layer which handled cross-application authentication.
    </p>
  </ProjectSummary>

  <div class="nc-images">
    <a
      class="nc-feature"
      href="https://youtu.be/ExtnyNz743k?t=2521"
      target="_blank"
      rel="noreferrer"
      title="Kev showing off the Web Audio API"
    >
      <figure>
        <img
          src="images/lightningTalk1.jpg"
          alt="A Youtube screenshot of a lightning talk presentation on the web audio API, the presenter looks very excited"
        />
        <figcaption>Kev showing off the Web Audio API</figcaption>
      </figure>
    </a>
    <a
      class="nc-feature"
      href="https://www.youtube.com/watch?v=kIdd50GOFME"
      target="_blank"
      rel="noreferrer"
      title="Northcoders 5th Birthday celebratory Lightning Talks"
    >
      <figure>
        <img
          src="images/lightningTalk2.jpg"
          alt="A Youtube screenshot of a lightning talk presentation, the presenter is buzzing with anticipation"
        />
        <figcaption>
          Northcoders 5th Birthday celebratory Lightning Talks
        </figcaption>
      </figure>
    </a>
    <a
      class="nc-feature"
      href="https://www.youtube.com/watch?v=Yj_rlbTgJRA"
      target="_blank"
      rel="noreferrer"
      title="_anonym_ask - My NC Project!"
    >
      <figure>
        <img
          src="images/anonymask.jpg"
          alt="A Youtube screenshot of my graduation project"
        />
        <figcaption>
          Graduation project: _anonym_ask - a group engagement web app
        </figcaption>
      </figure>
    </a>

    <div class="nc-feature">
      <figure>
        <img src="images/passport.jpg" alt="Screenshot of a log in page" />
        <figcaption>NC Passport - Internal Dev Project</figcaption>
      </figure>
    </div>
  </div>
</section>

<style lang="scss">
  #northcoders-link {
    display: inline;
  }

  i,
  span {
    color: hsl(208, 17%, 50%);
  }

  section {
    text-align: left;
  }

  div.nc-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .nc-feature {
    width: 700px;
  }
  img {
    width: 100%;
  }

  details {
    border: 1px solid hsl(0, 0%, 90%);
    background: hsl(227, 20%, 90%);
    // padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
    overflow: hidden;
  }

  summary {
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background: hsl(227, 20%, 80%);
    }
  }

  div.details-content {
    padding: 0 1rem;
  }
</style>
