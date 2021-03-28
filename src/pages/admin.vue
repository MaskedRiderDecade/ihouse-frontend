<template>
  <div>
    admin
    <admin-header><admin-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavFooter from './../components/NavFooter'
  import AdminHeader from './../components/AdminHeader'
  export default{
    name: 'admin',
    components:{
      NavFooter,
      AdminHeader
    }
  }
</script>