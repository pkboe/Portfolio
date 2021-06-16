import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/pkboe/Portfolio"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/pkboe/Portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
