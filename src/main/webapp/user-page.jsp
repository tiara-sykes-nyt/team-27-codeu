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
        <script src="/js/navigation-loader.js"></script>
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
        <script type="text/babel" src="js/Navigation-bar/navigation-bar.js"></script>

      </head>
      <body onload="addLoginOrLogoutLinkToNavigation(); buildUI();">
        <div id="navigation-bar"></div>
        <h1 id="page-title">User Page</h1>

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

            <div id="message-container">Loading...</div>
          </body>
        </html>
