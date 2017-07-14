import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import dao.User;
import dao.UserDAO;

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
		String path=request.getContextPath();
		
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
			User u=new User();
			u.setUsername(us);
			u.setPassword(ps);
			if(userdao.findUser(us,ps)&&cs.equals(Msg))
			{
				request.getSession().setAttribute("user", u);
				request.getSession().setAttribute("username", us);
				request.getSession().setAttribute("password", ps);
			    br.setMessage(us+"用户登录成功");
			    br.setUrl(path+"/offical.html?username="+us);
			}				
			else
			{
				br.setMessage(us+"用户密码或验证码不正确");	
				br.setUrl(path+"/login1.html");
			}			
		}			
		else  
		{
			br.setMessage("用户名或密码不能为空!");
			br.setUrl(path+"/login1.html");
		}
		
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
