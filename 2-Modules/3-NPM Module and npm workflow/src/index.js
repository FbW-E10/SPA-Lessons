import moment from 'moment'
import { format } from 'date-fns'

console.log(format(new Date(2014, 1, 11), 'yyyy/MM/dd'))


console.log(moment());

let date1 = moment();
let date2 = moment('2025-10-08 11:00:00');
let duration = date2.diff(date1, 'seconds');

let minutes = Math.floor(duration/60)
let hours = Math.floor(minutes/60)
let days = Math.floor(hours/24)
hours%days

console.log(days, hours, minutes)