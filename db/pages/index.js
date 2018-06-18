const data = [
    {
      "id": 1,
      "path": "/",
      "title": "Home",
      "description": "The home page",
      "featured_image": "/images/1200px-Dior_Logo.png",
      "markup": "&lt;style&gt;\n  section {\n    // min-height: 90vh;\n  }\n  .cta {\n    display: flex;\n    justify-content: center;\n  }\n &lt;/style&gt;\n &lt;figure class=&quot;hero&quot;&gt;\n &lt;img src=&quot;http://www.chanel.com/i18n/en_WW/slides/1600_COCO_CRUSH_25042018.jpg&quot; alt=&quot;A woman driving a car wearing lots of bling&quot;&gt;\n &lt;figcaption&gt;Larry! Lots of bling &lt;/figcaption&gt;\n &lt;/figure&gt;\n &lt;div class=&quot;cta&quot;&gt;\n &lt;a href=&quot;#section-1&quot;&gt;\n &lt;mwc-fab icon=&quot;expand_more&quot;&gt; &lt;/mwc-fab&gt;\n &lt;/a&gt;\n &lt;/div&gt;\n &lt;section class=&quot;col-md-2&quot; id=&quot;section-1&quot;&gt;\n &lt;div&gt;\n &lt;h2&gt;Dynamic page &lt;/h2&gt;\n &lt;p&gt;This is a text-only page. &lt;/p&gt;\n &lt;p&gt;It doesn't do anything other than display some static text. &lt;/p&gt;\n &lt;/div&gt;\n &lt;figure&gt;\n &lt;img src=&quot;http://www.chanel.com/i18n/en_WW/slides/1600_COCO_CRUSH_25042018.jpg&quot; alt=&quot;A woman driving a car wearing lots of bling&quot;&gt;\n &lt;figcaption&gt;Lots of bling &lt;/figcaption&gt;\n &lt;/figure&gt;\n &lt;/section&gt;\n &lt;section&gt;\n &lt;h2&gt;Welcome &lt;/h2&gt;\n &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis. &lt;/p&gt;\n &lt;/section&gt;\n &lt;section&gt;\n &lt;p&gt;Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin. &lt;/p&gt;\n &lt;/section&gt;\n &lt;site-aside&gt; &lt;/site-aside&gt;",
      "dom": {
        "#section-1": {
          "properties": {
            "title": "Test 1"
          },
          "value": "Value 1"
        }
      }
    }, {
      "id": 2,
      "path": "/about/brand/dior",
      "title": "About Dior",
      "description": "All about Dior",
      "featured_image": "images/618495_1992x1296px-1-996x648.jpg",
      "markup":
        "<img src=\"/images/placeholder/celine.webp\" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum erat nec finibus tincidunt. Aliquam at volutpat urna. Nullam tellus nibh, volutpat varius dictum in, volutpat iaculis orci. Fusce pellentesque at ligula fringilla egestas. Suspendisse enim urna, luctus sit amet pretium sit amet, laoreet cursus metus. Maecenas vitae elementum lectus, eget gravida odio. Sed dapibus nulla quis lorem dignissim, in fringilla orci congue. Duis neque velit, eleifend a tristique vel, volutpat non augue. Donec dolor elit, lobortis a finibus nec, vestibulum vitae purus. Sed ultricies at nunc in porttitor. Donec scelerisque tristique laoreet. Etiam condimentum leo in enim fringilla, et consequat eros tempor. Integer sed faucibus risus, quis condimentum lacus. Integer ut lobortis ligula.</p>"
    }, {
      "id": 3,
      "path": "/stores",
      "title": "Stores",
      "description": "Stores",
      "featured_image": "images/8923279_fpx.jpeg",
      "markup":
        "<img src=\"/images/placeholder/U6QmtyUcOVjrsvdrbjqXko02T8kTv3CIfTnsZzgD.jpeg\" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum erat nec finibus tincidunt. Aliquam at volutpat urna. Nullam tellus nibh, volutpat varius dictum in, volutpat iaculis orci. Fusce pellentesque at ligula fringilla egestas. Suspendisse enim urna, luctus sit amet pretium sit amet, laoreet cursus metus. Maecenas vitae elementum lectus, eget gravida odio. Sed dapibus nulla quis lorem dignissim, in fringilla orci congue. Duis neque velit, eleifend a tristique vel, volutpat non augue. Donec dolor elit, lobortis a finibus nec, vestibulum vitae purus. Sed ultricies at nunc in porttitor. Donec scelerisque tristique laoreet. Etiam condimentum leo in enim fringilla, et consequat eros tempor. Integer sed faucibus risus, quis condimentum lacus. Integer ut lobortis ligula.</p><a href=\"/stores/list\">Stores list</a>"
    }, {
      "id": 4,
      "path": "/test",
      "title": "Test",
      "description": "Test page",
      "featured_image": "/images/1200px-Dior_Logo.png",
      "markup": "&lt;style&gt;\n  section {\n    // min-height: 90vh;\n  }\n  .cta {\n    display: flex;\n    justify-content: center;\n  }\n &lt;/style&gt;\n &lt;figure class=&quot;hero&quot;&gt;\n &lt;img src=&quot;http://www.chanel.com/i18n/en_WW/slides/1600_COCO_CRUSH_25042018.jpg&quot; alt=&quot;A woman driving a car wearing lots of bling&quot;&gt;\n &lt;figcaption&gt;Larry! Lots of bling &lt;/figcaption&gt;\n &lt;/figure&gt;\n &lt;div class=&quot;cta&quot;&gt;\n &lt;a href=&quot;#section-1&quot;&gt;\n &lt;mwc-fab icon=&quot;expand_more&quot;&gt; &lt;/mwc-fab&gt;\n &lt;/a&gt;\n &lt;/div&gt;\n &lt;section class=&quot;col-md-2&quot; id=&quot;section-1&quot;&gt;\n &lt;div&gt;\n &lt;h2&gt;API Data page &lt;/h2&gt;\n &lt;p&gt;This page retrieves data from the API. &lt;/p&gt;\n &lt;p&gt;It doesn't do anything other than display some static text. &lt;/p&gt;\n &lt;/div&gt;\n &lt;figure&gt;\n &lt;img src=&quot;http://www.chanel.com/i18n/en_WW/slides/1600_COCO_CRUSH_25042018.jpg&quot; alt=&quot;A woman driving a car wearing lots of bling&quot;&gt;\n &lt;figcaption&gt;Lots of bling &lt;/figcaption&gt;\n &lt;/figure&gt;\n &lt;/section&gt;\n &lt;section&gt;\n &lt;h2&gt;Welcome &lt;/h2&gt;\n &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis. &lt;/p&gt;\n &lt;/section&gt;\n &lt;section&gt;\n &lt;p&gt;Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin. &lt;/p&gt;\n &lt;/section&gt;\n &lt;site-aside&gt; &lt;/site-aside&gt;"
    }, {
      "id": 5,
      "path": "/test/demo",
      "title": "Test - Demo",
      "description": "Test - Demo page",
      "featured_image": "/images/1200px-Dior_Logo.png",
      "markup": "&lt;div&gt;spispopd&lt;/div&gt;"
    }
];

// export data;
module.exports = data;