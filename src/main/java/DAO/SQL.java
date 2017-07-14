package dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class SQL {
	public static final String DRIVER="org.gjt.mm.mysql.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/testdb";
	public static final String DBUSER="root";
	public static final String DBPASS="sonlink";
	
	public Connection getConnectionn(){
		try{
			Class.forName(DRIVER).newInstance();
			return DriverManager.getConnection(DBURL,DBUSER,DBPASS);
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
}
