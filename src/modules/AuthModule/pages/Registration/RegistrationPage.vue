<template>
    <div class="registration">
        <meetup-registration/>
    </div>
</template>

<script>
import MeetupRegistration from "../../../../components/Registration";

export default {
    name: 'Registration',
    components: {
        MeetupRegistration
    }
}
</script>

<style lang="scss" src="./style.scss"/>