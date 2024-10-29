const stories = {
    'Overcoming Adversity': [
        { title: "The Breaking Point", text: "I remember a moment when I lost my temper at a friend over a misunderstanding..." },
        { title: "Controlled Fury", text: "Learning to channel my anger into constructive actions has been a journey..." }
    ],
    'Loss and Grief': [
        { title: "The Weight of Sadness", text: "Reflecting on my emotions has been a journey. There was a time when I felt overwhelmed by sadness after a loss..." },
        { title: "Joy in the Little Things", text: "Finding joy in small moments has changed my perspective on life..." }
    ],
    'Travel and Self-Discovery': [
        { title: "Dreams Deferred", text: "Failure has taught me valuable lessons. One of my biggest failures was when I didn't get accepted into my dream school..." },
        { title: "A Second Chance", text: "After failing my first job interview, I learned what I truly needed to improve..." }
    ],
    'Family Dynamics': [
        { title: "Bouncing Back", text: "Resilience is about bouncing back. After facing setbacks in my career, I found the strength to try again..." },
        { title: "Strength in Adversity", text: "Each challenge I've faced has made me stronger, pushing me to adapt and thrive..." }
    ],
    'Career Transformation': [
        { title: "Releasing the Past", text: "Learning to let go has been transformative. When I finally let go of past grudges, I felt a weight lifted off my shoulders..." },
        { title: "Moving Forward", text: "Letting go of toxic relationships has opened up space for healthier connections..." }
    ],
    'Living with Addiction': [
        { title: "Releasing the Past", text: "Learning to let go has been transformative. When I finally let go of past grudges, I felt a weight lifted off my shoulders..." },
        { title: "Moving Forward", text: "Letting go of toxic relationships has opened up space for healthier connections..." }
    ],
    'Rebuilding After Failure': [
        { title: "Releasing the Past", text: "Learning to let go has been transformative. When I finally let go of past grudges, I felt a weight lifted off my shoulders..." },
        { title: "Moving Forward", text: "Letting go of toxic relationships has opened up space for healthier connections..." }
    ]
};

// Function to display titles when a topic is clicked
document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.getAttribute('data-topic');
        
        // Create HTML for story titles with numbering
        const titlesHtml = stories[topic].map((story, index) => 
            `<div class="story-title" data-topic="${topic}" data-index="${index}">${index + 1}. ${story.title}</div>` // Add numbering here
        ).join('');

        // Update the titles display area
        document.getElementById('savedStories').innerHTML = titlesHtml;
        document.getElementById('savedStories').style.display = 'block'; // Show titles

        // Scroll to titles section
        document.getElementById('savedStories').scrollIntoView({ behavior: 'smooth' });
        
        // Hide the story text initially
        document.getElementById('story').style.display = 'none'; 
    });
});

// Function to display the story when a title is clicked
document.addEventListener('click', event => {
    if (event.target.classList.contains('story-title')) {
        const topic = event.target.getAttribute('data-topic');
        const index = event.target.getAttribute('data-index');
        
        // Set the story text to the selected story
        const selectedStory = stories[topic][index];
        const storyHtml = `
            <h3>${selectedStory.title}</h3>
            <p>${selectedStory.text}</p>
        `;

        // Update the story display area
        document.getElementById('story').innerHTML = storyHtml;
        document.getElementById('story').style.display = 'block'; // Show the story

        // Scroll to story section
        document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
    }
});

// Form submission to add a new story
document.getElementById('storyForm').addEventListener('submit', event => {
    event.preventDefault(); // Prevent the default form behavior
    
    const topic = document.getElementById('topicSelect').value;
    const storyTitle = document.getElementById('storyTitle').value;
    const newStoryText = document.getElementById('newStory').value;
    
    // Save the new story with title
    stories[topic].push({ title: storyTitle, text: newStoryText });
    localStorage.setItem('stories', JSON.stringify(stories));
    
    // Clear the form
    document.getElementById('storyForm').reset();
    
    // Optionally update the displayed saved stories immediately
    displaySavedStories();
});
