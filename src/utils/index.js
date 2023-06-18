import { DateTime } from 'luxon'
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import slugify from 'slugify'
import 'dayjs/locale/vi';
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('vi');

const formattedDate = (inputDate) => {
	return dayjs(inputDate)
		.utc()
		.tz('Asia/Ho_Chi_Minh')
		.format('dddd, DD/MM/YYYY HH:mm (GMTZ)')
		.replace('G', 'GMT')
}
const slugifyConvert = function (text) {
	if (!text) return
	const slug = slugify(text);
	return slug;
}

const removeDuplicates = function (originalArray, prop) {
	var newArray = [];
	var lookupObject = {};

	for (var i in originalArray) {
		lookupObject[originalArray[i][prop]] = originalArray[i];
	}

	for (i in lookupObject) {
		newArray.push(lookupObject[i]);
	}
	return newArray;
}

const SortingByDate = function (posts) {
	return posts
		.sort((post1, post2) => {

			const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
			const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
			return beforeDate - afterDate;

		})
}

const dateFormate = function () {
	var day = new Date().getDate();
	var month = new Date().toLocaleString("en-US", { month: "long" });
	var year = new Date().getFullYear();

	var todayDate = (day + " " + month + "," + " " + year);

	return todayDate;
}


export { formattedDate, slugifyConvert, removeDuplicates, SortingByDate, dateFormate };