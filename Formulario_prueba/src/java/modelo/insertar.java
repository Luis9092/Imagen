 
package modelo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 *
 * @author Luis Fernando Paxel
 */
public class insertar {
   Connection con;
    PreparedStatement ps;
    ResultSet rs;
    int r = 0;

      public int agregar(Producto p)
    {
        
          String fecha= new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(Calendar.getInstance().getTime());
         Conexion cn = new Conexion();
        String sql = "insert into productos(Producto,idMarca,Descripcion,Imagen,Precio_costo,Precio_venta,Existencia,Fecha_ingreso) values(?,?,?,?,?,?,?,?);";
        try {
            cn.abrirCon();
            con = cn.conexiondb;
            ps = con.prepareStatement(sql);
            ps.setString(1, p.getProducto());
            ps.setInt(2, p.getIdmarca());
            ps.setString(3, p.getDescripcion());
            ps.setString(4, p.getImagen());
            ps.setDouble(5, p.getPrecio_costo());
            ps.setDouble(6, p.getPrecio_venta());
            ps.setInt(7,p.getExistencia());
            ps.setString(8, fecha);
            ps.executeUpdate();

        } catch (Exception ex) {

        }
        return r;
    }  
}
