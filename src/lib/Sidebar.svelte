<script>
  import { Link } from "svelte-routing";
</script>

<section class="nav-container">
  <div class="nav-container__title">
    <div class="nav-container__title--inner">
      <h1>Plain<span class="green">Meals</span></h1>
      <h5>Easy Meals, Easy Life.</h5>
    </div>
  </div>
  <nav class="nav">
    <Link to="/" class="nav__link">Home</Link>
    <Link to="/" class="nav__link">Home</Link>
    <Link to="/" class="nav__link">Home</Link>
    <Link to="/" class="nav__link">Home</Link>
  </nav>
</section>

<style lang="scss">
  .nav-container {
    flex: 0 0 18.75%;
    display: flex;
    flex-direction: row;
    background: $white;
    flex-wrap: wrap;
    position: sticky;
    left: 0;
    top: 0;
    height: 100%;
  }

  .nav {
    padding: 2em;
    display: flex;
    flex-wrap: wrap;
  }

  :global(.nav__link) {
    flex: 0 0 100%;
    text-decoration: none;
    margin-bottom: 1em;
  }

  .nav-container__title {
    flex: 0 0 100%;
    background-color: $navy;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    flex-wrap: wrap;
    aspect-ratio: 270 / 205;
  }
</style>
