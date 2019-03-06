<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Authetification.aspx.cs" Inherits="angweb3.ws.Authetification" %>
<%
            String Login = "";
            String Password = "";
            try
            {
                Login = Request.Params["login"].ToString();
                Password = Request.Params["password"].ToString();

            }
            catch(Exception e)
            {
                Response.Write("{\"error\" :\"" + e.Message+"\"}");
            }

            angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
            TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


            angweb3.TaskPlannerWS.Root156 RT156 = new angweb3.TaskPlannerWS.Root156();

            Boolean isConnected = false;
            isConnected = TS.Authentification(Login, Password, ref RT156);
            String response = "{";
            if (isConnected)
            {
                response = "{ \"No\" :\"" + RT156.No +"\"";
            response="  \"Name\" :\"  " + RT156.Name+"\"";
            response="  \"Type\" :\"  " + RT156.Type+"\"";
            response="  \"Login\" :\"  " + RT156.Login+"\"";
            response="  \"DDC\" :\"  " + RT156.DDC+"\"";
            response+="}";
        }
    else
    {
        Response.Write("{\"error\" :\"  Invalid credentials\"}");
    }
%>
