img-defer
=========

A set of jQuery things to defer images to page load and choose image depending on viewport size.

Expects you to have this in your HTML

    <img class="defer" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==" narrowsrc="http://domain.com/img/small.jpg" largesrc="http://domain.com/img/large.jpg" />
    <noscript><img src="http://domain.com/img/large.jpg" /></noscript>

As using src="" could possibly not play nice I've added a Base64 encoded 1px transparent gif. (h/t @markskinner_ )

Internet Exploer 6 & 7 don't support data-uri things.
