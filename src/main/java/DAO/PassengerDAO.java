package dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PassengerDAO {
	private Connection conn=null;
	private PreparedStatement pStat=null;
	private ResultSet rs=null;
	
	private SQL sql=new SQL();
	
	public void close()
	{
		try{
			if(conn!=null) conn.close();
			if(pStat!=null) pStat.close();
			if(rs!=null) rs.close();
		} catch(Exception e)
		{
			e.printStackTrace();
		}
	}//end close
	
	public List<Passenger> findAllPassenger()
	{
		List<Passenger> list=new ArrayList<Passenger>();
		conn=sql.getConnectionn();
		try{
			pStat=conn.prepareStatement("select * from passenger");
			rs=pStat.executeQuery();
			
			while(rs.next())
			{
				Passenger passenger=new Passenger();
				passenger.setId(rs.getString("id"));
				passenger.setName(rs.getString("name"));
				passenger.setSex(rs.getString("sex"));
				passenger.setTel(rs.getString("tel"));
				list.add(passenger);
			}
			return list;
		} catch(Exception e)
		{
			e.printStackTrace();
			return null; 
		}
		finally{
			close();
		}
	}
	
	public boolean addPassenger(Passenger passenger) {
		conn=sql.getConnectionn();
		try {
			pStat=conn.prepareStatement("insert into passenger values(?,?,?,?)");
			pStat.setString(1, passenger.getId());
			pStat.setString(2, passenger.getName());
			pStat.setString(3,passenger.getSex());
			pStat.setString(4,passenger.getTel());
			
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
}
