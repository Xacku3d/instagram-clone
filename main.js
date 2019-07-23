window.onload = () => {
    //Scroll listener
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

    //Input listener
    const inputLayout = document.querySelector('#search');
    inputLayout.addEventListener('focus', ()=> {
        inputLayout.style.background = '#fff';
        inputLayout.style.textAlign = 'left';
    })
    document.body.addEventListener('click', (e) => {
        if(e.target.id !== 'search') {
            inputLayout.style.background = '#fafafa';
            inputLayout.style.textAlign = 'center';
        }
    })

}