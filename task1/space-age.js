export const age = (planet, seconds) => {
    // Количество секунд в одном земном году
    const earthSecondsInYear = 31557600;

    // земные года на других планетах
    const orbitalPeriods = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 1,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };

    const planetSeconds = orbitalPeriods[planet] * earthSecondsInYear;
    return Number((seconds / planetSeconds).toFixed(2));

    //* Второй вариант решения через Switch (что первое пришло в голову)
    // switch (planet) {
    //     case "Mercury":
    //         // Один год на Меркури в земных секундах
    //         const MercurySeconds = 0.2408467 * earthSecondsInYear;
    //         return (seconds / MercurySeconds).toFixed(2);

    //     case "Venus":
    //         const VenusSeconds = 0.61519726 * earthSecondsInYear;
    //         return (seconds / VenusSeconds).toFixed(2);

    //     case "Mars":
    //         const MarsSeconds = 1.8808158 * earthSecondsInYear;
    //         return (seconds / MarsSeconds).toFixed(2);

    //     case "Jupiter":
    //         const JupiterSeconds = 11.862615 * earthSecondsInYear;
    //         return (seconds / JupiterSeconds).toFixed(2);

    //     case "Saturn":
    //         const SaturnSeconds = 29.447498 * earthSecondsInYear;
    //         return (seconds / SaturnSeconds).toFixed(2);

    //     case "Uranus":
    //         const UranusSeconds = 84.016846 * earthSecondsInYear;
    //         return (seconds / UranusSeconds).toFixed(2);

    //     case "Neptune":
    //         const NeptuneSeconds = 164.79132 * earthSecondsInYear;
    //         return (seconds / NeptuneSeconds).toFixed(2);

    //     default:
    //         throw new Error("Неизвестная планета");
    // }
};
