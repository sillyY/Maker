<template>
  <el-container>
    <el-header class="header">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhammer" />
        </svg>
        <span class="ml-10">Maker</span>
      </div>

      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconset" />
        </svg>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <Menu :toggle-menu="toggleMenu" />
      </el-aside>
      <el-container class=".main">
        <el-header class="content-header">Header 区域</el-header>
        <el-container>
          <Demo />
          <Setting />
        </el-container>
      </el-container>
    </el-container>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <LayoutPackage :click-event="setComponent" v-if="menu=='1-1'" />
      <ContainerPackage v-if="menu=='1-2'" />
      <ButtonPackage v-if="menu=='1-3'" />
      <LinkPackage v-if="menu=='1-4'" />
    </el-drawer>
  </el-container>
</template>
<script>
import { mapMutations } from "vuex";
import Menu from "./menu.vue";
import Demo from "@/pages/content/demo.vue";
import Setting from "@/pages/content/setting.vue";
import LayoutPackage from "@/pages/package/layout.vue";
import ContainerPackage from "@/pages/package/container.vue";
import ButtonPackage from "@/pages/package/button.vue";
import LinkPackage from "@/pages/package/link.vue";
export default {
  name: "Layout",
  components: {
    Menu,
    Demo,
    Setting,
    LayoutPackage,
    ContainerPackage,
    ButtonPackage,
    LinkPackage
  },
  data() {
    return {
      drawer: false,
      direction: "ltr",
      menu: ""
    };
  },
  methods: {
    ...mapMutations(["SET_COMPONENT"]),
    setComponent(type) {
      this.$store.commit("SET_COMPONENT", type);
      this.drawer = false;
    },
    toggleMenu(key) {
      this.menu = key;
      this.drawer = true;
    },
    handleClose() {
      this.drawer = false;
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/style/flex.scss";
@import "@/assets/style/color.scss";
.header {
  @extend .between;
  padding: 12px 20px;
  border-bottom: 1px solid #ccc;
}
.content {
  &-header {
    border-bottom: 1px solid $gray-1;
  }
}
</style>