var bio = {
	"name": "Krista L Robertson",
	"role": "Product Marketing Manager",
	"contacts": {
		"email": "Robertson.KristaL@gmail.com",
		"github": "RobertsonKristaL",
		"location": "Atlanta, GA"
	},
	"picture": "images/me.png",
	"welcomeMessage": "Currently my role is to build accessory sales for with authorized retail locations across the nation, but I am looking to transform myself for Workforce 2020",
	"skills": ["Account Management", "Relationship Building", "Communications Manager", "Beginner HTML and CSS", "Beginner Python"]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Product Marketing Manager",
            "location": "Edmonton, Alberta, Canada",
			"datesWorked": "November 2015 - Present",
			"description": "Offering a first class service to a portfolio of over 30 national and local accounts, Generated significant revenue and profit margins, Reached $12M in total accounts, 2016 YOY growth for all accounts was 40%, Serve as a client representative to other departments, collaborating with technical support, product development, marketing, and accounting; Created, implemented, and managed programs to entice customers and increase revenue through Volume Incentive Rebate programs; Project managed the monthly launch and communication of new products selling within our channel, Managed weekly, monthly, and ad hoc reporting for C-Level Execs, Presented weekly calls with 130+ internal and external customers, Attend trade shows, exhibitions, banquets and events serving as company representative at client events, Providing weekly metric reports to the client in line with KPIs, Identifying and cultivating new opportunities of business, Constructing budgets and timelines, Developed merchandising prescriptions for channel"
		},
		{
			"employer": "AT&T",
			"title": "Executive Assistant",
			"location": "Atlanta, GA",
			"datesWorked": "April 2014-November 2015",
			"description": "Manage Executive Director's calendar, contacts, communications and travel; Coordinate travel arrangements for team of four directors; Coordinate weekly staff meetings and facilitate call when supervisor not available; Manage all aspects of on-boarding for new hires; Coordinate administrative process for team reorganization; Coordinate conference schedules for team and National Dealer customers; Assist with contract finalization and execution; Co-host all annual team conferences and meetings for team and parent organization; Manage special projects; Assist officer’s chief of staff on company projects/events; Provide administrative backup for officer"
		},
		{
			"employer": "Optima Service Solutions",
			"title": "Recruiting Manager",
			"location": "Atlanta, GA",
			"datesWorked": "October 2013-April 2014",
			"description": "Increased closed accounts by 400%; Managed 8 recruiters, including hiring, orientation/training, and performance evaluations; Developed and implemented ongoing sales and training programs; Established price margins for customers and trained recruiters in price negotiations; Contributed to team success by achieving company goals; Created and managed social media to provide a positive online image; Managed administrative process to maintain A rating with Better Business Bureau; Edited company monthly newsletter"
		}
	]
};

var education = {
	"schools": [
		{ "name": "Louisiana State University",
			"datesAttended": "2007 - 2011",
			"location": "Baton Rouge, LA",
			"degree": "Bachelor of Arts",
			"major": "Communication Studies",
			"url": "http://www.lsu.edu/"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to Computer Science",
			"completed": "Expected Graduation March 2017",
			"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Defective Returns Program",
			"datesWorked": "December 2016 - January 2017",
			"description": "a.	This is an example of a program that I put together. This was the communication we were going to use for the ARs. I created this program by collaborating with other groups within AT&T and getting feedback from Authorized Retailers to improve a very manual process internally and externally, as well as, increase sales in our power and audio category. Unfortunately, as we reached the finalizing stage, the team that would be working with me monthly on managing this program was impacted by the surplus. We have since started reviewing other options for improving this process." +
			"Product Marketing Manager.",
			"images": ["https://github.com/RobertsonKristaL/Resume/blob/master/images/ReturnsProgram.PNG"],
		},
		{
			"title": "UE Speaker Spotlight",
			"datesWorked": "March 28 - May 5",
			"description": "This one pager was used for email communications to my ARs and review on weekly individual calls. They are able to distribute these to their store locations to hang in the back rooms. Sensitive Information has been blocked out.",
			"images": ["https://github.com/RobertsonKristaL/Resume/blob/master/images/SpeakerSpotlight.PNG"],
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

$("#mapDiv").append(googleMap);


