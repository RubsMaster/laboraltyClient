const { default: Quill } = require("quill");

var quill = new Quill('#editor', {
    modules: {
        toolbar: true
    },
    scrollingContainer: true,
    theme: 'snow'
});