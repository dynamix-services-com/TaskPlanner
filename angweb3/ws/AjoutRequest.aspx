<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AjoutRequest.aspx.cs" Inherits="angweb3.ws.AjoutRequest" %>

<%

    String Title = "";
    Int32 Type = 0;
    String Description = "";
    String ClientCode = "";
    String Developer_team = "";
    String ProjectCode = "";
    String Photo = "";
    try
    {
        Title = Request.Params["Title"].ToString();
        Type =Convert.ToInt32( Request.Params["Type"].ToString());
        Description = Request.Params["Description"].ToString();
        ClientCode = Request.Params["ClientCode"].ToString();
       // Developer_team = Request.Params["Developer_team"].ToString();
        ProjectCode = Request.Params["ProjectCode"].ToString();
        // Photo = Request.Params["Photo"].ToString();



        angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");

        if (TS.AddRequest(Title,Type,Description,ClientCode,ProjectCode)) {
            Response.Write("{\"OK\" :\"OK\",\"message\" :\"insertion avec succes\"}");
        }
        else
        {
             Response.Write("{\"OK\" :\"error\",\"message\" :\"insertion impossible\"}");
        }
        // angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();




    }
    catch(Exception e)
    {
        Response.Write("{\"OK\" :\"error\",\"message\" :\"" + e.Message+"\"}");
 
    }
%>
