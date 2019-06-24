package com.google.codeu.servlets;


import com.google.gson.Gson;
import com.google.gson.JsonArray;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Scanner;

@WebServlet("fast-food-restaurant-data")
public class FastFoodRestaurantServlet extends HttpServlet {
    private JsonArray restaurantLocationArray;

    @Override
    public void init() {
        restaurantLocationArray = new JsonArray();
        Gson gson = new Gson();
        Scanner scanner = new Scanner(getServletContext().getResourceAsStream("/WEB-INF/restaurant-data.csv"));
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            String[] cells = line.split(",");

            double lat = Double.parseDouble(cells[0]);
            double lng = Double.parseDouble(cells[1]);

            restaurantLocationArray.add(gson.toJsonTree(new RestaurantLocation(lat, lng)));
        }
        scanner.close();
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.getOutputStream().println(restaurantLocationArray.toString());
    }

    private static class RestaurantLocation {
        double lat;
        double lng;

        private RestaurantLocation (double lat, double lng) {
            this.lat = lat;
            this.lng = lng;
        }
    }

}
