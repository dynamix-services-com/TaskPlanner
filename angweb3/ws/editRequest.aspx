<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="editRequest.aspx.cs" Inherits="angweb3.ws.editRequest" %>

<%

    Int32 ID = 0;
    Int32 Status = 0;
    String Titre = "";
    String Description = "";
    String Cree_Par = "";
    Int32 Type = 0;
    try
    {
        Type = Convert.ToInt32(Request.Params["Type"].ToString());
         ID = Convert.ToInt32(Request.Params["id"].ToString());
        Status = Convert.ToInt32(Request.Params["Status"].ToString());
        Titre = Request.Params["Titre"].ToString();
        Description = Request.Params["Description"].ToString();
        Cree_Par = Request.Params["Cree_par"].ToString();




        angweb3.TaskPlannerWS.TaskPlannerWS TS = new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");
        if (TS.UpdateRequest(ID, Status, Titre, Description, Cree_Par,Type))
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