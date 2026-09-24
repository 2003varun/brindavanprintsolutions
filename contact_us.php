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
<title>Brindavan Print Solutions Private Limited - Contact Us</title>
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
<link href="SpryAssets/SpryMenuBarVertical.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.style4 {
	font-size: 24px;
	color: #FF0000;
}
.style7 {
	font-size: 16px;
	color: #000000;
}
.heading {	font-family: Tahoma;
	font-size: 16px;
	font-weight: bolder;
	font-variant: normal;
	color: #000000;
}
.small_heading {	font-family: Tahoma;
	font-size: 14px;
	font-weight: bold;
	color: #53687B;
}
.style8 {color: #EA8F00}
-->
</style>

<script type="text/javascript">
function required_field_validation(field,alertmsg)
			{
				with(field)
					{
						if(value==null||value=="")
							{
								alert(alertmsg);
								field.focus;
								return false;
							}
						else
							{	
								return true;
							}
					}
			}
			
function email_validation(field,alertmsg)
				{
					with(field)
						{
							apos = value.indexOf("@");
							dotpos = value.lastIndexOf(".");
								if(apos<1 || dotpos-apos <2)
									{
										alert(alertmsg);
										field.focus;
										return false;
									}
								else
									{
										return true;
									}
						}
				}
				
function check_phno(textphone)
	{
		if (checkInternationalPhone(textphone.value)==false)
							{
							
							alert("Please Enter Valid Phone Number");
							return false
							}
						else
							{
							return true
							}
	
	}
	
	// is no is integer
		function isnumInteger(number,alertmsg)
		{   
			s= number.value;
			var i;
    		for (i = 0; i < s.length; i++)
    		{   
        // Check that current character is number.
        		var c = s.charAt(i);
       		 if (((c < "0") || (c > "9"))) 
			 	{
			 	alert(alertmsg);
			 	number.focus;
			 	return false;
   				 }
			 else
				 {
    // All characters are numbers.
    			return true;
				}
			}
		
		
		}
		//dropdownlist validation
		/*
		function checkDropdown(choice) 
		{
    		var error = "";
   			 if (choice == 0) {
       		error = "You didn't choose an option
         			from the drop-down list.\n";
   		 }    
		return error;
}   */
			//Phone no vaidation
				var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 10;

function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
function trim(s)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}
function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function noNumbers(e)
{
var keynum
var keychar
var numcheck

if(window.event) // IE
{
keynum = e.keyCode
}
else if(e.which) // Netscape/Firefox/Opera
{
keynum = e.which
}
keychar = String.fromCharCode(keynum)
numcheck = /\d/
return !numcheck.test(keychar)
}
function checkInternationalPhone(strPhone)
{
var bracket=3
strPhone=trim(strPhone)
if(strPhone.indexOf("+")>1) return false
if(strPhone.indexOf("-")!=-1)bracket=bracket+1
if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
var brchr=strPhone.indexOf("(")
if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return false
if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return false
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);

}

	//Clear the Form
						
function betterMo() {
if (confirm("Are you sure you want to clear form?")) {
document.form1.reset();
}
}	


//form validation


		function form_validation(thisform)
			{
				with(thisform)
					{
						
						if(required_field_validation(txt_name,"Enter Your Name")== false  || required_field_validation(txt_contact,"Enter Your Contact No")== false||check_phno(txt_contact)== false || required_field_validation(txt_email,"Enter Your Email Id")== false|| email_validation(txt_email,"Enter Proper Email Id") == false || required_field_validation(txtarea_address,"Enter Your Address")== false || required_field_validation(txtarea_comments,"Enter Your Comments")== false )
						
							{
								/*txt_mail.focus();
								return false;
							}
						else if(email_validation(txt_mail,"Enter Proper Id")== false)
							{
								txt_mail.focus();*/
								return false;
							}
						else
							{
								return true;
							}
						
						
					}
			}
						
