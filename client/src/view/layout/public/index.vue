<template>
    <div class="public-layout">
        <Header />
        <div class="header-mg">

        </div>
        <router-view />
        <Footer />
    </div>
</template>


<script setup>
import Header from '@/view/layout/components/Header.vue'
import Footer from '@/view/layout/components/Footer.vue'

</script>

<style scoped lang="scss">
.public-layout {
    .header-mg {
        padding-top: 133px;
    }
}
</style>