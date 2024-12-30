let url = "https://api.github.com/users";

let body = document.querySelector("body");

let parentdiv = document.createElement("div");
parentdiv.setAttribute("id", "parentdiv");

body.append(parentdiv);

function showDetails(userdetails) {
  userdetails.map((details) => {
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("innerdiv");

    let avatar = document.createElement("img");
    avatar.classList.add("images");
    avatar.src = details.avatar_url;
    avatar.alt = "image not found";

    let userid = document.createElement("p");
    userid.innerHTML = "<b>UserId:</b> " + details.id;

    let uname = document.createElement("p");
    uname.innerHTML = "<b>User Name: </b>" + details.login;

    let button = document.createElement("BUTTON");
    button.innerText = "More Details";

    innerdiv.append(avatar);
    innerdiv.append(userid);
    innerdiv.append(uname);
    innerdiv.append(button);

    parentdiv.append(innerdiv);
  });
}

async function userApi(url) {
  try {
    let userdetails = await (await fetch(url)).json();
    console.log(userdetails);
    showDetails(userdetails);
  } catch (error) {
    console.log(error);
  }
}

userApi(url);
