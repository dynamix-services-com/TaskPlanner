<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Projetcs.aspx.cs" Inherits="angweb3.ws.Projetcs" %>

<%
    String no ="";
    string client="";

    no = Request.Params["Project"].ToString();
    client = Request.Params["client"].ToString();

    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");

    angweb3.TaskPlannerWS.Root2 RT = new angweb3.TaskPlannerWS.Root2();



    bool c = TS.GetProjects(no , ref RT,client);

    if (c == true)    
    {

        int i = 0;

        int j = RT.Root50002.Length;
        //string Mission;
        string json = "[";
        //Mission = "";
        while (i < j)
        {

            json += "{ \"Project\": " + "\"" + RT.Root50002[i].ID+
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
