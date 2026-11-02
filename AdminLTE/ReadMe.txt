AdminLTE is well put together, but at the end of the day it’s still HTML, CSS, and JS.....
which means half your workflow is copy, paste, mash the blender button, 
and hope the kitchen doesn’t explode.

Here is an abbreviated guide how to adapt them for IntraWeb 17.
Adapting them and updating them in a non IntraWeb 17 project is at least
as involved, in fact likely more.

Create these 2 html files in your project directory.

Index.html
  Copy the template here, but remove everything from the body (but leave the body attributes in tact)

  As of AdminLTE 4.0.0r4 that will leave the body looking like this for Index1.html
    <body class="layout-fixed sidebar-expand-lg sidebar-open bg-body-tertiary">
    </body>
  If you want a loading message, you can put it in the body.

  Add IntraWeb.js right before the closing head tag. The defer attribute is necessary.
      <script src="/IW17/IntraWeb/IntraWeb.js" defer></script>
    </head>
  Or you can use the more advanced loader from the default IntraWeb Index.html.

  Search for ="./
  You need to update these URLs to point to the AdminLTE distribution, a CDN or a local copy.
  For example, replace the ./ with:
    https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-rc4/dist/

Index_.html
  Copy the same template here, but remove everything from the head instead.

  Search for ="./
    Same procedure as in Index.html