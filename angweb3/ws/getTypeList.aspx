<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getTypeList.aspx.cs" Inherits="angweb3.ws.getTypeList" %>

<%
    Int32 type = 0;


    type = Convert.ToInt32(Request.Params["type"].ToString());


    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


    angweb3.TaskPlannerWS.Root1 RT50000 = new angweb3.TaskPlannerWS.Root1();


    bool c = TS.GetTypeList(ref RT50000, type);

    if (c == true)    
    {

        int i = 0;

        int j = RT50000.Root156.Length;
        //string Mission;
        string json = "[";
        //Mission = "";
        while (i < j)
        {

            json += "{ \"code\": " + "\"" + RT50000.Root156[i].No+
                 "\"," + "\"nom\": " + "\"" + RT50000.Root156[i].Name.ToString() +
                                    "\"}"; 
            if (i != j - 1)
            {
                json += ",";
            }


            i++;
        }
        json += " ]";
        Response.Write(json);


    }
    else
    {

        Response.Write("[]");
    }



 %>