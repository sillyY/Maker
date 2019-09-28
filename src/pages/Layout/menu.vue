<template>
  <el-menu default-active="1-1"   class="el-menu-vertical-demo">
    <el-submenu v-for="(item, key) in menu" :key="key" index="item.index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.label}}</span>
      </template>
      <template>
        <div v-for="(value, idx) in submenu[item.index]" :key="idx">
          <el-menu-item :index="value.index" @click="toggleMenu(value.index)">{{value.label}}</el-menu-item>
        </div>
      </template>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: "Menu",
  props: {
    toggleMenu: {
      type: Function,
      required: true,
      default() {
        return function() {}
      }
    } 
  },
  data() {
    return {
      menu: [
        {
          index: 1,
          label: "Basis"
        },
        {
          index: 2,
          label: "Form"
        }
      ],
      submenu: {
        1: [
          {
            index: "1-1",
            label: "Layout布局"
          },
          {
            index: "1-2",
            label: "Container布局容器"
          },
          {
            index: "1-3",
            label: "Button按钮"
          },
          {
            index: "1-4",
            label: "Link文字链接"
          }
        ],
        2: [{
          index: "2-1",
          label: "Radio单选框"
        }]
      },
    };
  },
  mounted() {},
  methods: {}
};
</script>