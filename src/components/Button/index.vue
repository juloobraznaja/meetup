<template>
    <div class="meetup-button" :class="{'meetup-button--disabled': disabled,
                    'meetup-button--default': !disabled}">
        <button :disabled="disabled" @click="handleClick">
            <slot/>
        </button>
    </div>
</template>

<script>
export default {
    name: 'MeetupButton',
    props: {
        disabled: Boolean
    },
    methods: {
        handleClick() {
            this.$emit('on-click');
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped/>