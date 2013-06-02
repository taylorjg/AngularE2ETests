<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="AngularE2ETests.Index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="<%= (IsEndToEndTest) ? "TestAppE2E" : "TestApp" %>">
    
    <head runat="server">
        <title>AngularE2ETests</title>
        <link href="Scripts/ThirdParty/Bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="Styles/AngularE2ETests.css" rel="stylesheet" type="text/css" />
        <script src="Scripts/ThirdParty/jQuery/jquery-1.9.1.js" type="text/javascript"></script>
        <script src="Scripts/ThirdParty/Bootstrap/js/bootstrap.js" type="text/javascript"></script>
        <script src="Scripts/ThirdParty/AngularJS/angular.js" type="text/javascript"></script>
        <script src="Scripts/app.js" type="text/javascript"></script>
        <% if (IsEndToEndTest) { %>
            <script src="Scripts/ThirdParty/AngularJS/angular-mocks.js" type="text/javascript"></script>
            <script src="Tests/e2e/EndToEndTestHttpBackendSetup.js" type="text/javascript"></script>
        <% } %>
        <style>
            [data-ng-cloak] {
                display: none;
            }
        </style>
    </head>

    <body>
        <div data-ng-controller="MainController" class="container">
            <div class="row">
                <div class="span12">
                    <div class="firstLevelItem" data-ng-cloak data-ng-controller="FirstLevelController" data-ng-repeat="firstLevelItem in firstLevelItems">
                        <h2>{{firstLevelItem}}</h2>
                        <div>
                            <ul>
                                <li class="secondLevelItem" data-ng-repeat="secondLevelItem in secondLevelItems">{{secondLevelItem}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

</html>
