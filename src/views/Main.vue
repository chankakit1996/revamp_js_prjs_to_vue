<template>
    <ModalMenuSlider />
    <ExpenseTracker />
    <MovieSeatBooking />
    <HangMan />
    <InfiniteScrollBlog />
</template>
<script lang="ts">
import MovieSeatBooking from '@/components/MovieSeatBooking.vue';
import { defineComponent } from 'vue';
import HangMan from '@/components/HangMan.vue';
import InfiniteScrollBlog from '@/components/InfiniteScrollBlog.vue';
import ExpenseTracker from '@/components/ExpenseTracker.vue';
import ModalMenuSlider from '@/components/ModalMenuSlider.vue';

export default defineComponent({
    components: {
        MovieSeatBooking,
        HangMan,
        InfiniteScrollBlog,
        ExpenseTracker,
        ModalMenuSlider,
    },
    name: 'Main',
    setup(props, { attrs, slots, emit, expose }) {
        return {};
    },
});
</script>

<style scoped lang="scss"></style>
