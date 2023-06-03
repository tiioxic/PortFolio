const btnReturnTop = document.querySelector('.btn-return-top');

btnReturnTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0
    })
window.addEventListener('scroll', () =>{

    const{scrollTop, clientHeight} = document.documentElement;

    console.log(scrollTop, clientHeight);

    console.log(btnReturnTop.getBoundingClientRect());
})
})