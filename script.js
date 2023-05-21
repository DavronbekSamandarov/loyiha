// JavaScript qidirish funksiyasi
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
  
    searchInput.addEventListener('input', function() {
      var searchValue = searchInput.value.toLowerCase();
      var jobListings = document.querySelectorAll('.job-listing');
  
      for (var i = 0; i < jobListings.length; i++) {
        var jobTitle = jobListings[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        var jobDescription = jobListings[i].getElementsByTagName('p')[3].innerText.toLowerCase();
  
        if (jobTitle.includes(searchValue) || jobDescription.includes(searchValue)) {
          jobListings[i].classList.add('highlighted');
        } else {
          jobListings[i].classList.remove('highlighted');
        }
      }
    });
  });
  