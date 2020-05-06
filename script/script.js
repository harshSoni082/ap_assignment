function switchTab(active, inactive)
{
    var which = active.innerHTML;
    var signinContainer = document.getElementsByClassName('login-container')[0];
    var signupContainer = document.getElementsByClassName('signup-container')[0];

    if(which == 'Sign In')
    {
        signinContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
    else
    {
        signinContainer.style.display = "block";
        signupContainer.style.display = "none";
    }

    active.style.backgroundColor = "rgb(250, 251, 252)";
    active.style.borderBottom = "1px solid rgb(237, 240, 243)";
    inactive.style.backgroundColor = "white";
    inactive.style.borderBottom = "0";
}

function loginSignupTab()
{
    var tabs = document.getElementsByClassName("login-slider")[0];
    var signin = tabs.getElementsByClassName("login-link")[0];
    var signup = tabs.getElementsByClassName("signup-link")[0];

    signup.addEventListener('click', function() {switchTab(signin, signup);}, false);
    signin.addEventListener('click', function() {switchTab(signup, signin);}, false);

    var SignInSignUpModel = document.getElementById('cred-model');
    var closeTab = document.getElementsByClassName('close')[0];
    closeTab.addEventListener('click', function() {closeModel(SignInSignUpModel);}, false)
}

function signInScreen()
{
    var regModel = document.getElementById('cred-model');
    regModel.style.display = "block";
    signInScreen();
}

function searchImg()
{
    var imgContainer, imgs, img;
    var imgPos = -1;
    var srchBox = document.getElementsByClassName("search-container")[0];
    var searchQuery = document.getElementsByClassName("search-box")[0].value
    document.getElementsByClassName("search-box")[0].value = ""
    searchQuery = searchQuery.toLowerCase();
    if(searchQuery.length == 0)
    {
        window.alert("Please enter a name to search");
    }
    else
    {
        var re = new RegExp(searchQuery, "i");
        imgContainer = document.getElementsByClassName("img-container");
        for(var idx=0; idx<imgContainer.length; idx++)
        {
            imgs = imgContainer[idx].getElementsByTagName("img");
            for(var i=0; i<imgs.length; i++)
            {
                img = imgs[i];
                var srcNme = img.getAttribute("src");
                var imgNme = srcNme.slice(10, -4).split("-").join(" ");
                if (re.test(imgNme))
                {
                    imgPos = img.offsetTop;
                    break;
                }
            }
        }
        if(imgPos != -1)
        {
            window.scrollBy(0, imgPos-40);
            event.preventDefault();
        }
    }
}

function closeModel(model)
{
    model.style.display = "none";
}

function expandImg(e)
{
    var imgPath = e.target.getAttribute("src");
    var fullScreenModel = document.getElementById("img-model");
    var fullScreenImage = fullScreenModel.getElementsByClassName("full-img")[0];

    var close = fullScreenModel.getElementsByClassName("close")[0];
    close.addEventListener("click", function() {closeModel(fullScreenModel);}, false);

    fullScreenImage.setAttribute("src", imgPath);
    fullScreenModel.style.display = "block";
}

function start()
{
    loginSignupTab();
    var searchBtn = document.getElementsByClassName("search-btn")[0];
    searchBtn.addEventListener("click", searchImg, false);

    var imgContaner = document.getElementsByTagName("img");
    for(var i=0; i<imgContaner.length; i++)
    {
        imgContaner[i].addEventListener("click", expandImg, false);
    }
    document.getElementsByClassName('nav-signup')[0].addEventListener('click', signInScreen, false);
}

window.addEventListener("load", start, false);