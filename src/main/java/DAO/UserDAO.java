package dao;


import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {
	private Connection conn=null;
	private PreparedStatement pStat=null;
	private ResultSet rs=null;
	
	private SQL sql=new SQL();
	
	public void close(){
		try{
			if( rs!=null ) rs.close();
			if( pStat!=null ) pStat.close();
			if( conn!=null ) conn.close();
		}catch(Exception e){ e.printStackTrace(); }
	} //end close
	
	
	public boolean isUsernameExists(String username) {
		conn=sql.getConnectionn();
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
		conn=sql.getConnectionn();
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
		conn=sql.getConnectionn();
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
	
	public List<User> findAllUser(){
		List<User> list=new ArrayList<User>();
		conn=sql.getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from users");
			rs=pStat.executeQuery();	
						
			while( rs.next() ) 
			{
				User user=new User();
				user.setId(rs.getInt("id"));
				user.setUsername(rs.getString("username"));
				user.setPassword(rs.getString("password"));
				list.add(user);				
			}
			return list;
		}
		catch (Exception e) 
		{
			e.printStackTrace();
			return null; 
		}
		finally{
			close();
		}
	} //end QueryAll	
	
} //end class