<%-- The Java code in this JSP file runs on the server when the user navigates
     to the homepage. This allows us to insert the Blobstore upload URL into the
     form without building the HTML using print statements in a servlet. --%>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<% BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
   String uploadUrl = blobstoreService.createUploadUrl("/messages"); %>



<!DOCTYPE html>
<html>
  <head>
    <title>User Page</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/user-page.css">
    <script src="/js/user-page-loader.js"></script>
  </head>
  <body onload="buildUI();">


    <nav>
      <ul id="navigation">
        <li><a href="/index.html">Home</a></li>
        <li><a href="/aboutus.html">Meet The Team</a></li>
        <li><a href="/community.html">Community</a></li>
        <li><a href="/stats.html">Stats</a></li>
        <li><a href="/feed.html">Order Feed</a></li>
        <li><a href="/restaurant-map.html">Map</a></li>
      </ul>
    </nav>
    <h1 id="page-title">User Page</h1>

<!-- About Me-->
    <div id="about-me-container">Loading...</div>
  <div id="about-me-form" class="hidden">
  <form action="/about" method="POST">
    <textarea name="about-me" placeholder="Tell us about yourself!" rows=4 required></textarea>
    <br/>
    <input type="submit" value="Submit">
  </form>
</div>

<!-- Messages-->
    <form id="message-form" action="<%= uploadUrl %>" method="POST" enctype="multipart/form-data">
      <p>Enter a new message:</p>
      <br/>
      <textarea name="text" placeholder="What's on your mind?" id="message-input"></textarea>
      <p>Upload an image (optional):</p>
      <input type="file" name="image">
      <br/><br/>
      <input type="submit" value="Submit">
    </form>
    <hr/>

    <div id="message-container">Loading...</div>
  </body>
</html>
