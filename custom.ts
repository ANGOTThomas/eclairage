namespace GROVE {
    let distanceBackup: number = 0
    
    /**
    * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
    * @param pin signal pin of ultrasonic ranger module
    */
    //% blockId=grove_ultrasonic_centimeters_v2 block="(V2)Ultrasonic Sensor (in cm) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.P0
    export function measureInCentimetersV2(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = duration * 153 / 44 / 2 / 100;

        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);

        return RangeInCentimeters;
    }

    /**
    * Create a new driver of Grove - Ultrasonic Sensor to measure distances in cm
    * @param pin signal pin of ultrasonic ranger module
    */
    //% blockId=grove_ultrasonic_centimeters block="Ultrasonic Sensor (in cm) at|%pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="250"
    //% group="Ultrasonic" pin.defl=DigitalPin.P0

    export function measureInCentimeters(pin: DigitalPin): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(20);
        pins.digitalWritePin(pin, 0);
        duration = pins.pulseIn(pin, PulseValue.High, 50000); // Max duration 50 ms

        RangeInCentimeters = duration * 153 / 29 / 2 / 100;

        if (RangeInCentimeters > 0) distanceBackup = RangeInCentimeters;
        else RangeInCentimeters = distanceBackup;

        basic.pause(50);

        return RangeInCentimeters;
    }

 
}
