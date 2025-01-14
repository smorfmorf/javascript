//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (!series) {
      throw new Error('series cannot be empty');
    }

    this.numberSTR = series;
  }

  slices(sliceLength) {
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }
    if (sliceLength > this.numberSTR.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    const result = [];
    for (let i = 0; i <= this.numberSTR.length - sliceLength; i++) {
      result.push(this.numberSTR.slice(i, i + sliceLength).split('').map(Number));
    }


    return result
  }
}
