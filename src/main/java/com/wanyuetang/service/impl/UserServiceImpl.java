package com.wanyuetang.service.impl;

import com.wanyuetang.base.BaseDao;
import com.wanyuetang.base.BaseServiceImpl;
import com.wanyuetang.bean.users;
import com.wanyuetang.mapper.UserMapper;
import com.wanyuetang.service.UserService;
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
