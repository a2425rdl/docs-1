function addVersionClick(){$(".feature_version").on("click",function(e){var n=$(e.currentTarget).attr("href"),t=window.location.href,a=t.substring(0,t.lastIndexOf("/"))+"/"+n;window.location.href=a})}function acivateNavMenu(){$(".nav-panel-menu").addClass("is-active")}function highlightSelectedVersion(){var e=window.location.href,n=e.substring(e.lastIndexOf("/")+1),t=$('.feature_version[href="'+n+'"]');if(1===t.length){t.addClass("feature_version_selected");var a=t.attr("aria-label");t.attr("aria-label",a+" selected")}}function checkForNonVersionedPage(){if(0<$(".feature_version").length){var e=window.location.href,n=e.substring(e.lastIndexOf("/")+1);if(0===$('.feature_version[href="'+n+'"]').length){var t=$(".feature_version").first().attr("href"),a=e.substring(0,e.lastIndexOf("/"))+"/"+t;window.location.href=a}}}function selectTOC(){var n=$(".feature_version").first().attr("href");n=n||(n=window.location.href).substring(n.lastIndexOf("/")+1);var e=$("li > span:contains(Features)").parent().find(".nav-item a").filter(function(){var e=$(this).attr("href");return e=e.substring(e.lastIndexOf("/")+1),n===e});if(0<e.length){var t=e.parent()[0];navigation.activateCurrentPath(t),navigation.scrollItemToMidpoint(t)}}$(document).ready(function(){checkForNonVersionedPage(),addVersionClick(),acivateNavMenu(),highlightSelectedVersion(),selectTOC()});
//# sourceMappingURL=05-features.js.map