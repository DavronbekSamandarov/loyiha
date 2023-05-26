var addJobButton = document.getElementById('add-job-button');
addJobButton.addEventListener('click', addNewJob);

function addNewJob(event) {
    event.preventDefault();
  
    var jobTitleInput = document.getElementById('job-title-input');
    var companyNameInput = document.getElementById('company-name-input');
    var jobDescriptionInput = document.getElementById('job-description-input');
  
    var jobTitle = jobTitleInput.value;
    var companyName = companyNameInput.value;
    var jobDescription = jobDescriptionInput.value;
  
    if (jobTitle === '' || companyName === '' || jobDescription === '') {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
  
    var newJob = {
      title: jobTitle,
      company: companyName,
      description: jobDescription
    };
  
    // Daha önce kaydedilmiş iş ilanlarını al
    var savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    
    // Yeni iş ilanını kaydet
    savedJobs.push(newJob);
    
    // Güncellenmiş iş ilanlarını localStorage'e kaydet
    localStorage.setItem('jobs', JSON.stringify(savedJobs));
  
    var jobListingsContainer = document.getElementById('job-listings');
  
    var jobListing = document.createElement('div');
    jobListing.className = 'job-listing';
  
    var titleElement = document.createElement('h2');
    titleElement.className = 'job-title';
    titleElement.textContent = jobTitle;
  
    var companyElement = document.createElement('p');
    companyElement.className = 'company-name';
    companyElement.textContent = companyName;
  
    var descriptionElement = document.createElement('p');
    descriptionElement.className = 'job-description';
    descriptionElement.textContent = jobDescription;
  
    jobListing.appendChild(titleElement);
    jobListing.appendChild(companyElement);
    jobListing.appendChild(descriptionElement);
  
    jobListingsContainer.appendChild(jobListing);
  
    jobTitleInput.value = '';
    companyNameInput.value = '';
    jobDescriptionInput.value = '';
  
    alert("Yangi ma'lumot muvaffaqiyatli qo'shildi.");
  }
  
function searchJobs(keyword) {
  var jobListings = document.getElementsByClassName('job-listing');

  for (var i = 0; i < jobListings.length; i++) {
    var jobListing = jobListings[i];
    var titleElement = jobListing.getElementsByClassName('job-title')[0];
    var companyElement = jobListing.getElementsByClassName('company-name')[0];
    var descriptionElement = jobListing.getElementsByClassName('job-description')[0];

    var title = titleElement.textContent.toLowerCase();
    var company = companyElement.textContent.toLowerCase();
    var description = descriptionElement.textContent.toLowerCase();

    if (title.includes(keyword.toLowerCase()) || company.includes(keyword.toLowerCase()) || description.includes(keyword.toLowerCase())) {
      jobListing.style.display = 'block';
    } else {
      jobListing.style.display = 'none';
    }
  }
}

var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  var searchInput = document.getElementById('search-input');
  var keyword = searchInput.value;

  searchJobs(keyword);
});
