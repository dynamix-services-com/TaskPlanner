<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="deleteRequest.aspx.cs" Inherits="angweb3.ws.deleteRequest" %>
<%


    Int32 ID = 0;

    try
    {
        ID = Convert.ToInt32( Request.Params["id"].ToString());

    }
    catch (System.Web.Services.Protocols.SoapException e)
    {
        Response.Write("{\"OK\" :\"" + e.Message + "\"}");
    }

    angweb3.TaskPlannerWS.TaskPlannerWS TS = new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


    angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();

    if(TS.DeleteRequest(ID, ""))
    {
      Response.Write("{\"OK\" :\"ok\"}");
    }else
    {
        Response.Write("{\"OK\" :\"Suppression impossible\"}");
    }



%>