/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
  'name': 'Vikram Sreekumar',
  'role': 'Software Developer',
  'contacts': {
    'mobile': "<a href='tel:5555555555'>555.555.5555</a>",
    'email': "<a href='mailto:vikram1791@gmail.com'>vikram1791@gmail.com</a>",
    'github': "<a href='https://github.com/c0dect'>c0dect</a>",
    'location': "<a href='#'>Pune</a>"
  },
  'welcomeMessage': 'Sample resume project to learn Javascript.',
  'skills': ['Software Engineering', 'Web Development', 'Product Design', 
  			'Go Lang', 'Python', 'Django', 'JavaScript', 'C++', 'Linux', 'GitHub'],
  'biopic': 'images/fry.jpg',
  'display': function() {

    var name = HTMLheaderName.replace("%data%", this.name);
    var role = HTMLheaderRole.replace("%data%", this.role);
    $('#header').prepend(role).prepend(name);

    if(this.skills.length > 0){
      $("#header").append(HTMLskillsStart);
      for (var i = this.skills.length - 1; i >= 0; i--) {
        var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
        $("#skills").append(formattedSkill);
    };

    var message = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
    var bioPic = HTMLbioPic.replace('%data%',this.biopic);
    $('#header').append(message).append(bioPic);
    }
  }
};

bio.display();

var work = {
  'jobs': [
    {'employer': 'Tavisca Solutions',
     'title': 'Software Developer',
     'location': 'Pune',
     'dates': '2013-2015',
     'description': 'Travel Tech Company'
    }
  ]};

var projects = {
    "projects": [
            {
                        "title": "Image Classification",
                        "datesWorked": "August 2015 - November 2015",
                        "description": "Created an image classification tool to classify images under various identified categories", 
                        "url": "https://github.com/c0dect/image-processor-OpenCV"
                    },
            {
                        "title": "Online Portfolio",
                        "datesWorked": "December 2015",
                        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
                        "Nanodegree.",
                        "url": "https://github.com/c0dect/frontend-nanodegree-resume"
            }        
    ],
    "display": function() {
        for(var index in this.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace('%data%', this.projects[index].title);
            var formattedDates = HTMLprojectDates.replace('%data%', this.projects[index].datesWorked);
            var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[index].description);
           
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

        }       
    }
};

projects.display();


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

$("#mapDiv").append(googleMap);
