// search
const searchbtn = document.getElementsByClassName("searchbtn");
const searchbar = document.getElementsByClassName("searchbar");

searchbtn[0].addEventListener("click", function(){
    if(searchbar[0].style.display === "block"){
        searchbar[0].style.display = "none";
    }
    else{
        searchbar[0].style.display = "block";
    }
});
// Subscribe
const subscribe = document.getElementsByClassName("subscribe");
const formclose = document.getElementsByClassName("formclose");

subscribe[0].addEventListener("click", function(){
    document.getElementsByClassName("form-subs")[0].style.display = "flex";
});
formclose[0].addEventListener("click", function(){
    document.getElementsByClassName("form-subs")[0].style.display = "none";
});
// Replies and like

const replies = document.getElementsByClassName("rep");
const likes = document.getElementsByClassName("likes");

replies[0].addEventListener("click", function(){
    if(document.getElementsByClassName("replies")[0].style.display === "none"){
        document.getElementsByClassName("replies")[0].style.display = "block";
    }
    else{
        document.getElementsByClassName("replies")[0].style.display = "none";
    }
});

likes[0].addEventListener("click", function(){
    if(document.getElementsByClassName("likes")[0].style.color === "black"){
        document.getElementsByClassName("likes")[0].style.color = "blue";
    }
    else{
        document.getElementsByClassName("likes")[0].style.color = "black";
    }
});

// content2
replies[1].addEventListener("click", function(){
    if(document.getElementsByClassName("replies")[1].style.display === "none"){
        document.getElementsByClassName("replies")[1].style.display = "block";
    }
    else{
        document.getElementsByClassName("replies")[1].style.display = "none";
    }
});

likes[1].addEventListener("click", function(){
    if(document.getElementsByClassName("likes")[1].style.color === "black"){
        document.getElementsByClassName("likes")[1].style.color = "blue";
    }
    else{
        document.getElementsByClassName("likes")[1].style.color = "black";
    }
});
// content3
replies[2].addEventListener("click", function(){
    if(document.getElementsByClassName("replies")[2].style.display === "none"){
        document.getElementsByClassName("replies")[2].style.display = "block";
    }
    else{
        document.getElementsByClassName("replies")[2].style.display = "none";
    }
});

likes[2].addEventListener("click", function(){
    if(document.getElementsByClassName("likes")[2].style.color === "black"){
        document.getElementsByClassName("likes")[2].style.color = "blue";
    }
    else{
        document.getElementsByClassName("likes")[2].style.color = "black";
    }
});