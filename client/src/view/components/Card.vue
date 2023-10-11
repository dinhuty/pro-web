<template>
    <div class="card">
        <div class="card__img">
            <img :src="require('@/assets/images/prd2.png')" alt="">
        </div>
        <div class="card__line">
            <img :src="require('@/assets/svg/line-prd.svg')" alt="">
        </div>
        <div class="card__desc">
            <div class="card__title">
                <p>
                    Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB
                    RAM)
                </p>
            </div>

            <div class="card__info">
                <div class="card__price">
                    $38.00
                </div>
                <div class="card__rating">
                    <span class="box-text">
                        4.9
                    </span>
                    <div class="box-icon">
                        *
                    </div>
                </div>
            </div>
        </div>
        <span class="card__discount">
            -30%
        </span>
    </div>
</template>
<script setup>
defineProps({

})
</script>
<style lang="scss" scoped>
.card {
    position: relative;
    display: flex;
    padding: 24px 16px 42px 16px;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    background: var(--White, #FFF);
    box-shadow: $box-shadow-prd;

    &__img {
        width: 100%;
        overflow: hidden;

        img {
            width: 100%;
            cursor: pointer;
            transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:hover {
                transform: translateY(-5px) scale(.95);
            }
        }
    }

    &__title {
        overflow: hidden;
        align-self: start;
        cursor: pointer;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;

        p {
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;

            &:hover {
                color: $azure;
            }
        }
    }

    &__line {
        width: 100%;

        img {
            width: 100%;
        }
    }

    &__desc {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        gap: 16px;
    }

    &__info {
        display: flex;
        justify-content: space-between;

        .card__price {
            font-size: 16px;
            font-weight: 500;
            color: $red;

        }

        .card__rating {
            display: flex;
            gap: 5px;
            font-weight: 600;
            font-size: 14px;

            .box-icon {
                color: $yellow;
            }
        }
    }

    &__discount {
        position: absolute;
        display: flex;
        padding: 4px 6px;
        align-items: center;
        gap: 10px;
        left: 0;
        top: 20px;
        font-size: 15px;
        border-radius: 0px 8px 8px 0px;
        background: var(--primary-secondary-secondary-100, #FDDBC9);
        color: var(--primary-secondary-secondary-400, #F45E0C);
    }
}
</style>