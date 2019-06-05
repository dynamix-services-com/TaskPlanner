<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EnvoiMail.aspx.cs" Inherits="angweb3.ws.EnvoiMail" %>

<html>
<head id="Head1" runat="server">
<title>E-mail test page</title>
</head>
<body>
    <form id="form1" runat="server">
        Message titre: <asp:textbox id="Title" runat="server" /><br>
        Message description: <asp:textbox id="Description" runat="server" /><br>
        Message code client: <asp:textbox id="Client" runat="server" /><br>
        <asp:button id="btn-Aj" runat="server" onclick="btn-Aj_Click" text="Send message" /><br>
        <asp:label id="Label1" runat="server" text="" />
    </form>
</body>
</html>
