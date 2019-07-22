window.onload = () => {
    const header = document.querySelector('header');
    const instaText = document.querySelector('#instatext');
    window.onscroll = () => {
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            header.style.padding = `0px 20px`;
            instaText.style.opacity = '0';
        } else {
            header.style.padding = `10px 20px`;
            instaText.style.opacity = '1';
        }
    }
}