<template>
    <div class="meetup-icon" :style="getStyle">
        <slot>
            <component :is="name" v-if="name" />
        </slot>
    </div>
</template>

<script>
import IconList from './meetup-icon/mixins/IconList';

export default {
    name: 'MeetupIcon',
    mixins: [IconList],
    props: {
        size: {
            type: [String, Number],
            default: '16'
        },
        color: {
            type: String
        },
        name: String
    },
    computed: {
        getStyle() {
            return `color: ${this.color}; width:${this.size}px; height: ${this.size}px;`;
        }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped/>
