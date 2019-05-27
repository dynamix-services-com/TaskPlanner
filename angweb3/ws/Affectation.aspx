<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Affectation.aspx.cs" Inherits="angweb3.ws.Affectation" %>

<%

    Int32 ID = 0;
    String developpeur = "";
    try
    {

        ID = Convert.ToInt32(Request.Params["id"].ToString());
        developpeur = Request.Params["developpeur"].ToString();


        angweb3.TaskPlannerWS.TaskPlannerWS TS = new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");
        if (TS.Affectation(ID, developpeur))
        {
            Response.Write("{\"OK\" :\"OK\",\"message\" :\"affectation avec succes\"}");
        }
        else
        {
            Response.Write("{\"OK\" :\"error\",\"message\" :\"affectation impossible\"}");

        }
    }
     catch (System.Web.Services.Protocols.SoapException e)
    {
        Response.Write("{\"OK\" :\"error\",\"message\" :\"" + e.Message+"\"}");
    }



%>