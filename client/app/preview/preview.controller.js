'use strict';

angular.module('myprofileApp')
	.controller('PreviewCtrl', function($scope, $location, $modal) {
		$scope.items = ['item1', 'item2', 'item3'];
		var items;
		$scope.animationsEnabled = true;

		$scope.open = function(name, size) {

			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: name + '.html',
				controller: 'ModalInstanceCtrl',
				size: size,
				resolve: {
					items: function() {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

		$scope.toggleAnimation = function() {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};


		$scope.message = 'Hello';
		$scope.menuItem = [{
			'title': 'Home',
			'link': '/preview#home',
			'class': 'glyphicon glyphicon-home'
		}, {
			'title': 'About Me',
			'link': '/preview#summary'
		}, {
			'title': 'Skills',
			'link': '/preview#skills'
		}, {
			'title': 'Projects',
			'link': '/preview#projects'
		}, {
			'title': 'Education',
			'link': '/preview#education'
		}, {
			'title': 'Experience',
			'link': '/preview#experience'
		}, {
			'title': 'Courses',
			'link': '/preview#courses'
		}, {
			'title': 'Connect',
			'link': '/preview#connect'
		}];
		var monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];

		$scope.userInfo = {
			"first name": "Mukul",
			"last name": "Ambulgekar",
			"username": "mukul12",
			"email": "mukulambulgekar@gmail.com",
			"certification": {
				"first": {
					"certificationName": "M101J: MongoDB for Java Developers",
					"authroity": "MongoDB, Inc.",
					"from": "1992-04-06T07:00:00.000Z",
					"to": "1972-05-17T07:00:00.000Z",
					"url": "https://university.mongodb.com/course_completion/54fbc54397ce4b66a1f8978a3a58eb2b"
				},
				"second": {
					"certificationName": "M101JS: MongoDB for Node.js Developers",
					"authroity": "MongoDB, Inc.",
					"from": "1979-05-28T07:00:00.000Z",
					"to": "2012-09-23T07:00:00.000Z",
					"url": "http://university.mongodb.com/course_completion/5809677abb24436082c647f7751f8253"
				}
			},
			"summary": {
				"headline": "Software Engineering Intern at MarkLogic | Graduate Student at San Jose State University | Looking for full time opportunities.",
				"description": "a",
				"aboutme": "Hi! I'm <b>Mukul</b>. I am currently pursuing <b>Master's in Software Engineering at San Jose State University</b>. My specialization is  <b><i>Enterprise Software Technologies.</i><b> |I have  4 years of experience as a Software Product Developer in BSCS telecom rating and billing system owned by Ericsson.|\nWorking as a <b><i>Software Engineering Intern at MarkLogic Corporation </b></i>.  MarkLogic is NoSQL document oriented database. |I am currently developing a Bug-Tracking  application using <b>Node.js, AngularJS and MarkLogic database at the back-end</b>.|\nI have strong knowledge and understanding of <b>end to end telecom domain, Web Services, REST,SOAP, Web Technologies.</b>|\nI am currently looking for <b> challenging full-time opportunities in enterprise software development.</b>",
				"programmingSkills": "<b>Languages</b> : Java, Python, JavaScript, Node.js, JSP, Servlets, PL/SQL, HTML5, CSS, XML, JSON, jQuery, Shell Scripting.|\n <b>Database</b> : MarkLogic, MySQL, Oracle, IBM DB2, IBM Cloudant, MongoDB|\n <b>Tools</b> : BSCS 6.0 & iX, SQL DEVELOPER, TOAD 9.5, Putty, CRT,Greenfoot, BlueJ, Astah UML,Tomcat, Apache, jMeter,Mocha.|\n <b>Other</b>s: RESTful Web Services, SOAP, JMS, BSCS Billing System, Design Patterns, Android.|"
			},
			"experience": {
				"first": {
					"companyName": "MarkLogic Corporation",
					"position": "Software Engineering Intern",
					"from": "2015-06-13T07:00:00.000Z",
					"to": "2015-10-07T07:00:00.000Z",
					"url": "",
					"responsibilities": "Developing Bug-Tracking application using Node.js Express, AngularJs and MArkLogic at the back-end| Testing using Jasmine, Mocha, JMeter and Protractor",
					"recognition": ""
				},
				"second": {
					"companyName": "Atos India Pvt. Ltd.",
					"position": "Software Engineer",
					"from": "2010-09-13T07:00:00.000Z",
					"to": "2014-07-14T07:00:00.000Z",
					"url": "Ratione nemo sit et ut facilis aute reiciendis esse ab odio ipsum",
					"responsibilities": "4 Years of technical experience in BSS telecom Development\n| Developed standardized backend PL/SQL scripts",
					"recognition": ""
				},
				"third": {
					"companyName": "Calsoft Inc.",
					"position": "Software Intern",
					"from": "2009-07-01T07:00:00.000Z",
					"to": "2010-05-31T07:00:00.000Z",
					"responsibilities": "Added an encryption-decryption module  to protect data flowing between USB devices shared over network. | Area of Project - Network Security and Cryptography."
				}
			},
			"programmingSkills": {
				"level": "Proficient"
			},
			"personalInformation": {
				"first name": "Mukul",
				"last name": "Ambulgekar",
				"username": "mukul12",
				"email": "mukulambulgekar@gmail.com",
				"secEmail": "mukulambulgekar@gmail.com",
				"contact": "+1-408-831-8492",
				"linkedinurl": "https://www.linkedin.com/in/mukulambulgekar",
				"giturl": "https://github.com/MukulAmbulgekar",
				"twitterurl": "https://twitter.com/mukul3005",
				"address": "1314 The Alameda, Apt #230",
				"city": "San Jose, CA, 95126"
			},
			"education": {
				"graduate": {
					"schoolName": "San Jose State University",
					"from": "2014-08-31T07:00:00.000Z",
					"to": "2016-05-31T07:00:00.000Z",
					"grades": 3.6,
					"activities": "Sit, hic ipsam irure dolor ut consequat. Dolorum enim impedit.",
					"degree": "Master's",
					"major": "Software Engineering",
					"specialization": "Enterprise Software Technologies"
				},
				"undergraduate": {
					"schoolName": "Pune University",
					"from": "2006-06-01T07:00:00.000Z",
					"to": "2010-07-31T07:00:00.000Z",
					"grades": 3.7,
					"activities": "Itaque omnis repellendus. Corrupti, libero voluptates dolore reiciendis amet, deserunt ratione.",
					"degree": "Bachelor's",
					"major": "Computer Engineering",
					"specialization": "Computer Science"
				}
			}
		};
		$scope.userInfo = processDate($scope.userInfo);
		$scope.userInfo.summary.description = $scope.userInfo.summary.description.split("|");
		$scope.userInfo.summary.aboutme = $scope.userInfo.summary.aboutme.split("|");
		$scope.userInfo.experience.first.responsibilities = $scope.userInfo.experience.first.responsibilities.split("|");
		$scope.userInfo.experience.second.responsibilities = $scope.userInfo.experience.second.responsibilities.split("|");
		$scope.userInfo.experience.third.responsibilities = $scope.userInfo.experience.third.responsibilities.split("|");
		console.log("kk", $scope.userInfo.education.graduate.from.getYear(), 'pp', $scope.userInfo.education.graduate.to.getMonth())
		console.log("hhh");
		$scope.userInfo.education.graduate.from = monthYearFromDate($scope.userInfo.education.graduate.from);
		$scope.userInfo.education.graduate.to = monthYearFromDate($scope.userInfo.education.graduate.to);
		$scope.userInfo.education.undergraduate.from = monthYearFromDate($scope.userInfo.education.undergraduate.from);
		$scope.userInfo.education.undergraduate.to = monthYearFromDate($scope.userInfo.education.undergraduate.to);
		$scope.userInfo.experience.first.from = monthYearFromDate($scope.userInfo.experience.first.from);
		$scope.userInfo.experience.first.to = monthYearFromDate($scope.userInfo.experience.first.to);
		$scope.userInfo.experience.second.from = monthYearFromDate($scope.userInfo.experience.second.from);
		$scope.userInfo.experience.second.to = monthYearFromDate($scope.userInfo.experience.second.to);
		$scope.userInfo.experience.third.from = monthYearFromDate($scope.userInfo.experience.third.from);
		$scope.userInfo.experience.third.to = monthYearFromDate($scope.userInfo.experience.third.to);
		// private functions
		function processDate(userInfo) {
			_.forEach(userInfo, function(value, key) {
				_.forEach(value, function(v, k) {
					_.forEach(v, function(v1, k1) {
						if (k1 === 'from' || k1 === 'to')
							userInfo[key][k][k1] = new Date(v1);
					});
				});
			});
			return userInfo;
		}
		$scope.isActive = function(route) {
			return route === $location.url();
		};

		function monthYearFromDate(date) {
			return monthNames[date.getMonth()] + ' ' + date.getFullYear();
		}
	});

angular.module('myprofileApp').controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});