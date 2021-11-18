const contents = document.querySelectorAll('.main-pages');
const callback = function(entries){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    let theKids = entry.target.children;
    Array.from(theKids).forEach(x => {
      x.classList.remove('inactive');
      if(entry.target.id == 'home'){
        entry.target.classList.remove('inactive');
        console.log('hallo');
      }
      if(x.classList.contains('banner-div')){
        Array.from(x.children).forEach(element => {
          element.classList.toggle('inactive');
        })
      }
    })
    observer.unobserve(entry.target);
  });
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.85
}
const observer = new IntersectionObserver(callback, options);

contents.forEach(div => {
  observer.observe(div);
})
