CMS.$(document).ready(function() {
    var pluginEl = CMS.$('#scroll_top_plugin');
    pluginEl.on('click', function(e) {
        CMS.$('html, body').animate( {scrollTop: 0 }, 2000);
    });

    CMS.$(document).on('scroll', function() {
        if(CMS.$(document).scrollTop() > 0 && pluginEl.hasClass('hidden')) {
            pluginEl.removeClass('hidden');
        }
        if(CMS.$(document).scrollTop() <= 0  && !pluginEl.hasClass('hidden')) {
            pluginEl.addClass('hidden');
        }
    });
});