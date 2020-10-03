const regex = /(((\w[a-z]*)?ing\b))(?![^<]*>)/gi;

function hl () {
    document.body.innerHTML = document.body.innerHTML.replace(regex, '<mark>$1</mark>')
};

hl()
