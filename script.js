function vote(personId) {
    // Check if person has already voted
    if (localStorage.getItem('voted_' + personId)) {
      alert('You have already voted!');
    } else {
      // Process the vote for the person
      alert('Thank you for voting for person ' + personId + '!');
      
      // Store the voting status in local storage
      localStorage.setItem('voted_' + personId, true);
    }
  }