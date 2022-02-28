<template>
    <MovieSeatBooking />
    <HangMan />
    <InfiniteScrollBlog />
</template>
<script lang="ts">
import MovieSeatBooking from '@/components/MovieSeatBooking.vue';
import { defineComponent } from 'vue';
import HangMan from '@/components/HangMan.vue';
import InfiniteScrollBlog from '@/components/InfiniteScrollBlog.vue';

export default defineComponent({
    components: { MovieSeatBooking, HangMan, InfiniteScrollBlog },
    name: 'Main',
    setup(props, { attrs, slots, emit, expose }) {
        return {};
    },
});
</script>

<style scoped lang="scss"></style>
