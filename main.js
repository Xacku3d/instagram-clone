window.onload = () => {
    //Scroll listener
    const header = document.querySelector('header');
    const instaText = document.querySelector('#insta_text');
    window.onscroll = () => {
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            header.style.padding = `0px 20px`;
            instaText.style.opacity = '0';
        } else {
            header.style.padding = `10px 20px`;
            instaText.style.opacity = '1';
        }
    }

    //Input listener
    const searchBox = document.getElementById('search_box');
    const searchContainer = document.getElementById('search_container');
    const searchInput = document.getElementById('search');

    searchContainer.onclick = () => {
        searchBox.style.background = "#fff";
        searchContainer.style = "padding-left: 10px;";
        searchInput.style = 'width: 160px;';
        searchInput.focus();
    }

    //Outside click listener
    document.body.addEventListener('click',(event) => {
        if(
            !(
                (event.target.id == "search_container") || 
                (event.target.id == "search") ||
                (event.target.id == "search_img") ||
                (event.target.id == "search_box")
            )
        ) {
            searchBox.style.background = "#fafafa";
            searchContainer.style = "padding-left: 75px;";
            searchInput.style = 'width: 50px;';
        }
    });
}