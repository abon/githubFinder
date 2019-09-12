class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = ` 
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2" alt="avatar" />
            <a
              href="${user.html_url}"
              target="_blank"
              class="btn btn-info"
            >
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">
              Public Repos: ${user.public_repos}
            </span>
            <span class="badge badge-warning">
              Public Gists: ${user.gists}
            </span>
            <span class="badge badge-success">
              Following: ${user.following}
            </span>

            <span class="badge badge-light">
              Followers: ${user.followers}
            </span>
            <br />
            <br />
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company} </li>
              <li class="list-group-item">Website/Blog: ${user.blog} </li>
              <li class="list-group-item">Location: ${user.location} </li>
              <li class="list-group-item">Member Since: ${user.created_at} </li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Latest Repos</h3>
      <div class='repos'></div>
    `;
  }
  //show alert message
  showAlert(message, className) {
    const div = document.createElement("div");
    //add classes
    div.className = className;
    //add text
    //clear alert remaining alerts
    this.clearAlert();
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    //timeout after 3sec
    setTimeout(() => {
      this.clearAlert();
      this.clearProfile();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //clear profile message
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
