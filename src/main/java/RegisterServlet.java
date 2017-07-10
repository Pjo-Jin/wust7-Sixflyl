import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import DAO.User;
import DAO.UserDAO;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		User user=new User();
		UserDAO userdao=new UserDAO();
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String path = request.getContextPath();
		PrintWriter out = response.getWriter();
		
		String us=request.getParameter("username");
		String ps=request.getParameter("password");
		Gson gson = new GsonBuilder().create();		
		BizResult br=new BizResult();		
		br.setStatus(0);
		br.setUrl("aaaa");
		
		if((us!="")&&(ps!=""))
		{			
			if(userdao.isUsernameExists(us))
			{
				br.setMessage("该用户名已被其他人注册，请重新输入：");
				br.setUrl(path+"/zc.html");
			}				
			else
			{
				user.setUsername(us);
				user.setPassword(ps);
				if(userdao.addUser(user))
				{
					br.setMessage(us+"用户注册成功");
					br.setUrl(path+"/login1.html");
				}				  
				else 
				{
					br.setMessage("用户注册失败");
					br.setUrl(path+"/zc.html");
				}
			}				
		}			
		else  br.setMessage("用户名或密码不能为空：");
		
		String result = gson.toJson(br);
		out.println(result);
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
