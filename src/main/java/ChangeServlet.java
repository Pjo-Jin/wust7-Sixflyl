

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import dao.Ticket;
import dao.TicketDAO;

/**
 * Servlet implementation class ChangeServlet
 */
@WebServlet("/ChangeServlet.do")
public class ChangeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		TicketDAO ticketdao=new TicketDAO();
		List<Ticket> list=new ArrayList<Ticket>();
		String path=request.getContextPath();		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		Gson gson = new GsonBuilder().create();		
		BizResult br=new BizResult();
		
		list=ticketdao.findAllTicket();
		br.setMessage("changServelt");
		br.setList1(list);	
		
		String result = gson.toJson(br);
		out.println(result);
		//response.sendRedirect(path+"/change-ticket.html");
		ticketdao.close();
		out.flush();
		out.close();  
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
