<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--
Design by Free CSS Templates
http://www.freecsstemplates.org
Released for free under a Creative Commons Attribution 2.5 License

Name       : Blogging
Description: A two-column, fixed-width design for 1024x768 screen resolutions.
Version    : 1.0
Released   : 20090208

-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Brindavan Print Solutions Private Limited - Our Brands</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-color: #FFFFFF;
}
-->
</style>
<script src="SpryAssets/SpryMenuBar.js" type="text/javascript"></script>
<link href="SpryAssets/SpryMenuBarHorizontal.css" rel="stylesheet" type="text/css" />

<?php	

$name=$_POST["txt_name"];
$phone=$_POST["txt_contact"];
$mail=$_POST["txt_email"];
$address=$_POST["txtarea_address"];
$comments=$_POST["txtarea_comments"];

			/*	if($check_delnonac == "on")
					{
						$RoomType1= "Room Type: Delux Non A/C".", No Rooms- ".$no_delux_Rooms.", No Days- ".$no_delux_Days;
						
					}
				
				if($check_exenonac == "on")
					{
						$RoomType1= $RoomType1."\r\nRoom Type: Executive Non A/C".", No Rooms- ".$no_executive_Rooms.", No Days- ".$no_executive_Days;
						 
					}
			
							
				if($check_princeac == "on")
					{
						$RoomType1= $RoomType1."\r\nRoom Type: Prince A/C".", No Rooms- ".$no_prince_Rooms.", No Days- ".$no_prince_Days;
					
					}*/

//$to = "vedha.kn@q-dat.com";
$to1 = "raghavendra.kn@q-dat.com";
$testing = "$mail";
$from = "Brindavan Print Solutions Contact Form";
$subject = "Brindavan Print Solutions";
				$headers = "From: $from";
				$message ="Full Name : ".$name.
				"\r\nPhone : ".$phone.
				"\r\nEmail Id : ".$mail.
				"\r\nAddress : ".$address.
				"\r\nComments : ".$comments."\r\n\r\n Thank you";
				//mail($to,$subject,$message,$headers);
				mail($to1,$subject,$message,$headers);
				//mail($to2,$subject,$message,$headers);
			//	mail($mail,$subject,$message,$headers);
				
		
?>

<style type="text/css">
<!--
.style1 {color: #EA8F00}
-->
</style>
</head>
<body>

<table width="901" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
  <tr>
    <td width="901" align="left" valign="bottom"><div id="wrapper">
      <div id="header">
      <table width="898" height="23" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="898" height="23"><table width="898" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="673" height="19"><ul id="MenuBar1" class="MenuBarHorizontal">
            <li><a href="index.html"> Home</a> </li>
          <li><a href="about_us.html">Company Profile</a></li>
          <li><a class="MenuBarItemSubmenu MenuBarItemSubmenu" href="products.html">Products</a>
          <ul>
              <li><a href="screen_making_chemicals.html">Screen Making Chemicals and Accessories</a></li>
              <li><a href="textile_printing_solutions.html">Textile Printing Solutions<span class="style4 style1">......</span></a></li>
              <li><a href="graphic_printing_solutions.html">Graphic Printing Solutions<span class="style4 style1">.....</span></a></li>
              <li><a href="ceramic_printing_solutions.html">Ceramic Printing Solutions<span class="style4 style1">....</span></a></li>
            </ul>          
            </li>
          <li><a href="our_brands.html">Our Brands</a></li>
          <li><a href="contact_us.php">Contact Us</a></li>
        </ul></td>
        <td width="225" bgcolor="#EA8F00">&nbsp;</td>
      </tr>

        </table></td>
  </tr>
</table>

        <br />
        <!-- end #menu -->
        <!-- end #search -->
      </div>
      <!-- end #header -->
      <div id="logo">
        <table width="418" height="44" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td height="44" class="post" style="padding-left:10px;">Brindavan Print Solutions </td>
          </tr>
        </table>
        <table width="451" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="punchline" style="padding-left:50px;">Future Print Solutions with Technology...</td>
          </tr>
        </table>
      </div>
      <hr />
      <!-- end #logo -->
      <!-- end #header-wrapper -->
      <div id="page">
        <table width="901" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td valign="top"><table width="901" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td><div class="post">
                    <h2 class="title">Thank You.....</h2>
                </div></td>
              </tr>
              <tr>
                <td><div align="justify">
                  <table width="903" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td height="283" align="center" valign="top"><div align="justify">
                        <table width="903" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td  align="left" valign="top"><p>&nbsp;</p>
                              <p><span class="text"><strong style=" padding-left:45px;">Thank You, We will get back to you soon.....</strong></span><br />                              
                                  <br />
                                </p></td>
                          </tr>
                        </table>
                      </div></td>
                      </tr>
                  </table>
                  <br />
                </div></td>
              </tr>
            </table></td>
          </tr>
        </table>
        <!-- end #content -->
        
      </div>
      <!-- end #page -->
      <div id="footer">
        <p class="footer_font"><span class="footer">Copyright © 2010 Brindavan Print Solutions | All Rights Reserved | Designed by <a href="http://www.q-dat.com" target="_blank"><strong>Q-Dat IT Solutions</strong></a></span> <a href="http://www.q-dat.com" target="_blank"><img src="images/q-dat_thumbnail.png" alt="" width="23" height="25" border="0" /></a></p>
      </div>
      <!-- end #footer -->    </td>
  </tr>
</table>
<script type="text/javascript">
<!--
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgDown:"SpryAssets/SpryMenuBarDownHover.gif", imgRight:"SpryAssets/SpryMenuBarRightHover.gif"});
//-->
</script>
</body>
</html>
