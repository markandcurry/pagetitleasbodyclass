$(document).ready(function () {
    var codelines = $(document).find("title").text();
    var addTitleAsClass = codelines.substr(0, codelines.indexOf(' '));
    console.log(codelines);
    console.log(addTitleAsClass);
});
