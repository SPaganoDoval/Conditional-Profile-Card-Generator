import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  //let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  //if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let name =
    variables.name == null || variables.name == "" ? "Name" : variables.name;
  let lastname =
    variables.lastname == null || variables.lastname == ""
      ? "Last Name"
      : variables.lastname;

  let avatarURL =
    variables.avatarURL == null || variables.avatarURL == ""
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZDWpTSp2nrXf1df61DaXOhuVJSvMBb_3sQ&usqp=CAU"
      : variables.avatarURL;

  let background =
    variables.background == null || variables.background == ""
      ? "https://images.unsplash.com/photo-1511974035430-5de47d3b95da"
      : variables.background;

  let role =
    variables.role == null || variables.role == "" ? "Role" : variables.role; // reset the website body with the new html output

  let city =
    variables.city == null || variables.city == "" ? "City" : variables.city;

  let country =
    variables.country == null || variables.country == ""
      ? "Country"
      : variables.country;

  let socialMedia =
    variables.socialMediaPosition == null || variables.socialMediaPosition == ""
      ? "left"
      : variables.socialMediaPosition;
  let twitter =
    variables.twitter == null || variables.twitter == ""
      ? "https://twitter.com"
      : variables.twitter;
  let github =
    variables.github == null || variables.github == ""
      ? "https://github.com/SPaganoDoval"
      : variables.github;
  let linkedin =
    variables.linkedin == null || variables.linkedin == ""
      ? "https://www.linkedin.com"
      : variables.github;
  let instagram =
    variables.instagram == null || variables.instagram == ""
      ? "https://www.instagram.com"
      : variables.instagram;

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
          
          <img src="${background}" class="cover"/>
          <img src="${avatarURL}" class="photo"/>
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${socialMedia}">
            <li><a href="${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7nBCE_iXPHlNGhxH60CO3AEkJnNlXrMaCA&usqp=CAU",
    // this is the url for the profile avatar
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZDWpTSp2nrXf1df61DaXOhuVJSvMBb_3sQ&usqp=CAU",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "SPaganoDoval",
    linkedin: null,
    instagram: null,
    name: "Name",
    lastname: "Lastname",
    role: "Role",
    country: "Country",
    city: "City"
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
