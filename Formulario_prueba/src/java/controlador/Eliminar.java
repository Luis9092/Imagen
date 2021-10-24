/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.Producto;

/**
 *
 * @author Luis Fernando Paxel
 */
public class Eliminar extends HttpServlet {

    Producto producto;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, InterruptedException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Eliminar</title>");
            out.println("</head>");
            out.println("<body>");

            producto = new Producto(Integer.parseInt(request.getParameter("txt_id_producto")), request.getParameter("txt_producto"), Integer.valueOf(request.getParameter("drop_marcas")), request.getParameter("txt_descripcion"), "", Double.valueOf(request.getParameter("txt_costo")), Double.valueOf(request.getParameter("txt_venta")), Integer.valueOf(request.getParameter("txt_existencia")), "");

            if ("eliminar".equals(request.getParameter("btn_eliminar"))) {

                if (producto.eliminar() > 0) {
                    Thread.sleep(2000);
                    response.sendRedirect("index.jsp");
                } else {
                    Thread.sleep(2000);
                    response.sendRedirect("index.jsp");

                }
            }
            
            if ("modificar".equals(request.getParameter("btn_modificar"))) {

                if (producto.modificar() > 0) {
                    Thread.sleep(2000);
                    response.sendRedirect("index.jsp");
                } else {
                    Thread.sleep(2000);
                    response.sendRedirect("index.jsp");

                }
            }

            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (InterruptedException ex) {
            Logger.getLogger(Eliminar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (InterruptedException ex) {
            Logger.getLogger(Eliminar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
