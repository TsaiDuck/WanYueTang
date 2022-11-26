package main.webapp.java.com.wanyuetang.bean;

public class users {
    private Integer db_userid;
    private String db_username;
    private String db_pwd;
    private String db_phonnum;
    private String db_sex;
    private String db_heading;
    private boolean db_flag;

    public Integer getDb_userid() {
        return db_userid;
    }

    public void setDb_userid(Integer db_userid) {
        this.db_userid = db_userid;
    }

    public String getDb_username() {
        return db_username;
    }

    public void setDb_username(String db_username) {
        this.db_username = db_username;
    }

    public String getDb_pwd() {
        return db_pwd;
    }

    public void setDb_pwd(String db_pwd) {
        this.db_pwd = db_pwd;
    }

    public String getDb_phonnum() {
        return db_phonnum;
    }

    public void setDb_phonnum(String db_phonnum) {
        this.db_phonnum = db_phonnum;
    }

    public String getDb_sex() {
        return db_sex;
    }

    public void setDb_sex(String db_sex) {
        this.db_sex = db_sex;
    }

    public String getDb_heading() {
        return db_heading;
    }

    public void setDb_heading(String db_heading) {
        this.db_heading = db_heading;
    }

    public boolean isDb_flag() {
        return db_flag;
    }

    public void setDb_flag(boolean db_flag) {
        this.db_flag = db_flag;
    }

    @Override
    public String toString() {
        return "users{" +
                "db_userid=" + db_userid +
                ", db_username='" + db_username + '\'' +
                ", db_pwd='" + db_pwd + '\'' +
                ", db_phonnum='" + db_phonnum + '\'' +
                ", db_sex='" + db_sex + '\'' +
                ", db_heading='" + db_heading + '\'' +
                ", db_flag=" + db_flag +
                '}';
    }
}
