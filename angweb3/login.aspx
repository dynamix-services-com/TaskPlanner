﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="angweb3.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Dynamix Services</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!--===============================================================================================-->
    <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css"/>
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="css/util.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <!--===============================================================================================-->

    <style>
        #note {
            position: absolute;
            z-index: 6001;
            top: 0;
            left: 0;
            right: 0;
            background: #fde073;
            text-align: center;
            line-height: 2.5;
            overflow: hidden;
            -webkit-box-shadow: 0 0 5px black;
            -moz-box-shadow: 0 0 5px black;
            box-shadow: 0 0 5px black;
        }

        .cssanimations.csstransforms #note {
            -webkit-transform: translateY(-50px);
            -webkit-animation: slideDown 2.5s 1.0s 1 ease forwards;
            -moz-transform: translateY(-50px);
            -moz-animation: slideDown 2.5s 1.0s 1 ease forwards;
        }

        #close {
            position: absolute;
            right: 10px;
            top: 9px;
            text-indent: -9999px;
            background: url(images/close.png);
            height: 16px;
            width: 16px;
            cursor: pointer;
        }

        .cssanimations.csstransforms #close {
            display: none;
        }

        @-webkit-keyframes slideDown {
            0%, 100% {
                -webkit-transform: translateY(-50px);
            }

            10%, 90% {
                -webkit-transform: translateY(0px);
            }
        }

        @-moz-keyframes slideDown {
            0%, 100% {
                -moz-transform: translateY(-50px);
            }

            10%, 90% {
                -moz-transform: translateY(0px);
            }
        }
    </style>
</head>
<body>
    <div id="note">
    </div>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100 p-t-85 p-b-20">
                <form id="loginForm" class="login100-form validate-form" action="ws/Authetification.aspx">
                    <span class="login100-form-title p-b-0">
                        Welcome to Dynamix
                    </span>
                    <span class="login100-form-avatar">
                        <img src="images/avatar-01.jpg" alt="AVATAR"/>
                    </span>

                    <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                        <input class="input100" type="text" name="login" id="login"/>
                        <span class="focus-input100" data-placeholder="Username"></span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                        <input class="input100" type="password" name="pass" id="pass"/>
                        <span class="focus-input100" data-placeholder="Password"></span>
                    </div>

                    <div class="container-login100-form-btn">
                        <input type="submit" class="login100-form-btn" onclick="" value="Login" />

                    </div>


                </form>
            </div>
        </div>
    </div>


    <div id="dropDownSelect1"></div>

    <!--===============================================================================================-->
    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
    <!--===============================================================================================-->
    <script src="vendor/animsition/js/animsition.min.js"></script>
    <!--===============================================================================================-->
    <script src="vendor/bootstrap/js/popper.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <!--===============================================================================================-->
    <script src="vendor/select2/select2.min.js"></script>
    <!--===============================================================================================-->
    <script src="vendor/daterangepicker/moment.min.js"></script>
    <script src="vendor/daterangepicker/daterangepicker.js"></script>
    <!--===============================================================================================-->
    <script src="vendor/countdowntime/countdowntime.js"></script>
    <!--===============================================================================================-->
      <script src="/js/Global.js"></script>
    <script src="js/main.js"></script>


</body>
</html>
