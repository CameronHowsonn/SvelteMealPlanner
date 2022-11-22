<script>
  // @ts-nocheck

  import { Router, Link, Route } from "svelte-routing";
  import Emoji from "svelte-emoji";
  export let category;

  const emojiMap = {
    Beef: "🥩",
    Chicken: "🍗",
    Dessert: "🧁",
    Lamb: "🐑",
    Miscellaneous: "❓",
    Pasta: "🍝",
    Pork: "🐷",
    Seafood: "🦐",
    Side: "🥔",
    Starter: "🥖",
    Vegan: "🥦",
    Vegetarian: "🍥",
    Breakfast: "🥓",
    Goat: "🐐",
  };
</script>

<a href={`/category/${category?.strCategory}`} class="category-card">
  <Emoji
    symbol={emojiMap[category?.strCategory]}
    label={category?.strCategory}
    class="category-card__emojo"
    style={"font-size: 2.5em;"}
  />

  <p class="category-card__title">
    {category?.strCategory}
  </p>
</a>

<style lang="scss">
  .category-card {
    flex: 0 0 calc(calc(100% / 8) - 1em);
    text-decoration: none;
    border: 1px solid rgba($slate, 0.2);
    padding: 1em 1em 0 1em;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: 3px;
    transition: all 0.45s ease-in-out;
    &:hover {
      background-color: $green;
      transform: translate(-0.5em, -0.5em) scale(1.05);
      box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.25);
      border: none;
      p {
        color: $white;
      }
    }

    span {
      font-size: 2em;
    }

    a {
      text-decoration: none;
    }

    p {
      margin: 0;
      position: absolute;
      bottom: 1em;
      text-overflow: ellipsis;
      width: 80%;
      overflow: hidden;
      color: $slate;
      font-weight: 500;
    }
    .category-card__emojo {
      font-size: 2em;
    }
  }
</style>
