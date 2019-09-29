<template>
  <div class="warpper">
    <div class="ibox">
      <div class="ibox-title">
        <h3>Row-Col</h3>
      </div>
      <div class="ibox-content">
        <el-row type="flex" @click.native="clickEvent('row')">
          <el-col :span="8" class="col-1"></el-col>
          <el-col :span="14" class="col-2"></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutPackage",
  props: {
    clickEvent: {
      type: Function,
      default() {
        return function() {}
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/color.scss";
.common {
  min-height: 36px;
  border-radius: 4px;
  cursor: pointer;
}
.row {
  @extend .common;
  background-color: $gray-1;
}
.col-1 {
  @extend .common;
  background-color: $gray-2;
}
.col-2 {
  @extend .common;
  background-color: $gray-3;
}
</style>