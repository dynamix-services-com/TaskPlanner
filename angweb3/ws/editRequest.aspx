<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="editRequest.aspx.cs" Inherits="angweb3.ws.editRequest" %>

<%

    Int32 ID = 0;
    String Status = "";
    String Titre = "";
    String Description = "";
    String Cree_Par = "";

    try
    {
        ID = Convert.ToInt32(Request.Params["id"].ToString());
        Status = Request.Params["Status"].ToString();
        Titre = Request.Params["Titre"].ToString();
        Description = Request.Params["Description"].ToString();
        Cree_Par = Request.Params["Cree_par"].ToString();




        angweb3.TaskPlannerWS.TaskPlannerWS TS = new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");
        if (TS.UpdateRequest(ID, Status, Titre, Description, Cree_Par))
        {
            Response.Write("{\"OK\" :\"OK\",\"message\" :\"modification avec succes\"}");
        }
        else
        {
            Response.Write("{\"OK\" :\"error\",\"message\" :\"modification impossible\"}");

        }
    }

    //angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();
    catch (System.Web.Services.Protocols.SoapException e)
    {
        Response.Write("{\"OK\" :\"error\",\"message\" :\"" + e.Message+"\"}");
    }

%>