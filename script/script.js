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

function closeImg(fullScreenModel)
{
    fullScreenModel.style.display = "none";
}

function expandImg(e)
{
    var imgPath = e.target.getAttribute("src");
    var fullScreenModel = document.getElementsByClassName("model")[0];
    var fullScreenImage = fullScreenModel.getElementsByClassName("full-img")[0];

    var close = fullScreenModel.getElementsByClassName("close")[0];
    close.addEventListener("click", function() {closeImg(fullScreenModel);}, false);

    fullScreenImage.setAttribute("src", imgPath);
    fullScreenModel.style.display = "block";
}

function start()
{
    var searchBtn = document.getElementsByClassName("search-btn")[0];
    searchBtn.addEventListener("click", searchImg, false);

    var imgContaner = document.getElementsByTagName("img");
    for(var i=0; i<imgContaner.length; i++)
    {
        imgContaner[i].addEventListener("click", expandImg, false);
    }
}

window.addEventListener("load", start, false);