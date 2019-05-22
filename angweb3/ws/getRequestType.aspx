<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getRequestType.aspx.cs" Inherits="angweb3.ws.getRequestType" %>
<%
    string response = "[";
    response += "{ \"index\" :\"1\"";
    response += ",\"value\" :\"BUG\"";
    response += "},";
    response += "{ \"index\" :\"2\"";
    response += ",\"value\" :\"Nouveau besoin\"";
    response += "}";
    response +="]";
    Response.Write(response);
   
%>
