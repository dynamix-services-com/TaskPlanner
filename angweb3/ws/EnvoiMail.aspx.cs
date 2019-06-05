using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;




namespace angweb3.ws
{
    public partial class SendMail : System.Web.UI.Page
    {
        protected void btn_SendMessage_Click(object sender, EventArgs e)
        {
          /*  SmtpClient smtpClient = new SmtpClient("", 25);

            smtpClient.Credentials = new System.Net.NetworkCredential("rimytra@gmail.com", "Rim58066332");
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;

            MailMessage mailMessage = new MailMessage(txtFrom.Text, txtTo.Text);
            mailMessage.Subject = txtSubject.Text;
            mailMessage.Body = txtBody.Text;

            try
            {
                smtpClient.Send(mailMessage);
                Label1.Text = "Message sent";
            }
            catch (Exception ex)
            {
                Label1.Text = ex.ToString();
            }*/
        }
    }
}