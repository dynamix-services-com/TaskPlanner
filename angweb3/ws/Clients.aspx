<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Clients.aspx.cs" Inherits="angweb3.ws.Clients" %>

<%
    String id ="";


    id = Request.Params["Client"].ToString();


    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");

    angweb3.TaskPlannerWS.Root3 RT = new angweb3.TaskPlannerWS.Root3();



    bool c = TS.GetClients(id , ref RT);

    if (c == true)    
    {

        int i = 0;

        int j = RT.Root50003.Length;
        //string Mission;
        string json = "[";
        //Mission = "";
        while (i < j)
        {

            json += "{ \"Client\": " + "\"" + RT.Root50003[i].ID+
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
