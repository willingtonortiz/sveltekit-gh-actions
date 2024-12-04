<script lang="ts">
  import { createCounterStore } from '$lib/presentation/runes/counter.svelte';

  const counter = createCounterStore();

  $effect(() => {
    if (counter.count > 10) {
      alert('You have reached the maximum count!');
    }
  });
</script>

<div>
  <h1>Counter</h1>

  <p>Current count is {counter.count}</p>

  <button onclick={counter.increment}>Increment</button>

  <button onclick={counter.decrement}>Decrement</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
