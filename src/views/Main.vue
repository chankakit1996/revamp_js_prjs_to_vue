<template>
    <div class="main-wrapper">
        <MemoryCards />
        <ModalMenuSlider />
        <ExpenseTracker />
        <MovieSeatBooking />
        <HangMan />
        <InfiniteScrollBlog />
    </div>
</template>
<script lang="ts">
import MovieSeatBooking from '@/components/movie-seat-booking/MovieSeatBooking.vue';
import { defineComponent } from 'vue';
import HangMan from '@/components/hang-man/HangMan.vue';
import InfiniteScrollBlog from '@/components/infinite-scroll-blog/InfiniteScrollBlog.vue';
import ExpenseTracker from '@/components/expense-tracker/ExpenseTracker.vue';
import ModalMenuSlider from '@/components/modal-menu-slider/ModalMenuSlider.vue';
import MemoryCards from '@/components/memory-cards/MemoryCards.vue';

export default defineComponent({
    components: {
        MovieSeatBooking,
        HangMan,
        InfiniteScrollBlog,
        ExpenseTracker,
        ModalMenuSlider,
        MemoryCards,
    },
    name: 'Main',
    setup(props, { attrs, slots, emit, expose }) {
        return {};
    },
});
</script>

<style scoped lang="scss">
.main-wrapper {
    > :deep(div) {
        position: relative;
    }
}
</style>
