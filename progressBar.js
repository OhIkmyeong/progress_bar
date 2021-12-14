const pgs_bar = document.getElementById('pgs_bar');
let page_hei;

function get_page_hei(){
    page_hei = document.body.offsetHeight - window.innerHeight;
}//get_page_hei

function progress_bar(){
    const scY = window.scrollY;
    const per = scY / page_hei;
    pgs_bar.style.transform = `scaleX(${per})`;
}//progress_bar

/////// 실행 /////////
get_page_hei();

window.addEventListener('scroll',progress_bar);

window.addEventListener('resize',()=>{
    get_page_hei();
    progress_bar();
});