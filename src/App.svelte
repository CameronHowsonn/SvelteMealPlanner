<script>
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./layout/Header.svelte";
  import Categories from "./lib/categories/Categories.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import CategoryPage from "./pages/CategoryPage.svelte";
  export let url = "";
</script>

<Router {url}>
  <main>
    <Sidebar />
    <div class="main-content">
      <Header />
      <Route path="/">
        <div class="category-container">
          <Categories />
        </div>
      </Route>
      <Route path="category/:title" component={CategoryPage} />
    </div>
  </main>
</Router>

<style>
  main {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  .main-content {
    flex: 1 1 auto;
  }

  .category-container {
    overflow: hidden;
  }
</style>
