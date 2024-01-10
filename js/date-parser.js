/* defer is needed in script tag to use document.querySelector in js/date-parser.js, which is in subdirectory js */
class DateParser {
    constructor(
        hourHand = document.querySelector(`#hour`),
        minuteHand = document.querySelector(`#minute`),
        secondHand = document.querySelector(`#second`),
        delayAngle
    ) {
        this.hourHand = hourHand;
        this.minuteHand = minuteHand;
        this.secondHand = secondHand;
        this.delayAngle = delayAngle;
        this.refresh();
    }

    refresh() {
        this.currentDate = new Date();
        this.tick();
        setInterval(() => {
            this.currentDate = new Date();
            this.tick();
        }, 1000);
    }

    tick() {
        this.hourHand.setAttribute(`transform`, `rotate(${180 + 30 * this.currentDate.getHours() + 0.5 * this.currentDate.getMinutes() + 0.5 / 60 * this.currentDate.getSeconds()} 325 325)`);
        this.minuteHand.setAttribute(`transform`, `rotate(${180 + 6 * this.currentDate.getMinutes() + 0.1 * this.currentDate.getSeconds()} 325 325)`);
        this.secondHand.setAttribute(`transform`, `rotate(${this.delayAngle + 180 + 6 * this.currentDate.getSeconds()} 325 325)`);
    }
}
new DateParser(undefined, undefined, undefined, 6);