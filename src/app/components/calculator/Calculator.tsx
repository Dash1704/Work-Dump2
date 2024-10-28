export default function Calculator(
    salary: string | number, 
    hours: string | number, 
    time: string | number
  ): string | undefined {
    
    const calculation = (+salary / (+hours * 52) / 60) * +time;
    const convertToString = calculation.toString();
    let splitUp = convertToString.split('.');

    const twoPennies = (array: string[]) => {
      if (array[1] == undefined){
        return `0`
      } else {
        let pennies: string[] = array[1].split('');
        return `${array[0]}.${pennies[0]}` + `${pennies[1]}`
      };
    };

    const earnings: string | undefined = twoPennies(splitUp);
    return earnings
}