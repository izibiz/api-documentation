window.FakeLoader=function(e,t,n){var i={auto_hide:!0,overlay_id:"fakeloader-overlay",fade_timeout:200,wait_for_images:!0,wait_for_images_selector:"body"},o=null,s={hideOverlay:function(){o.removeClass("visible"),t.setTimeout(function(){o.addClass("hidden")},i.fade_timeout)},showOverlay:function(){o.removeClass("hidden").addClass("visible")},init:function(r){e.extend(i,r),e("#"+i.overlay_id).length<=0?(o=e('<div id="'+i.overlay_id+'" class="visible incoming"><div class="loader-wrapper-outer"><div class="loader-wrapper-inner"><div class="loader"></div></div></div></div>'),e("body").append(o),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log("You should put the fakeLoader loading overlay element in your markup directly for best results.")):o=e("#"+i.overlay_id),o.click(function(){s.hideOverlay()}),e(t).bind("beforeunload",function(){e("#"+i.overlay_id).removeClass("incoming").addClass("outgoing"),s.showOverlay()}),e(n).ready(function(){1==i.auto_hide&&("function"==typeof e.fn.waitForImages&&1==i.wait_for_images?e(i.wait_for_images_selector).waitForImages(function(){s.hideOverlay()}):s.hideOverlay())})}};return s}(jQuery,window,document);