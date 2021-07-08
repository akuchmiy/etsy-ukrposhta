<template>
  <div>
    <h1>Sorry :(</h1>
    <h2>But there is no such page</h2>
    <p>
      Visit
      <router-link to="/">Home</router-link>
    </p>
  </div>
</template>

<style scoped>
  div {
    text-align: center;
  }
  h1 {
    color: Blue;
    font-size: 50px;
  }
  p {
    font-size: 1.5em;
  }
  a {
    display: inline-block;
    color: blue;
    text-decoration: none;
    transform: translate(0px, 0px);
    transition: all 1s;
  }

  a:hover {
    transform: translate(0, -3px);
    text-decoration: underline;
  }
</style>
