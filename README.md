img-defer
=========

A set of jQuery things to defer images to page load and choose image depending on viewport size.

Expects you to have this in your HTML

    <img class="defer" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==" narrowsrc="http://domain.com/img/small.jpg" largesrc="http://domain.com/img/large.jpg" />
    <noscript><img src="http://domain.com/img/large.jpg" /></noscript>
