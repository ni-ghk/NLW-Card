const socialMediaLinks = {
  githud: 'ni-ghk',
  instagram: 'bringme.mysun',
  facebook: 'nicholas.vieira.39',
  youtube: 'channel/UCOSIgCxDv8MBm7Xh15pi3eg',
  twitter: 'Parafan_39'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${socialMediaLinks.githud}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

getGithubProfileInfo()
