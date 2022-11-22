<section class="header">
  <div class="header-inner">
    <div class="header-inner__title">
      <p>Hey Cameron,</p>
      <h1>Discover Recipes</h1>
    </div>
    <div class="header-inner__search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for Recipes"
      />
    </div>
  </div>
</section>

<style lang="scss">
  .header {
    padding: 3em;
    border-bottom: 1px solid rgba($slate, 0.5);
    width: 100%;
  }

  .header-inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;
    justify-content: space-around;
  }

  .header-inner__title {
    margin-right: auto;
  }

  #search {
    border: 1px solid rgba($slate, 0.5);
    color: $slate;
    border-radius: 3px;
    padding: 0.35em;
    &::placeholder {
      font-family: "Open Sans", sans-serif;
      font-size: 1em;
    }
  }
</style>
