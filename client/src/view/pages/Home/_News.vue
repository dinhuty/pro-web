<template>
    <section class="news">
        <section-heading titleText="Tin tức" navText="View all" navTo="/products" />
        <div class="news-main">
            <div class="card" v-for="n in 3" :key="n">
                <div class="card-img">
                    <img :src="require('@/assets/images/news.png')" alt="">
                </div>
                <div class="card-info">
                    <div class="card-time">
                        <div class="timer-left">
                            <span class="icon">
                                <font-awesome-icon icon="calendar" />
                            </span>
                            <span class="time">
                                August , 8 , 2023
                            </span>
                        </div>
                        <div class="timer-right">
                            <span class="icon">
                                <font-awesome-icon icon="clock" />
                            </span>
                            <span class="time">
                                August , 8 , 2023
                            </span>
                        </div>
                    </div>
                    <div class="card-title">
                        <p>
                            Meta Platforms plans to release free software that introducing software to help developers
                        </p>
                    </div>
                    <div class="card-desc">
                        <p>
                            Owning a headphone could mean a different thing for different people. For some, it act as a
                            fashion statement. It’s easy to spot these people, the headphone are almost always just hanging
                            around the neck.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from '@/view/components/SectionHeading.vue';
</script>

<style lang="scss" scoped>
.news {
    background-color: $light-primary;
    padding: 10px;
    border-radius: 8px ;

    &-main {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(1, 1fr);
        padding: 0 16px;
        @include min-lg {
            grid-template-columns: repeat(3, 1fr);
            padding: 0;
        }

        .card {
            display: flex;
            flex-direction: column;
            gap: 16px;
            border-radius: 8px;
            border: 1px solid $border-section;
            overflow: hidden;

            &-img {
                height: 200px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-info {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 0 16px 16px 16px;

                .card-time {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: $gray;

                    .timer-left {
                        .icon {
                            font-size: 14px;
                            padding-right: 5px;
                        }

                        .time {
                            font-size: 12px;
                            font-style: italic;
                            line-height: 20px;
                        }
                    }

                    .timer-right {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: $gray;

                        .icon {
                            font-size: 14px;
                            padding-right: 5px;
                        }

                        .time {
                            font-size: 12px;
                            font-style: italic;
                            line-height: 20px;
                        }
                    }
                }
            }

            &-title {
                font-size: 16px;
                font-weight: 500px;
                overflow: hidden;

                p {
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    overflow: hidden
                }
            }

            &-desc {
                overflow: hidden;
                align-self: start;

                p {
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                }
            }
        }

    }
}</style>