<script lang="ts">
  const title = 'SvelteKit';
</script>

<header>
  <nav>
    <h1>{title}</h1>

    <div class="nav-links">
      <a href="/">Home</a>

      <a href="/about">About</a>
    </div>
  </nav>
</header>

<style>
  header {
    background-color: #333;
    padding: 1rem;
    color: white;
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #ddd;
  }
</style>
