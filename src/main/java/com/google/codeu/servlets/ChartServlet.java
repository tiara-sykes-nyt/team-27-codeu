package com.google.codeu.servlets;


import java.io.IOException;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import java.util.Scanner;


@WebServlet("/userchart")
public class ChartServlet extends HttpServlet {


  private JsonArray userDataArray;

  // This class could be its own file if we needed it outside this servlet
  private static class userData {
    String name;
    double rating;

    private userData (String name, double rating) {
      this.name = name;
      this.rating = rating;
    }
  }


  @Override
  public void init() {
    userDataArray = new JsonArray();
    Gson gson = new Gson();
    Scanner scanner = new Scanner(getServletContext().getResourceAsStream("/WEB-INF/user-data.csv"));
    scanner.nextLine(); //skips first line (the csv header)
    while(scanner.hasNextLine()) {
      String line = scanner.nextLine();
      String[] cells = line.split(",");

      String curName = cells[1];
      double curRating = Double.parseDouble(cells[2]);

      userDataArray.add(gson.toJsonTree(new userData(curName, curRating)));
    }
    scanner.close();
  }

   @Override
   public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     response.setContentType("application/json");
     response.getOutputStream().println(userDataArray.toString());
   }


}
