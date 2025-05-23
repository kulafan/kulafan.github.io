hexo.extend.filter.register('theme_inject', function(injects) {
  injects.footer.raw('totalpageview', '<div><span><a href="https://finicounter.eu.org/" target="_blank">Total Pageview:</a></span><span id="finicount_views" style="display:inline;padding-left:5px;"></span><div> <script async src="//finicounter.eu.org/finicounter.js"></script>', {}, {cache: false});
});