<template>
    <div class="infinite-scroll-blog-wrapper">
        <h1>My Blog</h1>

        <div class="filter-container">
            <input
                type="text"
                id="filter"
                class="filter"
                placeholder="Filter posts..."
            />
        </div>

        <div id="posts-container">
            <div class="post" v-for="(post, index) in posts">
                <div class="number">{{ post.id }}</div>
                <div class="post-info">
                    <h2 class="post-title">{{ post.title }}</h2>
                    <p class="post-body">{{ post.body }}</p>
                </div>
            </div>
        </div>

        <div class="loader" ref="loaderRef" :class="showLoader ? 'show' : ''">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { sleep } from '@/helper';
import { defineComponent, onMounted, Ref, ref } from 'vue';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default defineComponent({
    name: 'Infinite Scroll Blog',
    setup(props, { attrs, slots, emit, expose }) {
        const limit = ref(5);
        const page = ref(1);
        const posts: Ref<Post[]> = ref([]);
        const showLoader = ref(false);
        const observer = ref();
        const loaderRef = ref(null);

        const getPosts = async () => {
            showLoader.value = true;
            setTimeout(async () => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=${limit.value}&_page=${page.value}`
                );
                page.value++;
                posts.value = await res.json();
                showLoader.value = false;
            }, 2000);
        };
        getPosts();

        onMounted(() => {
            const options = {};
            observer.value = new IntersectionObserver(async ([entry]) => {
                if (entry && entry.isIntersecting) {
                    console.log('intersected');
                    await getPosts();
                }
            }, options);

            observer.value.observe(loaderRef.value);
        });
        return {
            posts,
            showLoader,
            loaderRef,
        };
    },
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.infinite-scroll-blog-wrapper {
    background-color: #296ca8;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 100vh;
    margin: 0;
    padding-bottom: 100px;
    overflow: auto;
    position: relative;
}

h1 {
    margin-bottom: 0;
    text-align: center;
}

.filter-container {
    margin-top: 20px;
    width: 80vw;
    max-width: 800px;
}

.filter {
    width: 100%;
    padding: 12px;
    font-size: 16px;
}

.post {
    position: relative;
    background-color: #4992d3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 20px;
    margin: 40px 0;
    display: flex;
    width: 80vw;
    max-width: 800px;

    .post-title {
        margin: 0;
    }

    .post-body {
        margin: 15px 0 0;
        line-height: 1.3;
    }

    .post-info {
        margin-left: 20px;
    }

    .number {
        position: absolute;
        top: -15px;
        left: -15px;
        font-size: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        color: #296ca8;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 10px;
    }
}

.loader {
    opacity: 0;
    display: flex;
    transition: opacity 0.3s ease-in;

    &.show {
        opacity: 1;
    }
}

.circle {
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    animation: bounce 0.5s ease-in infinite;

    &:nth-of-type(2) {
        animation-delay: 0.1s;
    }

    &:nth-of-type(3) {
        animation-delay: 0.2s;
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>
