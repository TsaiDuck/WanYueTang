package com.wanyuetang.bean;

public class yaopin {
    private Integer db_drugid;
    private double db_price;
    private String db_name;
    private String db_zuoyong;
    private String db_tupian;
    private String db_kucun;
    private String db_xiangxi;
    private String db_guige;
    private String db_baozhi;
    private String db_jixing;
    private String db_keshi;

    public Integer getDb_drugid() {
        return db_drugid;
    }

    public void setDb_drugid(Integer db_drugid) {
        this.db_drugid = db_drugid;
    }

    public double getDb_price() {
        return db_price;
    }

    public void setDb_price(double db_price) {
        this.db_price = db_price;
    }

    public String getDb_name() {
        return db_name;
    }

    public void setDb_name(String db_name) {
        this.db_name = db_name;
    }

    public String getDb_zuoyong() {
        return db_zuoyong;
    }

    public void setDb_zuoyong(String db_zuoyong) {
        this.db_zuoyong = db_zuoyong;
    }

    public String getDb_tupian() {
        return db_tupian;
    }

    public void setDb_tupian(String db_tupian) {
        this.db_tupian = db_tupian;
    }

    public String getDb_kucun() {
        return db_kucun;
    }

    public void setDb_kucun(String db_kucun) {
        this.db_kucun = db_kucun;
    }

    public String getDb_xiangxi() {
        return db_xiangxi;
    }

    public void setDb_xiangxi(String db_xiangxi) {
        this.db_xiangxi = db_xiangxi;
    }

    public String getDb_guige() {
        return db_guige;
    }

    public void setDb_guige(String db_guige) {
        this.db_guige = db_guige;
    }

    public String getDb_baozhi() {
        return db_baozhi;
    }

    public void setDb_baozhi(String db_baozhi) {
        this.db_baozhi = db_baozhi;
    }

    public String getDb_jixing() {
        return db_jixing;
    }

    public void setDb_jixing(String db_jixing) {
        this.db_jixing = db_jixing;
    }

    public String getDb_keshi() {
        return db_keshi;
    }

    public void setDb_keshi(String db_keshi) {
        this.db_keshi = db_keshi;
    }

    @Override
    public String toString() {
        return "yaopin{" +
                "db_drugid=" + db_drugid +
                ", db_price=" + db_price +
                ", db_name='" + db_name + '\'' +
                ", db_zuoyong='" + db_zuoyong + '\'' +
                ", db_tupian='" + db_tupian + '\'' +
                ", db_kucun='" + db_kucun + '\'' +
                ", db_xiangxi='" + db_xiangxi + '\'' +
                ", db_guige='" + db_guige + '\'' +
                ", db_baozhi='" + db_baozhi + '\'' +
                ", db_jixing='" + db_jixing + '\'' +
                ", db_keshi='" + db_keshi + '\'' +
                '}';
    }
}
