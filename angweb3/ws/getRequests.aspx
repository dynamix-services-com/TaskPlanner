<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="getRequests.aspx.cs" Inherits="angweb3.ws.getRequests" %>
<%


    String iduser = "";
     String client = "";
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




                //>>>AHM md5 crypt password
                /*
                                    System.Security.Cryptography.MD5CryptoServiceProvider md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();

                                    //compute hash from the bytes of text
                                    md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(RTUsers.RecGUsers[i].barCode.ToString()));

                                    //get hash result after compute it
                                    byte[] result = md5.Hash;

                                    StringBuilder strBuilder = new StringBuilder();
                                    for (Int32 k = 0; k< result.Length; k++)
                                    {
                                        //change it into 2 hexadecimal digits
                                        //for each byte
                                        strBuilder.Append(result[k].ToString("x2"));
                                    }

                                    String md5pwd = strBuilder.ToString();

                                    //<<< AHM md5 crypt password
                */
                // if (RTMISSION.RecGMission[i].NMS.ToString() != "")
                //  {
                /* Date derniere Modif from nav MM/dd/yyy HH:MM AM   to dd/MM/yy HH:mm:ss */
                /*   String sddm = "";
                   String timeddm = "";
                   String ddm = "";
                   if (RT50001.Root50001[i].ddm.ToString().Length > 0)
                   {

                       String[] splitedDateddms = RTUsers.RecGUsers[i].ddm.ToString().Split(' ');
                       String Dateddms = splitedDateddms[0];
                       String Timeddms = splitedDateddms[1] + " " + splitedDateddms[2];

                       // Response.Write(Dateddms + "  ----- " + Timeddms);
                       String ddms = Dateddms.ToString();
                       String[] tokensddm = ddms.Split('/');
                       String MMddm = tokensddm[0];
                       String ddddm = tokensddm[1];
                       String yyddm = tokensddm[2];
                       DateTime ddmdt = new DateTime(Int32.Parse(yyddm), Int32.Parse(MMddm), Int32.Parse(ddddm));
                       sddm = ddmdt.ToString("dd/MM/yy");




                       String[] thddm2 = RTUsers.RecGUsers[i].tdm.TrimStart(' ').Split(' ');
                       String[] thddm = thddm2[0].Split(':');
                       Int32 ddm24 = thddm2[1] == "AM" ? Int32.Parse(thddm[0]) : (Int32.Parse(thddm[0]) % 12) + 12; //convert 12-hour time to 24-hour
                       DateTime timeha = new DateTime(Int32.Parse(yyddm), Int32.Parse(MMddm), Int32.Parse(ddddm), ddm24, Int32.Parse(thddm[1]), Int32.Parse(thddm[2]));
                       timeddm = timeha.ToString("HH:mm:ss");



                       ddm = sddm + " " + timeddm;

                   }*/

                json += "{ \"ID\": " + "\"" + RT50001.Root50001[i].ID.ToString() +
                                "\"," + "\"Type\": " + "\"" + RT50001.Root50001[i].Type +
                                "\"," + "\"Status\": " + "\"" + RT50001.Root50001[i].Status.ToString() +
                                "\"," + "\"Titre\": " + "\"" + RT50001.Root50001[i].Title.ToString() +
                                "\"," + "\"Description\": " + "\"" + RT50001.Root50001[i].Desciption.ToString() +
                                "\"," + "\"Image\": " + "\"" + RT50001.Root50001[i].Image.ToString() +
                                "\"," + "\"Cree_Par\": " + "\"" + RT50001.Root50001[i].Cree_Par.ToString() +
                                "\"," + "\"Date_Creation\": " + "\"" + RT50001.Root50001[i].Date_Creation.ToString() +
                                "\"," + "\"Nom_Cree_Par\": " + "\"" + RT50001.Root50001[i].Nom_Cree_Par.ToString() +
                                "\"," + "\"Client\": " + "\"" + RT50001.Root50001[i].Client.ToString() +
                                "\"," + "\"Nom_Client\": " + "\"" + RT50001.Root50001[i].Nom_Client.ToString() +
                                "\"," + "\"No_Projet\": " + "\"" + RT50001.Root50001[i].No_Projet.ToString() +
                                "\"," + "\"Nom_Projet\": " + "\"" + RT50001.Root50001[i].Nom_Projet.ToString() +
                                "\"," + "\"Date_Echeance\": " + "\"" + RT50001.Root50001[i].Date_Echeance.ToString() +
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
            Response.Write(json);


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
 
