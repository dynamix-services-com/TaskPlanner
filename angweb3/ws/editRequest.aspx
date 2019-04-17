<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="editRequest.aspx.cs" Inherits="angweb3.ws.editRequest1" Debug="true" %>

<%


    String Type = "";
    String Status = "";
    String Titre = "";
    String Description = "";
    String Cree_Par = "";

    try
    {
        Type = Request.Params["Type"].ToString();
        Status = Request.Params["Status"].ToString();
        Titre = Request.Params["Titre"].ToString();
        Description = Request.Params["Description"].ToString();
        Cree_Par = Request.Params["Cree_par"].ToString();

            }
    catch(System.Web.Services.Protocols.SoapException e)
    {
        Response.Write("{\"error\" :\"" + e.Message+"\"}");
    }

    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


    angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();


%>

