<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="checkSession.aspx.cs" Inherits="angweb3.checkSession" %>
<%
    if (Session["connectedUser"]!= null)
    {
        Response.Write(Session["connectedUser"]);
    }
    else
    {
        Response.Write("{\"error\":\"Disconnected\"}");
    }

    %>
