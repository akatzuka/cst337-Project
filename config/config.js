/* Config
 *
 * Settings on modules go here
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: false,
				showPeriodUpper: true
			}
		},
		{
			module: 'MMM-AlarmClock',
			position: 'top_left',
			config: {
				alarms: [
			   	{
						time: "18:30",
						days: [1,2,3,4,5],
						title: "Work",
						message: "Time to get ready for Work!",
					}
				],
				touch: true,
				format: 'dddd, h:mmA',
				volume: 1.0,
				sound: 'alarm.mp3'
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				],
				maximumEntries: 5
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Monterey",
				locationID: "5374361",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "867e131c071180125bd88b996c21d001",
				showFeelsLike: false,
				showPeriodUpper: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Monterey",
				locationID: "5374361",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "867e131c071180125bd88b996c21d001",
				maxNumberOfDays: 2
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
