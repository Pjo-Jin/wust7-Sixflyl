package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class TicketDAO {
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
	
	public List<Ticket> findAllTicket()
	{
		List<Ticket> list=new ArrayList<Ticket>();
		conn=sql.getConnectionn();
		try{
			pStat=conn.prepareStatement("select * from ticket");
			rs=pStat.executeQuery();
			
			while(rs.next())
			{
				Ticket ticket=new Ticket();
				ticket.setId(rs.getString("id"));
				ticket.setNum(rs.getString("num"));
				ticket.setSplace(rs.getString("splace"));
				ticket.setEplace(rs.getString("eplace"));
				ticket.setStime(rs.getDate("stime"));
				list.add(ticket);
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
}
