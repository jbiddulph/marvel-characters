<template>
  <div id="nav">
    <router-link to="/">Marvel Characters</router-link>
  </div>
  <router-view/>
</template>

<style>
html, body {
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: #ff0066;
}
#nav {
  margin: 0 auto;
  text-align: center;
  width: 100%;
}

</style>
