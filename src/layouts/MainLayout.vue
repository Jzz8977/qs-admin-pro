<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <SideMenu :menuList="menuListObj.menuList" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, reactive, onMounted,  } from 'vue'
import SideMenu from './menu/index.vue'
import '../mock/index.js'
import mockApi from '../api/mockApi.js'

export default defineComponent({
  name: 'MainLayout',
  components: {
    SideMenu
  },

  setup() {
    const leftDrawerOpen = ref(true)
    const menuListObj = reactive({
      menuList:[{
        title:'My',
        name:'My'
      }]
    })
    const loadMenuList = async () => {
      const res = await mockApi.findMenuList()
      menuListObj.menuList = res.data
      console.log(menuListObj.menuList)
    }
    onMounted(() => {
      loadMenuList()
    })

    return {
      menuListObj,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
