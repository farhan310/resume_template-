const data = {
  name: 'Jehan Ghandhy',
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '647.785.2074',
  email: 'jehan.ghandhy@gmail.com',
  githubHandle: 'farhan310',
  linkedInHandle: 'jayghandhy',
  workExperiences: [
    {
      emoji: '☕️',
      ariaLabel: `coffee`,
      jobTitle: 'Manager',
      institution: 'Restaurant Brands International',
      dates: '2017 - Present',
      details: [
        'P&L Management - Manage the regional P&L of $250M+ in gross revenues to ensure restaurants are well capitalized for growth and financially profitable; prepared presentations to update the leadership team on the company’s latest performance',
        'Small Business Consulting - Work with businesses of franchisees who own 100+ Tim Horton’s restaurants in the GTA',
        'Develop strong business relationships with partners who have grown multi-unit restaurant portfolios',
      ],
    },
    {
      emoji: '📈',
      ariaLabel: `stock`,
      jobTitle: 'Research Associate',
      institution: 'Cambridge Global Asset Management',
      dates: '2016 - 2016',
      details: [
        'Helped build financial models to find probabilities of left-tail risk events for a $16B long-only portfolio',
      ],
    },
    {
      emoji: '📈',
      ariaLabel: `stock`,
      jobTitle: 'Financial Analyst',
      institution: 'Rosen Capital Advisors',
      dates: '2015 - 2015',
      details: [
        'Completed a 12-week summer internship with the hedge fund focusing on volatility arbitrage strategies',
        'Worked with the CIO to employ an option volatility arbitrage strategy that utilizes real-time delta-hedging techniques to maintain a market-neutral portfolio with low correlation to equity markets',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '🎓',
      ariaLabel: `graduation`,
      university: "Queen's University",
      school: 'Smith School of Business',
      dates: '2013 - 2017',
      details: ['What I studied in college', 'Some accolades I received'],
    },
    {
      emoji: '🧙‍♂️',
      ariaLabel: `wizard`,
      university: 'Harvard Business School',
      school: 'Certificate in Business Management',
      dates: '2015 - 2017',
      details: [
        'Completed a pre-MBA level program on the fundamentals of business from Harvard Business School',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
    workExperience.emoji
  }</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${educationalExperience.ariaLabel}">${
  educationalExperience.emoji
}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;
