<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Authetification.aspx.cs" Inherits="angweb3.ws.Authetification" %>
<%


            String Login = "";
            String Password = "";
            try
            {
                Login = Request.Params["login"].ToString();
                Password = Request.Params["password"].ToString();

            }
            catch(System.Web.Services.Protocols.SoapException e)
            {
                Response.Write("{\"error\" :\"" + e.Message+"\"}");
            }

            angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
            TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


            angweb3.TaskPlannerWS.Root RT156 = new angweb3.TaskPlannerWS.Root();

            Boolean isConnected = false;
            isConnected = TS.Authentification(Login, Password, ref RT156);
            String response = "{";
            if (isConnected)
            {
                response = "{ \"No\" :\"" + RT156.Root156[0].No +"\"";
            response="  \"Name\" :\"  " + RT156.Root156[0].Name+"\"";
            response="  \"Type\" :\"  " + RT156.Root156[0].Type+"\"";
            response="  \"Login\" :\"  " + RT156.Root156[0].Login+"\"";
            response="  \"DDC\" :\"  " + RT156.Root156[0].DDC+"\"";
            response+="}";
        }
    else
    {
        Response.Write("{\"error\" :\"  Invalid credentials\"}");
    }
%>
