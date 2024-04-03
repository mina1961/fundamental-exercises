function solve(year, month, day) {
    let date = new Date(year, month - 1, day);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    console.log(`${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`);
}
solve(2016, 9, 30);
