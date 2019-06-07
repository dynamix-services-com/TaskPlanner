<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EnvoiMailManager.aspx.cs" Inherits="angweb3.ws.EnvoiMailManager" %>

<%

    String idReq = "";
    String sujet = "";
    String UserID = "";


    idReq = Request.Params["idReq"].ToString();
    sujet = Request.Params["sujet"].ToString();
    UserID = Request.Params["UserID"].ToString();

    angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
    TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");

    angweb3.TaskPlannerWS.Root RT = new angweb3.TaskPlannerWS.Root();

    TS.EmailNotificationManager(sujet,UserID,idReq);







%> 
