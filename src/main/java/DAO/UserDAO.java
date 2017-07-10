package DAO;

import java.sql.*;

public class UserDAO {
	public static final String DRIVER="org.gjt.mm.mysql.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/testdb";
	public static final String DBUSER="root";
	public static final String DBPASS="sonlink";
	private Connection conn=null;
	private PreparedStatement pStat=null;
	private ResultSet rs=null;
	
	public Connection getConnectionn(){
		try{
			Class.forName(DRIVER).newInstance();
			return DriverManager.getConnection(DBURL,DBUSER,DBPASS);
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	
	public void close(){
		try{
			if( rs!=null ) rs.close();
			if( pStat!=null ) pStat.close();
			if( conn!=null ) conn.close();
		}catch(Exception e){ e.printStackTrace(); }
	} //end close
	
	
	public boolean isUsernameExists(String username) {
		conn=getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from users where username=?");
			pStat.setString(1, username);
			rs=pStat.executeQuery();
			if( rs.next() ) return true;
			else return false;
		}
		catch (Exception e) 
		{  
			e.printStackTrace(); 
			return false; 
		}
		finally{ close(); }
	} //end isUsernameExists
	
	
	public boolean findUser(String username, String password){
		conn=getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from users where username=? and password=?");
			pStat.setString(1, username);
			pStat.setString(2, password);
			rs=pStat.executeQuery();
			if( rs.next() ) return true;
			else return false;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
			return false; 
		}
		finally{
			close();
		}
	} //end findUser
	
	
	public boolean addUser(User user) {
		conn=getConnectionn();
		try {
			pStat=conn.prepareStatement("insert into users values(null,?,?)");
			pStat.setString(1, user.getUsername());
			pStat.setString(2, user.getPassword());
			int cnt=pStat.executeUpdate();
			if(cnt>0) return true;
			else return false;
		}
		catch (Exception e) 
		{ 
			e.printStackTrace();
			return false; 
		}
		finally{
			close();
		}
	 } //end add
	
} //end class