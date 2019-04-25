﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// 
// This source code was auto-generated by Microsoft.VSDesigner, Version 4.0.30319.42000.
// 
#pragma warning disable 1591

namespace angweb3.TaskPlannerWS {
    using System;
    using System.Web.Services;
    using System.Diagnostics;
    using System.Web.Services.Protocols;
    using System.Xml.Serialization;
    using System.ComponentModel;
    
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Web.Services.WebServiceBindingAttribute(Name="TaskPlannerWS_Binding", Namespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS")]
    public partial class TaskPlannerWS : System.Web.Services.Protocols.SoapHttpClientProtocol {
        
        private System.Threading.SendOrPostCallback AuthentificationOperationCompleted;
        
        private System.Threading.SendOrPostCallback GetRequestListOperationCompleted;
        
        private System.Threading.SendOrPostCallback DeleteRequestOperationCompleted;
        
        private System.Threading.SendOrPostCallback AddRequestOperationCompleted;
        
        private System.Threading.SendOrPostCallback UpdateRequestOperationCompleted;
        
        private bool useDefaultCredentialsSetExplicitly;
        
        /// <remarks/>
        public TaskPlannerWS() {
            this.Url = global::angweb3.Properties.Settings.Default.angweb3_TaskPlannerWS_TaskPlannerWS;
            if ((this.IsLocalFileSystemWebService(this.Url) == true)) {
                this.UseDefaultCredentials = true;
                this.useDefaultCredentialsSetExplicitly = false;
            }
            else {
                this.useDefaultCredentialsSetExplicitly = true;
            }
        }
        
        public new string Url {
            get {
                return base.Url;
            }
            set {
                if ((((this.IsLocalFileSystemWebService(base.Url) == true) 
                            && (this.useDefaultCredentialsSetExplicitly == false)) 
                            && (this.IsLocalFileSystemWebService(value) == false))) {
                    base.UseDefaultCredentials = false;
                }
                base.Url = value;
            }
        }
        
        public new bool UseDefaultCredentials {
            get {
                return base.UseDefaultCredentials;
            }
            set {
                base.UseDefaultCredentials = value;
                this.useDefaultCredentialsSetExplicitly = true;
            }
        }
        
        /// <remarks/>
        public event AuthentificationCompletedEventHandler AuthentificationCompleted;
        
        /// <remarks/>
        public event GetRequestListCompletedEventHandler GetRequestListCompleted;
        
        /// <remarks/>
        public event DeleteRequestCompletedEventHandler DeleteRequestCompleted;
        
        /// <remarks/>
        public event AddRequestCompletedEventHandler AddRequestCompleted;
        
        /// <remarks/>
        public event UpdateRequestCompletedEventHandler UpdateRequestCompleted;
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS:Authentification", RequestNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", ResponseElementName="Authentification_Result", ResponseNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return_value")]
        public bool Authentification(string login, string password, ref Root ressourceXml) {
            object[] results = this.Invoke("Authentification", new object[] {
                        login,
                        password,
                        ressourceXml});
            ressourceXml = ((Root)(results[1]));
            return ((bool)(results[0]));
        }
        
        /// <remarks/>
        public void AuthentificationAsync(string login, string password, Root ressourceXml) {
            this.AuthentificationAsync(login, password, ressourceXml, null);
        }
        
        /// <remarks/>
        public void AuthentificationAsync(string login, string password, Root ressourceXml, object userState) {
            if ((this.AuthentificationOperationCompleted == null)) {
                this.AuthentificationOperationCompleted = new System.Threading.SendOrPostCallback(this.OnAuthentificationOperationCompleted);
            }
            this.InvokeAsync("Authentification", new object[] {
                        login,
                        password,
                        ressourceXml}, this.AuthentificationOperationCompleted, userState);
        }
        
        private void OnAuthentificationOperationCompleted(object arg) {
            if ((this.AuthentificationCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.AuthentificationCompleted(this, new AuthentificationCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS:GetRequestList", RequestNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", ResponseElementName="GetRequestList_Result", ResponseNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return_value")]
        public bool GetRequestList(ref Root1 requestsXml) {
            object[] results = this.Invoke("GetRequestList", new object[] {
                        requestsXml});
            requestsXml = ((Root1)(results[1]));
            return ((bool)(results[0]));
        }
        
        /// <remarks/>
        public void GetRequestListAsync(Root1 requestsXml) {
            this.GetRequestListAsync(requestsXml, null);
        }
        
        /// <remarks/>
        public void GetRequestListAsync(Root1 requestsXml, object userState) {
            if ((this.GetRequestListOperationCompleted == null)) {
                this.GetRequestListOperationCompleted = new System.Threading.SendOrPostCallback(this.OnGetRequestListOperationCompleted);
            }
            this.InvokeAsync("GetRequestList", new object[] {
                        requestsXml}, this.GetRequestListOperationCompleted, userState);
        }
        
        private void OnGetRequestListOperationCompleted(object arg) {
            if ((this.GetRequestListCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.GetRequestListCompleted(this, new GetRequestListCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS:DeleteRequest", RequestNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", ResponseElementName="DeleteRequest_Result", ResponseNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return_value")]
        public bool DeleteRequest(int requestID, string userID) {
            object[] results = this.Invoke("DeleteRequest", new object[] {
                        requestID,
                        userID});
            return ((bool)(results[0]));
        }
        
        /// <remarks/>
        public void DeleteRequestAsync(int requestID, string userID) {
            this.DeleteRequestAsync(requestID, userID, null);
        }
        
        /// <remarks/>
        public void DeleteRequestAsync(int requestID, string userID, object userState) {
            if ((this.DeleteRequestOperationCompleted == null)) {
                this.DeleteRequestOperationCompleted = new System.Threading.SendOrPostCallback(this.OnDeleteRequestOperationCompleted);
            }
            this.InvokeAsync("DeleteRequest", new object[] {
                        requestID,
                        userID}, this.DeleteRequestOperationCompleted, userState);
        }
        
        private void OnDeleteRequestOperationCompleted(object arg) {
            if ((this.DeleteRequestCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.DeleteRequestCompleted(this, new DeleteRequestCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS:AddRequest", RequestNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", ResponseElementName="AddRequest_Result", ResponseNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return_value")]
        public bool AddRequest(string title, int type, string description, string connectedUser, string project_Code) {
            object[] results = this.Invoke("AddRequest", new object[] {
                        title,
                        type,
                        description,
                        connectedUser,
                        project_Code});
            return ((bool)(results[0]));
        }
        
        /// <remarks/>
        public void AddRequestAsync(string title, int type, string description, string connectedUser, string project_Code) {
            this.AddRequestAsync(title, type, description, connectedUser, project_Code, null);
        }
        
        /// <remarks/>
        public void AddRequestAsync(string title, int type, string description, string connectedUser, string project_Code, object userState) {
            if ((this.AddRequestOperationCompleted == null)) {
                this.AddRequestOperationCompleted = new System.Threading.SendOrPostCallback(this.OnAddRequestOperationCompleted);
            }
            this.InvokeAsync("AddRequest", new object[] {
                        title,
                        type,
                        description,
                        connectedUser,
                        project_Code}, this.AddRequestOperationCompleted, userState);
        }
        
        private void OnAddRequestOperationCompleted(object arg) {
            if ((this.AddRequestCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.AddRequestCompleted(this, new AddRequestCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        [System.Web.Services.Protocols.SoapDocumentMethodAttribute("urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS:UpdateRequest", RequestNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", ResponseElementName="UpdateRequest_Result", ResponseNamespace="urn:microsoft-dynamics-schemas/codeunit/TaskPlannerWS", Use=System.Web.Services.Description.SoapBindingUse.Literal, ParameterStyle=System.Web.Services.Protocols.SoapParameterStyle.Wrapped)]
        [return: System.Xml.Serialization.XmlElementAttribute("return_value")]
        public bool UpdateRequest(int requestID, string status, string title, string description, string cree_Par, int type) {
            object[] results = this.Invoke("UpdateRequest", new object[] {
                        requestID,
                        status,
                        title,
                        description,
                        cree_Par,
                        type});
            return ((bool)(results[0]));
        }
        
        /// <remarks/>
        public void UpdateRequestAsync(int requestID, string status, string title, string description, string cree_Par, int type) {
            this.UpdateRequestAsync(requestID, status, title, description, cree_Par, type, null);
        }
        
        /// <remarks/>
        public void UpdateRequestAsync(int requestID, string status, string title, string description, string cree_Par, int type, object userState) {
            if ((this.UpdateRequestOperationCompleted == null)) {
                this.UpdateRequestOperationCompleted = new System.Threading.SendOrPostCallback(this.OnUpdateRequestOperationCompleted);
            }
            this.InvokeAsync("UpdateRequest", new object[] {
                        requestID,
                        status,
                        title,
                        description,
                        cree_Par,
                        type}, this.UpdateRequestOperationCompleted, userState);
        }
        
        private void OnUpdateRequestOperationCompleted(object arg) {
            if ((this.UpdateRequestCompleted != null)) {
                System.Web.Services.Protocols.InvokeCompletedEventArgs invokeArgs = ((System.Web.Services.Protocols.InvokeCompletedEventArgs)(arg));
                this.UpdateRequestCompleted(this, new UpdateRequestCompletedEventArgs(invokeArgs.Results, invokeArgs.Error, invokeArgs.Cancelled, invokeArgs.UserState));
            }
        }
        
        /// <remarks/>
        public new void CancelAsync(object userState) {
            base.CancelAsync(userState);
        }
        
        private bool IsLocalFileSystemWebService(string url) {
            if (((url == null) 
                        || (url == string.Empty))) {
                return false;
            }
            System.Uri wsUri = new System.Uri(url);
            if (((wsUri.Port >= 1024) 
                        && (string.Compare(wsUri.Host, "localHost", System.StringComparison.OrdinalIgnoreCase) == 0))) {
                return true;
            }
            return false;
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.3056.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="urn:microsoft-dynamics-nav/xmlports/x50000")]
    public partial class Root {
        
        private Root156[] root156Field;
        
        private string[] textField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("Root156")]
        public Root156[] Root156 {
            get {
                return this.root156Field;
            }
            set {
                this.root156Field = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlTextAttribute()]
        public string[] Text {
            get {
                return this.textField;
            }
            set {
                this.textField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.3056.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="urn:microsoft-dynamics-nav/xmlports/x50000")]
    public partial class Root156 {
        
        private string noField;
        
        private string typeField;
        
        private string nameField;
        
        private string loginField;
        
        private string dDCField;
        
        /// <remarks/>
        public string No {
            get {
                return this.noField;
            }
            set {
                this.noField = value;
            }
        }
        
        /// <remarks/>
        public string Type {
            get {
                return this.typeField;
            }
            set {
                this.typeField = value;
            }
        }
        
        /// <remarks/>
        public string Name {
            get {
                return this.nameField;
            }
            set {
                this.nameField = value;
            }
        }
        
        /// <remarks/>
        public string Login {
            get {
                return this.loginField;
            }
            set {
                this.loginField = value;
            }
        }
        
        /// <remarks/>
        public string DDC {
            get {
                return this.dDCField;
            }
            set {
                this.dDCField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.3056.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="urn:microsoft-dynamics-nav/xmlports/x50001")]
    public partial class Root50001 {
        
        private int idField;
        
        private string typeField;
        
        private string statusField;
        
        private string titleField;
        
        private string desciptionField;
        
        private string date_CreationField;
        
        private string cree_ParField;
        
        private string clientField;
        
        private string date_EcheanceField;
        
        private string date_ValidationField;
        
        private string validee_ParField;
        
        private string no_ProjetField;
        
        private string nom_ProjetField;
        
        private string nom_ClientField;
        
        private string nom_Cree_ParField;
        
        private string imageField;
        
        private string nom_Validee_ParField;
        
        public Root50001() {
            this.idField = 0;
        }
        
        /// <remarks/>
        public int ID {
            get {
                return this.idField;
            }
            set {
                this.idField = value;
            }
        }
        
        /// <remarks/>
        public string Type {
            get {
                return this.typeField;
            }
            set {
                this.typeField = value;
            }
        }
        
        /// <remarks/>
        public string Status {
            get {
                return this.statusField;
            }
            set {
                this.statusField = value;
            }
        }
        
        /// <remarks/>
        public string Title {
            get {
                return this.titleField;
            }
            set {
                this.titleField = value;
            }
        }
        
        /// <remarks/>
        public string Desciption {
            get {
                return this.desciptionField;
            }
            set {
                this.desciptionField = value;
            }
        }
        
        /// <remarks/>
        public string Date_Creation {
            get {
                return this.date_CreationField;
            }
            set {
                this.date_CreationField = value;
            }
        }
        
        /// <remarks/>
        public string Cree_Par {
            get {
                return this.cree_ParField;
            }
            set {
                this.cree_ParField = value;
            }
        }
        
        /// <remarks/>
        public string Client {
            get {
                return this.clientField;
            }
            set {
                this.clientField = value;
            }
        }
        
        /// <remarks/>
        public string Date_Echeance {
            get {
                return this.date_EcheanceField;
            }
            set {
                this.date_EcheanceField = value;
            }
        }
        
        /// <remarks/>
        public string Date_Validation {
            get {
                return this.date_ValidationField;
            }
            set {
                this.date_ValidationField = value;
            }
        }
        
        /// <remarks/>
        public string Validee_Par {
            get {
                return this.validee_ParField;
            }
            set {
                this.validee_ParField = value;
            }
        }
        
        /// <remarks/>
        public string No_Projet {
            get {
                return this.no_ProjetField;
            }
            set {
                this.no_ProjetField = value;
            }
        }
        
        /// <remarks/>
        public string Nom_Projet {
            get {
                return this.nom_ProjetField;
            }
            set {
                this.nom_ProjetField = value;
            }
        }
        
        /// <remarks/>
        public string Nom_Client {
            get {
                return this.nom_ClientField;
            }
            set {
                this.nom_ClientField = value;
            }
        }
        
        /// <remarks/>
        public string Nom_Cree_Par {
            get {
                return this.nom_Cree_ParField;
            }
            set {
                this.nom_Cree_ParField = value;
            }
        }
        
        /// <remarks/>
        public string Image {
            get {
                return this.imageField;
            }
            set {
                this.imageField = value;
            }
        }
        
        /// <remarks/>
        public string Nom_Validee_Par {
            get {
                return this.nom_Validee_ParField;
            }
            set {
                this.nom_Validee_ParField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.3056.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(TypeName="Root", Namespace="urn:microsoft-dynamics-nav/xmlports/x50001")]
    public partial class Root1 {
        
        private Root50001[] root50001Field;
        
        private string[] textField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("Root50001")]
        public Root50001[] Root50001 {
            get {
                return this.root50001Field;
            }
            set {
                this.root50001Field = value;
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlTextAttribute()]
        public string[] Text {
            get {
                return this.textField;
            }
            set {
                this.textField = value;
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    public delegate void AuthentificationCompletedEventHandler(object sender, AuthentificationCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class AuthentificationCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal AuthentificationCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public bool Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((bool)(this.results[0]));
            }
        }
        
        /// <remarks/>
        public Root ressourceXml {
            get {
                this.RaiseExceptionIfNecessary();
                return ((Root)(this.results[1]));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    public delegate void GetRequestListCompletedEventHandler(object sender, GetRequestListCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class GetRequestListCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal GetRequestListCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public bool Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((bool)(this.results[0]));
            }
        }
        
        /// <remarks/>
        public Root1 requestsXml {
            get {
                this.RaiseExceptionIfNecessary();
                return ((Root1)(this.results[1]));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    public delegate void DeleteRequestCompletedEventHandler(object sender, DeleteRequestCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class DeleteRequestCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal DeleteRequestCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public bool Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((bool)(this.results[0]));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    public delegate void AddRequestCompletedEventHandler(object sender, AddRequestCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class AddRequestCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal AddRequestCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public bool Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((bool)(this.results[0]));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    public delegate void UpdateRequestCompletedEventHandler(object sender, UpdateRequestCompletedEventArgs e);
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Web.Services", "4.7.3056.0")]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    public partial class UpdateRequestCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        internal UpdateRequestCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        /// <remarks/>
        public bool Result {
            get {
                this.RaiseExceptionIfNecessary();
                return ((bool)(this.results[0]));
            }
        }
    }
}

#pragma warning restore 1591