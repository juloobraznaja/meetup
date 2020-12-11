<template>
    <div class="meetup-input">
        <span class="meetup-input__label" v-if="label">{{ label }}</span>
        <div class="meetup-input__control">
            <input
                    :type="typeInput"
                    :placeholder="placeholder"
                    :value="value"
                    @input="handleInput"
            />
            <div v-if="type === 'password'" class="meetup-input__password-toggler" @click="toggleHidePassword">
                <meetup-icon :name="hidePassword ? 'eye-invisible' : 'eye'" size="20"/>
            </div>
        </div>
    </div>
</template>

<script>
const types = ['text', 'email', 'password'];
import MeetupIcon from '../Icon'
export default {
    name: 'MeetupInput',
    components: {
        MeetupIcon
    },
    model: {
        props: 'value',
        event: 'on-change'
    },
    props: {
        label: String,
        placeholder: String,
        type: {
            type: String,
            validator(value) {
                return types.includes(value);
            }
        },
        value: [String, Number]
    },
    data() {
        return {
            hidePassword: true
        }
    },
    computed: {
        typeInput() {
            return this.type === 'password' ? (this.hidePassword ? 'password' : 'text') : this.type;
        }
    },
    methods: {
        toggleHidePassword() {
            this.hidePassword = !this.hidePassword;
        },
        handleInput(e) {
            this.$emit('on-change', e.target.value);
        }
    }
}
</script>

<style lang="scss" src="./style.scss"/>