<template>
  <div id="app">
    <div id="nav">
      <router-link
        :to="item.router"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.name }}</router-link
      >
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class app extends Vue {
  $http: any;
  private data() {
    return {
      list: [
        {
          name: "Home",
          router: "/",
        },
        {
          name: "About",
          router: "/about",
        },
      ],
    };
  }
  private mounted() {
    let path = "http://localhost:8080/api/v1/gateway_manager/test";
    let params = { a: 1, b: 2 };
    console.log(this.$http.get(path, params));
    this.$http.get(path, params).then((res: any) => {
      console.log(res);
    });
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
