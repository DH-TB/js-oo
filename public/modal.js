function $(str) {
    return document.querySelectorAll(str);
}
const btn = Array.apply(null, $('.btn'));
const panel = Array.apply(null, $('.panel'));
const sure = Array.apply(null,$('.sure'));
const close = Array.apply(null,$('.close'));
const shadow = Array.apply(null, $('.shadow'));

btn.map((ele)=> {
    return ele.addEventListener('click', ()=> {
        panel.map((ele)=>ele.style.display = 'block');
        shadow.map((ele)=>ele.style.display = 'block');
    });
});
close.map((ele)=> {
    return ele.addEventListener('click', ()=> {
        panel.map((ele)=>ele.style.display = 'none');
        shadow.map((ele)=>ele.style.display = 'none');
    })
});
sure.map((ele)=> {
    return ele.addEventListener('click', ()=> {
        panel.map((ele)=>ele.style.display = 'none');
        shadow.map((ele)=>ele.style.display = 'none');
    })
});
shadow.map((ele)=> {
    return ele.addEventListener('click', (e) => {
        if (e.target == e.currentTarget) {
            panel.map((ele)=>ele.style.display = 'none');
            shadow.map((ele)=>ele.style.display = 'none');
        }
    })
});