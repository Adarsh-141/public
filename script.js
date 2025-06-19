const slider = document.getElementById("timelineSlider");
const eventText = document.getElementById("eventText");

const events = {
  1: "My first weeks filled with excitement, tours, and meeting peers.",
  2: " Learned Arduino, worked on UTM, and built my first physical prototype.",
  3: " Joined Mood Indigo, E-Summit, and participated in sports events.",
  4: " Took up data science minor and worked on LangGraph AI projects."
};

slider.addEventListener("input", function () {
  eventText.textContent = events[slider.value];
});
