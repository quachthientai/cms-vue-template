<script lang="ts">
// import Toast from '@/components/Toast/Toast.vue';



export default {
  name: 'ToastView',
  components: {

  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showToast() {
      this.$toast.success('Success!', {timeOut: 5000, position: 'bottom-center', onClickDismiss: true})
      // this.$toast.success('Success!', {timeOut: 4000, position: 'bottom-center', onClickDismiss: true})
      // this.$toast.success('Success!', {timeOut: 3000, position: 'bottom-center', onClickDismiss: true})
      // this.$toast.success('Success!', {timeOut: 2000, position: 'bottom-center', onClickDismiss: true})
      // this.$toast.success('Success!', {timeOut: 1000, position: 'bottom-center', onClickDismiss: true})
    },
    clearToast() {
      this.$toast.clear()
      // this.$toast.success('Success!', {timeOut: 5000, position: 'bottom-center', onClickDismiss: true})
    }
  }
}
</script>

<template>
  <div>This is toast view</div>
  <div class="flex flex-row-reverse me-3">
    <Button class="ms-3" btnClass="btn btn-warning" @click="showToast" text="show toast" />
    <Button class="ms-3" btnClass="btn btn-danger" @click="clearToast" text="clear toast" />
  </div>
  
</template>
