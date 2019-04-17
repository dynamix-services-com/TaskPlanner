<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AjoutRequest.aspx.cs" Inherits="angweb3.ws.AjoutRequest" %>

<%

    String Title = "";
    String Type = "";
    String Description = "";
    String Project_State = "";
    String Developer_team = "";
    String Project_Manager = "";
    String Photo = "";
    try
    {
        Title = Request.Params["Title"].ToString();
        Type = Request.Params["Type"].ToString();
        Description = Request.Params["Description"].ToString();
        Project_State = Request.Params["Project_State"].ToString();
        Developer_team = Request.Params["Developer_team"].ToString();
        Project_Manager = Request.Params["Project_Manager"].ToString();
        Photo = Request.Params["Photo"].ToString();

    }
    catch(System.Web.Services.Protocols.SoapException e)
    {
        Response.Write("{\"error\" :\"" + e.Message+"\"}");
    }

    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


    angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();

   
%>
