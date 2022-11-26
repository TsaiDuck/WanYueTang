package main.webapp.java.com.wanyuetang.service.impl;

import main.webapp.java.com.wanyuetang.base.BaseDao;
import main.webapp.java.com.wanyuetang.base.BaseServiceImpl;
import main.webapp.java.com.wanyuetang.bean.users;
import main.webapp.java.com.wanyuetang.mapper.UserMapper;
import main.webapp.java.com.wanyuetang.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends BaseServiceImpl<users> implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public BaseDao<users> getBaseDao() {
        return userMapper;
    }
}