</script>
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
        <td width="654" height="19"><ul id="MenuBar1" class="MenuBarHorizontal">
            <li><a href="index.html"> Home</a> </li>
          <li><a href="about_us.html">Company Profile</a></li>
          <li><a class="MenuBarItemSubmenu MenuBarItemSubmenu" href="products.html">Products</a>
          <ul>
              <li><a href="screen_making_chemicals.html">Screen Making Chemicals and Accessories</a></li>
              <li><a href="textile_printing_solutions.html">Textile Printing Solutions<span class="style8">......</span></a></li>
              <li><a href="graphic_printing_solutions.html">Graphic Printing Solutions<span class="style8">.....</span></a></li>
              <li><a href="ceramic_printing_solutions.html">Ceramic Printing Solutions<span class="style8">....</span></a></li>
            </ul>            
            
          <li><a href="our_brands.html">Our Brands</a></li>
          <li><a href="contact_us.php">Contact Us</a></li>
        </ul></td>
        <td width="244" bgcolor="#EA8F00">&nbsp;</td>
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
                    <h2 class="title">Contact Us</h2>
                </div></td>
              </tr>
              <tr>
                <td><div align="justify">
                  <table width="903" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td height="283" align="left" valign="top">
                        <table width="879" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="466" height="90" align="left" valign="top"><strong><br />
                              <span class="style4">BRINDAVAN PRINT SOLUTIONS PVT. LTD.</span></strong><br />
                              <span class="style7">Dealers in Screen, Textile, Ceramic &amp; Offset Printing Materials</span><br />
                              <br />
                              #55/7,  4th cross, 5th Block,<br />
Rajajinagar Small Scale Industrial Area, SSI Area,<br />
Rajajinagar, Banglore-560010<strong><br />
 Ph.:</strong> 080-23154110, 23154487<strong><br />
Fax : </strong>080-23400570<strong><br />
Email:</strong> info@brindavanprintsolutions.com|brindavanprintsolutions@yahoo.com<br />
<strong>Web</strong> <strong>:</strong> www.brindavanprintsolutions.com<br />
<br /><br /></td>
                          <td width="413" align="center" valign="top"><br />
                            <table width="371" border="1" cellpadding="0" cellspacing="0" bordercolor="#E06D03" bgcolor="#FFFFFF">
                            <tr>
                              <td width="367" height="382" align="center" bgcolor="#FFFFFF"><form id="form1" method="post" action="thank_you.php" onsubmit="return form_validation(this)">
                                <table width="361" border="0" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="361" height="380" align="center" bgcolor="#FFFFFF"><table width="354" height="380" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">
                                      <tr>
                                        <td height="42" colspan="2" class="small_heading"><div align="center"><span class="heading"> </span><span class="heading">Contact Form</span><br />
                                        </div></td>
                                      </tr>
                                      <tr>
                                        <td width="105" class="small_heading"><div align="left" class="text"><strong>Name :</strong></div></td>
                                        <td width="249" height="25"><label>
                                            <div align="left">
                                              <input name="name" type="text" id="name" onkeypress="return noNumbers(event)" />
                                            </div>
                                          </label></td>
                                      </tr>
                                      <tr>
                                        <td class="small_heading"><div align="left" class="text"><strong>Contact No :</strong></div></td>
                                        <td height="25"><label>
                                            <div align="left">
                                              <input type="text" name="phone" id="phone" />
                                            </div>
                                          </label></td>
                                      </tr>
                                      <tr>
                                        <td class="small_heading"><div align="left" class="text"><strong>Email Id :</strong></div></td>
                                        <td height="25"><label>
                                            <div align="left">
                                              <input type="text" name="email" id="email" />
                                            </div>
                                          </label></td>
                                      </tr>
                                      <tr>
                                        <td class="small_heading"><div align="left" class="text"><strong>Address :</strong></div></td>
                                        <td height="65"><label>
                                            <div align="left">
                                              <textarea name="address" id="address" cols="30" rows="3"></textarea>
                                            </div>
                                          </label></td>
                                      </tr>
                                      <tr>
                                        <td height="57" class="small_heading"><div align="left" class="text"><strong>Comments :</strong></div></td>
                                        <td><label>
                                            <div align="left">
                                              <textarea name="comments" id="comments" cols="30" rows="5"></textarea>
                                            </div>
                                          </label></td>
                                      </tr>
                                      <tr>
                                        <td height="48">&nbsp;</td>
                                        <td><label>
                                            <div align="left">
                                              <input name="but_submit" type="submit" class="button_design" id="but_submit" value="Submit" />
                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                              <input name="but_clear" type="reset" class="button_design" id="but_clear" value="Reset" onclick="betterMo(); return false"/>
                                              <br />
                                            </div>
                                          </label></td>
                                      </tr>
                                    </table></td>
                                  </tr>
                                </table>
                                
                              </form></td>
                            </tr>
                          </table>
                            <br />                            </td>
                        </tr>
                      </table>                        
                        <br /></td>
                      </tr>
                  </table>
                  
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
