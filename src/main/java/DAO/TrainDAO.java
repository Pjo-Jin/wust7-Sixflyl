package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class TrainDAO {
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
	
	public boolean isTrainExists(String num)
	{
		conn=sql.getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from train where num=?");
			pStat.setString(1, num);
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
	}//isTrainExists
	
	public List<Train> FindAllTrain()
	{
		List<Train> list=new ArrayList<Train>();
		conn=sql.getConnectionn();
		try{
			pStat=conn.prepareStatement("select * from train");
			rs=pStat.executeQuery();
			
			while(rs.next())
			{
				Train train=new Train();
				train.setNum(rs.getString("num"));	
				train.setType(rs.getString("type"));
				train.setSplace(rs.getString("splace"));
				train.setEplace(rs.getString("eplace"));
				train.setStime(rs.getDate("stime"));
				train.setEtime(rs.getDate("etime"));
				train.setPrice(rs.getInt("price"));
				list.add(train);
			}
			return list;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
		finally{
			close();
		}
	}//end FindAllTrain
	
	public List<Train> QueryByTrain(String num){
		List<Train> list=new ArrayList<Train>();
		conn=sql.getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from train where num=?");
			pStat.setString(1, num);
			rs=pStat.executeQuery();	
						
			while( rs.next() ) 
			{
				Train train=new Train();
				train.setNum(rs.getString("num"));	
				train.setType(rs.getString("type"));
				train.setSplace(rs.getString("splace"));
				train.setEplace(rs.getString("eplace"));
				train.setStime(rs.getDate("stime"));
				train.setEtime(rs.getDate("etime"));
				train.setPrice(rs.getInt("price"));
				list.add(train);
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
	} //end QueryByTrain
	
	public List<Train> QueryBySEtime(String splace,String eplace){
		List<Train> list=new ArrayList<Train>();
		conn=sql.getConnectionn();
		try {
			pStat =conn.prepareStatement("select * from train where splace=? and eplace=?");
			pStat.setString(1,splace);
			pStat.setString(2, eplace);
			rs=pStat.executeQuery();	
						
			while( rs.next() ) 
			{
				Train train=new Train();
				train.setNum(rs.getString("num"));	
				train.setType(rs.getString("type"));
				train.setSplace(rs.getString("splace"));
				train.setEplace(rs.getString("eplace"));
				train.setStime(rs.getDate("stime"));
				train.setEtime(rs.getDate("etime"));
				train.setPrice(rs.getInt("price"));
				list.add(train);
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
	} //end QueryByTrain
}
