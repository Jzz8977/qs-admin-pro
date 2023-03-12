<template>
  <div class="full-width">
    <q-list bordered>
      <q-item clickable tag="a" v-for="item in props.menuList" :key="item.name">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  menuList: Array
});
console.log(props.menuList)

</script>