import java.util.ArrayList;
import java.util.List;

import dao.Passenger;
import dao.Ticket;
import dao.Train;

public class BizResult {

	private int status;
	private String message;
	private String url;
	private List<Ticket> list1=new ArrayList<Ticket>();
	private List<Train> list2=new ArrayList<Train>();
	private List<Passenger> list3=new ArrayList<Passenger>();

	
	public List<Train> getList2() {
		return list2;
	}
	public void setList2(List<Train> list2) {
		this.list2 = list2;
	}
	public List<Passenger> getList3() {
		return list3;
	}
	public void setList3(List<Passenger> list3) {
		this.list3 = list3;
	}
	public List<Ticket> getList1() {
		return list1;
	}
	public void setList1(List<Ticket> list1) {
		this.list1 = list1;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
