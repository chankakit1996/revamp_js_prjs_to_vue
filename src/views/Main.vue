<template>
    <MovieSeatBooking />
    <HangMan />
</template>
<script lang="ts">
import MovieSeatBooking from '@/components/MovieSeatBooking.vue';
import { defineComponent } from 'vue';
import HangMan from '@/components/HangMan.vue';

export default defineComponent({
    components: { MovieSeatBooking, HangMan },
    name: 'Main',
    setup(props, { attrs, slots, emit, expose }) {
        return {};
    },
});
</script>

<style scoped lang="scss"></style>
