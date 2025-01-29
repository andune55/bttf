(() => {
	const init = () => {
		updateClock();
		setInterval(() => {
			updateClock();
		}, 1000);
	};

	const updateClock = () => {
		resetClock();
		getCurrentTime();
		displayCurrentTime();
	};

	const getCurrentTime = () => {
		let fullDate = new Date();
		let month = fullDate.getMonth();
		let date = fullDate.getDate();
		let year = fullDate.getFullYear();
		let day = fullDate.getDay();
		let	hours = fullDate.getHours();
		let	minutes = fullDate.getMinutes();
		let	seconds = fullDate.getSeconds();
		let period = (hours >= 12) ? "pm" : "am";

		window.clock = {};
		window.clock.time = {
			fullDate: fullDate,
			month: month,
			date: date,
			year: year,
			day: day,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			period: period
		};
	};

	const displayCurrentTime = () => {
		//let day = window.clock.time.day;
		let month = window.clock.time.month;
		let date = window.clock.time.date;
		let year = window.clock.time.year;
		let hours = window.clock.time.hours;
		let minutes = window.clock.time.minutes;
		//let seconds = window.clock.time.seconds;
		let period = window.clock.time.period;
		//alert(period);
		
		
		if(period=="am"){
			document.getElementsByClassName('dot-inactive')[0].classList.add("dot-active");
			document.getElementsByClassName('dot-inactive')[2].classList.add("dot-active");
			document.getElementsByClassName('dot-inactive')[4].classList.add("dot-active");
		}
		if(period=="pm"){
			document.getElementsByClassName('dot-inactive')[1].classList.add("dot-active");
			document.getElementsByClassName('dot-inactive')[3].classList.add("dot-active");
			document.getElementsByClassName('dot-inactive')[5].classList.add("dot-active");
		}

		//formats hours
		//hours = (hours > 12) ? (hours - 12) : hours;
		//alert(hours);
		
		//hours = hours % 12; 
		//hours = (hours > 12) ? (hours - 12) : (hours + 12);
		//hours = (hours === 0) ? 12 : hours;
		hours = (hours <= 9) ? ("0" + hours) : hours;
		//alert(hours);
		
		//formats minutes
		minutes = (minutes <= 9) ? ("0" + minutes) : minutes;
		//formats seconds
		//seconds = (seconds <= 9) ? ("0" + seconds) : seconds;
		//formats day
		//let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
		//let dayText = ``;
		//if(days[day].length === 6) dayText = `<span style="color: #2b2828;">ooo</span>${days[day]}`;
		//if(days[day].length === 7) dayText = `<span style="color: #2b2828;">oo</span>${days[day]}`;
		//if(days[day].length === 8) dayText = `<span style="color: #2b2828;">o</span>${days[day]}`;
		//if(days[day].length === 9) dayText = `<span style="color: #2b2828;"></span>${days[day]}`;
		//formats mobile day
		//let mobileDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		//formats month
		let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
		//formats date
		date = (date <= 9) ? ("0" + date) : date;

		// targets the html
		//const dayHtml = document.getElementsByClassName('day-alpha')[0];
		//const mobileDayHtml = document.getElementsByClassName('day-alpha-mobile')[0];
		const monthHtml = document.getElementsByClassName('month-alpha')[0];
		const dateHtml = document.getElementsByClassName('date-number')[0];
		const yearHtml = document.getElementsByClassName('year-number')[0];
		const hoursHtml = document.getElementsByClassName('hours')[0];
		const minutesHtml = document.getElementsByClassName('minutes')[0];
		//const secondsHtml = document.getElementsByClassName('seconds')[0];
		//const periodHtml = document.getElementsByClassName(period)[0];

		// changes the html values
		//dayHtml.innerHTML = dayText;
		//mobileDayHtml.innerHTML = mobileDays[day];
		monthHtml.innerHTML = 'OCT';
		dateHtml.innerHTML = 14;
		yearHtml.innerHTML = '9999';//2000;
		hoursHtml.innerHTML = '18';//hours;
		minutesHtml.innerHTML = '00';//minutes;
		//secondsHtml.innerHTML = seconds;
		//periodHtml.classList.add("light-on");
		
		
		
		
		const monthHtml2 = document.getElementsByClassName('month-alpha')[1];
		const dateHtml2 = document.getElementsByClassName('date-number')[1];
		const yearHtml2 = document.getElementsByClassName('year-number')[1];
		const hoursHtml2 = document.getElementsByClassName('hours')[1];
		const minutesHtml2 = document.getElementsByClassName('minutes')[1];
		
		//aqui si queremos poner otro día
		monthHtml2.innerHTML = months[month];//'NOV';//
		dateHtml2.innerHTML = date;//'08';
		yearHtml2.innerHTML = year;
		hoursHtml2.innerHTML = hours;//'21';
		minutesHtml2.innerHTML = minutes;//'05';
		
		
		
		
		const monthHtml3 = document.getElementsByClassName('month-alpha')[2];
		const dateHtml3 = document.getElementsByClassName('date-number')[2];
		const yearHtml3 = document.getElementsByClassName('year-number')[2];
		const hoursHtml3 = document.getElementsByClassName('hours')[2];
		const minutesHtml3 = document.getElementsByClassName('minutes')[2];
		
		monthHtml3.innerHTML = 'APR';
		dateHtml3.innerHTML = 20;
		yearHtml3.innerHTML = 1997;
		hoursHtml3.innerHTML = hours;
		minutesHtml3.innerHTML = minutes;
		
		
		
		
	};

	const resetClock = () => {
		const lights = document.querySelectorAll(".light-on");

		if(lights) {
			lights.forEach(item => {
				item.classList.remove("light-on");
			});
		}
	};

	return init();
})()



