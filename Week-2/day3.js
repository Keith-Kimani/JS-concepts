document.addEventListener("expanadable", (e)=> {
    // Event listener for the parent list
    document.getElementById("main-list").addEventListener("click", function(event) {
      // Check if the clicked element is an LI
      if (event.target.tagName === "LI") {
        // Toggle the visibility of the sub-list
        const subList = event.target.querySelector(".sub-list");
        if (subList) {
          subList.classList.toggle("hidden");
        }
      }
    });
});


button2.addEventListener('click', (e)=>{