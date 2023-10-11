<template>
    <section class="brands">
        <section-heading titleText="Thương hiệu nổi tiếng" navText="View all" navTo="/products" />
        <div class="box-brands">
            <div class="brands-item" v-for="brand in brands" :key="brand.name">
                <img :src="brand.img" alt="">
            </div>
        </div>
        <div class="brands-banner">
            <!-- <video ref="videoElement" :src="require('@/assets/videos/large_2x.mp4')" muted autoplay></video> -->
        </div>
    </section>
</template>

<script setup>
import SectionHeading from '@/view/components/SectionHeading.vue';
import brands from '@/utils/brands'
// import { ref, onMounted, onUnmounted } from 'vue';
// const videoElement = ref(null);

// const playVideo = () => {
//     if (!videoElement.value.paused) return;
//     videoElement.value.play();
// };

// const pauseVideo = () => {
//     if (videoElement.value.paused) return;
//     videoElement.value.pause();
// };

// const handleScroll = () => {
//     const video = videoElement.value;
//     const rect = video.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     if (rect.top <= windowHeight && rect.bottom >= 0) {
//         playVideo();
//     } else {
//         pauseVideo();
//     }
// };

// onMounted(() => {
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
// });

// onUnmounted(() => {
//     window.removeEventListener('scroll', handleScroll);
// });
</script>
<style scoped lang="scss">
.brands {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: $light-primary;
    border-radius: 8px 8px 20px 20px ;
    .box-brands {
        display: grid;
        grid-template-columns: repeat(6, 1fr);

        @include min-lg {
            grid-template-columns: repeat(7, 1fr);
        }

        .brands-item {
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1;
            padding: 15px;
            width: 100%;
            transition: all .3 ease-in;
            cursor: pointer;

            @include min-sm {
                padding: 10px;
            }


            @include min-lg {
                padding: 30px;
            }

            @include min-xl {
                padding: 40px;
            }


            img {
                width: 100%;

                &:hover {
                    transform: scale(1.03);
                }
            }
        }
    }

    &-banner {
        width: 100%;

        video {
            width: 100%;
            border-radius: 8px;
        }
    }
}
</style>