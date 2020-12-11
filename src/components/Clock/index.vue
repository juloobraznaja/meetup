<template>
    <div class="meetup-clock">
        <div class="meetup-clock__dial">
            <meetup-icon name="dial" size="130"/>
        </div>
        <span class="meetup-clock__time">{{ checkNumber(hour) }}</span>
        <span class="meetup-clock__time">{{ checkNumber(minutes) }}</span>
        <div class="meetup-clock__arrow meetup-clock__seconds" :style="setRotate(seconds * 6)" />
        <div class="meetup-clock__arrow meetup-clock__minute" :style="setRotate(minutes * 6 )" />
        <div class="meetup-clock__arrow meetup-clock__hour" :style="setRotate(hour * 30)" />
    </div>
</template>

<script>
import MeetupIcon from '../Icon';

export default {
    name: 'MeetupClock',
    components: {
        MeetupIcon
    },
    data() {
        return {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            intervalId: null,
            syncInterval: 0
        };
    },
    methods: {
        timeTick() {
            this.intervalId = setInterval(this.increaseSeconds, 1000);
        },
        increaseSeconds() {
            if (this.seconds < 59) {
                this.seconds++;
            } else {
                this.seconds = 0;
                if (this.checkSync()) {
                    this.increaseMinutes();
                }
            }
        },
        increaseMinutes() {
            if (this.minutes < 59) {
                this.minutes++;
            } else {
                this.minutes = 0;
                this.increaseHour();
            }
        },
        increaseHour() {
            if (this.hour < 23) {
                this.hour++;
            } else {
                this.hour = 0;
            }
        },
        checkNumber(number) {
            return number < 10 ? '0' + number : number;
        },
        checkSync() {
            if (this.syncInterval < 5) {
                this.syncInterval++;
                return true;
            } else {
                this.syncInterval = 0;
                const newTime = new Date();
                this.hour = newTime.getHours();
                this.minutes = newTime.getMinutes();
                this.seconds = newTime.getSeconds();
                return false;
            }
        },
        setRotate(equal) {
            return {
                transform: `rotate(${equal}deg)`
            };
        }
    },
    mounted() {
        this.timeTick();
    },
    beforeDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
};
</script>

<style lang="scss" src="./style.scss"/>
