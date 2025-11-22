// GitHub Projects Loader
(function() {
  'use strict';

  const GITHUB_USERNAME = 'ValGSgit';
  const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
  
  // Language colors (GitHub's color scheme)
  const LANGUAGE_COLORS = {
    'C': '#555555',
    'C++': '#f34b7d',
    'Python': '#3572A5',
    'JavaScript': '#f1e05a',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Fortran': '#4d41b1',
    'Makefile': '#427819',
    'default': '#8b8b8b'
  };

  let allProjects = [];
  let currentFilter = 'all';

  // Initialize when DOM is ready
  function init() {
    fetchGitHubProjects();
    setupEventListeners();
  }

  // Fetch projects from GitHub API
  async function fetchGitHubProjects() {
    const container = document.getElementById('projects-container');
    
    try {
      const response = await fetch(GITHUB_API_URL + '?sort=updated&per_page=100');
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const repos = await response.json();
      
      // Filter out forks and sort by stars/updated
      allProjects = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => {
          // Prioritize repos with stars, then by update date
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
      
      displayProjects(allProjects);
      
    } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      displayError(container);
    }
  }

  // Display projects in the grid
  function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    
    if (projects.length === 0) {
      container.innerHTML = '<div class="no-projects"><p>No projects found matching the filter.</p></div>';
      return;
    }
    
    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
  }

  // Create HTML for a project card
  function createProjectCard(project) {
    const languageColor = LANGUAGE_COLORS[project.language] || LANGUAGE_COLORS.default;
    const description = project.description || 'No description available';
    const updatedDate = new Date(project.updated_at).toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
    
    // Map repo names to showcase page URLs
    const showcasePages = {
      '42CC': 'projects/42cc.html',
      'Minishell': 'projects/minishell.html',
      'webserv': 'projects/webserv.html',
      'PISSM': 'projects/pissm.html'
    };
    
    const showcaseUrl = showcasePages[project.name];
    
    return `
      <div class="project-card" data-language="${project.language || 'Other'}">
        <div class="project-header">
          <h3 class="project-title">
            <a href="${project.html_url}" target="_blank" rel="noopener noreferrer">
              ${escapeHtml(project.name)}
            </a>
          </h3>
          <div class="project-stats">
            <span class="stars" title="Stars">
              ⭐ ${project.stargazers_count}
            </span>
            <span class="forks" title="Forks">
              🍴 ${project.forks_count}
            </span>
          </div>
        </div>
        <p class="project-description">
          ${escapeHtml(description)}
        </p>
        <div class="project-meta">
          ${project.language ? `
            <span class="language">
              <span class="language-dot" style="background-color: ${languageColor}"></span>
              ${escapeHtml(project.language)}
            </span>
          ` : ''}
          <span class="updated">
            Updated ${updatedDate}
          </span>
        </div>
        <div class="project-links">
          ${showcaseUrl ? `
            <a href="${showcaseUrl}" class="btn btn-small">
              📖 View Details
            </a>
          ` : ''}
          <a href="${project.html_url}" class="btn btn-small ${showcaseUrl ? 'btn-secondary' : ''}" target="_blank" rel="noopener noreferrer">
            View Repository
          </a>
          ${project.homepage ? `
            <a href="${project.homepage}" class="btn btn-small btn-secondary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Display error message
  function displayError(container) {
    container.innerHTML = `
      <div class="error-message">
        <p>Unable to load projects from GitHub. Please try again later or visit my 
        <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener noreferrer">GitHub profile</a> directly.</p>
      </div>
    `;
  }

  // Setup event listeners
  function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Get filter value
        const filter = this.getAttribute('data-filter');
        currentFilter = filter;
        
        // Filter and display projects
        filterProjects(filter);
      });
    });
  }

  // Filter projects by language
  function filterProjects(language) {
    if (language === 'all') {
      displayProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.language === language);
      displayProjects(filtered);
    }
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
