﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getRequestType.aspx.cs" Inherits="angweb3.ws.getRequestType" %>
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
    /*
            String Login = "";
            String Password = "";
            try
            {
                Login = Request.Params["login"].ToString();
                Password = Request.Params["password"].ToString();


            angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
            TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


            angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();

            Boolean isConnected = false;
            isConnected = TS.Authentification(Login, Password, ref RT156);
            String response = "{";
            if (isConnected)
            {
                response = "{ \"error\" :\"\"";
                response += ",\"No\" :\"" + RT156.Root156[0].No +"\"";
                response+="  ,\"Name\" :\"" + RT156.Root156[0].Name+"\"";
                response+="  ,\"Type\" :\"" + RT156.Root156[0].Type+"\"";
                response+="  ,\"Login\" :\"" + RT156.Root156[0].Login+"\"";
                response+="  ,\"DDC\" :\"" + RT156.Root156[0].DDC+"\"";
                response+="}";
                Session["connectedUser"] = response;
                Response.Write(response);
            }
            else
            {
                Response.Write("{\"error\" :\"  Invalid credentials\"}");
            }


            
            }
            catch(System.Web.Services.Protocols.SoapException e)
            {
                Response.Write("{\"error\" :\"" + e.Message+"\"}");
            }

        */
%>