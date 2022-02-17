const LinksSocialMedia = {
  github: 'code36u4r60',
  youtube: '',
  facebook: 'code36u4r60',
  instagram: 'code36u4r60',
  twitter: ''
}

function changeSocialMediaLinks() {
  Object.entries(LinksSocialMedia).forEach(([key, value]) => {
    if (key !== 'github' && value) {
      var li = document.createElement('li')
      const html = `
        <a href="https://youtube.com/${value}" target="_blank"">
          <img src="images/${key}.svg" alt="icon${key}" />
        </a>
      `
      li.innerHTML = html
      socialLinks.appendChild(li)
    }
  })
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.title = `${data.name} - GR UTAD`
      userLogin.textContent = data.login
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
