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
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({})
export default class app extends Vue {
  $http: any;
  list: any;
  a: any;
  
  @Provide() b: any = true;
  private data() {
    return {
      a: 1,
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
  private test(a: any) {
    console.log(a);
  }
  // 生命周期
  private mounted() {
    let a: any = "hhhhhhhhhh";
    this.test(a);
    console.log(this.a);
    console.log(this.list);
    let path = "http://localhost:8080/api/v1/gateway_manager/test";
    let params = { a: 1, b: 2 };
    this.$http.get(path, params).then((res: any) => {
      console.log(res);
    });
    let path2 = "http://localhost:8080/api/v1/gateway_manager/testPost";
    let params2 = { name: "xiaoyu" };
    this.$http.post(path2, params2).then((res: any) => {
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
