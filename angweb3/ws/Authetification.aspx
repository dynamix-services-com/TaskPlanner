<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Authetification.aspx.cs" Inherits="angweb3.ws.Authetification" Debug="true" %>
<%


            String Login = "";
            String Password = "";
            try
            {
                Login = Request.Params["login"].ToString();
                Password = Request.Params["password"].ToString();


            angweb3.TaskPlannerWS.TaskPlannerWS TS= new angweb3.TaskPlannerWS.TaskPlannerWS();
            TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


            angweb3.TaskPlannerWS.Root1 RT156 = new angweb3.TaskPlannerWS.Root1();

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
                Response.Write("{\"error\" :\"  accréditation non valide\"}");
            }


            
            }
            catch(System.Web.Services.Protocols.SoapException e)
            {
                Response.Write("{\"error\" :\"" + e.Message+"\"}");
            }
%>
