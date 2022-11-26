package main.webapp.java.com.wanyuetang.bean;

public class shopcart {
    private Integer db_userid;
    private Integer db_drugid;
    private String db_ypname;
    private String db_amount;
    private String db_price;
    private String db_img;
    private boolean db_state;

    public Integer getDb_userid() {
        return db_userid;
    }

    public void setDb_userid(Integer db_userid) {
        this.db_userid = db_userid;
    }

    public Integer getDb_drugid() {
        return db_drugid;
    }

    public void setDb_drugid(Integer db_drugid) {
        this.db_drugid = db_drugid;
    }

    public String getDb_ypname() {
        return db_ypname;
    }

    public void setDb_ypname(String db_ypname) {
        this.db_ypname = db_ypname;
    }

    public String getDb_amount() {
        return db_amount;
    }

    public void setDb_amount(String db_amount) {
        this.db_amount = db_amount;
    }

    public String getDb_price() {
        return db_price;
    }

    public void setDb_price(String db_price) {
        this.db_price = db_price;
    }

    public String getDb_img() {
        return db_img;
    }

    public void setDb_img(String db_img) {
        this.db_img = db_img;
    }

    public boolean isDb_state() {
        return db_state;
    }

    public void setDb_state(boolean db_state) {
        this.db_state = db_state;
    }

    @Override
    public String toString() {
        return "shopcart{" +
                "db_userid=" + db_userid +
                ", db_drugid=" + db_drugid +
                ", db_ypname='" + db_ypname + '\'' +
                ", db_amount='" + db_amount + '\'' +
                ", db_price='" + db_price + '\'' +
                ", db_img='" + db_img + '\'' +
                ", db_state=" + db_state +
                '}';
    }
}
