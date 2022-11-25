package com.wanyuetang.bean;

public class directions {
    private Integer db_drugid;
    private String db_useage;
    private String db_taboo;
    private String db_functions;
    private String db_title;

    public Integer getDb_drugid() {
        return db_drugid;
    }

    public void setDb_drugid(Integer db_drugid) {
        this.db_drugid = db_drugid;
    }

    public String getDb_useage() {
        return db_useage;
    }

    public void setDb_useage(String db_useage) {
        this.db_useage = db_useage;
    }

    public String getDb_taboo() {
        return db_taboo;
    }

    public void setDb_taboo(String db_taboo) {
        this.db_taboo = db_taboo;
    }

    public String getDb_functions() {
        return db_functions;
    }

    public void setDb_functions(String db_functions) {
        this.db_functions = db_functions;
    }

    public String getDb_title() {
        return db_title;
    }

    public void setDb_title(String db_title) {
        this.db_title = db_title;
    }

    @Override
    public String toString() {
        return "directions{" +
                "db_drugid=" + db_drugid +
                ", db_useage='" + db_useage + '\'' +
                ", db_taboo='" + db_taboo + '\'' +
                ", db_functions='" + db_functions + '\'' +
                ", db_title='" + db_title + '\'' +
                '}';
    }
}
