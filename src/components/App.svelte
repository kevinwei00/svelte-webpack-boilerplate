<style src="./App.scss"></style>

<script>
  export let name;
  import image from 'assets/svelte-logo-horizontal.svg';
</script>

<div class="container">
  <h1>Hello {name}!</h1>
  <br />
  <img src="{image}" alt="svelte" />
</div>
