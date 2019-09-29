<template>
  <div class="demo-box">
    <div id="demo"></div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  name: "Demo",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      subs: state => state.components.subs
    })
  },
  watch: {
    subs: {
      handler(val, oldVal) {
        if (!val) return;
        this.render();
      },
      deep: true
    }
  },
  methods: {
    render() {
      // 做2套代码存储，一套用于复制代码，一套用于集成库的功能
      let templateStart = "<div id='demo'>",
        templateEnd = "</div>";
      for (let value of this.subs) {
        templateStart += value.template;
      }
      const template = templateStart + templateEnd;
      var Component = Vue.extend({
        template
      });
      // 创建 Profile 实例，并挂载到一个元素上。
      new Component().$mount("#demo");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/style/color.scss";
.demo-box {
  width: calc(100% - 300px);
  #demo {
    width: 100%;
    .el-row {
      border: 1px solid $gray-1;
      background-color: $gray-1;
      cursor: pointer;
    }
    .el-col {
      border: 1px solid $gray-2;
      background-color: $gray-2;
      cursor: pointer;
    }
  }
}
</style>