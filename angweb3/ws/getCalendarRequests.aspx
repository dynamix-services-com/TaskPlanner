<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getCalendarRequests.aspx.cs" Inherits="angweb3.ws.getCalendarRequests" %>
<%


    String iduser = "";
    String client = "";
   // DateTime startdate = new DateTime(2017,06,17);
    try
    {
        iduser = Request.Params["iduser"].ToString();
        client = Request.Params["client"].ToString();

        angweb3.TaskPlannerWS.TaskPlannerWS TS = new angweb3.TaskPlannerWS.TaskPlannerWS();
        TS.Credentials = new System.Net.NetworkCredential("taskplanner", "Dynamix@2019", "dys");


        angweb3.TaskPlannerWS.Root RT50001 = new angweb3.TaskPlannerWS.Root();





        bool c = TS.GetRequestList(ref RT50001, iduser,client);


        if (c == true)
        {

            int i = 0;

            int j = RT50001.Root50001.Length;
            //string Mission;
            string json = "[";
            //Mission = "";
            while (i < j)
            {


                /*
                   id: 0,
                name: 'Google I/O',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 4, 28),
                endDate: new Date(currentYear, 4, 29)
                 * */



                json += "{ \"id\": " + "\"" + RT50001.Root50001[i].ID.ToString() +
                                //"\"," + "\"Status\": " + "\"" + RT50001.Root50001[i].Status.ToString() +
                                "\"," + "\"name\": " + "\"" + RT50001.Root50001[i].Title.ToString() +
                                "\"," + "\"location\": " + "\"" + RT50001.Root50001[i].Desciption.ToString() +
                                "\"," + "\"startDate\": " + "\"" + RT50001.Root50001[i].Date_Creation.ToString()+
                              // "\"," + "\"startDate\": "  + "\"12039485678000"+
                                "\"," + "\"endDate\": " + "\"" + RT50001.Root50001[i].Date_Echeance.ToString() +
                              //   "\"," + "\"endDate\": "  + "\"12039485678000"+


                                "\"," + "\"Type\": " + "\"" + RT50001.Root50001[i].Type +
                                "\"," + "\"Image\": " + "\"" + RT50001.Root50001[i].Image.ToString() +
                                "\"," + "\"Cree_Par\": " + "\"" + RT50001.Root50001[i].Cree_Par.ToString() +
                                "\"," + "\"Nom_Cree_Par\": " + "\"" + RT50001.Root50001[i].Nom_Cree_Par.ToString() +
                                "\"," + "\"Client\": " + "\"" + RT50001.Root50001[i].Client.ToString() +
                                "\"," + "\"Nom_Client\": " + "\"" + RT50001.Root50001[i].Nom_Client.ToString() +
                                "\"," + "\"No_Projet\": " + "\"" + RT50001.Root50001[i].No_Projet.ToString() +
                                "\"," + "\"Nom_Projet\": " + "\"" + RT50001.Root50001[i].Nom_Projet.ToString() +
                                "\"," + "\"Date_Validation\": " + "\"" + RT50001.Root50001[i].Date_Validation.ToString() +
                                "\"," + "\"Validee_Par\": " + "\"" + RT50001.Root50001[i].Validee_Par.ToString() +
                                "\"," + "\"Nom_Validee_Par\": " + "\"" + RT50001.Root50001[i].Nom_Validee_Par.ToString() +
                                "\"," + "\"developpeur\": " + "\"" + RT50001.Root50001[i].developpeur.ToString() +

                                "\"}";
                if (i != j - 1)
                {
                    json += ",";
                }

                // }






                i++;
            }
            json += " ]";
          //  Response.Write(json);
          Response.Write("["+
           "{"+
                "id: 0,"+
               " name: 'Google I/O',"+
               " location: 'San Francisco, CA',"+
               " startDate: new Date(2019, 4, 28),"+
               " endDate: new Date(2019, 4, 29)"+
            "},"+
            "{"+
                "id: 1,"+
                "name: 'Microsoft Convergence',"+
                "location: 'New Orleans, LA',"+
                "startDate: new Date(2019, 2, 16),"+
                "endDate: new Date(2019, 2, 19)"+
            "}]");

        }
        else
        {

            Response.Write("[]");
        }

    }
    catch (Exception e)
    {
        Response.Write("{\"error\" :\"" + e.Message + "\"}");
    }


         %>
 

