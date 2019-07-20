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

        <!-- Map Script-->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk4eW11F6Tn08mUSJVZzBWQRvi5JdbxIo"></script>
        <script>
        function createRestaurantMap(){
          fetch('/fast-food-restaurant-data').then(function(response) {
            return response.json();
          }).then((restaurantLocations) => {
            const map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 35.78613674, lng: -119.4491591},
              zoom:7
            });
            restaurantLocations.forEach((restaurantLocation) => {
              new google.maps.Marker({
                position: {lat: restaurantLocation.lat, lng: restaurantLocation.lng},
                map: map
              });
            });
          });
        }
      </script>
        <style>
        #map{
          width: 500px;
          height: 500px;
          display: block;
          margin-left: auto;
          margin-right: auto;
}
        }
      </style>
  <link href="https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap" rel="stylesheet">
      </head>
      <body onload="buildUI(); createRestaurantMap();">
        <div id="navigation-bar"></div>

        <!-- Map-->
        <div id="map-wrapper">
        <p id = "map-description">Restaurants Near Me</p>
        <div id="map"></div>
      </div>


          <!-- Messages-->
          <form id="message-form" action="<%= uploadUrl %>" method="POST" enctype="multipart/form-data">
          <p style="margin-bottom: 0px;
          margin-top: 0px;
          font-family: Libre Franklin;">Place an Order:</p>
          <br/>
          <textarea name="text" placeholder="What do you want to eat?" id="message-input"></textarea>
          <p style="font-family: Libre Franklin;">Upload an image (optional):</p>
          <input type="file" name="image">
            <br/><br/>
            <input type="submit" value="Submit">
            </form>

            <div id="message-container">Loading...</div>
          </body>
        </html>
