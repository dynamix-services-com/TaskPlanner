<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getRequestStatus.aspx.cs" Inherits="angweb3.ws.getRequestStatus" %>

<%
    string response = "[";
    response += "{ \"index\" :\"1\"";
    response += ",\"value\" :\"nouveau\"";
    response += "},";
      response += "{ \"index\" :\"2\"";
    response += ",\"value\" :\"en cours\"";
    response += "},";
     response += "{ \"index\" :\"3\"";
    response += ",\"value\" :\"pret\"";
    response += "},";
     response += "{ \"index\" :\"4\"";
    response += ",\"value\" :\"termine\"";
    response += "}";
    response +="]";
    Response.Write(response);
  
%>
