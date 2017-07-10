import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import DAO.UserDAO;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		UserDAO userdao=new UserDAO();
		
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();		
		
		String us=request.getParameter("username");
		String ps=request.getParameter("password");
		String cs=request.getParameter("code");
		
		Gson gson = new GsonBuilder().create();		
		BizResult br=new BizResult();
		
		br.setStatus(0);
		br.setUrl("aaaa");
		
		String Msg=(String)request.getSession().getAttribute("character");
		request.getSession().removeAttribute("character");
		
		if((us!="")&&(ps!=""))
		{
			if(userdao.findUser(us,ps))
			{
				if(cs.equals(Msg))
					 br.setMessage(us+"用户登录成功");
				else br.setMessage("验证码输入错误");
			}				
			else
			{
				if(cs.equals(Msg))
				    br.setMessage(us+"用户名、密码不正确");	
				else  br.setMessage(us+"用户名或密码及验证码均不正确");
			}			
		}			
		else  br.setMessage("用户名或密码不能为空!");
		
		String result = gson.toJson(br);
		out.println(result);
		userdao.close();
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
