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
      <el-main class=".main"></el-main>
    </el-container>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <LayoutPage  v-if="menu=='1-1'"/>
      <ContainerPage v-if="menu=='1-2'"/>
      <Button v-if="menu=='1-3'" />
      <Link v-if="menu=='1-4'"/>
    </el-drawer>
  </el-container>
</template>
<script>
import Menu from "./menu.vue";
import LayoutPackage from "@/pages/package/layout.vue";
import ContainerPackage from '@/pages/package/container.vue';
import ButtonPackage from "@/pages/package/button.vue";
import LinkPackage from '@/pages/package/link.vue'
export default {
  name: "Layout",
  components: {
    Menu,
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
    toggleMenu(key) {
      this.menu = key;
      this.drawer = true;
    },
    handleClose(done) {
      this.drawer = false;
    }
  }
};
</script>
<style lang="scss" scope>
@import "@/assets/style/flex.scss";
.header {
  @extend .between;
  padding: 12px 20px;
  border-bottom: 1px solid #ccc;
}
</style>