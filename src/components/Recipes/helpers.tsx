

export const difficultyRandom = () => {
    const difficultyArray = ["Fácil", "Dificil"];
    let position = Math.floor(Math.random() * 2);
    return difficultyArray[position];
  };
  
export const calificationRandom = (min: number, max: number) => {
    const precision = Math.pow(10, 1);
    min = min * precision;
    max =max * precision;
    return Math.floor(Math.random()*(max-min+1) + min) / precision;
  };