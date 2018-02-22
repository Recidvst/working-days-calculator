(function() {
    const body = document.querySelector('body');
    const target = ['e','a','s','t','e','r'];
    // const target = body.getAttribute('secret-word').split('');
    let sentence = [];

    window.addEventListener('keyup',function(e) {
        sentence.push(e.key);
        
        let check = JSON.stringify(sentence) === JSON.stringify(target);

        ( check ) ? body.className += " success" : body.className -= " success" ;

        (sentence.length >= target.length) ? sentence.splice(0,1) : null ; // eslint-disable-line
    });
})()