function fromJSONToHTMLTable(input) {
    let output = '<table>\n'
    const arr = JSON.parse(input);
    const keys = Object.keys(arr[0]);

    output += ' <tr>'
    for (const element of keys) {
        output += `<th>${element}</th>`
    }

    output += '</tr>\n'

    for (const element of arr) {
        output += ' <tr>'
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                if (isNaN(element[key])) {
                    output += `<td>${replaceSymbol(element[key])}</td>`
                } else {
                    output += `<td>${element[key]}</td>`
                }
            }
        }
        output += '</tr>\n'
    }
    output += '</table>'

    function replaceSymbol(str) {
        let string = str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
        return string;
    }
    return output
}
window.onload = function () {
    let container = document.getElementById('wrapper');
    // container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
    container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);

};
// fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","kuche":"Tomatoes & Chips","kotka":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
// fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);