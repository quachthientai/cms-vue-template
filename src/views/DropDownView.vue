<script>
import Dropdown from '@/components/Dropdown/Dropdown.vue'

export default {
  name: 'DropDownView',
  data() {
    return {
      items: [
        {
          title: 'to radio',
          routerName: 'radio',
          appendIcon: 'mingcute:unlock-line',
          prependIcon: 'mingcute:unlock-line'
        },
        {
          title: 'to button',
          notvalidKey: 'sadsasd'
        }
      ]
    }
  },
  components: {
    Dropdown
  }
}
</script>

<template>
  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown dropdown-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown dropdown-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown dropdown-outline-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown dropdown-outline-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown dropdown-outline-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <hr class="border-2 border-red-200 mt-5" />

  <div class="flex ml-2 mt-5">
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-sm dropdown-outline-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <hr class="border-2 border-red-200 mt-5" />

  <div class="flex ml-2 mt-5">
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-primary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-secondary"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-warning"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-success"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-danger"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-info"
      :itemList="items"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <div class="flex ml-2 mt-2">
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-primary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-secondary"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-warning"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-success"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-danger"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
    <Dropdown
      dropDownClass="dropdown btn-lg dropdown-outline-info"
      :itemList="items"
      split="true"
      text="dropdown"
      class="ml-3"
    />
  </div>

  <!-- fall back -->
  <Dropdown
    dropDownClass="dropdown btn-lg dropdown-outline-info"
    :itemList="items"
    split="true"
    text="dropdown"
    class="ml-3"
  />

  <!-- custom -->
  <Dropdown dropDownClass="dropdown dropdown-primary" class="m-3" text="dropdown">
    <template v-slot:dropdown-menu-slot>
      <ul class="dropdown__menu">
        <li class="dropdown__item">assa</li>
        <li class="dropdown__item">aaa</li>
        <li class="dropdown__item">aaazzz</li>
      </ul>
    </template>
  </Dropdown>
</template>

<style lang="scss"></style>
