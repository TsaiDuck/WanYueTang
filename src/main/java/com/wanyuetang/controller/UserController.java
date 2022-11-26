package com.wanyuetang.controller;


import com.wanyuetang.base.BaseController;
import com.wanyuetang.bean.users;
import com.wanyuetang.service.UserService;
import com.wanyuetang.utils.Consts;
import com.wanyuetang.utils.Pager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * 用户c层
 */
@Controller
@RequestMapping("#login")
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findBySql")
    public String findBySql(Model model, users user){
        String sql = "select * from users where 1=1 ";
        if(!isEmpty(user.getDb_username())){
            sql += " and db_username like '%"+user.getDb_username()+"%' ";
        }
        sql+=" order by db_userid";
        Pager<users> pagers = userService.findBySqlRerturnEntity(sql);
        model.addAttribute("pagers",pagers);
        model.addAttribute("obj",user);
        return "users/users";
    }

//    /**
//     * 查看用户信息
//     * @param model
//     * @param request
//     * @return
//     */
//    @RequestMapping("/view")
//    public String view(Model model, HttpServletRequest request){
//        Object attribute = request.getSession().getAttribute(Consts.USERID);
//        if(attribute==null){
//            return "redirect:/login/uLogin";
//        }
//        Integer userId = Integer.valueOf(attribute.toString());
//        users obj = userService.load(userId);
//        model.addAttribute("obj",obj);
//        return "users/view";
//    }
//
//    /**
//     * 执行修改用户信息的操作
//     */
//    @RequestMapping("/exUpdate")
//    public String exUpdate(users user,HttpServletRequest request){
//        Object attribute = request.getSession().getAttribute(Consts.USERID);
//        if(attribute==null){
//            return "redirect:/login/uLogin";
//        }
//        user.setDb_userid(Integer.valueOf(attribute.toString()));
//        userService.updateById(user);
//        return "redirect:/users/view.action";
//    }
}
