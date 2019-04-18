<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Logout.aspx.cs" Inherits="angweb3.Logout" %>
<%
    Session.Abandon();
    Session.Clear();

    %>
