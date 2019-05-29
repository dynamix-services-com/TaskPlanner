<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AjoutRequest.aspx.cs" Inherits="angweb3.ws.AjoutRequest" %>

<%

    String Title = "";
    Int32 Type = 0;
    String Description = "";
    String ClientCode = "";
    String Client  = "";
    String ProjectCode = "";
    DateTime date_Echeance= new DateTime();
    try
    {
        Title = Request.Params["Title"].ToString();
        Type =Convert.ToInt32( Request.Params["Type"].ToString());
        Description = Request.Params["Description"].ToString();
        ClientCode = Request.Params["ClientCode"].ToString();
        Client = Request.Params["Client"].ToString();
        ProjectCode = Request.Params["ProjectCode"].ToString();
        date_Echeance = Convert.ToDateTime(Request.Params["date_Echeance"].ToString());
        // Photo = Request.Params["Photo"].ToString();



        angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");

        if (TS.AddRequest(Title,Type,Description,ProjectCode,ClientCode,date_Echeance,Client)) {
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
