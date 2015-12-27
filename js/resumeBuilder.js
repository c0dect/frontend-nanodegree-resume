/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
  'name': 'Vikram Sreekumar',
  'role': 'Software Developer',
  'contacts': {
    'mobile': "<a href='tel:5555555555'>555.555.5555</a>",
    'email': "<a href='mailto:allan.reyes@alum.mit.edu'>allan.reyes@alum.mit.edu</a>",
    'github': "<a href='http://goo.gl/ed7eMV'>c0dect</a>",
    'location': "<a href='#'>Pune</a>"
  },
  'welcomeMessage': 'Experience leading the brightest minds in engineering and the bravest souls in the military.',
  'skills': ['Software Engineering', 'Web Development', 'Product Design', 
  			'Go Lang', 'Python', 'Django', 'JavaScript', 'C++', 'Linux', 'GitHub']
};

var work = {
  'jobs': [
    {'employer': 'Tavisca Solutions',
     'title': 'Software Developer',
     'location': 'Pune',
     'dates': '2013-2015',
     'description': 'Travel Tech Company'
    }
  ]};

var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
$('#header').prepend(role).prepend(name);


if(bio.skills.length > 0){
 	$("#header").append(HTMLskillsStart);
 	for (var i = bio.skills.length - 1; i >= 0; i--) {
 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 		$("#skills").append(formattedSkill);
 	};
}

function displayWork(){
  for(var index in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
    var formattedDates = HTMLworkStart.replace("%data%", work.jobs[index].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
    
    $(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

// $("#main").append(internationalizeButton);

function inName(name) {
  var nameTokens = name.split(" ");
  var firstName = nameTokens[0];
  var lastName = nameTokens[1];
  var outputName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  outputName = outputName.concat(" ", lastName.toUpperCase());
  return outputName;
}

inName(bio.name);